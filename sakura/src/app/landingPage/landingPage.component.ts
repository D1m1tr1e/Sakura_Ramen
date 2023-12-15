import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; //@ markiert den Pfad unter welchem Angular suchen muss
import { NavbarComponent } from './navbar/navbar.component';


@Component({ //Decorator typscriot specifish
    selector: 'app-landingPage', // Ganz normales HTML Tag 
    standalone: true, // die Componenten ist als standalone definiert  
    imports: [CommonModule, NavbarComponent],
    template: `<section>
                  <div><app-navbar></app-navbar></div>
                  <h1 class="fontRaleway">SAKURA RAMEN</h1>
                  <h2 class="fontRaleway">THE BEST RAMEN IN TOWN</h2>
               </section>`,
    styleUrls: ['./landingPage.component.scss']
})
export class LandingPageComponent { }