import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  sidebarWidth = true;
  activeMenu = true;
logout() {
throw new Error('Method not implemented.');
}
goPoll() {
throw new Error('Method not implemented.');
}
goRoom() {
throw new Error('Method not implemented.');
}
goDashboard() {
throw new Error('Method not implemented.');
}
goComments() {
throw new Error('Method not implemented.');
}
goHome() {
throw new Error('Method not implemented.');
}
toggleMenu() {
throw new Error('Method not implemented.');
}

}
