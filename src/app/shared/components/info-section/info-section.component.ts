import {Component, Input} from '@angular/core';

export type InfoRow = { label: string, value: any };

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss']
})
export class InfoSectionComponent {
  @Input({required: true})
  data!: InfoRow[];
}
