import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export interface VideoData {
  titulo:string;
  url:string;
  sp:string;
  kp:string;
  ki:string;
  kd:string;
}

@Component({
  selector: 'app-video-viewer',
  templateUrl: './video-viewer.component.html',
  styleUrls: ['./video-viewer.component.css']
})
export class VideoViewerComponent implements OnInit {

  videoData: VideoData[] = [
    {
      titulo: "Primer Ejecución, variando constantes Kp",
      url: 'sM9FfloOZU8',
      sp: '24',
      kp: '[2..11]',
      kd: '0',
      ki: '0',

    },
    {
      titulo: "Segunda Ejecución, variando constantes Kd",
      url: '5Xe3bkG6Jmg',
      sp: '24',
      kp: '10',
      kd: '0',
      ki: '[1, 10, 50, 100, 200, 250]',

    }
  ]

  myURL = 'https://www.youtube.com/embed/sM9FfloOZU8';
  myTrustedURL1:any;
  myTrustedURL2:any;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.myTrustedURL1 = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+ this.videoData[0].url);//this.videoData[0].url);
    this.myTrustedURL2 = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+ this.videoData[1].url);//this.videoData[0].url);
  }

}
