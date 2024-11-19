import { Component, ViewEncapsulation } from '@angular/core';
import { ChildcomponentComponent } from './childcomponent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildcomponentComponent],
  template: `
    <p>Welcome to {{ title }}!</p>

    <app-childcomponent />
  `,
  styles: [
    `
      p {
        background-color: black;
        color: white;
        width: 50%;
        text-align: center;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'revision';
}
