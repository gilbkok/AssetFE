import { Component } from '@angular/core';
import { MenuComponent } from "./menu/menu.component";
import { MatCardModule } from '@angular/material/card';


@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [MenuComponent,
      MatCardModule
    ]
})
export class HeaderComponent {

}
