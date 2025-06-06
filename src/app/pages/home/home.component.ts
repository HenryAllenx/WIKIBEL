import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {HeaderComponent} from '../../components/header/header.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
