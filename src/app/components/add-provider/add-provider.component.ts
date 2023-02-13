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
  websiteName = {
    webSiteName: 'Antena 3'
  };
  article = {
    use: 'Article',
    type: 'Tag',
    attributeName: '',
    value: 'article'
  };
  paragraph = {
    use: 'FirstParagraph',
    type: 'Class',
    attributeName: '',
    value: 'article-main__description'
  };
  topic = {
    use: 'Topic',
    type: 'Class',
    attributeName: '',
    value: 'menu-main__link menu-main__link--level1'
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
    this.messageService.addProvider(JSON.stringify([[this.website, this.websiteName, [this.article],[ this.paragraph], [this.topic]]],null,2)).subscribe();
  }
}
