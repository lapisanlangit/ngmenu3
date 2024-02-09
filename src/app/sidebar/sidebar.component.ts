import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatDividerModule, MatIconModule, MatListModule, MatExpansionModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  panelOpenState = false;
}
