import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'src/app/services/message-service/message-service.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css'],
})
export class AddProviderComponent implements OnInit {
  showArticleAttributeName = false;
  showParagraphAttributeName = false;
  showTopicAttributeName = false;
  showArticleValue = false;
  showParagraphValue = false;
  showTopicValue = false;

  error = "nothing";
  showChecks = false;

  provider = {
    webSite: '',
    webSiteName: '',

    usoArticulo: 'Article',
    tipoArticulo: '',
    attributeNameArticulo: '',
    valorArticulo: '',

    usoParrafo: 'FirstParagraph',
    tipoParrafo: '',
    attributeNameParrafo: '',
    valorParrafo: '',
  
    usoTopic: 'Topic',
    tipoTopic: '',
    attributeNameTopic: '',
    valorTopic: ''
  
};

// provider = {
//   webSite: 'https://www.antena3.com/noticias/',
//   webSiteName: 'Antena 3',

//   usoArticulo: 'Article',
//   tipoArticulo: 'Tag',
//   attributeNameArticulo: '',
//   valorArticulo: 'article',

//   usoParrafo: 'FirstParagraph',
//   tipoParrafo: 'Class',
//   attributeNameParrafo: '',
//   valorParrafo: 'article-main__description',

//   usoTopic: 'Topic',
//   tipoTopic: 'Class',
//   attributeNameTopic: '',
//   valorTopic: 'menu-main__link menu-main__link--level1'

// };

  constructor(private dialogRef: MatDialogRef<AddProviderComponent>,
    private messageService: MessageService,
    @Inject(MAT_DIALOG_DATA) public data: { serverID: string}) { }

  ngOnInit() {
    // this.toggleArticle(this.provider.tipoArticulo);
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
        this.showArticleValue = true;
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
        this.showParagraphValue = true;
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
        this.showTopicValue = true;
        break;
      default:
        this.showTopicValue = true;
        this.showTopicAttributeName = false;
        break;
    }
  }

  async submitForm() {
    
    var jsonProvider = JSON.stringify(this.provider,null,2)

    console.log(jsonProvider);



    try{
    await this.messageService.addProvider(this.data.serverID, jsonProvider);
    this.showChecks = true;
    this.dialogRef.close(true);
    }catch(err:any ){
      console.error('Error anadiendo proveedor', err);
      console.error(err.error)
      this.error = err.error
      this.showChecks = true;
    }
    
  }

}
