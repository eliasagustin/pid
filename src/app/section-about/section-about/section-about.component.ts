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
      titulo: 'Que es un PID',
      subTitulo: '20 min',
      texto: 'Este proyecto se concebió durante el cursado',// y estudio de la matería Teoría de Control, en la UTN FRRo. Que gracias a la necesidad de querer incorporar conocimientos abstractos, decidí investigar su apliación práctica. En otras palabras crear un mecanismo a mi alcance que utilice Controles PID, cuya finalidad es alcanzar y mantener un valor deseado en un proceso.',
      imagen: 'http://www.slicetex.com.ar/docs/an/an033/img/pid.png',
    },
    {
      titulo: 'Sobre el proyecto',
      subTitulo: '15 min',
      texto: 'Este proyecto se concebió durante el cursado',// y estudio de la matería Teoría de Control, en la UTN FRRo. Que gracias a la necesidad de querer incorporar conocimientos abstractos, decidí investigar su apliación práctica. En otras palabras crear un mecanismo a mi alcance que utilice Controles PID, cuya finalidad es alcanzar y mantener un valor deseado en un proceso.',
      imagen: 'http://www1.slic1etex.com.ar/docs/an/an033/img/pid.png',
    },
    {
      titulo: 'Software Serial PC',
      subTitulo: 'Descarga y Repositorio',
      texto: 'Este proyecto se concebió durante el cursado',// y estudio de la matería Teoría de Control, en la UTN FRRo. Que gracias a la necesidad de querer incorporar conocimientos abstractos, decidí investigar su apliación práctica. En otras palabras crear un mecanismo a mi alcance que utilice Controles PID, cuya finalidad es alcanzar y mantener un valor deseado en un proceso.',
      imagen: 'http://www.slicetex.com.ar/docs/an/an033/img/pid.png',
    },
    {
      titulo: 'Codigo PID Arduino',
      subTitulo: 'Descarga y Repositorio',
      texto: 'Este proyecto se concebió durante el cursado',// y estudio de la matería Teoría de Control, en la UTN FRRo. Que gracias a la necesidad de querer incorporar conocimientos abstractos, decidí investigar su apliación práctica. En otras palabras crear un mecanismo a mi alcance que utilice Controles PID, cuya finalidad es alcanzar y mantener un valor deseado en un proceso.',
      imagen: 'http://www.slicetex.com.ar/docs/an/an033/img/pid.png',
    },
    {
      titulo: 'Modelos 3D',
      subTitulo: 'Descarga de STLs',
      texto: 'Este proyecto se concebió durante el cursado',// y estudio de la matería Teoría de Control, en la UTN FRRo. Que gracias a la necesidad de querer incorporar conocimientos abstractos, decidí investigar su apliación práctica. En otras palabras crear un mecanismo a mi alcance que utilice Controles PID, cuya finalidad es alcanzar y mantener un valor deseado en un proceso.',
      imagen: 'http://www.slic1ete1x.com.ar/docs/an/an033/img/pid.png',
    },
    {
      titulo: 'Primer Prototipo Funcional',
      subTitulo: 'Todo tuvo un comienzo',
      texto: 'Este proyecto se concebió durante el cursado',// y estudio de la matería Teoría de Control, en la UTN FRRo. Que gracias a la necesidad de querer incorporar conocimientos abstractos, decidí investigar su apliación práctica. En otras palabras crear un mecanismo a mi alcance que utilice Controles PID, cuya finalidad es alcanzar y mantener un valor deseado en un proceso.',
      imagen: 'http://www.slicetex.com.ar/docs/an/an033/img/pid.png',
    },
    {
      titulo: 'FAQs',
      subTitulo: 'Preguntas Frecuentes',
      texto: 'Este proyecto se concebió durante el cursado',// y estudio de la matería Teoría de Control, en la UTN FRRo. Que gracias a la necesidad de querer incorporar conocimientos abstractos, decidí investigar su apliación práctica. En otras palabras crear un mecanismo a mi alcance que utilice Controles PID, cuya finalidad es alcanzar y mantener un valor deseado en un proceso.',
      imagen: 'http://www.slic1ete1x.com.ar/docs/an/an033/img/pid.png',
    },
    {
      titulo: 'Consultas',
      subTitulo: 'Formularios y datos de Contacto',
      texto: 'Este proyecto se concebió durante el cursado',// y estudio de la matería Teoría de Control, en la UTN FRRo. Que gracias a la necesidad de querer incorporar conocimientos abstractos, decidí investigar su apliación práctica. En otras palabras crear un mecanismo a mi alcance que utilice Controles PID, cuya finalidad es alcanzar y mantener un valor deseado en un proceso.',
      imagen: 'http://www.slic1ete1x.com.ar/docs/an/an033/img/pid.png',
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
