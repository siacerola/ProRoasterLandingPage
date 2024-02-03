import { Component } from '@angular/core';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { LayoutCardComponent } from '../../layout/layout-card/layout-card.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { CardTabComponent } from '../card-tab/card-tab.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    JumbotronComponent,
    LayoutCardComponent,
    GalleryComponent,
    CardTabComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
