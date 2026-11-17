import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InicioSesionComponent implements OnInit {

  usuario: any = '';
  password: any = '';
  mensajeError: string = '';

  constructor(private router: Router) { }

  ngOnInit() {}

  iniciarSesion() {
    const userLimpio = String(this.usuario || '').trim();
    const passLimpia = String(this.password || '');

    if (userLimpio === 'usuariodeprueba' && passLimpia === '123456') {
      this.mensajeError = '';
      this.router.navigate(['/home']);
    } else {
      this.mensajeError = 'Usuario o contraseña incorrectos.';
    }
  }

}