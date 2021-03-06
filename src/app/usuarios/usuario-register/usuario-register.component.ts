import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'practica1-usuario-register',
  templateUrl: './usuario-register.component.html',
  styleUrls: ['./usuario-register.component.scss']
})
export class UsuarioRegisterComponent implements OnInit {
  usuarioForm: FormGroup;
  usuarioNuevo: Usuario;
  usuarios: Usuario[] = [
    new Usuario('Agustin', 'Muñoz Campos', 37347617, 'agustin.munoz@incluit.com'),
    new Usuario('Victor', 'Ruiz', 30677450, 'victor.rz@gmail.com'),
    new Usuario('Nina', 'Kraviz', 17443671, 'ninakraviz@gmail.com')
  ];

  constructor(private formBuilder: FormBuilder) {
    this.inicializarForm();
  }

  ngOnInit() {
  }

  inicializarForm() {
    this.usuarioForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('[ñA-Za-z ]+')]],
      apellido: ['', [Validators.required, Validators.pattern('[ñA-Za-z ]+')]],
      dni: ['', [Validators.required, Validators.pattern("[0-9]+")]],
      mail: ['', [Validators.required, Validators.email]]
    });
  }

  guardar(form) { 
    if(form.valid) {
      this.usuarioNuevo = new Usuario(form.controls.nombre.value, form.controls.apellido.value, form.controls.dni.value, form.controls.mail.value);
      this.usuarios.push(this.usuarioNuevo);
      this.usuarioForm.reset();
      alert("El usuario se registró correctamente");
    } else {
      alert("Ups! No se puedo registrar el usuario");
    }
  }

  eliminarItem(usuario) {
    let index = this.usuarios.indexOf(usuario);
    this.usuarios.splice(index, 1);
  }

}
