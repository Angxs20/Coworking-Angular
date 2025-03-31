import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';

export const routes: Routes = [
    { path: 'registro', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashbordComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige al login por defecto
  ];
