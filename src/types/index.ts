import { ActionFunctionArgs, ParamParseKey, Params } from "react-router-dom";

const PathNames = {
  orderDetails: "/order/:orderId",
} as const;

export interface orderDetailsArgs extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof PathNames.orderDetails>>;
}

export type CartItem = {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type Pizza = {
  id: string;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
};

export type Order = {
  id: string;
  status: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  orderPrice: number;
  priorityPrice: number;
  position: string;
  cart: CartItem[];
};

export type MenuItem = Pizza;
