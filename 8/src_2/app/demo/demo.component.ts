import { Component ,Output ,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  @Input()  public Reciever : any;
  
  public Msg : string = "";
  @Output() public Sender = new EventEmitter();
  public SendMessage(value : string)
  {
      this.Sender.emit(value);
  }
}