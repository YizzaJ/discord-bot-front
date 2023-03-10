import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'src/app/services/message-service/message-service.service';

@Component({
  selector: 'app-modify-provider',
  templateUrl: './modify-provider.component.html',
  styleUrls: ['./modify-provider.component.css']
})
export class ModifyProviderComponent implements OnInit {
  provider: any;
  showArticleAttributeName = false;
  showParagraphAttributeName = false;
  showTopicAttributeName = false;
  showArticleValue = false;
  showParagraphValue = false;
  showTopicValue = false;


  newProvider = {
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



  constructor(private dialogRef: MatDialogRef<ModifyProviderComponent>,
    private messageService: MessageService,
    @Inject(MAT_DIALOG_DATA) public data: { serverID: string, provider: any }) {
    this.provider = data.provider;

}




  ngOnInit() {
    this.newProvider.webSite = this.data.provider.webSite;
    this.newProvider.webSiteName = this.data.provider.webSiteName,
    this.newProvider.usoArticulo = 'Article',
    this.newProvider.tipoArticulo =  this.data.provider.tipoArticulo,
    this.newProvider.attributeNameArticulo =  this.data.provider.attributeNameArticulo,
    this.newProvider.valorArticulo =  this.data.provider.valorArticulo,
    this.newProvider.usoParrafo =  'FirstParagraph',
    this.newProvider.tipoParrafo =  this.data.provider.tipoParrafo,
    this.newProvider.attributeNameParrafo = this.data.provider.attributeNameParrafo,
    this.newProvider.valorParrafo =  this.data.provider.valorParrafo,
    this.newProvider.usoTopic =  'Topic',
    this.newProvider.tipoTopic =  this.data.provider.tipoTopic,
    this.newProvider.attributeNameTopic =  this.data.provider.attributeNameTopic,
    this.newProvider.valorTopic =  this.data.provider.valorTopic
  }

  toggleArticle(category: string) {
    switch (category) {
      case "":
        this.showArticleValue = false;
        this.showArticleAttributeName = false;
        this.newProvider.valorArticulo = "";
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
        this.newProvider.valorParrafo = "";
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
        this.newProvider.valorTopic = "";
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
    this.dialogRef.close(true);

    var jsonProvider = JSON.stringify(this.newProvider, null, 2)

    console.log(jsonProvider);

    this.messageService.modifyProvider(this.data.serverID, jsonProvider).subscribe();
  }
}
