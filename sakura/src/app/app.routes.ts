import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { InprintComponent } from './inprint/inprint.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'imprint', component: InprintComponent }
]