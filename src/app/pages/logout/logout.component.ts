import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [
    
  ],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    localStorage.removeItem('token'); // remove token
    localStorage.clear(); // opcional: limpa tudo
    this.router.navigate(['/login']); // redireciona para login
  }
}
