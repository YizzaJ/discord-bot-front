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
  showArticleValue = false;
  showParagraphValue = false;
  showTopicValue = false;

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

  toggleArticle(category: string) {
    switch (category) {
      case "":
        this.showArticleValue = false;
        this.showArticleAttributeName = false;
        this.article.value = "";
        break;
      case "Attribute":
        this.showArticleAttributeName = true;
        break;
      default:
        this.showArticleValue = true;
        this.showArticleAttributeName = false;
        break;
    }
  }
  toggleParagraph(category: string) {
    switch (category) {
      case "":
        this.showParagraphValue = false;
        this.showParagraphAttributeName = false;
        this.article.value = "";
        break;
      case "Attribute":
        this.showParagraphAttributeName = true;
        break;
      default:
        this.showParagraphValue = true;
        this.showParagraphAttributeName = false;
        break;
    }
  }
  toggleTopic(category: string) {
    switch (category) {
      case "":
        this.showTopicValue = false;
        this.showTopicAttributeName = false;
        this.article.value = "";
        break;
      case "Attribute":
        this.showTopicAttributeName = true;
        break;
      default:
        this.showTopicValue = true;
        this.showTopicAttributeName = false;
        break;
    }
  }
  
  toggleAttributeName(category: string) {

  }




  submitForm() {
    console.log(JSON.stringify([[this.website, [this.article],[ this.paragraph], [this.topic]]],null,2));
    this.messageService.addProvider(JSON.stringify([[this.website, this.websiteName, [this.article],[ this.paragraph], [this.topic]]],null,2)).subscribe();
  }
}
