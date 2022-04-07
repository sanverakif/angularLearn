import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component'; //buradaki amaç componenti uygulama katmanına gönderip çağırmak

@NgModule({
  declarations: [ // kullanılan componentleri,directiveleri tanımladığımız kısım
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    //anguların kendine ait modullerini kullanıp islem yapma, 3.parti ve angularda tanımlı olan moduller
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }