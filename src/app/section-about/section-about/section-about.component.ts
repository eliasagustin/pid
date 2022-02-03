import { Component, OnInit } from '@angular/core';

export interface Tarjeta {
  titulo: string;
  subTitulo: string;
  texto: string;
  imagen: string;
}

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.css']
})
export class SectionAboutComponent implements OnInit {

  tarjeta: Tarjeta[] = [
    {
      titulo: 'Sobre el proyecto',
      subTitulo: 'Sobre el proyecto',
      texto: 'Este proyecto se concebió durante el cursado',// y estudio de la matería Teoría de Control, en la UTN FRRo. Que gracias a la necesidad de querer incorporar conocimientos abstractos, decidí investigar su apliación práctica. En otras palabras crear un mecanismo a mi alcance que utilice Controles PID, cuya finalidad es alcanzar y mantener un valor deseado en un proceso.',
      imagen: 'http://www.slicetex.com.ar/docs/an/an033/img/pid.png',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
