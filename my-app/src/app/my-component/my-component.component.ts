import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent {
  @Input() message: string = ''
  @Output() notify: EventEmitter<string> = new EventEmitter<string>()

  someText: string = 'some text'
  inputValue = 'some value'
}
