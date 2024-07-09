// src/app/menu/menu.component.ts
import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { Menu } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menus: Menu[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus(): void {
    this.menuService.getMenus().subscribe((data: Menu[]) => {
      this.menus = data;
    });
  }
}
