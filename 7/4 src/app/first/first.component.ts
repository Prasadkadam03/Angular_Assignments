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

  public Upper()
  {
    this.str =  this.str.toUpperCase();
  }
  public Lower()
  {
    this.str = this.str.toLowerCase();
  }


}
