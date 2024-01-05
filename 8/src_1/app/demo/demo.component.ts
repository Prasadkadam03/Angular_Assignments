import { Component ,Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public Msg : string = "";

  @Output() public Sender = new EventEmitter();

  public SendMessage(value : string)
  {
      this.Sender.emit(value);
  }
}