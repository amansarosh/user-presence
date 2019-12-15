import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

const firebaseConfig = {
  apiKey: "AIzaSyDtWdNZ0V8xS7idW6FecFi-2Hy7EbJH5JQ",
  authDomain: "firelerts.firebaseapp.com",
  databaseURL: "https://firelerts.firebaseio.com",
  projectId: "firelerts",
  storageBucket: "firelerts.appspot.com",
  messagingSenderId: "858396027735",
  appId: "1:858396027735:web:2bafc0c5258c4e20f6ec12",
  measurementId: "G-XSYJLNTJB0"
};
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }