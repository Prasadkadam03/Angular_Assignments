import { Component } from '@angular/core';

@Component({
  selector: 'app-person-info',
  standalone: true,
  imports: [],
  templateUrl: './person-info.component.html',
  styleUrl: './person-info.component.css'
})
export class PersonInfoComponent {

    public Name :string = "";
    public FirstName :string = "";
    public LastName :string = "";
    public Email :string = "";
    



}
