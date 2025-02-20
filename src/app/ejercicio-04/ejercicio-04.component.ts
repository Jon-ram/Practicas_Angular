import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio-04',
  standalone: true,
  imports: [CommonModule], // Asegurar que CommonModule esté en imports
  templateUrl: './ejercicio-04.component.html',
  styleUrls: ['./ejercicio-04.component.css'] // Corregir 'styleUrl' a 'styleUrls'
})
export class Ejercicio04Component {
  isServerRunning = true;
}