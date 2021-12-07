import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  public myFunction() {

    alert("Yours seats have been booked ! You will receive an email with a QR code of your seats");
  }

}
