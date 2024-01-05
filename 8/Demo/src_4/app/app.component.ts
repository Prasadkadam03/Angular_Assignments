import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public str : string = "";
  public Len : any ;

  public Event(Event : any)
  { 
      this.str = Event.target.value;
      this.Len = this.str.length;
  }

}
