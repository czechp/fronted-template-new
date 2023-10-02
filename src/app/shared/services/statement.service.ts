import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {setMessage} from "../stores/statement.store";

@Injectable({
  providedIn: 'root'
})
export class StatementService {

  constructor(private store: Store) {
  }

  showInfo(msg: string) {
    this.store.dispatch(setMessage({
      msg: {message: msg, error: false}
    }))
  }

  showError(msg: string) {
    this.store.dispatch(setMessage({
      msg: {message: msg, error: true}
    }))
  }
}
