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
