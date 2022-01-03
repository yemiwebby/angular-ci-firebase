import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../user';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UserService],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to retrieve the list of users', () => {
    const dummyUsers: User[] = [
      {
        id: 1,
        name: 'Oluyemi',
        email: 'yem@me.com',
        phone: '43434343',
        website: 'me.com',
        address: {
          street: 'sample street',
          suite: '29',
          city: 'Abuja',
          zipcode: '23401',
        },
      },
      {
        id: 1,
        name: 'Temi',
        email: 'tem@me.com',
        phone: '55242',
        website: 'tems.com',
        address: {
          street: 'Tems street',
          suite: '45',
          city: 'LAgos',
          zipcode: '23401',
        },
      },
    ];

    service.getUsers().subscribe((users) => {
      expect(users.length).toBe(10);
      expect(users).toEqual(dummyUsers);
    });

    expect(dummyUsers).toHaveSize(2);
  });
});
