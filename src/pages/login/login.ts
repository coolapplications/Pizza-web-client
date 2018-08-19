import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from "ionic-angular";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  constructor(private sideMenu: MenuController) {}

  ionViewDidEnter() {
    this.sideMenu.swipeEnable(false);
  }

  ionViewWillLeave() {
    this.sideMenu.swipeEnable(true);
  }
}
