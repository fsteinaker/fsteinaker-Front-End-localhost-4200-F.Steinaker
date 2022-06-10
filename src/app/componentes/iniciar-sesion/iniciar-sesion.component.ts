import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {

  usuario = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) {

  }

  Ingresar() {
    const { email,password } = this.usuario;
    this.authService.register(email,password).then(res=>{
      console.log("Se registro: ",res);
    })
  }

    IngresarConGoogle() {
      const { email,password } = this.usuario;
      this.authService.loginWithGoogle(email,password).then(res=>{
        console.log("Se registro: ",res);
      })
  }

  logout() {
    this.authService.logout();
  }

}
