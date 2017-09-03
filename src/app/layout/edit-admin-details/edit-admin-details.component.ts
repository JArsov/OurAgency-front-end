import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../dashboard/dashboard.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-edit-admin-details',
    templateUrl: './edit-admin-details.component.html',
    styleUrls: ['./edit-admin-details.component.scss']
})
export class EditAdminDetailsComponent implements OnInit {

    realEstate: any;
    realEstates: any[];
    id: string;
    onDiscount: boolean;
    imgUrls: string[];
    imgUrl: string;

    constructor(private route: ActivatedRoute,
                private dashboardService: DashboardService,
                private router: Router) {
        this.dashboardService.getAllRealEstates()
            .subscribe(
                result => this.realEstates = result
            );
        this.imgUrls = [
            'assets/images/house.jpg',
            'assets/images/detska.jpg',
            'assets/images/spalna.jpg',
            'assets/images/WC.JPG'
        ]
        this.imgUrl = this.imgUrls[0];
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.id = params['id'];
                this.realEstate = this.realEstates.find(x => x.code == this.id);
                this.onDiscount = this.realEstate.oldPrice != null;
            });
    }

    returnBack() {
        this.router.navigateByUrl('/admin-details');
    }

    saveRealEstate() {
        this.realEstate.lastChange = Date.now();
        this.dashboardService.saveRealEstate(this.realEstate);
        //this.router.navigate(['/dashboard']);
    }

    deleteRealEstate() {
        console.log(this.realEstate.code);
        this.dashboardService.deleteRealEstate(this.realEstate);
        this.router.navigate(['/admin-details']);
    }

    changeImage(index) {
        this.imgUrl = this.imgUrls[index];
    }

}
