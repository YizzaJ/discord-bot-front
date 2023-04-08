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
        break;
    }
  }

}
