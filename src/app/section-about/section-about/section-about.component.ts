import { Component, OnInit } from '@angular/core';

export interface Tarjeta {
  titulo: string;
  subTitulo: string;
  texto: string;
  imagen: string;
  enlace: string;
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
      enlace: 'https://google.com/enlace1'
    },
    {
      titulo: 'Sobre el proyecto',
      subTitulo: '15 min',
      texto: 'Este proyecto se concebió durante el cursado',
      imagen: 'http://www1.slic1etex.com.ar/docs/an/an033/img/pid.png',
      enlace: 'https://google.com/enlace2'
    },
    {
      titulo: 'Software Serial PC',
      subTitulo: 'Descarga y Repositorio',
      texto: 'Este proyecto se concebió durante el cursado',
      imagen: 'http://www.slicetex.com.ar/docs/an/an033/img/pid.png',
      enlace: 'https://google.com/enlace3'
    },
    {
      titulo: 'Codigo PID Arduino',
      subTitulo: 'Descarga y Repositorio',
      texto: 'Este proyecto se concebió durante el cursado',
      imagen: 'http://www.slicetex.com.ar/docs/an/an033/img/pid.png',
      enlace: 'https://google.com/enlace4'
    },
    {
      titulo: 'Modelos 3D',
      subTitulo: 'Descarga de STLs',
      texto: 'Este proyecto se concebió durante el cursado',
      imagen: 'http://www.slic1ete1x.com.ar/docs/an/an033/img/pid.png',
      enlace: 'https://google.com/enlace5'
    },
    {
      titulo: 'Primer Prototipo Funcional',
      subTitulo: 'Todo tuvo un comienzo',
      texto: 'Este proyecto se concebió durante el cursado',
      imagen: 'http://www.slicetex.com.ar/docs/an/an033/img/pid.png',
      enlace: 'https://google.com/enlace6'
    },
    {
      titulo: 'FAQs',
      subTitulo: 'Preguntas Frecuentes',
      texto: 'Este proyecto se concebió durante el cursado',
      imagen: 'http://www.slic1ete1x.com.ar/docs/an/an033/img/pid.png',
      enlace: 'https://google.com/enlace7'
    },
    {
      titulo: 'Consultas',
      subTitulo: 'Formularios y datos de Contacto',
      texto: 'Este proyecto se concebió durante el cursado',
      imagen: 'http://www.slic1ete1x.com.ar/docs/an/an033/img/pid.png',
      enlace: 'https://google.com/enlace'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

  onCardClick(event: any): void {
    console.log('detecto click en la zona? ' + event);
  }
  click1(): void {
    console.log("item click");
  }
}
