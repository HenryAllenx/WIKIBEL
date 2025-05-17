import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {HeaderComponent} from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
