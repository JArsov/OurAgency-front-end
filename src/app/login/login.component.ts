import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { routerTransition } from '../router.animations';
import { AlertService } from "../shared/services/AlertService";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    returnUrl: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private alertService: AlertService) {
    }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
    }

    onLoggedIn() {
        localStorage.getItem('isLoggedIn');
        localStorage.setItem('isLoggedIn', 'true');
        this.alertService.success('You have successfully logged in');
        this.router.navigate([this.returnUrl]);
    }
}
