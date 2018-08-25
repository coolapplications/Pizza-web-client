import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from "ionic-angular";
import { HomePage } from "../home/home";
import { MenuPage } from "../menu/menu";

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
    this.navCtrl.push(HomePage);
  }

  getMenu(){
    this.navCtrl.push(MenuPage);
  }

  ionViewDidEnter() {
    this.sideMenu.swipeEnable(false);
  }

  ionViewWillLeave() {
    this.sideMenu.swipeEnable(true);
  }
}
