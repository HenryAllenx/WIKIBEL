import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {NgIf} from '@angular/common';

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

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCurrentUser().subscribe({
      next: (res) => {
        this.username = res?.name ?? res?.username ?? null; // ajuste se necessário
      },
      error: () => {
        this.username = null;
      }
    });
  }
}
