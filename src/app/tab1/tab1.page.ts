import { Component } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore/"
import * as $ from 'jquery'
import { ResumeService } from '../resume.service';

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
  isFamilyPromotion: boolean;

  constructor(public firestore: AngularFirestore, private resumeService: ResumeService) {

    this.onGetMovies()
    this.item_adult_qty = 0;
    this.item_qty = 0;
    this.item_child_qty = 0;
    this.price = 0;
    this.isFamilyPromotion = false;
    this.hideBar()
  }

  hideBar() {
    $('ion-tab-bar').hide()
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

    if (this.item_adult_qty < 5) {
      this.item_adult_qty += 1;
      this.item_qty += 1;
      this.priceCalc()
      this.familyPromotion()
      this.actualizeNbPlaceService()
      this.actualizePriceService()
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
      this.actualizeNbPlaceService()
      this.actualizePriceService()
    }
  }

  incrementChildQty() {

    if (this.item_child_qty < 4) {
      this.item_child_qty += 1;
      this.item_qty += 1;
      this.price += 7;
      this.priceCalc()
      this.familyPromotion()
      this.actualizeNbPlaceService()
      this.actualizePriceService()
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
      this.actualizeNbPlaceService()
      this.actualizePriceService()
    }
  }

  priceCalc() {
    this.price = this.item_adult_qty * 10 + this.item_child_qty * 7
  }

  familyPromotion(){
    if(this.item_adult_qty === 2 && this.item_child_qty === 4){
      this.price = 40;
      this.isFamilyPromotion = true;
    } else {
      this.isFamilyPromotion = false;
    }
  }

  closeBook() {
    document.getElementById('book').style.display = 'none';
  }

  select(movieHour, movieTitle) {
    document.getElementById('book').style.display = 'block';
    this.selectHour = movieHour
    this.selectMovie = movieTitle
    this.actualizeMovieService()
    this.actualizeHourService()
  }

  actualizeMovieService() {
    this.resumeService.addMovie(this.selectMovie)
  }

  actualizeHourService() {
    this.resumeService.addHour(this.selectHour)
  }

  actualizeNbPlaceService() {
    this.resumeService.addNbSitTaken(this.item_qty)
  }

  actualizePriceService() {
    this.resumeService.addPrice(this.price)
  }
}
