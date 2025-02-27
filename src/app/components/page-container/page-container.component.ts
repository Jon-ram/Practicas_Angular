import { Component, Input } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { FooterComponent } from '../footer/footer.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [ContentComponent, FooterComponent, BreadcrumbComponent],
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent {
  // Recibimos el nombre del ejercicio desde app.component
  @Input() selectedExercise: string = '';
}
