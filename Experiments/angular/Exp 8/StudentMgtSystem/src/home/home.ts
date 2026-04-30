import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name:string = "Aditya Patil"
  age:number = 22
  course:string = "CSE AI/ML"
  imagePath:string = "Lion.jpg"
  cities:string[] = ["Sangli","Pune","Mumbai","Kolhapur","Ichalkaranji"]

  changeName = () => {
    this.name = "Aditya Patil"
  }

  toggleImage = () => {
    this.imagePath = this.imagePath === "Lion.jpg"?"Tiger.jpg":"Lion.jpg"
  }
}
