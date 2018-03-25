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
  usuario: Usuario = new Usuario(null, null, null, null);

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
    if(form.valid) alert("Se registró correctamente")
  }

}
