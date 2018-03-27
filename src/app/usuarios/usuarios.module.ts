import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRegisterComponent } from './usuario-register/usuario-register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsuarioItemComponent } from './usuario-item/usuario-item.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [UsuarioRegisterComponent, UsuarioItemComponent, UsuarioListComponent],
  exports: [UsuarioRegisterComponent]
})
export class UsuariosModule { }
