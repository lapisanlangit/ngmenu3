import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MatSidenavModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngmenu3';
  sideBarOpen = true;
  screenWidth: number;

  constructor() {
    // set screenWidth on page load
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
      //console.log('screen ', this.screenWidth);
    };
  }
  sideBarToggle(event: any) {
    //console.log(this.sideBarOpen);
    this.sideBarOpen = !this.sideBarOpen;

    console.log(this.screenWidth, this.sideBarOpen);
  }
}
