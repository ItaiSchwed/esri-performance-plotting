import {Component, OnInit} from '@angular/core';
import {fadeAnimation} from '../../animations';
import {RestServerService} from '../../services/rest-server/rest-server.service';
import {EntityExecution} from '../../models/entity-execution.model';
import {GraphStoreService} from '../../services/times-store/graph-store.service';
import {map, tap} from 'rxjs/operators';
import {SocketServerService} from '../../services/socket-server/socket-server.service';
import {Observable, Subject} from 'rxjs';
import {AnimationEvent} from '@angular/animations';

@Component({
  selector: 'app-cycles',
  templateUrl: './cycles.component.html',
  styleUrls: ['./cycles.component.scss'],
  animations: [fadeAnimation],
})
export class CyclesComponent implements OnInit {
  displayedColumns: string[] = ['cycle'];

  constructor(
    private restServer: RestServerService,
    public socketServer: SocketServerService,
    private graphStore: GraphStoreService) {
  }

  ngOnInit(): void {
  }

  loadCycle(cycleCount: number) {
    this.graphStore.setFade('out');
    this.restServer.getEntitiesExecutions(cycleCount).subscribe(times => this.graphStore.setTimes(times));
  }

}
