import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', title: 'Dashboard', component: DashboardComponent },
  { path: 'posts', title: 'Posts', component: PostsComponent },
  { path: 'login', title: 'Login', component: LoginComponent },
];
