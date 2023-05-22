import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newsData: any;

  constructor(private newsService: NewsService) {
    this.loadNews();
  }
  loadNews() {
    this.newsService.getNews().subscribe(data => {
      this.newsData = data.articles;
    });
  }
}
