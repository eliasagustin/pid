import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-section-construc',
  
templateUrl: './section-construc.component.html',
styleUrls: ['./section-construc.component.css']
})


export class SectionConstrucComponent implements OnInit {

  typesOfShoes: string[] = [
    '../assets/images-articles/sitio-en-construccion.png',
    'http://s7d5.scene7.com/is/image/horizonhobby/360_EFLH1250_03?wid=750',
    'http://s7d5.scene7.com/is/image/horizonhobby/360_EFLH1250_04?wid=750',
    'http://s7d5.scene7.com/is/image/horizonhobby/360_EFLH1250_05?wid=750',
  ];

  images: string[] = [
    './assets/images-articles/sitio-en-construccion.png',
    '../assets/images-articles/sitio-en-construccion.png',
    'http://s7d5.scene7.com/is/image/horizonhobby/360_EFLH1250_03?wid=750',
    'http://s7d5.scene7.com/is/image/horizonhobby/360_EFLH1250_04?wid=750',
    'http://s7d5.scene7.com/is/image/horizonhobby/360_EFLH1250_05?wid=750',
    'http://s7d5.scene7.com/is/image/horizonhobby/360_EFLH1250_06?wid=750'
  ];

  constructor() { }
  
  

  public threeSixtyImages = {
    0: [
      './assets/images-articles/sitio-en-construccion.png'
    ]
  };
  

  ngOnInit(): void {
    
    this.images
}


}