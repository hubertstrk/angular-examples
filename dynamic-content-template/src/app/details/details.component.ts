import { Component, Input, TemplateRef } from '@angular/core';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() person: Person;
  @Input() templates: TemplateRef<any>[];

  context = {
    passed: true,
    mark: 3
  };
}
