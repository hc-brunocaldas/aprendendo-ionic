import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecuperarSenhaPage } from '../recuperar-senha/recuperar-senha';
import { RecuperarUsuarioPage } from '../recuperar-usuario/recuperar-usuario';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  recuperarSenha(){
    this.navCtrl.push(RecuperarSenhaPage)
  }
  recuperarUsuario(){
    this.navCtrl.push(RecuperarUsuarioPage)
  }

  home(){
    this.navCtrl.push(HomePage); 
  }

}
