import { Component, OnInit } from '@angular/core';
import { Usuario } from "../usuario.model";

@Component({
  selector: 'practica1-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  usuarios: Usuario[] = [
    new Usuario('Agustin', 'Muñoz Campos', 37347617, 'agustin.munoz@incluit.com'),
    new Usuario('Victor', 'Ruiz', 30677450, 'victor.rz@gmail.com'),
    new Usuario('Nina', 'Kraviz', 17443671, 'ninakraviz@gmail.com')
  ];

  constructor() { }

  ngOnInit() {
  }

}
