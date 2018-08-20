import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from "ionic-angular";
import { HomePage } from "../home/home";

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
  constructor(
    public navCtrl: NavController,
    private sideMenu: MenuController
  ) {}
  getHome() {
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidEnter() {
    this.sideMenu.swipeEnable(false);
  }

  ionViewWillLeave() {
    this.sideMenu.swipeEnable(true);
  }
}
