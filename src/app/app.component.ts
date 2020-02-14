import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UpdateA, UpdateB } from './store/actions';
import { State } from './store/actionState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a: number;
  b: number;
  title = 'store';
  constructor(private store: Store<State>) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.store.select('rA').subscribe(val => {
      this.a = val.a;
    });
    this.store.select('rB').subscribe(val => {
      this.b = val.b;
    });
  }
  updateA(val) {
    console.log('event val ', val);
    this.store.dispatch(new UpdateA(this.b));
  }
  updateB() {
    this.store.dispatch(new UpdateB(this.a));
  }
}
