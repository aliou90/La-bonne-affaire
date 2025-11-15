import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../data.service';
// import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // Input : tableau d'articles
  // @Input() articles: {
  //   titre: string;
  //   prix: number;
  //   imageSrc: string;
  //   imageAltText: string;
  //   disponible: boolean;
  //   like: boolean;
  //   totalLikes: number;
  // }[] = [];

  // Var pour la récupération depuis dataService
  articles: Array<any> = [];

  constructor(private dataService: DataService) {}

  // // Appel de getListFromServer() data.service.ts
  // getList() {
  //   this.dataService.getListFromServer().subscribe(articles => {this.articles === articles});
  // }

   // Méthode pour ngStyle - Retourne le style en fonction de la disponibilité
  getAvailabilityStyle(arg: boolean) {
    if (arg) {
      return "green";
    } else {
      return "red";
    }
  }

  ngOnInit() {
    this.articles = this.dataService.articleDatas;
    // this.getList();
  }

  // Méthode pour gérer les likes
  onLike(article: any, like: boolean) {
    if (like) {
      article['totalLikes']++;
      article['like'] = true;
    } else {
      article['totalLikes']--;
      article['like'] = false;
    }
  }
}
