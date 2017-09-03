import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../dashboard/dashboard.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-admin-details',
    templateUrl: './admin-details.component.html',
    styleUrls: ['./admin-details.component.scss']
})
export class AdminDetailsComponent implements OnInit {

    realEstates: any[];
    showAlertMessage: boolean;

    constructor(private dashboardService: DashboardService,
                private router: Router) {
        this.dashboardService.getAllRealEstates().subscribe(
            result => this.realEstates = result
        );
    }

    ngOnInit() {
    }

    /*editRealEstate(code: string) {
        console.log("EDITING REAL ESTATE WITH CODE " + code);
        this.router.navigateByUrl('admin/details/edit/' + code);
    }
    */
    removeRealEstate(code: string): boolean {
        if (confirm("Дали сте сигурни дека сакате да го избришете овој запис?")) {
            for (var i = this.realEstates.length - 1; i >= 0; i--) {
                if (this.realEstates[i].code == code) {
                    this.realEstates.splice(i, 1);
                    this.showAlertMessage = true;
                    window.setTimeout(function () {
                        if (document.getElementById("alert") != null)
                            document.getElementById("alert").style.display = "none";
                    }, 2500);
                    document.getElementById("alert").style.display = "initial";
                    return true;
                }
            }
            this.showAlertMessage = false;
            return false;
        }
        this.showAlertMessage = false;
        return false;
    }

}
