import { Component, OnInit, Output } from '@angular/core';
import { Emprendedor } from '../emprendedor';
import { EmprendedorService } from '../emprendedor.service';
import { EmprendedorDetail } from '../emprendedor-detail';

@Component({
  selector: 'app-emprendedor-list',
  standalone: false,
  templateUrl: './emprendedor-list.component.html',
  styleUrl: './emprendedor-list.component.css'
})
export class EmprendedorListComponent implements OnInit {
  // Lista de emprendedores quemada, recuerden que tiene que crear un servicio para obtenerlos del API
  // Por lo tanto, el contenido de esta lista luego lo deben eliminar
  /*
  emprendedores: Array<Emprendedor> = [
    new Emprendedor(1, 'Nicolás Rojas', 'Masculino', 'Ingeniería Industrial', 'https://github.com/k-garces/ISIS2603_202520_S4_P2_Practica/blob/main/img/rojas.jpg?raw=true'),
    new Emprendedor(2, 'Juan Pablo Urrea', 'Masculino', 'Ingeniería Industrial y Administración', "https://github.com/k-garces/ISIS2603_202520_S4_P2_Practica/blob/main/img/urrea.jpg?raw=true"),
    new Emprendedor(3, 'Sebastián Correa', 'Masculino', 'Ingeniería Civil', 'https://github.com/k-garces/ISIS2603_202520_S4_P2_Practica/blob/main/img/correa.jpg?raw=true'),
    new Emprendedor(4, 'Martín Peláez', 'Masculino', 'Ingeniería Mecánica', 'https://github.com/k-garces/ISIS2603_202520_S4_P2_Practica/blob/main/img/pelaez.jpg?raw=true'),
    new Emprendedor(5, 'Santiago Cala', 'Masculino', 'Ingeniería Industrial y de Sistemas', 'https://github.com/k-garces/ISIS2603_202520_S4_P2_Practica/blob/main/img/cala.jpg?raw=true')
  ]
  */

  emprendedores: Array<Emprendedor> = [];
  @Output() emprendedorSeleccionado: Emprendedor | null = null;
  seleccionado = false;

  constructor(private emprendedorService: EmprendedorService) { }

  getEmprendedores() {
    this.emprendedorService.getEmprendedores().subscribe((emprendedores) => {
      this.emprendedores = emprendedores;
    });
  }
  
  seleccionarEmprendedor(emprendedor: Emprendedor): void {
    this.emprendedorSeleccionado = emprendedor;
    this.seleccionado = true;
  }
  
  ngOnInit(): void {}
}
