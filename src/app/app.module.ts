import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { FormsModule } from "../../node_modules/@angular/forms";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";
import { LoginPage } from "../pages/login/login";
import { ConnectionProvider } from "../providers/connection/connection";
import { OrderProvider } from "../providers/order/order";
import { MyApp } from "./app.component";

@NgModule({
  declarations: [MyApp, HomePage, ListPage, LoginPage],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)

    // App modules
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ListPage, LoginPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConnectionProvider,
    OrderProvider
  ]
})
export class AppModule {}
