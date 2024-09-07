import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EditComponent } from './pages/edit/edit.component';
import { CreateComponent } from './pages/create/create.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'create', component: CreateComponent },
];
