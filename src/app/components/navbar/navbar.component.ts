import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() toggle = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();

  toggleSidebar() {
    this.toggle.emit();
  }

  onLogout() {
    this.logout.emit();
  }
}
