import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProfileComponent} from './profile/profile.component';
import {ProjectComponent} from './project/project.component';
import {ExperienceComponent} from './experience/experience.component';
import {BiographyComponent} from './biography/biography.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'biography', component: BiographyComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
