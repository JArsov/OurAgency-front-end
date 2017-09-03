import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../dashboard/dashboard.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RealEstate} from "../../shared/model/RealEstate";

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    id: string;
    realEstates: any[];
    realEstate: any[];
    imgUrls: any[];
    currentIndex: number;
    imgUrl: any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private dashboardService: DashboardService) {
        this.dashboardService.getAllRealEstates()
            .subscribe(
                result => this.realEstates = result
            );
        this.currentIndex = 0;
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.id = params['id'];
                this.realEstate = this.realEstates.find(x => x.code == this.id);
                this.imgUrls = [
                    'assets/images/house.jpg',
                    'assets/images/detska.jpg',
                    'assets/images/spalna.jpg',
                    'assets/images/WC.JPG'
                ]
                this.imgUrl = this.imgUrls[0];
            }
        )
    }

    returnBack() {
        this.router.navigateByUrl('/dashboard');
    }

    changeImage(index) {
        this.imgUrl = this.imgUrls[index];
    }

}
