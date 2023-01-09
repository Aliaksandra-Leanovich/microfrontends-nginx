import { Component, OnDestroy, OnInit } from '@angular/core';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Services';

  public usersToken: string | undefined;

  public checkRef = doc(db, 'checkField', 'check');

  public checboxInput: FormControl = new FormControl(false);
  public defaultValue: boolean = false;

  public sub!: Subscription;

  ngOnInit() {
    this.sub = this.checboxInput.valueChanges.subscribe((value) => {
      this.defaultValue = value;
    });
    this.getToken();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private getToken() {
    this.usersToken = localStorage.getItem('userToken') as string;
  }

  public toggleCheck = async () => {
    await updateDoc(this.checkRef, {
      checked: this.defaultValue,
    });
  };
}
