import { Component } from '@angular/core';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-bug-info',
  standalone: true,
  imports: [BsDatepickerModule],
  templateUrl: './bug-info.component.html',
  styleUrl: './bug-info.component.css'
})
export class BugInfoComponent {

}
