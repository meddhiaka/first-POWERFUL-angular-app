import { Component } from '@angular/core';

interface Person {
  id: number,
  name: string,
  isAdmin: boolean
}

@Component({
  selector: 'app-forlooprendering',
  standalone: true,
  imports: [],
  templateUrl: './forlooprendering.component.html',
  styleUrl: './forlooprendering.component.css'
})
export class ForlooprenderingComponent {
  persons: Person[] = [
    {
      id: 1,
      name: "med dhia kassab",
      isAdmin: true
    },
    {
      id: 2,
      name: "ali kaabi",
      isAdmin: false
    },
    {
      id: 3,
      name: "roua zribi",
      isAdmin: false
    }
  ]
}
