import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-doc',
  templateUrl: './section-doc.component.html',
  styleUrls: ['./section-doc.component.css']
})
export class SectionDocComponent implements OnInit {

  panelOpenState = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
