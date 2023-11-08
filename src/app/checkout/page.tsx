"use client";

import { Input, Loader, MaskedInput } from "rsuite";
import styles from "./page.module.css";
import { FormControllWrap } from "@/components/forms/form-controll-wrap";
import { BasketList } from "@/components/basket/basket-list";
import { BasketFooter } from "@/components/basket/basket-modal/components/basket-footer";
import { useForm } from "@/hooks/use-form";
import { validateCheckoutForm } from "./validator";
import { ShippingType } from "@/typing/interfaces";
import { FormRadioControll } from "@/components/forms/form-radio-controll";
import "react-datepicker/dist/react-datepicker.css";
import { FormSelectTime } from "@/components/forms/form-select-time";
import { workTimeService } from "@/services/work-time.service";
import { createOrderReq } from "@/api/orders/create-order.req";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useBasketStore } from "@/store/basket.store";
import { useBackerPreviewStore } from "@/store/basket-preview.store";

interface Form {
  userName: string;
  userPhone: string;
  userEmail?: string;

  shippingType: ShippingType;
  isDeliveryToTime: "yes" | "no";
  deliveryToTime: string;
  addresLine: string;

  numberOfDevice: number;
  comment: string;
}

const CheckoutPage = () => {
  const form = useForm<Form>({}, validateCheckoutForm);
  const router = useRouter();
  const basket = useBasketStore((s) => s.items);
  const clearBasket = useBasketStore((s) => s.clear);
  const clearBasketPreview = useBackerPreviewStore((s) => s.clear);

  const [isLoading, setLoading] = useState(false);

  const submit = async () => {
    try {
      setLoading(true);
      await createOrderReq({
        user: {
          email: form.values.userEmail,
          phoneNumber: form.values.userPhone,
          name: form.values.userName,
        },
        products: basket as any,
        shipping: {
          type: form.values.shippingType,
          addressLine: form.values.addresLine,
        },
        comment: form.values.comment,
      });

      clearBasket();
      clearBasketPreview();

      router.push("/checkout/success");
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  console.log(form.errors);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.title}>Оформлення замовлення</p>

        <div className={styles.section}>
          <p className={styles.sectionTitle}>Особисті данні</p>
          <FormControllWrap
            title="Прізвище та Імя"
            error={form.errors.userName}
          >
            <Input
              value={form.values.userName}
              onChange={(e) => form.setFormField("userName", e)}
            />
          </FormControllWrap>
          <FormControllWrap
            title="Номер телефона ( починаючи з 0 )"
            error={form.errors.userPhone}
          >
            <MaskedInput
              // value={form.values.userPhone}
              onChange={(e) => form.setFormField("userPhone", e)}
              mask={[
                "(",
                "0",
                /[1-9]/,
                /\d/,
                ")",
                " ",
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
              ]}
            />
          </FormControllWrap>
          <FormControllWrap title="Email" error={form.errors.userEmail}>
            <Input
              value={form.values.userEmail}
              onChange={(e) => form.setFormField("userEmail", e)}
            />
          </FormControllWrap>
        </div>
        <div className={styles.section}>
          <p className={styles.sectionTitle}>Доставка</p>
          <FormControllWrap
            title="Варіанти доставки"
            error={form.errors.shippingType}
          >
            <FormRadioControll
              value={form.values.shippingType}
              onChange={(val) => form.setFormField("shippingType", val)}
              options={[
                {
                  value: ShippingType.AddressDelivery,
                  label: "Доставка за Вашою адресою",
                },
                {
                  value: ShippingType.SelfPickup,
                  label: "Самовивіз",
                },
              ]}
            />
          </FormControllWrap>
          {form.values.shippingType !== ShippingType.SelfPickup ? (
            <FormControllWrap title="Адреса доставки">
              <Input
                value={form.values.addresLine}
                onChange={(val) => form.setFormField("addresLine", val)}
              />
            </FormControllWrap>
          ) : null}

          <FormControllWrap
            title="Час доставки"
            error={form.errors.isDeliveryToTime}
          >
            <FormRadioControll
              value={form.values.isDeliveryToTime}
              onChange={(val) => form.setFormField("isDeliveryToTime", val)}
              options={[
                {
                  value: "no",
                  label: "По готовності",
                },
                {
                  value: "yes",
                  label: "Обрати годину",
                },
              ]}
            />
          </FormControllWrap>
          {form.values.isDeliveryToTime === "yes" ? (
            <FormControllWrap
              title="Обрати годину"
              error={form.errors.deliveryToTime}
            >
              <FormSelectTime
                start={workTimeService.getMinRangeToOrder()}
                end={workTimeService.getMaxRangeToOrder()}
                value={form.values.deliveryToTime}
                onChange={(val) => form.setFormField("deliveryToTime", val)}
              />
            </FormControllWrap>
          ) : null}
        </div>
        <div className={styles.section}>
          <p className={styles.sectionTitle}>Додатково</p>
          <FormControllWrap title="Кількість приборів">
            <Input
              value={form.values.numberOfDevice}
              onChange={(val) => form.setFormField("deliveryToTime", val)}
            />
          </FormControllWrap>

          <FormControllWrap title="Коментар">
            <Input
              as="textarea"
              rows={3}
              value={form.values.comment}
              onChange={(val) => form.setFormField("comment", val)}
            />
          </FormControllWrap>
        </div>
      </div>
      <div className={styles.right}>
        <BasketList />

        <div className={styles.summBlock}>
          {isLoading ? (
            <Loader />
          ) : (
            <BasketFooter onPress={() => form.onSubmit(submit)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
