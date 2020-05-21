import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {startWith} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocketServerService {

  public cyclesCounts$ = this.socket.fromEvent<number[]>('count');

  constructor(private socket: Socket) {
    this.cyclesCounts$.subscribe(console.log);
  }
}
