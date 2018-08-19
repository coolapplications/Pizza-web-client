import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { OrderProvider, Order } from "../../providers/order/order";
import { Observable } from "../../../node_modules/rxjs";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public order: Observable<Order>;
  public id: string;

  constructor(public orderService: OrderProvider) {
    this.order = this.orderService.getOrders();
  }

  submit(event) {
    this.orderService.sendOrder({ id: this.id });
  }
}
