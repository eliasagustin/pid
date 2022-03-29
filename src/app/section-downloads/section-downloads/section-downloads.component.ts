import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-downloads',
  templateUrl: './section-downloads.component.html',
  styleUrls: ['./section-downloads.component.css']
})
export class SectionDownloadsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickButtonNewTab(url: string): void {
    window.open(
      url, "_blank");
  }
  
}
