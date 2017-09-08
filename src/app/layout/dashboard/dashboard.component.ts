import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DashboardService } from "./dashboard.service";
import '../../shared/rxjs-extensions';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public sliders: Array<any> = [];
    //TODO change this to RealEstate[]
    realEstates: any[];
    checkedRealEstates: string[];
    typeOfAdvertisment: string[];
    naselbi: string[];
    surfaceFrom: number;

    constructor(private dashboardService: DashboardService) {

        this.dashboardService.checkAdmin("asd").subscribe(
            result => console.log(result)
        );

        this.realEstates = this.dashboardService.getAllRealEstates();

        /*this.dashboardService.getAllRealEstates().subscribe(
            result => this.realEstates = result
            );*/
        /*this.sliders.push({
            code: 1,
            imagePath: 'assets/images/house.jpg',
            label: 'Куќа на Водно!',
            text: 'Само оваа недела!!! Куќа на водно за само ',
            oldPrice: 67000,
            newPrice: 60000
        }, {
            code: 2,
            imagePath: 'assets/images/stan.jpg',
            label: 'Стан во центар',
            text: 'Се продава стан во центар со одличен поглед кон ...',
            oldPrice: 55000,
            newPrice: 51999
        }, {
            code: 3,
            imagePath: 'assets/images/deloven1.jpg',
            label: 'Деловен простор во Илинден',
            text: 'Се издава деловен простор во населба Илинден',
            oldPrice: 230,
            newPrice: 200
        });*/

        for(var i = 0 ; i < this.realEstates.length; i++)
        {
            this.sliders.push(this.realEstates[i]);
        }

        this.checkedRealEstates = [
            'kukja',
            'stan',
            'prostor',
            'ostanato'
        ];

        this.typeOfAdvertisment = [
            'seIzdava',
            'seProdava'
        ];

        this.naselbi = [
            "Тафталиџе",
            "Тетово",
            "Велес",
            "Виница",
        ];
    }

    toggleArray(value: string) {
        let contains : boolean = false;
        for(var i = this.checkedRealEstates.length - 1 ; i >= 0 ; i--) {
            if(this.checkedRealEstates[i] == value) {
                contains = true;
                this.checkedRealEstates.splice(i,1);
                break;
            }
        }
        if(!contains) {
            this.checkedRealEstates.push(value);
        }
    }

    toggleArray2(value:string) {
        let contains : boolean = false;
        for(var i = this.typeOfAdvertisment.length - 1 ; i >= 0 ; i--) {
            if(this.typeOfAdvertisment[i] == value) {
                contains = true;
                this.typeOfAdvertisment.splice(i,1);
                break;
            }
        }
        if(!contains) {
            this.typeOfAdvertisment.push(value);
        }
    }

    ngOnInit() {
        /*this.dashboardService.getAllRealEstates()
            .subscribe(
                realEstates => {
                    this.realEstates = realEstates;
                    console.log("VLEGUVAM TUKA");
                }
            )*/

    }
}
