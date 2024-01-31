import { Component } from '@angular/core';
import { CardComponent } from '../../component/card/card.component';

@Component({
  selector: 'app-layout-card',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './layout-card.component.html',
  styleUrl: './layout-card.component.css'
})
export class LayoutCardComponent {

}
