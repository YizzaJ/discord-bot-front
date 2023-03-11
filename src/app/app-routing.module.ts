import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CallbackComponent } from './components/callback/callback.component';
import { LoginComponent } from './components/login/login.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'callback',component:CallbackComponent},
  {path:'home',component:SidenavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
