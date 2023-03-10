import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app'
  foo = 'bar'

  onNotify(event: {selectedId: number, input: string}) {
    window.alert(`${JSON.stringify(event)}`);
  }

  message: string = 'Hello World'

  startTime = () => {
    setTimeout(() => {
      this.message = 'Hello Universe'
    },2000)
  }

  ngOnInit() {
    this.startTime()
  }
}
