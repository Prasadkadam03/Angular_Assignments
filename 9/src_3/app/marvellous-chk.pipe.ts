import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any 
  { 
    let i : number = 0;
    if (args[0] == 'Prime')
    {
      for(i= 2; i <= value/2 ; i++)
      {
        if ((value % i) == 0)
        {
          return "It is not Prime"
        } 
      }
      return "It is prime"
    }

    if (args[0] == 'Perfect')
    {
      let temp : number = 0;
      for(i= 0; i <= value/2 ; i++)
      {
        if ((value % i) == 0)
        {
          temp = temp + i;
        } 
      }
      if (value == temp)
        return "It is Perfect";
      else
        return "It is not Perfect";

    } 

    if (args[0] == 'Even')
    {
      if ((value % 2) == 0)
        return "It is Even";
      else
        return "It is not Even";
    }
    if (args[0] == 'odd')
    {
      if ((value % 2) != 0)
        return "It is odd";
      else
        return "It is not odd";
    }
    return null;
  }

}
