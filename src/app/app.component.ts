import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';


export interface TabItem {
  label: string;
  icon: string;
  route: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pid';

  tabs: TabItem[] = [
    {
      label: 'about',
      icon: 'home',
      route: 'about',
    },
    {
      label: 'contact',
      icon: 'person',
      route: 'contact',
    },
    {
      label: 'doc',
      icon: 'search',
      route: 'doc',
    },
  ];

  @HostBinding('class') componentCssClass: any;

  constructor(public overlayContainer: OverlayContainer) {}

  public onSetTheme(e: string){
    this.overlayContainer.getContainerElement().classList.add(e);
    this.componentCssClass = e;
  }

}




