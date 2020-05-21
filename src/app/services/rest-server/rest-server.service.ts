import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EntityExecution} from '../../models/entity-execution.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestServerService {

  private url = 'http://localhost:3001';
  private cyclesEntry = 'cycles';

  constructor(private http: HttpClient) { }

  getEntitiesExecutions(cycleCount: number): Observable<EntityExecution[]> {
    return this.http.get<EntityExecution[]>(`${this.url}/${this.cyclesEntry}/${cycleCount}`);
  }
}
