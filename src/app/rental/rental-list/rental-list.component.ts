import {Component, OnInit} from '@angular/core';
import {RentalService} from '../shared/rental.service';
import {RentalModel} from '../rental.model';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentals: RentalModel[] = [];

  constructor(private rentalService: RentalService) {
  }

  ngOnInit() {
    const rentalObservable = this.rentalService.getRentals();
    rentalObservable.subscribe((rentals: RentalModel[]) => {
      this.rentals = rentals;
      },
      (error) => {

      },
      () => {

      });
  }

}
