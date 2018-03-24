import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRegisterComponent } from './usuario-register/usuario-register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [UsuarioRegisterComponent],
  exports: [UsuarioRegisterComponent]
})
export class UsuariosModule { }
