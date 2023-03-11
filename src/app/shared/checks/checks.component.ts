import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checks',
  templateUrl: './checks.component.html',
  styleUrls: ['./checks.component.css']
})
export class ChecksComponent implements OnInit {
  @Input() error = "nothing";

  link = false;
  article = false;
  paragraph = false;
  topic = false;


  ngOnInit() {
    console.log(this.error)
    switch (this.error) {
      case 'topic':
        this.topic = true;

        break;
      case 'paragraph':
        this.paragraph = true;

        break;
      case 'article':
        this.article = true;

        break;
      case 'link':
        this.link = true;

        console.log("caso link")
        break;
    }
  }


  // get isLink(): boolean {
  //   const is = this.error === 'link'
  //   if (is)
  //     this.error = 'nothing'
  //   return is;
  // }

  // get isArticle(): boolean {
  //   const is = this.error === 'article'
  //   if (is)
  //     this.error = 'nothing'
  //   return is;
  // }

  // get isParagraph(): boolean {
  //   const is = this.error === 'paragraph'
  //   if (is)
  //     this.error = 'nothing'
  //   return is;;
  // }

  // get isTopic(): boolean {
  //   const is = this.error === 'error'
  //   if (is)
  //     this.error = 'nothing'
  //   return is;
  // }
}
