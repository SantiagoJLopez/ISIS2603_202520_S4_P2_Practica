import { Component, Input } from '@angular/core';
import { Emprendedor } from '../emprendedor';
import { EmprendedorDetail } from '../emprendedor-detail';

@Component({
  selector: 'app-emprendedor-detail',
  standalone: false,
  templateUrl: './emprendedor-detail.component.html',
  styleUrl: './emprendedor-detail.component.css'
})
export class EmprendedorDetailComponent {

  @Input() emprendedor: Emprendedor | null = null;
  emprendedorDetail: EmprendedorDetail | null = null;

  // Cuando el componente recibe un nuevo emprendedor, busca su detalle en la lista quemada
  // notese que esto es solo un placeholder hasta que implementen el servicio y el API
  

}
