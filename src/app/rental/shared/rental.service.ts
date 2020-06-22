import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {RentalModel} from '../rental.model';

@Injectable()
export class RentalService {
  private rentals: RentalModel[] = [{
    id: 1,
    title: 'Cental Apartment',
    city: 'New York',
    street: 'Times Square',
    category: 'apartment',
    image: 'abc',
    bedrooms: 3,
    description: 'very nice apartment',
    dailyRate: 34,
    shared: false,
    createdAt: '42/3/2020'
  }, {
    id: 2,
    title: 'Central New York',
    city: 'Birmingham',
    street: 'Times Square',
    category: 'apartment',
    image: 'abc',
    bedrooms: 3,
    description: 'very nice apartment',
    dailyRate: 34,
    shared: false,
    createdAt: '42/3/2020'
  },
    {
      id: 3,
      title: 'Green House',
      city: 'New Jersey',
      street: 'Times Square',
      category: 'apartment',
      image: 'abc',
      bedrooms: 3,
      description: 'New jersy Aparment awsome',
      dailyRate: 34,
      shared: false,
      createdAt: '42/3/2020'
    }, {
      id: 4,
      title: 'Sun hill ',
      city: 'Times Field',
      street: 'Times Square',
      category: 'apartment',
      image: 'abc',
      bedrooms: 3,
      description: 'very nice apartment Times Field',
      dailyRate: 34,
      shared: false,
      createdAt: '42/3/2020'
    }];

  public getRentals(): any {
    const rentalObservable = new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);

      setTimeout(() => {
        observer.error('Error Occured');
      }, 2000);

      setTimeout(() => {
        observer.complete();
      }, 1000);
    });
    return rentalObservable;
  }
}
