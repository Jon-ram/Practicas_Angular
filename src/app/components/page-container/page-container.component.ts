import { Component } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { FooterComponent } from '../footer/footer.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-page-container',
  imports: [ContentComponent,FooterComponent,BreadcrumbComponent],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.css'
})
export class PageContainerComponent {

}
