import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-culture',
  imports: [
    RouterLink,
    FormsModule,
    NgForOf
  ],
  templateUrl: './culture.component.html',
  styleUrl: './culture.component.scss'
})
export default class CultureComponent {

  searchTerm: string = '';

  items: string[] = [
    'Basílica de Nossa Senhora de Nazaré',
    'Casa das 11 janelas',
    'Complexo do Ver-o-Rio',
    'Estação das docas',
    'Forte do Presépio(Forte do Castelo)',
    'Igreja da Sé',
    'Igreja das Mercês',
    'Igreja de Santana',
    'Igreja São João Batista',
    'Palácio Antônio Lemos',
    'Palácio da Residência',
    "Paris n'America",
    'Parque Urbano Belém Porto Futuro(Porto Futuro)',
    'Parque Zoobotânico Mangal das garças',
    'Parque Zoobotânico Museu Paraense Emílio Goeldi',
    'Praça Batista Campos',
    'Praça da República',
    'Praça Waldermar Henrique',
    'Theatro da Paz',
    'Ver-o-Peso'
  ];

  links: { [key: string]: string } = {
    'Basílica de Nossa Senhora de Nazaré': '/Basilica-de-Nazaré',
    'Casa das 11 janelas': '/Casa-11-Janelas',
    'Complexo do Ver-o-Rio': '/Ver-o-Rio',
    'Estação das docas': '/Estacao-Docas',
    'Forte do Presépio(Forte do Castelo)': '/Forte-do-Presepio',
    'Igreja da Sé': '/Igreja-Se',
    'Igreja das Mercês': '/Igreja-Mercês',
    'Igreja de Santana': '/Igreja-Santana',
    'Igreja São João Batista': '/Igreja-Sao-Joao',
    'Palácio Antônio Lemos': '/Palacio-Lemos',
    'Palácio da Residência': '/Palacio-da-Residencia',
    "Paris n'America": '/Paris-n-America',
    'Parque Urbano Belém Porto Futuro(Porto Futuro)': '/Porto-Futuro',
    'Parque Zoobotânico Mangal das garças': '/Mangal-Garcas',
    'Parque Zoobotânico Museu Paraense Emílio Goeldi': '/Museu-Goeldi',
    'Praça Batista Campos': '/Praça-Batista',
    'Praça da República': '/Praça-Republica',
    'Praça Waldermar Henrique': '/Praça-Waldermar',
    'Theatro da Paz': '/Theatro-da-Paz',
    'Ver-o-Peso': '/Ver-o-Peso'
  };



  filteredItems(): string[] {
    const term = this.searchTerm.toLowerCase();
    return this.items.filter(item =>
      item.toLowerCase().includes(term)
    );
  }

  getRoute(item: string): string {
    return this.links[item];
  }

}
