import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-section-hardware',
  templateUrl: './section-hardware.component.html',
  styleUrls: ['./section-hardware.component.css']
})
export class SectionHardwareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  onClickButtonNewTab(url: string): void {
    window.open(
      url, "_blank");
  }
}
