import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: "login", component: LoginPageComponent },
  { path: "signup", component: SignupPageComponent },
  { path: "", component:LoginPageComponent },
  { path: "dashboard", component: DashboardPageComponent },
  { 
    path: "admin", component: AdminLayoutComponent,
    children:[
      { path: "", component: HomeAdminComponent },
      { path: "home", component: HomeAdminComponent },
      { path: "users", component: UsersComponent},
      { path: "profile", component: ProfileComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
