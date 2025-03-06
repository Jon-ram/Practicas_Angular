// src/app/ejercicio-11/ejercicio-11.component.ts
import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-ejercicio-11',
  standalone: true,
  templateUrl: './ejercicio-11.component.html',
  styleUrls: ['./ejercicio-11.component.css'],
  imports: [CommonModule, NgOptimizedImage]
})
export class Ejercicio11Component {
  logoUrl = 'assets/videojuegos.jpg';
  logoAlt = 'Imagen de videojuegos';
  username = 'youngTech';
}
