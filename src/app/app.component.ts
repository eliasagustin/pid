import { Component, HostBinding, OnInit} from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs/tab-group';


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

export class AppComponent implements OnInit{
  
  title = 'Controladores PID';



  tabs: TabItem[] = [
    {
      label: 'Destacados',
      icon: 'home',
      route: 'topics',
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

  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);

  constructor(public overlayContainer: OverlayContainer) {
    this.overlayContainer.getContainerElement().parentElement?.classList.remove('dark-theme');
    this.overlayContainer.getContainerElement().parentElement?.classList.add('light-theme');
  }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'dark-theme';
      this.className = darkMode ? darkClassName : 'light-theme';
      //console.log(this.overlayContainer.getContainerElement().parentElement?.className);
      if (darkMode) {
        this.overlayContainer.getContainerElement().parentElement?.classList.remove('light-theme'); //.classList.add('light-theme');
        this.overlayContainer.getContainerElement().parentElement?.classList.add('dark-theme'); //.getContainerElement().classList.add('dark-theme');
      } else {
        this.overlayContainer.getContainerElement().parentElement?.classList.remove('dark-theme');
        this.overlayContainer.getContainerElement().parentElement?.classList.add('light-theme');
      }
    });
  }
  
  // public onSetTheme(e: string){
  //   this.overlayContainer.getContainerElement().classList.add(e);
  //   this.componentCssClass = e;
  // }
  onTabChanged(event: MatTabChangeEvent): void {
    //console.log('detecto click en la zona?' + this.tabs[event.index].route);
    }
  
}




