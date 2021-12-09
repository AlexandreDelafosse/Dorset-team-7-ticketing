import { Component } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore/"
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  resume: any[]
  selectedMovie: string
  selectedHour: string
  price: number
  place: any[]
  firstName: string
  lastName: string
  email: string

  constructor(public firestore: AngularFirestore, private resumeService: ResumeService) {
    this.getAllInfo()
  }

  // Alert for the success booked
  public async presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Confirmed !';
    alert.message = 'Yours seats have been booked ! You will receive an email with a QR code of your seats';
    alert.buttons = ['OK'];


    document.body.appendChild(alert);
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);

    window.location.href='/tabs/tab1';

  }

  // Get all the info from the service
  // The info from the two components before
  getAllInfo() {
    this.resume = this.resumeService.getAll();
    console.log(this.resume)
    this.selectedMovie = this.resume[0].movie
    this.selectedHour = this.resume[0].hour
    this.price = this.resume[0].price
    this.place = this.resume[0].sitTaken
  }

  // Send all the service info to the database
  addInfo(){
    this.resumeService.addFirstName(this.firstName)
    this.resumeService.addLastName(this.lastName)
    this.resumeService.addEmail(this.email)
    let rf = this.resumeService.getAll()

    this.firestore.collection('reservation').add({
    	firstName: rf[0].firstName,
      lastName: rf[0].lastName,
      email: rf[0].email,
      movie: rf[0].movie,
      hour: rf[0].hour,
      nbSitTaken: rf[0].nbSitTaken,
      price: rf[0].price,
      sitTaken: rf[0].sitTaken
    });
  }

}
