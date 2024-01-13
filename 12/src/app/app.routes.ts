import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BugInfoComponent } from './bug-info/bug-info.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { FooterComponent } from './footer/footer.component';


export const routes: Routes = [
    {path : 'Header' ,component: HeaderComponent},
    {path: ' BugInfo' , component:BugInfoComponent },
    {path: ' PersonInfo' , component:PersonInfoComponent },
    {path: ' Footer' , component: FooterComponent}

];
