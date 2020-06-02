import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { IAppState } from '../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.scss']
})
export class CompOneComponent implements OnInit {
  message$: Observable<String>;

  constructor(private store: Store<IAppState>) {
    this.message$ = store.select('message');
  }

  ngOnInit(): void {
  }

}
