import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

    realEstate: any;

  constructor() {
      this.realEstate = {
          type: '',
          code : '',
          title : '',
          description: '' +
          '',
          location: '',
          imagePath: '',
          imagePaths: [
              '',
              '',
              ''
          ],

          numberOfBedrooms : null,
          surface : null,
          numberOfRooms : null,
          terrace: null,
          ownHeating: null,
          internet: null,
          cableTV: null,
          elevator: null,
          floor: null,
          oldPrice: null,
          newPrice: null
      }
  }

  ngOnInit() {
  }

}
