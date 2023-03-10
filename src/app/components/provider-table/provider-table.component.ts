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
  @Input() serverID = ""

  constructor(private apiService: MessageService, private dialog: MatDialog) { }

  async ngOnInit() {
    this.data = await this.apiService.getProviders(this.serverID).catch(error => {
      console.error('Error obteniendo proveedores ', error);
    });
  }


  async openAddProvider() {
    const dialogRef = this.dialog.open(AddProviderComponent, {
      data: { serverID: this.serverID },
      width: '80%',
      height: '80%',
      panelClass: 'dialog-add'

    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog closed');
      this.ngOnInit();
    });

  }

  async openModifyProvider(provider: string) {
    console.log(provider)
    const dialogRef = this.dialog.open(ModifyProviderComponent, {
      data: { serverID: this.serverID, provider:provider },
      width: '80%',
      height: '80%',
      panelClass: 'dialog-add'

    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog closed');
      this.ngOnInit();
    });


  }

  async deleteProvider(provider: string) {
    const dialogRef = this.dialog.open(RemoveProviderComponent, {
      data: { serverID: this.serverID, provider:provider },
      width: '30%',
      height: '30%',
      panelClass: 'dialog-add'

    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog closed');
      this.ngOnInit();
    });


  }
}
