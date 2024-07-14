import { Component } from '@angular/core';

@Component({
  selector: 'app-condtionalcomponentrender',
  standalone: true,
  imports: [],
  templateUrl: './condtionalcomponentrender.component.html',
  styleUrl: './condtionalcomponentrender.component.css'
})
export class CondtionalcomponentrenderComponent {
  b: number = 1;

  toggleComponent() {
    if (this.b === 1) {
      this.b = 3;
    } else {
      this.b -= 1;
    }
  }
}
