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

  // Para revisar la galeria de iconos
  // https://fonts.google.com/icons

  tabs: TabItem[] = [
    {
      label: ' Destacados',
      icon: 'grid_view',
      route: 'topics',
    },
    {
      label: ' Documentos',
      icon: 'menu_book',
      route: 'section-intro-pid',
    },
    {
      label: 'Hardware',
      icon: 'hardware',
      route: 'section-hardware',
    },
    {
      label: 'Descargas',
      icon: 'file_download',
      route: 'section-construc',
    },
    {
      label: 'Contacto',
      icon: 'person',
      route: 'section-construc',
    }
  ];

  @HostBinding('class') componentCssClass: any;

  @HostBinding('class') className = '';

  toggleControl = new FormControl(true);

  constructor(public overlayContainer: OverlayContainer) {
    this.overlayContainer.getContainerElement().parentElement?.classList.remove('light-theme');
    this.overlayContainer.getContainerElement().parentElement?.classList.add('dark-theme');
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




