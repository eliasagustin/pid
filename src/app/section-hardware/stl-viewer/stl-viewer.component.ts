import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stl-viewer',
  templateUrl: './stl-viewer.component.html',
  styleUrls: ['./stl-viewer.component.css']
})
export class StlViewerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClickButtonNewTab(url: string): void {
    window.open(
      url, "_blank");
  }
}
