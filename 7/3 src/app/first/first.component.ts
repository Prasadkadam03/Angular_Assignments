import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent 
{
  public str : string = "Marvellous Infosystems";

  public DisplayEvent()
  {
    this.str = "Educating Better Tommorrow";
  }

}
