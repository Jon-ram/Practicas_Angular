import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importar CommonModule


@Component({
  selector: 'app-ejercicio-05',
  standalone: true,
  templateUrl: './ejercicio-05.component.html',
  styleUrl: './ejercicio-05.component.css',
  imports: [CommonModule]  // Agregar CommonModule en imports
})
export class Ejercicio05Component {
  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
  ];
  trackById(index: number, user: any): number {
    return user.id;
  }
  
}

