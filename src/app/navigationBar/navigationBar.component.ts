import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigationBar.component.html',
  styleUrls: ['./navigationBar.component.scss']
})
export class NavigationBar implements OnInit {

  tabContent = 'HOME PAGE';

  ngOnInit() {
  }

  showContent(tab) {
    switch (tab) {
      case 'home': {
        this.tabContent = 'HOME PAGE';
        break;
      }
      case 'about': {
        this.tabContent = 'ABOUT PAGE';
        break;
      }
      case 'news': {
        this.tabContent = 'NEWS PAGE';
        break;
      }
      case 'contact': {
        this.tabContent = 'CONTACT PAGE';
        break;
      }
      default: {
        this.tabContent = 'HOME PAGE';
      }
    }
  }

}