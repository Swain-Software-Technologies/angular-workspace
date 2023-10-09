import { Component } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent {

  public Product = {
    Name: 'Samsung TV',
    price: 40000
  }

  public disabledButton=false;

  public tableWidth=400;
  public tableHeight=100;

}
