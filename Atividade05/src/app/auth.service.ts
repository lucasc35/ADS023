import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  autenticado: boolean = false;
  login() { this.autenticado = true }
  logout() { this.autenticado = false }
  isAutenticado() {return this.autenticado}
  constructor() { }
}
