import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {EntityExecution} from '../../models/entity-execution.model';
import {map} from 'rxjs/operators';

// todo: dummy store replace with a real one
@Injectable({
  providedIn: 'root'
})
export class GraphStoreService {

  private times$ = new BehaviorSubject<EntityExecution[]>([]);
  private fade$ = new BehaviorSubject<string>('out');
  private animationDone$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  setTimes(times: EntityExecution[]) {
    this.times$.next(times);
  }

    getTimes() {
    return this.times$.pipe(
      map(times => times.sort((a, b) => a.count - b.count)),
      map(times => times.map(time => time.time))
    );
  }

  setFade(fade: string) {
    this.fade$.next(fade);
  }

  getFade() {
    return this.fade$;
  }

  setAnimationDone(animationDone: boolean) {
    this.animationDone$.next(animationDone);
  }

  getAnimationDone() {
    return this.animationDone$;
  }
}
