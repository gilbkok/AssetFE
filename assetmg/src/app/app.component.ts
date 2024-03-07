import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ContainerComponent } from "./container/container.component";
import { MenuComponent } from "./container/header/menu/menu.component";
import { HeaderComponent } from './container/header/header.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ContainerComponent, MenuComponent]
})
export class AppComponent {
  title = 'Aisin Asset Management'; 
}
