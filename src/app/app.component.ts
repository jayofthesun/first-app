import { Component } from '@angular/core';
import { HomeComponent } from './features/home/home.component';
import { LoginButtonComponent } from './login-button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, LoginButtonComponent ],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
      <app-login-button></app-login-button>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Project Untitled';
}
