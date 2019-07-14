import { Component, OnInit } from '@angular/core';
import *  as firebase from 'firebase';
import { LoginService } from './login/login.service';
import { Llaves } from '../../server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';

  constructor(private loginService: LoginService) { }
  ngOnInit(): void {    
    firebase.initializeApp({
      apiKey: Llaves.ApiLlave,
      authDomain: Llaves.dominio,
    })
  }

  isAutenticado() {
    return this.loginService.isAutenticado();
  }

  salir() {
    this.loginService.logout();
  }
}
