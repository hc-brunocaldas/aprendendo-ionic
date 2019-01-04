import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InicialPage } from '../inicial/inicial';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CadastrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastros',
  templateUrl: 'cadastros.html',
})
export class CadastrosPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goPaginaInicial(){
    this.navCtrl.push(HomePage);
  }

  logOut(){
    var confirmacao = window.confirm('Tem certeza que quer sair?');
    if(confirmacao){
      this.navCtrl.push(LoginPage);
    }
  }
}
