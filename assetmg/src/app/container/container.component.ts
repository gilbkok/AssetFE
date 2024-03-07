import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-container',
    standalone: true,
    templateUrl: './container.component.html',
    styleUrl: './container.component.css',
    imports: [HeaderComponent]
})
export class ContainerComponent {

}
