import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() { }

  public colors() {

    let choix = true;
    let button = document.getElementById('A1');
    
    if (choix == true) {
      button.style.color = "red";
      choix = false;
    } 
    
    else {
      button.style.backgroundColor = "green";
      choix = true;
    }
    
    console.log('ok')
    
  }

}
