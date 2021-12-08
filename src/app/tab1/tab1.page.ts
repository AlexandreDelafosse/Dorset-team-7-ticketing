import {
  Component
} from '@angular/core';
import {
  AngularFirestore
} from "@angular/fire/compat/firestore/"

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  item_adult_qty: number;
  item_child_qty: number;
  item_qty: number;
  movies: any[];

  constructor(public firestore: AngularFirestore) {

    this.onGetMovies()
    this.item_adult_qty = 0;
    this.item_qty = 0;
    this.item_child_qty = 0;

  }

  // Get the movies from the database
  onGetMovies() {
    this.firestore.collection('movies').valueChanges()
      .subscribe(response => {
        this.movies = response;
        console.log(this.movies)
      })
  }

  public Shang() {
    document.getElementById('book').style.display = 'block';
  }

  incrementAdultQty() {

    if (this.item_adult_qty < 5  && this.item_qty < 5) {
      this.item_adult_qty += 1;
      this.item_qty += 1;
    }
  }

  //decrements item

  decrementAdultQty() {

    if (this.item_adult_qty > 0) {
      this.item_adult_qty -= 1;
      this.item_qty -= 1;
    }
  }

  incrementChildQty() {

    if (this.item_child_qty < 5  && this.item_qty < 5) {
      this.item_child_qty += 1;
      this.item_qty += 1;
    }
  }

  //decrements item

  decrementChildQty() {

    if (this.item_child_qty > 0) {
      this.item_child_qty -= 1;
      this.item_qty -= 1;
    }
  }

}
