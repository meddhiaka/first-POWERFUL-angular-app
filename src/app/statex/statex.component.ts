import { Component } from '@angular/core';

@Component({
  selector: 'app-statex',
  standalone: true,
  imports: [],
  templateUrl: './statex.component.html',
  styleUrl: './statex.component.css'
})
export class StatexComponent {
  x: number = 0;

  increment() {
    this.x += 1;
  }

  decrement() {
    if(this.x > 0) {
      this.x -= 1;
    }
  }
}
