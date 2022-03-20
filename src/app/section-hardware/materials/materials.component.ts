import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClickButtonNewTab(url: string): void {
    window.open(
      url, "_blank");
  }
}
