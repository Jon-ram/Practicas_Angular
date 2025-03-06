import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    PageContainerComponent,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ManualEjercicios_Anglar_230410';

  isSidebarCollapsed = false;
  currentExercise: string = '';
  isLoggedIn: boolean = true;

  constructor(private router: Router) {}

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  onExerciseSelected(exerciseName: string) {
    this.currentExercise = exerciseName;

    // Si deseas navegar con rutas, habilita algo como:
    // this.router.navigate([`/ejercicio-${exerciseName.split(' ')[1]}`]);
    // Asegúrate de tener definidas esas rutas en app.routes.ts
  }

  logout() {
    this.isLoggedIn = false;
  }

  login() {
    this.isLoggedIn = true;
  }
}
