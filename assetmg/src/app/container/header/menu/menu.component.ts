import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatCardModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
