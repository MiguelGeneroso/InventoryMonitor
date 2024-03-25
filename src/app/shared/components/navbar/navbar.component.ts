import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  public listMenu : MenuItem[] = [];

  constructor(){}

  ngOnInit(): void {
    this.listMenu = [
      {
        menu: "Personas",
        route: "/persons",
        submenus: [
          {
            submenu: "Ver Personas",
            route: "show-persons"
          },
          {
            submenu: "Crear Personas",
            route: "create-persons"
          },
          {
            submenu: "Modificar Personas",
            route: "update-persons"
          }
        ]
      },
      {
        menu: "Objetos",
        route: "/items",
        submenus: [
          {
            submenu: "Ver Objetos",
            route: "show-items"
          },
          {
            submenu: "Crear Objetos",
            route: "create-items"
          }
        ]
      }
    ]
  }

}
