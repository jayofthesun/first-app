/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AuthModule, provideAuth0 } from '@auth0/auth0-angular';
import { environment as env } from './environments/environment';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent,
    {providers: [provideProtractorTestingSupport(),
      provideAuth0({
        ...env.auth,
        httpInterceptor: {
          ...env.httpInterceptor,
        },
      }),
  ]
})
  .catch(err => console.error(err));
