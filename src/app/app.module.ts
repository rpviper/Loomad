import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KoeradComponent } from './koerad/koerad.component';
import { HiiredComponent } from './hiired/hiired.component';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { KokkuComponent } from './kokku/kokku.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    KoeradComponent,
    HiiredComponent,
    AvalehtComponent,
    KokkuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
