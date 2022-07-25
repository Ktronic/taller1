import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navbarOpts = [
    { path: '/home', name: 'Home'},
    { path: '/users', name: 'Users'},
    { path: '/photos', name: 'Photos'}
  ];
}


// [1, 2, 3, 4] // 4
// ['miguel', 'pedro', 'maria'] // 3
// [{ name: 'Miguel', lastname: 'ramos'}, {name: 'pedro', lastname: 'Perez'}] // 2