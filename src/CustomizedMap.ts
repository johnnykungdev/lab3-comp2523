import { Internship } from "./Internship";
import { Student } from "./Student";

export class CustomizedMap {
  private googleMap: google.maps.Map;
  constructor(divId) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  addPin(pinnable: Student | Internship) {
    const infoContent = pinnable instanceof Internship? 
        `Welcome to : ${pinnable.businessName}'s internship` : 
        `${ pinnable.firstName} ${pinnable.lastName}`

    const infoWindow = new google.maps.InfoWindow({
        content: infoContent
    })
    
    const _this = this //_this -> customizedMap

    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: pinnable.location.latitude,
        lng: pinnable.location.longitude,
      },
    }).addListener('click', function() {
        console.log(this) // this -> marker instance
        infoWindow.open(_this.googleMap, this) 
    })  
  }
}

