import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-03',
  imports: [],
  template: `
    Username: {{ username }}
  `,
  styleUrl: './ejercicio-03.component.css'
})
export class Ejercicio03Component {
  username = 'Jonathan Baldemar';
}
  