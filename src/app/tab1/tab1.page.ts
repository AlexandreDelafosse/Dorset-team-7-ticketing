import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  // eslint-disable-next-line @typescript-eslint/naming-convention
  More(){
    console.log('yes');
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Less(){
    console.log('no');
  }

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

}
