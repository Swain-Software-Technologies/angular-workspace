import { Component } from '@angular/core';

@Component({
  selector: 'app-directivespoc',
  templateUrl: './angularcontainer.component.html',
  styleUrls: ['./directivespoc.component.css']
})
export class DirectivespocComponent {

  public product = {
    productName: 'Campus',
    productPrice: 4500.56,
    photo: 'assets/images/shoes.jpg' 
  };

 public showImage=true;
 
 public btnText='Hide';

 public instock=true;

  public togglePreview(){
    this.showImage = (this.showImage==false) ? true : false;
    this.btnText = (this.btnText=='Show') ? 'Hide' : 'Show';
  };

}
