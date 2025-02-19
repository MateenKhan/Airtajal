import { RouterOutlet } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnDestroy, inject, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserService } from '../../services/user.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy{

  
  protected readonly fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  protected readonly fillerContent = Array.from({ length: 50 }, (_, i) => `Body  ${i + 1}`);

  protected readonly isMobile = signal(true);
  public isUserLoggedIn = false;
  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  constructor(public userService: UserService) {
    const media = inject(MediaMatcher);
    this.isUserLoggedIn = userService.isUserLoggedIn;
    this._mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () => this.isMobile.set(this._mobileQuery.matches);
    if (this._mobileQuery?.addEventListener) {
      this._mobileQuery.addEventListener('change', this._mobileQueryListener);
    } else {
      this._mobileQuery.addListener(this._mobileQueryListener);
    }
  }

  ngOnDestroy(): void {
    if (this._mobileQuery?.removeEventListener) {
      this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
    } else {
      this._mobileQuery.removeListener(this._mobileQueryListener);
    }
  }

}
