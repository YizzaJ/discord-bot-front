import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message-service/message-service.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {
  showArticleAttributeName = false;
  showParagraphAttributeName = false;
  showTopicAttributeName = false;

  website = {
    webSite: 'https://www.antena3.com/noticias/'
  };
  article = {
    use: 'Article',
    type: 'Tag',
    attributeName: '',
    value: 'article'
  };
  paragraph = {
    use: 'FirstParagraph',
    type: 't2',
    attributeName: 'a2',
    value: 'v2'
  };
  topic = {
    use: 'Topic',
    type: 't3',
    attributeName: 'a3',
    value: 'v3'
  };

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }
  toggleAttributeName(category: string) {
    switch (category) {
      case "article":
        this.showArticleAttributeName = !this.showArticleAttributeName;
        break;
      case "paragraph":
        this.showParagraphAttributeName = !this.showParagraphAttributeName;
        break;
      case "topic":
        this.showTopicAttributeName = !this.showTopicAttributeName;
        break;
      default:
        break;
    }
  }


  submitForm() {
    console.log(JSON.stringify([[this.website, [this.article],[ this.paragraph], [this.topic]]],null,2));
    this.messageService.addProvider(JSON.stringify([[this.website, [this.article],[ this.paragraph], [this.topic]]],null,2)).subscribe();
  }
}
