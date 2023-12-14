import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; //@ markiert den Pfad unter welchem Angular suchen muss


@Component({ //Decorator typscriot specifish
    selector: 'app-landingPage', // Ganz normales HTML Tag 
    standalone: true, // die Componenten ist als standalone definiert  
    imports: [CommonModule],
    template: `<section>
                <h1>Sakura Ramen</h1>
                <h2>Best Ramen in Town</h2>
               </section>`,
    styleUrls: ['./landingPage.component.scss']
})
export class LandingPageComponent { }