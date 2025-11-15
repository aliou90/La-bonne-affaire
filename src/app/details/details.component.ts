import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [RouterModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  getedArticleId: number | undefined;
  getedArticleTitre: string | undefined;
  getedArticlePrix: number | undefined;
  getedArticleImageSrc: string | undefined;
  getedArticleImageAltText: string | undefined;
  getedArticleDisponible: boolean | undefined;
  getedArticleLike: boolean | undefined;
  getedArticleTotalLikes: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    // Récupérer et convertir l'ID de l'article depuis les paramètres d'URL
    const id = Number(this.route.snapshot.params['id']);
    const article = this.dataService.getArticleById(id);
    if (article) {
      this.getedArticleId = article.id;
      this.getedArticleTitre = article.titre;
      this.getedArticlePrix = article.prix;
      this.getedArticleImageSrc = article.imageSrc;
      this.getedArticleImageAltText = article.imageAltText;
      this.getedArticleDisponible = article.disponible;
      this.getedArticleLike = article.like;
      this.getedArticleTotalLikes = article.totalLikes;
    }
  }

  // Méthode pour gérer les likes
  onLike(like: any) {
    if (like) {
      this.getedArticleTotalLikes!++;
      this.getedArticleLike = true;
    } else {
      this.getedArticleTotalLikes!--;
      this.getedArticleLike = false;
    }
  }

}
