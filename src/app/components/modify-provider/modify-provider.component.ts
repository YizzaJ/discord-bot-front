import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
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

  error = "nothing";
  showChecks = false;

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

  constructor(private router: Router,
    private dialogRef: MatDialogRef<ModifyProviderComponent>,
    private messageService: MessageService,
    @Inject(MAT_DIALOG_DATA) public data: { serverID: string, provider: any }) {
    this.provider = data.provider;

  }

  openHelp() {
    const url = this.router.createUrlTree(['/help']);
    window.open(url.toString(), '_blank');
  }

  ngOnInit() {
    this.newProvider.webSite = this.data.provider.webSite;
    this.newProvider.webSiteName = this.data.provider.webSiteName,
      this.newProvider.usoArticulo = 'Article',
      this.newProvider.tipoArticulo = this.data.provider.tipoArticulo,
      this.newProvider.attributeNameArticulo = this.data.provider.attributeNameArticulo,
      this.newProvider.valorArticulo = this.data.provider.valorArticulo,
      this.newProvider.usoParrafo = 'FirstParagraph',
      this.newProvider.tipoParrafo = this.data.provider.tipoParrafo,
      this.newProvider.attributeNameParrafo = this.data.provider.attributeNameParrafo,
      this.newProvider.valorParrafo = this.data.provider.valorParrafo,
      this.newProvider.usoTopic = 'Topic',
      this.newProvider.tipoTopic = this.data.provider.tipoTopic,
      this.newProvider.attributeNameTopic = this.data.provider.attributeNameTopic,
      this.newProvider.valorTopic = this.data.provider.valorTopic

    this.toggleArticle(this.newProvider.tipoArticulo);
    this.toggleParagraph(this.newProvider.tipoParrafo);
    this.toggleTopic(this.newProvider.tipoTopic);
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

  toggleAttributeName(category: string) {

  }

  async submitForm() {

    var jsonProvider = JSON.stringify(this.provider, null, 2)
    
    try {
      await this.messageService.modifyProvider(this.data.serverID, jsonProvider);
      this.showChecks = true;
      this.dialogRef.close(true);
    } catch (err: any) {
      console.error('Error modificando proveedor', err);
      console.error(err.error)
      this.error = err.error
      this.showChecks = true;
    }

  }
}
