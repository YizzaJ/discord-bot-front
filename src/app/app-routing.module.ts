import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { InfoComponent } from './shared/info/info.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:SidenavComponent},
  {path:'help',component:InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
