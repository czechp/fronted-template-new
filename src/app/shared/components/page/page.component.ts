import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  @Input()
  title: string | undefined = undefined;
  @Input()
  loaded: boolean = true;
  @Input()
  centralFlow: boolean = true;
}
