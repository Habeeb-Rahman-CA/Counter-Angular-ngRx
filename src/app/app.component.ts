import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/counter.state';
import { selectCount, selectCounterState } from './store/counter.selector';
import { CommonModule } from '@angular/common';
import { decrementCounter, incrementCounter, reset } from './store/counter.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  counter$: Observable<number> = new Observable<number>

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select(selectCount)
  }

  onIncrement() {
    this.store.dispatch(incrementCounter())
  }
  onDecrement() {
    this.store.dispatch(decrementCounter())
  }
  onReset() {
    this.store.dispatch(reset())
  }
}
