import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message-service/message-service.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {

  website = {
    link: 'websiteA'
  };
  article = {
    use: 'u1',
    type: 't1',
    attribute: 'a1',
    value: 'v1'
  };
  paragraph = {
    use: 'u2',
    type: 't2',
    attribute: 'a2',
    value: 'v2'
  };
  topic = {
    use: 'u3',
    type: 't3',
    attribute: 'a3',
    value: 'v3'
  };

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  submitForm() {
    const data = {
      website: this.website,
      article: this.article,
      paragraph: this.paragraph,
      topic: this.topic
    };
    console.log(JSON.stringify(data));
    this.messageService.addProvider(JSON.stringify(data)).subscribe();
  }
}
