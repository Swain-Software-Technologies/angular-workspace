// This all about inline documentation technique for defining the component. Eperything is avaiable in single class file i.e html, CSS & Logic


import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    template: `<h2>Welcome To Vivah</h2>
    <div id='home'>{{premiumOffer}}</div>
                <p>You can find our bettter life partner from here</p>`,
    styles: ['h2{text-align: center; color: darkcyan}', '#div{border: 2px solid darkcyan; border=radius: 20px}'],           
})
export class HomeComponent {

    public premiumOffer = "If ou register in our portal before August 30. Then you will get a voucher for premium user ";
}