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
  img: string
  movies: any[];
  selectMovie: string;
  selectHour: string;
  isFamilyPromotion: boolean;

  constructor(public firestore: AngularFirestore, private resumeService: ResumeService) {

    this.onGetMovies()
    this.hideBar()
    this.item_adult_qty = 0;
    this.item_qty = 0;
    this.item_child_qty = 0;
    this.price = 0;
    this.isFamilyPromotion = false;

  }

  // Hide the ionic tab bar
  hideBar() {
    $('ion-tab-bar').hide()
  }

  // Get the movies from the database
  onGetMovies() {
    this.firestore.collection('movies').valueChanges()
      .subscribe(response => {
        this.movies = response;
      })
  }

  // Increment the number of adult place
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

  // Decrement the number of adult place
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

  // Increment the number of child place
  incrementChildQty() {
    if (this.item_child_qty < 4 && this.item_adult_qty > 0) {
      this.item_child_qty += 1;
      this.item_qty += 1;
      this.price += 7;
      this.priceCalc()
      this.familyPromotion()
      this.actualizeNbPlaceService()
      this.actualizePriceService()
    }
  }

  // Increment the number of child place
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

  // Calcul of the price
  priceCalc() {
    if(this.item_adult_qty === 0 ) {
      this.item_child_qty = 0
      this.item_qty = 0
    }
    this.price = this.item_adult_qty * 10 + this.item_child_qty * 7
  }

  // Check if there is the familly promotion
  familyPromotion(){
    if(this.item_adult_qty === 2 && this.item_child_qty === 4){
      this.price = 40;
      this.isFamilyPromotion = true;
    } else {
      this.isFamilyPromotion = false;
    }
  }

  // Close the pop-up for choosing number of seat
  closeBook() {
    document.getElementById('book').style.display = 'none';
  }

  // Get the movie and the hour selected
  // And update them to the service "Resume"
  select(movieHour, movieTitle) {
    document.getElementById('book').style.display = 'block';
    this.selectHour = movieHour
    this.selectMovie = movieTitle
    this.actualizeMovieService()
    this.actualizeHourService()
  }

  // Update the data for the movie in the service
  actualizeMovieService() {
    this.resumeService.addMovie(this.selectMovie)
  }

  // Update the data for the hour in the service
  actualizeHourService() {
    this.resumeService.addHour(this.selectHour)
  }

  // Update the data for the number of place in the service
  actualizeNbPlaceService() {
    this.resumeService.addNbSitTaken(this.item_qty)
  }

  // Update the data for the price in the service
  actualizePriceService() {
    this.resumeService.addPrice(this.price)
  }
}
