import { Schema, model } from "mongoose";

interface Empanada {
  id: number;
  name: string;
  quantity: number;
}

interface OrderItem {
  name: string;
  empanadas: Empanada[];
}

interface Order {
  id: string;
  orderItem: OrderItem[];
}

const EmpanadaSchema = new Schema<Empanada>(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
  },
  { _id: false }
);

const OrderItemSchema = new Schema<OrderItem>(
  {
    name: { type: String, required: true },
    empanadas: { type: [EmpanadaSchema], required: true },
  },
  { _id: false }
);

const OrderSchema = new Schema<Order>({
  id: { type: String, required: true },
  orderItem: { type: [OrderItemSchema], required: true },
});

const OrderModel = model<Order>("Order", OrderSchema);

OrderSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

OrderItemSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

EmpanadaSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default OrderModel;
