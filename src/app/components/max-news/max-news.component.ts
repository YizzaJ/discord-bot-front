import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message-service/message-service.service';

@Component({
  selector: 'app-max-news',
  templateUrl: './max-news.component.html',
  styleUrls: ['./max-news.component.css']
})
export class MaxNewsComponent {

  maximums = {
    private: 5,
    public: 5
  };

  constructor(private messageService: MessageService) { }

  submitPrivateForm() {
    this.messageService.setPrivateMax(JSON.stringify(this.maximums.private,null,2)).subscribe();
  }

  submitPublicForm() {
    this.messageService.setPublicMax(JSON.stringify([this.maximums.public],null,2)).subscribe();
  }

}
