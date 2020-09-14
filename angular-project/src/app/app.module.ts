import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxechartsDemoComponent } from './ngxecharts-demo/ngxecharts-demo.component';

// services
import {CovidHttpServiceService  } from './covid-http-service.service';

@NgModule({
  declarations: [ AppComponent, NgxechartsDemoComponent,CovidHttpServiceService],
  imports: [
    BrowserModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ CovidHttpServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
