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
    console.log(JSON.stringify([this.maximums.private],null,2));
    this.messageService.setPrivateMax(JSON.stringify(this.maximums.private,null,2)).subscribe();
  }

  submitPublicForm() {
    console.log(JSON.stringify([this.maximums.public],null,2));
    this.messageService.setPublicMax(JSON.stringify([this.maximums.public],null,2)).subscribe();
  }

}
