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
        submenus: [
          { submenu: "Ver Personas" },
          {  submenu: "Crear Personas" },
          { submenu: "Modificar Personas" }
        ]
      },
      {
        menu: "Objetos",
        submenus: [
          { submenu: "Ver Objetos" },
          { submenu: "Crear Objetos" },
          { submenu: "Modificar Objetos" }
        ]
      }
    ]
  }

}
