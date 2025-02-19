import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [RouterModule, MatGridListModule, MatButtonModule, MatCardModule, MatChipsModule, MatProgressBarModule, MatFormFieldModule, MatIconModule, MatInputModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})




export class LoginComponent {
  hide = signal(true);
  constructor(private userService: UserService, private router: Router){}
  clickEvent(event: MouseEvent) {
    
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  login(){
    this.userService.isUserLoggedIn = true;
    this.router.navigate(['home']);
  }
}


