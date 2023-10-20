import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Person, Status } from '../models/person.model';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent {
  persons: Person[] = [{
    name: 'John Doe',
    age: 25,
  }];

  status = [
    {
      id: 0,
      icon: 'check_circle',
      color: 'green',
      active: true,
      level: 'Senior'
    },
    {
      id: 1,
      icon: 'error_circle',
      color: 'red',
      active: false,
      level: 'Junior'
    }
  ]

  languages = [
    {
      id: 0,
      name: 'English'
    },
    {
      id: 1,
      name: 'Spanish'
    }
  ]

  @ViewChild('languageTemplate', { read: TemplateRef }) foo:TemplateRef<any>;

  selectedStatus: Status = this.status[0];
  selectedLanguage = this.languages[0];

  setStatus() {
    this.selectedStatus = this.selectedStatus.id === 0 ? this.status[1] : this.status[0];
  }

  setLanguage() {
    this.selectedLanguage = this.selectedLanguage.id === 0 ? this.languages[1] : this.languages[0];
  }
}