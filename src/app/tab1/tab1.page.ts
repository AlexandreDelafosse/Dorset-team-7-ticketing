import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  item_qty: number;

  constructor() {}

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public Shang() {

    document.getElementById('myDIV2').style.display = 'block';
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public ST() {

    document.getElementById('myDIV4').style.display = 'block';
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public Flat() {

    document.getElementById('myDIV6').style.display = 'block';
  }

  incrementQty(){
    this.item_qty += 1;
    console.log(this.item_qty + 1);
    }

    //decrements item

    decrementQty(){
    if(this.item_qty-1 < 1){
      this.item_qty = 1;
    }
    else{
      this.item_qty -= 1;
    }
    }

}
