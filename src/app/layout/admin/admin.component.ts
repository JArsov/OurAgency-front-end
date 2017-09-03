import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    showAlertMessage: boolean;
    firstTimeVisited: boolean;

  constructor() {
    this.showAlertMessage = localStorage.getItem('isLoggedIn') != null;
    this.firstTimeVisited = localStorage.getItem('firstTime') == null;
      if(localStorage.getItem('firstTime') == null) {
          localStorage.setItem('firstTime','yes');
      }
  }

  ngOnInit() {
      window.setTimeout(function() {
          if(document.getElementById("alert") != null)
            document.getElementById("alert").style.display = "none";
      }, 2500);
  }

}
