import { Component } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore/"
import * as $ from 'jquery'
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public sitTaken: number[];
  public reservation: any[];
  selectMovie: string;
  selecthour: string;
  selectSit: number[];
  hundred: any[];
  nbSitTaken: number;
  maxNbSitTaken: number;
  sitHaveToTake: number;
  resume: any[]

  constructor(public firestore: AngularFirestore, private resumeService: ResumeService) {

    this.getAllInfo()
    this.checkTaken()
    this.hundred = [1,2,3,4,5,6,7,8,9,10]
    this.nbSitTaken = 0
    this.selectSit = []
    this.sitHaveToTake = this.maxNbSitTaken
    this.hideBar()
  }

  hideBar() {
    $('ion-tab-bar').hide()
  }

  getAllInfo() {
    this.resume = this.resumeService.getAll();
    console.log(this.resume[0].nbSitTaken)
    this.maxNbSitTaken = this.resume[0].nbSitTaken
  }

  checkTaken(){
    this.firestore.collection('reservation')
      .valueChanges()
      .subscribe(response => {
        this.reservation = response;
        console.log(this.reservation)
      })

    // setTimeout(() => {
    //   this.reservation.forEach(movie => {
    //     // if(movie.movie === "E.T" && movie.hour === "10:30") {
    //     //   movie.sit.forEach(sit => {
    //     //     this.sitTaken.push(sit)
    //     //   });
    //     // }

    //     movie.sit.forEach(element => {

    //     });
    //   });
    // }, 3000);

  }


  verif(i) {
    this.sitTaken.forEach(e => {
      if(i == e) {
        return true
      } else {
        return false
      }
    })
  }

  verifq(i){
    this.sitTaken.forEach(e => {
      if(i == e) {
        console.log('no')
      } else {
        this.selectSit.push(i)
        console.log(this.selectSit)
      }
    })
  }

  toggleClassTest(i) {
    if($("." + i).attr('class') === i + " buttonseat" && this.nbSitTaken < this.maxNbSitTaken) {
      this.nbSitTaken += 1
      this.selectSit.push(i)
      this.actualizeService()
      this.sitHaveToTake = this.maxNbSitTaken - this.selectSit.length
      $("." + i).removeClass('buttonseat').addClass('selected')
    } else if ($("." + i).attr('class') === i + " selected" && this.nbSitTaken >= 0) {
      this.nbSitTaken -= 1
      $("." + i).removeClass('selected').addClass('buttonseat')
      this.selectSit = this.selectSit.filter(function(f) { return f !== i })
      this.actualizeService()
      this.sitHaveToTake = this.maxNbSitTaken - this.selectSit.length
    } else {
      console.log('no')
    }
  }

  actualizeService() {
    this.resumeService.addSitTaken(this.selectSit)
  }

}
