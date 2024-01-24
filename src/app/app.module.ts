import { NgModule } from '@angular/core';
import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  providers: [AuthService],
  imports: [
  ],
  bootstrap: [],
})
export class AppModule {}