import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // alt + 64
  @Input() optsNavbar: any [] = [];
  @Input() titleNav: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
