import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from '../content/content.component';
import { FooterComponent } from '../footer/footer.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [CommonModule, ContentComponent, FooterComponent, BreadcrumbComponent],
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent {
  @Input() selectedExercise: string = '';
  @Input() isLoggedIn: boolean = true;
  @Output() login = new EventEmitter<void>();

  onLogin() {
    this.login.emit();
  }
}
