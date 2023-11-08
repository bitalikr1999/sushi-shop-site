import {renderHook, act} from '@testing-library/react-native'
import {useForm, IUseFormState, IForm, FormErrors} from './use-form.hook' // Імпортуйте ваш хук і типи
const mockdata = {
    username: 'Jon_Doe',
    age: 20,
    email: 'jon@mail.com',
}

const validatorForm = (
    data: IUseFormState,
): FormErrors<IUseFormState> | null => {
    const errors: FormErrors<IUseFormState> = {}
    if (!data.username) {
        errors.username = 'Username is required'
    }

    return errors
}

describe('useForm Hook', () => {
    // 1. Тест на запис даних в хук
    it('set initial form values', () => {
        const {result} = renderHook(() => useForm(mockdata, validatorForm))

        const form: IForm<IUseFormState> = result.current

        // Перевіряємо  значення які на повернув хук з вхідними даними
        expect(form.values).toEqual(mockdata)
    })

    //  2. Тест на оновлення одного поля setFormField
    it('update form values', () => {
        const {result} = renderHook(() => useForm(mockdata, validatorForm))
        const form = result.current
        const usernameUpdated = 'Piter'
        act(() => {
            return form.setFormField('username', usernameUpdated)
        })

        // Перевірка оновленого значення поля форми username із початковим updatedUsername
        expect(result.current.values.username).toEqual(usernameUpdated)
    })

    //  3. Тест на оновлення форми setForm
    it('update form', () => {
        const {result} = renderHook(() => useForm(mockdata, validatorForm))
        const form = result.current

        const newData = {
            username: 'Piter',
            age: 45,
            email: 'piter@mail.com',
        }

        act(() => form.setForm(newData))
        expect(result.current.values).toEqual(newData)
    })

    // 4. Перевірка на запис помилок одного поля
    it('validate form and set error for one field', () => {
        const initialValues: IUseFormState = {
            username: '',
            age: 30,
        }

        const {result} = renderHook(() => useForm(initialValues, validatorForm))

        const form: IForm<IUseFormState> = result.current

        act(() => {
            form.onSubmit(() => {
                console.log('call successfuly')
            })
        })
        expect(result.current.hasErros).toBe(true)
        expect(result.current.errors.username).toBe('Username is required')
    })

    // 4. Перевірка на запис помилок для всієї форми
    it('set errors', () => {
        const {result} = renderHook(() => useForm(mockdata, validatorForm))
        const form = result.current
        const errors = {
            username: 'This field is require',
            age: 'Is not number',
            email: 'Email is not write',
        }
        act(() => form.setFormErrors(errors))
        expect(result.current.errors).toEqual(errors)
    })
})
