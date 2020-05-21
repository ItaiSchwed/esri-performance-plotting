import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {PlotlyService} from '../../services/plotly/plotly.service';
import {RouterOutlet} from '@angular/router';
import {fadeAnimation} from '../../animations';
import {CyclesComponent} from '../cycles/cycles.component';
import {GraphComponent} from '../graph/graph.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(GraphComponent) graph: GraphComponent;

  constructor() { }

  ngOnInit(): void { }

  refresh() {

  }
}
