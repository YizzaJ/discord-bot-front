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
import { AuthService } from './services/auth/auth.service';
import { AuthConfigService } from './services/auth-config/auth-config.service';
import { UserComponent } from './shared/user/user.component';
import { ProviderTableComponent } from './components/provider-table/provider-table.component';
import { MatTableModule } from '@angular/material/table';
import { ModifyProviderComponent } from './components/modify-provider/modify-provider.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './shared/dialog/dialog.component';
import { RemoveProviderComponent } from './components/remove-provider/remove-provider.component';
import { ChecksComponent } from './shared/checks/checks.component';
import { LoginComponent } from './components/login/login.component';
import { InfoComponent } from './shared/info/info.component';



@NgModule({
  declarations: [
    AppComponent,
    MessageButtonComponent,
    SidenavComponent,
    AddProviderComponent,
    SidebarButtonComponent,
    MaxNewsComponent,
    LoginComponent,
    UserComponent,
    ProviderTableComponent,
    ModifyProviderComponent,
    DialogComponent,
    RemoveProviderComponent,
    ChecksComponent,
    InfoComponent
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
