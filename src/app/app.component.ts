import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatexComponent } from './statex/statex.component';
import { CondtionalcomponentrenderComponent } from './condtionalcomponentrender/condtionalcomponentrender.component';
import { ForlooprenderingComponent } from './forlooprendering/forlooprendering.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StatexComponent, CondtionalcomponentrenderComponent, ForlooprenderingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
}
