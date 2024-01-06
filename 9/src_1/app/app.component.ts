import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { MyRevPipe } from './my-rev.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FirstComponent,MyRevPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo';
  public Name : string = "Marvellous";
}
