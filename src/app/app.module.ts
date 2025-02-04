import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpclientService } from './httpclient.service';

@NgModule({
  declarations: [AppComponent, HttpclientComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [HttpclientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
