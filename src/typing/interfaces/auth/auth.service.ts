export interface SignUpPayload {
  firstName: string
  lastName: string
  contactPhone: string
  contactEmail: string
  companyName: string
  website: string
  countryCode: string
  city: string
  streetAdress: string
  state: string
  zip: string
  logo: any

  customerSupportPhone?: string
  customerSupportEmail?: string

  whatsApp?: string
  telegram?: string
  facebook?: string

  notificationsEmail?: string
}
