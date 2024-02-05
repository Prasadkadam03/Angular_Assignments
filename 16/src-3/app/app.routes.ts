import { Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';

export const routes: Routes = [
    {path: '' ,component:HomeComponent},
    {path : 'technologies' ,component:TechnologiesComponent},
    {path : 'books' ,component:BooksComponent},
    {path : '**' ,component:InvalidPageComponent}
];
