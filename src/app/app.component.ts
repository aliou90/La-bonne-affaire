import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { DataService } from './data.service';
import { RouterModule } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, ArticleComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'La bonne affaire';  
  // secondes: number  = 0; 
  secondes: string  = ''; // Modifié pour l'opérateur map 
  // Création d'un objet de type Subscription pour stocker l'observable
  competeurSubscription: Subscription | undefined;
  
  // Opérateur avec l'Observer
  ngOnInit(): void {  
  // Utilisation de l'observable interval pour afficher le temps écoulé depuis le chargement de la page
  const compteur = interval(1000).pipe(
    filter(value => value % 2 === 0),
    map(value => value % 2 === 0 ?
      `${value} est paire` :
      `${value} est impaire`
    )
  );  
  compteur.subscribe({
      next: (v) => this.secondes = v,
      error: (e) => console.error('Erreur détectée : ' + e),
      complete: () => console.log('Observable complétée') 
    })
  }

  // Descrire l'observation lors de la destruction du composant
  ngOnDestroy() {
    // Désactiver l'observable
    this.competeurSubscription?.unsubscribe;
  }
}