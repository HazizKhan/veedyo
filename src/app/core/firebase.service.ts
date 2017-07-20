import { Injectable } from '@angular/core';
import * as Firebase from 'firebase';

@Injectable()
export class FirebaseService {
  app = Firebase.initializeApp({
    apiKey: 'AIzaSyBAGEq0YGeWN7Wq0QvxYKSkwAKA4msemv8',
    authDomain: 'veedyo-7dfdf.firebaseapp.com',
    databaseURL: 'https://veedyo-7dfdf.firebaseio.com',
    projectId: 'veedyo-7dfdf',
    storageBucket: '',
    messagingSenderId: '34792461'
  });
  constructor() {
  }
  db() {
    return this.app.database();
  }
}
