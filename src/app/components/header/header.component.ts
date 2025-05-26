import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {NgIf} from '@angular/common';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  username: string | null = null;
  private authSubscription: Subscription | null = null;

  constructor(private apiService: ApiService, private authService: AuthService) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.getAuthStatus().subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.apiService.getCurrentUser().subscribe({
          next: (res) => {
            console.log('Resposta do getCurrentUser:', res); // Debug
            this.username = res?.name ?? res?.username ?? null;
          },
          error: (err) => {
            console.error('Erro no getCurrentUser:', err); // Debug
            this.username = null;
          }
        });
      } else {
        this.username = null;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
