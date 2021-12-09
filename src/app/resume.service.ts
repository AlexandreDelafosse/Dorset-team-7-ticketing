import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore/"

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  resume: any[]
  reservation: any[]

  constructor(public firestore: AngularFirestore) {

    this.resume = [{
      movie: "Movie",
      hour: "15:30",
      price: 20,
      nbSitTaken: 5,
      sitTaken: [],
      firstName: "Thierry",
      lastName: "Rolland",
      email: "email@email.com"
    }]

  }

  // Return all the info from resume
  getAll() {
    return this.resume
  }

  // Change the data of the movie
  addMovie(e) {
    this.resume[0].movie = e
  }

  // Change the data of the hour
  addHour(e) {
    this.resume[0].hour = e
  }
  // Change the data of the price
  addPrice(e) {
    this.resume[0].price = e
  }

  // Change the data of the number of sit taken
  addNbSitTaken(e) {
    this.resume[0].nbSitTaken = e
  }

  // Change the data of the sit taken
  addSitTaken(e) {
    this.resume[0].sitTaken = e
  }

  // Change the data of the firstname
  addFirstName(e) {
    this.resume[0].firstName = e
  }

  // Change the data of the lastname
  addLastName(e) {
    this.resume[0].lastName = e
  }

  // Change the data of the email
  addEmail(e) {
    this.resume[0].email = e
  }

  // Get all the reservation in the database
  allReservation() {
    this.firestore.collection('reservation').valueChanges()
      .subscribe(response => {
        this.reservation = response;
        console.log(this.reservation)
      })
  }
}
