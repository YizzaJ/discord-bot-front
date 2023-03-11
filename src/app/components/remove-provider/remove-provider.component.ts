import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'src/app/services/message-service/message-service.service';

@Component({
  selector: 'app-remove-provider',
  templateUrl: './remove-provider.component.html',
  styleUrls: ['./remove-provider.component.css']
})
export class RemoveProviderComponent {
  provider = ""

  constructor(
    private messageService: MessageService,
    private dialogRef: MatDialogRef<RemoveProviderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { serverID: string, provider:any}) {
    this.provider = data.provider
  }

  onConfirm(): void {
    this.dialogRef.close(true);

    this.messageService.removeProvider(this.data.serverID, this.data.provider).subscribe();

  }
}
