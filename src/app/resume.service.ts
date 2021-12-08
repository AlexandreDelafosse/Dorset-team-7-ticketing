import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  resume: any[]

  constructor() {

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

  getAll() {
    return this.resume
  }

  addMovie(e) {
    this.resume[0].movie = e
  }

  addHour(e) {
    this.resume[0].hour = e
  }

  addPrice(e) {
    this.resume[0].price = e
  }

  addNbSitTaken(e) {
    this.resume[0].nbSitTaken = e
  }

  addSitTaken(e) {
    this.resume[0].sitTaken = e
  }

  addFirstName(e) {
    this.resume[0].firstName = e
  }

  addLastName(e) {
    this.resume[0].lastName = e
  }

  addEmail(e) {
    this.resume[0].email = e
  }
}
