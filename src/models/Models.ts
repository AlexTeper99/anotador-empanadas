import { Model, Schema, Types, model, models } from "mongoose";

interface IEmpanada {
  id: number;
  name: string;
  quantity: number;
}

interface IOrderItem {
  name: string;
  empanadas: IEmpanada[];
}

interface IOrder {
  id: string;
  orderItem: IOrderItem[];
  isClosed: boolean;
  ownerHash?: string;
}

type OrderDocumentProps = {
  id: string;
  orderItem: Types.DocumentArray<IOrderItem>;
  isClosed: boolean;
  ownerHash?: string;
};

type OrderItemDocumentProps = {
  name: string;
  empanadas: Types.DocumentArray<IEmpanada>;
};

type OrderModelType = Model<IOrder, {}, OrderDocumentProps>;

type OrderItemModelType = Model<IOrderItem, {}, OrderItemDocumentProps>;

const empanadaSchema = new Schema<IEmpanada>(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
  },
  { _id: false }
);

const orderItemSchema = new Schema<IOrderItem, OrderItemModelType>(
  {
    name: { type: String, required: true },
    empanadas: { type: [empanadaSchema], required: true },
  },
  { _id: false }
);

const orderSchema = new Schema<IOrder, OrderItemModelType>({
  id: { type: String, required: true },
  orderItem: { type: [orderItemSchema], required: true },
  isClosed: { type: Boolean, required: true },
  ownerHash: { type: String, required: false },
});

// const OrderModel = model<Order>("Order", OrderSchema);

orderSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

orderItemSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

empanadaSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export const Order =
  models.Order || model<IOrder, OrderModelType>("Order", orderSchema);
