import {ElementRef, Injectable} from '@angular/core';

declare var Plotly: any;

@Injectable({
  providedIn: 'root'
})
export class PlotlyService {

  constructor() {
  }
  graph: ElementRef;

  layout = {
    autoexpand: 'true',
    autosize: 'true',
    plot_bgcolor: 'black',
    paper_bgcolor: 'black',
    font: {
      color: 'white'
    },
    margin: {
      autoexpand: 'true',
      margin: 0
    },
    offset: 0,
    type: 'scattergl',
    title: 'times',
    hovermode: 'closest',
    xaxis: {
      linewidth: 2,
      mirror: true,
      title: 'Point Count',
      automargin: true,
      gridcolor: '#333'
    },
    yaxis: {
      linewidth: 2,
      mirror: true,
      automargin: true,
      title: 'Time',
      gridcolor: '#333'
    }
  };

  config = {
    responsive: true,
    scrollZoom: true
  };

  private static createData(y: number[]) {
    return [{y, type: 'scatter', mode: 'line', marker: {color: 'red'}}];
  }

  init(graph: ElementRef) {
    this.graph = graph;
  }

  plotGraph(y: number[]) {
    Plotly.newPlot(this.graph, PlotlyService.createData(y), this.layout, this.config);
  }

  redraw(y: number[]) {
    Plotly.react(this.graph, PlotlyService.createData(y), this.layout, this.config);
  }

  extendTraces(y: number[][]) {
    Plotly.extendTraces(this.graph, {y}, [0]);
  }
}
