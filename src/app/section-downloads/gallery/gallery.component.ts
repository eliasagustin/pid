import { Component, OnInit } from '@angular/core';
export interface Tarjeta {
  titulo: string;
  subTitulo: string;
  texto: string;
  imagen: string;
  enlace: string;
}
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  tarjeta: Tarjeta[] = [
    {
      titulo: 'Controlador PID',
      subTitulo: 'PID_lineal.ino',
      texto: 'PID_lineal.ino',// y estudio de la matería Teoría de Control, en la UTN FRRo. Que gracias a la necesidad de querer incorporar conocimientos abstractos, decidí investigar su apliación práctica. En otras palabras crear un mecanismo a mi alcance que utilice Controles PID, cuya finalidad es alcanzar y mantener un valor deseado en un proceso.',
      imagen: './assets/images-articles/code1.png',
      enlace: 'https://github.com/eliasagustin/pid/blob/main/src/assets/codes/PID_lineal.ino'
    },
    {
      titulo: 'Calibr. Sensor',
      subTitulo: 'sensCalibr.ino',
      texto: 'sensDistCalibr.ino',
      imagen: './assets/images-articles/code1.png',
      enlace: 'https://github.com/eliasagustin/pid/blob/main/src/assets/codes/sensDistCalibrate.ino'
    },
    {
      titulo: 'Calibr. Servo',
      subTitulo: 'servoSerial.ino',
      texto: 'servoSerial.ino',
      imagen: './assets/images-articles/code1.png',
      enlace: 'https://github.com/eliasagustin/pid/blob/main/src/assets/codes/servoSerial.ino'
    },
    {
      titulo: 'Test. UltraSonico',
      subTitulo: '...sonico.ino',
      texto: '...sonico.ino',
      imagen: './assets/images-articles/code1.png',
      enlace: 'https://github.com/eliasagustin/pid/blob/main/src/assets/codes/sensor_de_distancia_ultrasonico.ino'
    },
    {
      titulo: 'Archivos impresión 3D',
      subTitulo: 'obj, stl, step, sat..',
      texto: 'obj, stl, sat, step..',
      imagen: './assets/images-articles/descargapaso1.png',
      enlace: 'https://a360.co/36mesOH'
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
  onClickButtonNewTab(url: string): void {
    window.open(
      url, "_blank");
  }
}
