import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/app/services/house.service';
import { ActivatedRoute } from '@angular/router';
import { House } from 'src/app/models/house';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.scss']
})
export class CancelBookingComponent implements OnInit {
  house: House;
  imageUrls: String[];

  constructor(private hs: HouseService,private booking: BookingService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getHouseDetails(2);
  }
  getHouseDetails(id) {
    this.hs.getHouseById(id).subscribe(data => {
      this.house = data;
      this.imageUrls = this.house.image.split("||---||");
    });
  }
  cancel_rent() {
    this.booking.cancelRent(2,this.house).subscribe(data => {
     alert("ban da hủy thành công");
    });
  }

}
