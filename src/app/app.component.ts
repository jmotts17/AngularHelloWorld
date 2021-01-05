import { Component } from '@angular/core';

// @Component({
//   selector: 'app-component',
//   template: "<h1>Hello, world!</h1>",
//   styles: ["h1 { color: red; }"]
// })
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello, World!';
}
