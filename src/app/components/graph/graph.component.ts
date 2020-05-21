import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {animate, AnimationEvent, state, style, transition, trigger} from '@angular/animations';
import {PlotlyService} from '../../services/plotly/plotly.service';
import {GraphStoreService} from '../../services/times-store/graph-store.service';
import {filter, map, take, tap, timeout} from 'rxjs/operators';
import {fadeAnimation} from '../../animations';
import {BehaviorSubject, combineLatest} from 'rxjs';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  animations: [fadeAnimation]
})
export class GraphComponent implements OnInit {
  @ViewChild('graph', {static: true}) graph: ElementRef;
  private times;

  constructor(
    private plotly: PlotlyService,
    public graphStore: GraphStoreService) {
  }

  ngOnInit(): void {
    this.plotly.init(this.graph.nativeElement);
    this.plotly.plotGraph([]);
    this.graphStore.getFade().subscribe(console.log);
    const timesLoaded$ = new BehaviorSubject<boolean>(false);

    this.graphStore.getTimes().subscribe(times => {
      this.times = times;
      timesLoaded$.next(true);
    });
    combineLatest([timesLoaded$, this.graphStore.getAnimationDone()])
      .pipe(filter((observables: [boolean, boolean]) => observables.every(i => i)))
      .subscribe(() => {
        this.graphStore.setAnimationDone(false);
        timesLoaded$.next(false);
        this.plotly.plotGraph(this.times);
        this.graphStore.setFade('in');
      });

  }

  animationDone(event: AnimationEvent) {
    if (event.toState === 'out') {
      this.graphStore.setAnimationDone(true);
    }
  }
}
