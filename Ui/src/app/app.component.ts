import { RouterOutlet } from '@angular/router';
import { Component} from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ui';
  
  public isUserLoggedIn = false;
  
  constructor(public userService: UserService) {
    this.isUserLoggedIn = userService.isUserLoggedIn;
    
  }

}
