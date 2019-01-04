import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecuperarSenhaPageModule } from '../pages/recuperar-senha/recuperar-senha.module';
import { RecuperarUsuarioPageModule } from '../pages/recuperar-usuario/recuperar-usuario.module';
import { LoginPage } from '../pages/login/login';
import { BoletosPage } from '../pages/boletos/boletos';
import { CadastrosPage } from '../pages/cadastros/cadastros';
import { RelatoriosPage } from '../pages/relatorios/relatorios';
import { VisualizarVeiculosPage } from '../pages/visualizar-veiculos/visualizar-veiculos';
import { InicialPage } from '../pages/inicial/inicial';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage, 
    BoletosPage,
    InicialPage,
    CadastrosPage,
    RelatoriosPage, 
    VisualizarVeiculosPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RecuperarSenhaPageModule,
    RecuperarUsuarioPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage, 
    BoletosPage,
    InicialPage,
    CadastrosPage,
    RelatoriosPage, 
    VisualizarVeiculosPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
