import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectStatement} from "../../stores/statement.store";

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent {
  readonly STATEMENT_VISIBILITY: number = 5000;
  message: string = "";
  isError: boolean = false;
  visibility: boolean = false;

  constructor(private store: Store) {
    this.store.select(selectStatement)
      .subscribe((state) => {
        if (state.message) {
          this.message = state.message;
          this.isError = state.error;
          this.visibility = true;
        }
        setTimeout(() => {
          this.visibility = false;
        }, this.STATEMENT_VISIBILITY);
      })
  }
}
