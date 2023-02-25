import { Routes } from '@angular/router';
import { IndexPageComponent } from '@app/pages';

export const appRoutingRoutes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: '**', component: IndexPageComponent },
];
