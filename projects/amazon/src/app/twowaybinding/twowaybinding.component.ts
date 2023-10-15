import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent {

  public productName="Samsung TV";
  public city="Delhi";
  public InStock=false;

  public product = {

    productName: '',
    city: '',
    InStock: false 

  };

  public updateProduct() {
    this.product = {
      productName: this.productName,
      city: this.city,
      InStock: this.InStock
    };
  }

}
