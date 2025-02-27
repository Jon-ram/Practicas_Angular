import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importa aquí los componentes de los ejercicios:
import { Ejercicio01Component } from '../../ejercicio-01/ejercicio-01.component';
import { Ejercicio02Component } from '../../ejercicio-02/ejercicio-02.component';
import { Ejercicio03Component } from '../../ejercicio-03/ejercicio-03.component';
import { Ejercicio04Component } from '../../ejercicio-04/ejercicio-04.component';
import { Ejercicio05Component } from '../../ejercicio-05/ejercicio-05.component';
import { Ejercicio06Component } from '../../ejercicio-06/ejercicio-06.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    Ejercicio01Component,
    Ejercicio02Component,
    Ejercicio03Component,
    Ejercicio04Component,
    Ejercicio05Component,
    Ejercicio06Component
  ],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() exerciseName: string = '';
}
