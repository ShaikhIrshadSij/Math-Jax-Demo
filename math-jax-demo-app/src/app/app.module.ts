import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MathModule } from './math/math.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, MathModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
