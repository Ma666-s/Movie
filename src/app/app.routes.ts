import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
    {path:"", redirectTo:"home", title:"Home", pathMatch:"full"},
    {path:"home", component:HomeComponent, title: "Home"},
    {path:"movies", component:MoviesComponent, title:"Movies"},
    {path:"**", redirectTo:"home", title:"Home"}
];
