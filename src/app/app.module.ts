import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageButtonComponent } from './components/message-button/message-button.component';
import { MessageService } from './services/message-service/message-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { AddProviderComponent } from './components/add-provider/add-provider.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarButtonComponent } from './shared/sidebar-button/sidebar-button.component';
import { MaxNewsComponent } from './components/max-news/max-news.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AuthService } from './services/auth/auth.service';
import { AuthConfigService } from './services/auth-config/auth-config.service';
import { Login2Component } from './components/log-in2/log-in2.component';
import { CallbackComponent } from './components/callback/callback.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './shared/user/user.component';
import { ProviderTableComponent } from './components/provider-table/provider-table.component';
import { MatTableModule } from '@angular/material/table';
import { ModifyProviderComponent } from './components/modify-provider/modify-provider.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './shared/dialog/dialog.component';
import { RemoveProviderComponent } from './components/remove-provider/remove-provider.component';



@NgModule({
  declarations: [
    AppComponent,
    MessageButtonComponent,
    SidenavComponent,
    AddProviderComponent,
    SidebarButtonComponent,
    MaxNewsComponent,
    LogInComponent,
    Login2Component,
    CallbackComponent,
    LoginComponent,
    UserComponent,
    ProviderTableComponent,
    ModifyProviderComponent,
    DialogComponent,
    RemoveProviderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [MessageService, AuthService, AuthConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
