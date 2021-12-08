import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat/';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';

const firebaseConfig = {
  apiKey: "AIzaSyCIZ79X39JxBBiDxUlc12zv08Ujbpi_mfc",
  authDomain: "ticketing-6ad1e.firebaseapp.com",
  projectId: "ticketing-6ad1e",
  storageBucket: "ticketing-6ad1e.appspot.com",
  messagingSenderId: "20890478415",
  appId: "1:20890478415:web:a7c0c7f5208f438effc73a"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
