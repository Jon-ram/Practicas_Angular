import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { NgIf } from '@angular/common'; // Necesario para *ngIf

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    PageContainerComponent,
    NgIf // Importamos NgIf para usar *ngIf en la plantilla
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ManualEjercicios_Anglar_230410';
  
  isSidebarCollapsed = false; // Estado del sidebar
  currentExercise: string = ''; // Nombre del ejercicio seleccionado

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  onExerciseSelected(exerciseName: string) {
    this.currentExercise = exerciseName;
  }
}
