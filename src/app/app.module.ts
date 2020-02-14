import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule} from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducerA } from './store/reducerA';
import { reducerB } from './store/reducerB';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      rA: reducerA,
      rB: reducerB
    }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
