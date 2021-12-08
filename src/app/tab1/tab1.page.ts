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
  price: number;
  movies: any[];
  selectMovie: string;
  selectHour: string;

  constructor(public firestore: AngularFirestore) {

    this.onGetMovies()
    this.item_adult_qty = 0;
    this.item_qty = 0;
    this.item_child_qty = 0;
    this.price = 0;
  }

  // Get the movies from the database
  onGetMovies() {
    this.firestore.collection('movies').valueChanges()
      .subscribe(response => {
        this.movies = response;
        console.log(this.movies)
      })
  }

  incrementAdultQty() {

    if (this.item_adult_qty < 5  && this.item_qty < 5) {
      this.item_adult_qty += 1;
      this.item_qty += 1;
      this.priceCalc()
      this.familyPromotion()
    }
  }

  //decrements item

  decrementAdultQty() {

    if (this.item_adult_qty > 0) {
      this.item_adult_qty -= 1;
      this.item_qty -= 1;
      this.price -= 10;
      this.priceCalc()
      this.familyPromotion()
    }
  }

  incrementChildQty() {

    if (this.item_child_qty < 5  && this.item_qty < 5) {
      this.item_child_qty += 1;
      this.item_qty += 1;
      this.price += 7;
      this.priceCalc()
      this.familyPromotion()
    }
  }

  //decrements item

  decrementChildQty() {

    if (this.item_child_qty > 0) {
      this.item_child_qty -= 1;
      this.item_qty -= 1;
      this.price -= 7;
      this.priceCalc()
      this.familyPromotion()
    }
  }

  priceCalc() {
    this.price = this.item_adult_qty * 10 + this.item_child_qty * 7
  }

  familyPromotion(){
    if(this.item_adult_qty === 2 && this.item_child_qty === 2){
      this.price = 30;
    }
  }

  closeBook() {
    document.getElementById('book').style.display = 'none';
  }

  select(movieHour, movieTitle) {
    document.getElementById('book').style.display = 'block';
    this.selectHour = movieHour
    this.selectMovie = movieTitle
  }
}
