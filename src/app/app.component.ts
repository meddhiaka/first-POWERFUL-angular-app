import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StatexComponent } from './statex/statex.component';
import { CondtionalcomponentrenderComponent } from './condtionalcomponentrender/condtionalcomponentrender.component';
import { ForlooprenderingComponent } from './forlooprendering/forlooprendering.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    StatexComponent,
    CondtionalcomponentrenderComponent,
    ForlooprenderingComponent,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
}
