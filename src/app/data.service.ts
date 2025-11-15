import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // // DEPUIS UN SERVEUR HTTP DISTANT
  // // Liste d'articles vide
  // articleDatas: any = []
  // // Initialisation et récupération de HttpĈlient
  // constructor(private httpClient: HttpClient) {}
  // // Fonction pour se connecter à la BD et récupérer les données avec GET
  // getListFromServer() {
  //   return this.httpClient.get<any[]>("https://console.firebase.google.com/project/labonneaffaire-e0cba/database/labonneaffaire-e0cba-default-rtdb/data/~2F");
  // }
  // // Méthode pour récupérer un article par son ID
  // getArticleById(id: number) {
  //   const article = this.articleDatas.find((a: any) => {
  //     return a.id === id;
  //   });
  //   return article;
  // }

  // DEPUIS NOTRE LISTE (EN BAS)
  // Tableau d'articles dynamiques
  articleDatas = [
    {
      id: 1,
      titre: 'Jouets',
      prix: 12.99,
      imageSrc: 'assets/images/jouets.jpeg',
      imageAltText: 'Image Jouets',
      disponible: true,
      like: false,
      totalLikes: 0
    },
    {
      id: 2,
      titre: 'Vêtements',
      prix: 23.49,
      imageSrc: 'assets/images/vetements.jpeg',
      imageAltText: 'Image Vêtements',
      disponible: false,
      like: false,
      totalLikes: 0
    },
    {
      id: 3,
      titre: 'Électronique',
      prix: 34.75,
      imageSrc: 'assets/images/electronique.jpeg',
      imageAltText: 'Image Électronique',
      disponible: true,
      like: false,
      totalLikes: 0
    }
  ];

// Méthode pour récupérer un article par son ID
getArticleById(id: number) {
  const article = this.articleDatas.find((a) => {
    return a.id === id;
  });
  return article;
}

}

