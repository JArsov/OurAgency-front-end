import { Injectable, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import '../../shared/rxjs-extensions';

@Injectable()
export class DashboardService implements OnInit{

    //TODO change service URL
    realEstatesUrl: string = 'app/layout/dashboard/real-estates.json';
    checkAdminUrl: string = 'http://localhost/CheckAdmin/CheckAdminService.svc/exists/';

    realEstates: any[];

    constructor(private http: Http) {
        /*this.realEstates = [
            {
                code : "0ax5D",
                title : "Издавам наместен стан во Тафталиџе",
                description: 'Се издава наместен стан во Тафталиџе. Има прекрасна дневна соба со купатило, две спални соби' +
                ' и реновирано купатило. Цена: 200 евра.',
                location: "Скопје",
                settlement: 'Тафталиџе',
                imagePath: 'assets/images/slider1.jpg',
                imagePaths: [
                    'assets/images/stan.jpg',
                    'assets/images/stan_dnevna.jpg',
                    'assets/images/kupatilo.jpg'
                ],

                numberOfBedrooms : 2,
                surface : 52.5,
                numberOfRooms : 4,
                terrace: true,
                ownHeating: false,
                internet: true,
                cableTV: true,
                elevator: true,
                floor: 5,
                oldPrice: 250,
                newPrice: 200
            },
            {
                code : "0akl8",
                title : "Издавам деловен простор во Центар",
                description: 'Се издава деловен простор од 20 m2 во Центар, зад гимназијата Јосип Броз Тито. Погодна за конференциска сала, ' +
                'но може да се користи и за други намени. Цена: 85 евра',
                location: "Скопје",
                settlement: 'Центар',
                imagePath: 'assets/images/slider2.jpg',
                imagePaths: [
                    'assets/images/deloven2.jpg',
                    'assets/images/deloven1.jpg',
                    'assets/images/deloven3.jpg'
                ],
                surface : 20,
                floor: 1,
                oldPrice: 100,
                newPrice: 85
            },
            {
                code : "nGGf4",
                title : "Се продава куќа во Велес",
                description: 'Се продава нова, невселувана куќа во Велес, на 50 метри од автобуската станица. На одлична локација,' +
                ' на два спрата. Површината на куќата изнесува 300 m2. Цена 30000 евра, не е фиксна.',
                location: "Велес",
                imagePath: 'assets/images/slider3.jpg',
                imagePaths: [
                    'assets/images/house.jpg',
                    'assets/images/detska.jpg',
                    'assets/images/spalna.jpg',
                    'assets/images/WC.jpg'
                ],
                numberOfBedrooms : 2,
                surface: 300,
                numberOfRooms: 5,
                terrace: true,
                ownHeating: false,
                internet: true,
                cableTV: true,
                elevator: true,
                floor: 1,
                price: 30000
            }
        ];*/


    }

    getAllRealEstates(): Observable<any[]> {
        return this.http.get(this.realEstatesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res : Response) {
        let body = res.json();
        //console.log(body);
        if(body === null) {
            return {};
        }

        return body || {};
    }

    checkAdmin(user: string): Observable<any> {
        return this.http.get(this.checkAdminUrl + user)
            .map(this.extractData)
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.log("ERROR OCURRED");
        return Observable.throw(error || ' error');
    }

    saveRealEstate(realEstate: any) {
        for(var i = 0 ; i < this.realEstates.length; i++) {
            if(this.realEstates[i].code == realEstate.code) {
                this.realEstates[i] = realEstate;
                break;
            }
        }
    }

    deleteRealEstate(realEstate: any) {
        for(var i = this.realEstates.length - 1; i >= 0; i--) {
            if(this.realEstates[i].code == realEstate.code) {
                this.realEstates.splice(i,1);
                break;
            }
        }
    }

    ngOnInit() {

    }
}
