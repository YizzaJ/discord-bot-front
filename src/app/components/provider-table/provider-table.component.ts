import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message-service/message-service.service';
import { ModifyProviderComponent } from '../modify-provider/modify-provider.component';
import { MatDialog } from '@angular/material/dialog';
import { AddProviderComponent } from '../add-provider/add-provider.component';
import { RemoveProviderComponent } from '../remove-provider/remove-provider.component';

@Component({
  selector: 'app-provider-table',
  templateUrl: './provider-table.component.html',
  styleUrls: ['./provider-table.component.css']
})
export class ProviderTableComponent {
  displayedColumns: string[] = ['webSiteName', 'webSite', 'modify', 'delete'];
  data: any[] = [];
  @Input() userID = "";
  serverList: { id: string, serverName: string }[] = [];
  serverID = "";

  constructor(private messageService: MessageService, private dialog: MatDialog) { }

  async ngOnInit() {
    this.loadServers();
  }

  async loadServers() {
    this.serverList = await this.messageService.getServers(this.userID).catch(error => {
      console.error('Error obteniendo servidores ', error);
    });
  }

  async loadTable(serverID: string) {
    if (serverID != "") {
      console.log(serverID)
      this.serverID = serverID;
      this.data = await this.messageService.getProviders(serverID).catch(error => {
        console.error('Error obteniendo proveedores ', error);
      });
    }else{
      this.data = [];
    }
  }

  async openAddProvider() {
    const dialogRef = this.dialog.open(AddProviderComponent, {
      data: { serverID: this.serverID },
      width: '50%',
      height: '80%',
      panelClass: 'dialog-add'

    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog closed');
      this.loadTable(this.serverID);
    });

  }

  async openModifyProvider(provider: string) {
    console.log(provider)
    const dialogRef = this.dialog.open(ModifyProviderComponent, {
      data: { serverID: this.serverID, provider: provider },
      width: '50%',
      height: '80%',
      panelClass: 'dialog-add'

    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog closed');
      this.loadTable(this.serverID);
    });


  }

  async deleteProvider(provider: string) {
    const dialogRef = this.dialog.open(RemoveProviderComponent, {
      data: { serverID: this.serverID, provider: provider },
      width: '25%',
      height: '25%',
      panelClass: 'dialog-add'

    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog closed');
      this.loadTable(this.serverID);
    });


  }
}
