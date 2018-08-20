import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConnectionProvider, Connection } from "../connection/connection";
export enum PizzaType {
  napolitana,
  bolognesa
}
export interface Order {
  id: string;
  pizzaType: PizzaType;
}

@Injectable()
export class OrderProvider {
  private path = "order";
  private connection: Connection<Order>;

  constructor(private connectionService: ConnectionProvider) {
    this.connection = this.connectionService.getConnection(this.path);
  }

  getOrders() {
    return this.connection.data$;
  }

  sendOrder(order: Order) {
    this.connection.emit("add-order", order);
  }
}
