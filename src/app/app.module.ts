import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminSidebarComponent } from './common/admin-sidebar/admin-sidebar.component';
import { UserSidebarComponent } from './common/user-sidebar/user-sidebar.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    DashboardPageComponent,
    SidebarComponent,
    NavbarComponent,
    UserLayoutComponent,
    AdminLayoutComponent,
    HomeAdminComponent,
    ProfileComponent,
    AdminSidebarComponent,
    UserSidebarComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
