import { Component } from '@angular/core';

interface NavLink {
  title: string;
  url: string;
}

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent {
  navItems: NavLink[] = [
    { title: 'Users', url: '/users' },
    { title: 'Posts', url: '/posts' },
    { title: 'Albums', url: '/albums' },
  ];
}
