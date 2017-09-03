import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    // BarChart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = ['2011', '2012', '2013', '2014', '2015', '2016', '2017'];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [2, 6, 10, 22, 40, 47, 55], label: 'Куќи' },
        { data: [3, 5, 8, 14, 27, 33, 40], label: 'Станеви' },
        { data: [7, 13, 17, 24, 50, 58, 70], label: 'Деловен простор' },
        { data: [4, 8, 15, 19, 24, 28, 33], label: 'Останато' }
    ];
    // Doughnut
    public doughnutChartLabels: string[] = ['Станеви', 'Куќи', 'Деловен простор', 'Останато'];
    public doughnutChartData: number[] = [55, 40, 70, 33];
    public doughnutChartType: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
