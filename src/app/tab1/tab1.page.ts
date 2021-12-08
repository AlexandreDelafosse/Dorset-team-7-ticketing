import { Component } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore/"

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  item_qty: number;
  movieName:string;
  movieLink:string;
  movies:any[];

  constructor(public firestore: AngularFirestore) {

    this.onGetMovies()

  }

  // Get the movies from the database
  onGetMovies(){
    this.firestore.collection('movies').valueChanges()
    .subscribe(response => {
      this.movies = response;
      console.log(this.movies)
    })
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
