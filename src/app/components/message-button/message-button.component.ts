import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message-service/message-service.service';



@Component({
  selector: 'app-message-button',
  templateUrl: './message-button.component.html',
  styleUrls: ['./message-button.component.css']
})
export class MessageButtonComponent {
  constructor(private messageService: MessageService) { }

  sendMessage() {
    this.messageService.sendMessage('mensaje de prueba').subscribe();
  }
}
