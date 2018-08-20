import { Component } from "@angular/core";
import { OrderProvider, Order, PizzaType } from "../../providers/order/order";
import { Observable } from "../../../node_modules/rxjs";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public order: Observable<Order>;
  public id: string;
  public pizzaType: PizzaType;

  constructor(public orderService: OrderProvider) {
    this.order = this.orderService.getOrders();
  }

  submit(event) {
    this.orderService.sendOrder({
      id: this.id,
      pizzaType: this.pizzaType
    });
  }
  setBolognesa() {
    this.pizzaType = PizzaType.bolognesa;
  }
  setNapolitana() {
    this.pizzaType = PizzaType.napolitana;
  }
}
