import { presenceCost, validate } from "@/shared/tools/validate.tool";

const constraints = {
  userName: { presence: presenceCost },
  userPhone: { presence: presenceCost },
  // userEmail: { presence: presenceCost },
  shippingType: { presence: presenceCost },
  isDeliveryToTime: { presence: presenceCost },
  // deliveryToTime: { presence: presenceCost },
};
export const validateCheckoutForm = (data: any) => {
  return validate(data, constraints);
};
