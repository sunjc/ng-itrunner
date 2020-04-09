import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  login(user: { username: string, password: string }) {
    console.log(`{username: ${user.username}, password: ${user.password}}`);
  }
}
