import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app'
  foo = 'bar'

  onNotify(event: string) {
    window.alert(`${event}`);
  }
}
