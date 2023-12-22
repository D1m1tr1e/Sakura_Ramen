import { Component } from '@angular/core';
import { LandingPageComponent } from './../main-content/landingPage/landingPage.component';
import { HowToOrderComponent } from './../main-content/how-to-order/how-to-order.component';
import { OurMenuComponent } from './../main-content/our-menu/our-menu.component';
import { FindUsComponent } from './../main-content/find-us/find-us.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingPageComponent, HowToOrderComponent,
            OurMenuComponent, FindUsComponent],
  templateUrl: './main-content.component.html', 
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
