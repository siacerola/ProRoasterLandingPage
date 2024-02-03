import { Component, Type } from '@angular/core';

@Component({
  selector: 'app-card-tab',
  standalone: true,
  imports: [],
  templateUrl: './card-tab.component.html',
  styleUrl: './card-tab.component.css'
})
export class CardTabComponent {
  statState: boolean = false;
  serviceState: boolean = true;
  faqState: boolean = true;

  statisticTab() {
    this.statState = false;
    this.serviceState = true;
    this.faqState = true;
  }

  serviceTab() {
    this.statState = true;
    this.serviceState = false;
    this.faqState = true;
  }

  faqTab() {
    this.statState = true;
    this.serviceState = true;
    this.faqState = false;
  }
}







