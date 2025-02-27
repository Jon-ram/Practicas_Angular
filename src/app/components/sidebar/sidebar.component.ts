import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() exerciseSelected = new EventEmitter<string>();

  selectExercise(name: string) {
    this.exerciseSelected.emit(name);
  }
}
