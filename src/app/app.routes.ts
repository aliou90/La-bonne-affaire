import { Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { DetailsComponent } from './details/details.component';
import { ArticleComponent } from './article/article.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddComponent } from './add/add.component';

export const routes: Routes = [
    { path: '', component: ArticleComponent },
    { path: 'article', redirectTo: '', pathMatch: 'full' },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: 'ajouter', component: AddComponent },
    { path: '**', component: PagenotfoundComponent }
];
