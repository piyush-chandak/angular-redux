import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { IAppState, LANGUAGE } from '../store';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.scss']
})
export class CompTwoComponent implements OnInit {

  constructor(private store : Store <IAppState>) { }

  ngOnInit(): void {
  }
  defaultMessage() {
    this.store.dispatch({type: LANGUAGE.DEFAULT});
  }

  spanishMessage() {
    this.store.dispatch({type: LANGUAGE.SPANISH});
  }

  frenchMessgae() {
    this.store.dispatch({type: LANGUAGE.FRENCH});
  }

}