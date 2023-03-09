import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent {
  @Input() message: string = ''
  @Output() notify: EventEmitter<{selectedId: number, input: string}> = new EventEmitter<{selectedId: number, input: string}>()

  someText: string = 'some text'
  inputValue = 'some value'

  selected = 3
  options = [
    {
      id: 1,
      value: 'foo',
      readonly: false
    },
    {
      id: 2,
      value: 'bar',
      readonly: false
    },
    {
      id: 3,
      value: 'baz',
      readonly: false
    },
    {
      id: 4,
      value: 'qux',
      readonly: true
    },
    {
      id: 5,
      value: 'quux',
      readonly: true
    }
  ];

  get filteredOptions() {
    return this.options.filter(option => !option.readonly)
  }

  get isSelected () {
    return this.selected === 2
  }
}
