import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GraphComponent} from './components/graph/graph.component';
import {CyclesComponent} from './components/cycles/cycles.component';
import {RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {MatButtonModule} from '@angular/material/button';

const config: SocketIoConfig = { url: 'http://localhost:4000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    CyclesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: 'graph'},
      {path: 'cycles', component: CyclesComponent, data: {animation: 'cycles'}},
      {path: 'graph', component: GraphComponent, data: {animation: 'graph'}}
    ]),
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    MatButtonModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
