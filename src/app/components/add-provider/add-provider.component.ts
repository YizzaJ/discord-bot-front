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

  provider = {
    webSite: 'https://www.antena3.com/noticias/',
    webSiteName: 'Antena 3',

    usoArticulo: 'Article',
    tipoArticulo: 'Tag',
    attributeNameArticulo: '',
    valorArticulo: 'article',

    usoParrafo: 'FirstParagraph',
    tipoParrafo: 'Class',
    attributeNameParrafo: '',
    valorParrafo: 'article-main__description',
  
    usoTopic: 'Topic',
    tipoTopic: 'Class',
    attributeNameTopic: '',
    valorTopic: 'menu-main__link menu-main__link--level1'
  
};

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  toggleArticle(category: string) {
    switch (category) {
      case "":
        this.showArticleValue = false;
        this.showArticleAttributeName = false;
        this.provider.valorArticulo = "";
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
        this.provider.valorParrafo = "";
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
        this.provider.valorTopic = "";
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



    var jsonProvider = JSON.stringify(this.provider,null,2)

    console.log(jsonProvider);

    this.messageService.addProvider(jsonProvider).subscribe();
  }
}
