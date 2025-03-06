import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() toggle = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();
  @Output() exerciseSelected = new EventEmitter<string>();

  isExpanded: boolean = false;

  toggleSidebar() {
    this.toggle.emit();
  }

  onLogout() {
    this.logout.emit();
  }

  // Abre/cierra el panel de ejercicios
  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }

  // Emite el ejercicio seleccionado
  selectExercise(name: string) {
    this.exerciseSelected.emit(name);
    this.isExpanded = false; // Cierra el panel al seleccionar
  }
}
