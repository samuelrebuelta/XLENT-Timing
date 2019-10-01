import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

export const TABS = [
  { id: 0, name: 'Home', path: 'Home' },
  { id: 1, name: 'New Race', path: 'New-Race' }
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  currentTab: any;
  TABS = TABS;

  constructor(
    private router: Router
  ) {
    // Nos subscribimos a los cambios del router para modificar el estado del menu en caso de cambios de ruta desde fuera del menu
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const routePath = event.url.split('/')[1];
        this.currentTab = this.TABS.filter(elem => elem.path === routePath)[0];
      }
    });
  }

  ngOnInit() {
    // Leemos del router la ruta al iniciar el componente y la asignamos a la prop currenTab
    const routePath = this.router.url.split('/')[1];
    this.currentTab = this.TABS.filter(elem => elem.path === routePath)[0];
  }

  navigate(pathId) {
    // Establecemos la tab seleccionada filtrando el listado de tabs y navegamos a ella
    this.currentTab = this.TABS.filter(elem => elem.id === pathId)[0];
    this.router.navigate([`/${this.currentTab.path}`]);
  }

}
