import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      PROFILE PROMPT
    </p>
  `,
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
