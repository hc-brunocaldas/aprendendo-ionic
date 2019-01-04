import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { InicialPage } from '../inicial/inicial';
import { CadastrosPage } from '../cadastros/cadastros';
import { BoletosPage } from '../boletos/boletos';
import { VisualizarVeiculosPage } from '../visualizar-veiculos/visualizar-veiculos';
import { RelatoriosPage } from '../relatorios/relatorios';

@Component({  
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  inicialPage(){
    this.navCtrl.push(InicialPage);
  }
  cadastrosPage(){
    this.navCtrl.push(CadastrosPage);
  }
  boletosPage(){
    this.navCtrl.push(BoletosPage);
  }
  visualizarVeiculosPage(){
    this.navCtrl.push(VisualizarVeiculosPage);
  }
  relatoriosPage(){
    this.navCtrl.push(RelatoriosPage);
  }
  loginPage(){
    this.navCtrl.push(LoginPage);
  }
}
