import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    isAuthenticated : boolean;

    constructor(private translate: TranslateService, public router: Router) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.isAuthenticated = localStorage.getItem('isLoggedIn') != null;
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('firstTime');
        this.isAuthenticated = false;
    }

    changeLang(language: string) {
        document.getElementById('first').classList.remove('active');
        document.getElementById('second').classList.remove('active');
        document.getElementById('third').classList.remove('active');
        if(language == 'en') {
            document.getElementById('first').classList.add('active');
        }
        else if(language == 'mk') {
            document.getElementById('second').classList.add('active');
        }
        else {
            document.getElementById('third').classList.add('active');
        }
        this.translate.use(language);
    }
}
