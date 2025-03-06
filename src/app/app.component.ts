import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
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
    NgIf,
    RouterOutlet  // Para usar <router-outlet>
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Propiedades que se usan en la plantilla
  currentExercise: string = '';
  isLoggedIn: boolean = true;
  isSidebarCollapsed: boolean = false;

  constructor(private router: Router) {}

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  onExerciseSelected(exerciseName: string): void {
    this.currentExercise = exerciseName;
    // Navega a Ejercicio 12 si se selecciona
    if (exerciseName === 'Ejercicio 12') {
      this.router.navigate(['/ejercicio-12']);
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  login(): void {
    this.isLoggedIn = true;
  }
}
