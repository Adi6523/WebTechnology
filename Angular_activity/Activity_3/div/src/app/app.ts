import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
 selector: 'app-root',
 standalone: true,
 imports: [CommonModule],
 templateUrl: './app.html',
 styleUrl: './app.css'
})

export class AppComponent {

 showDiv = true;

 colors = ['Red','Blue','Green','Yellow'];

 isHighlight = true;

}