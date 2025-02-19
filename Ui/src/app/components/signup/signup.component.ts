import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  imports: [RouterModule, MatGridListModule, MatDividerModule, MatButtonModule, MatCardModule, MatChipsModule, MatProgressBarModule, MatFormFieldModule, MatIconModule, MatInputModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent {
  hide = signal(true);
  constructor(private router:RouterModule){}
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  
}
