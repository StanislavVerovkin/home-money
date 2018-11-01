import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    getUserByEmail(email: string): Observable<User> {
        return this.http.get(`http://localhost:3000/users?email=${email}`)
            .pipe(map((user: User[]) => user[0] ? user[0] : undefined));
    }

    createNewUser(user: User): Observable<any> {
       return this.http.post('http://localhost:3000/users', user);
    }
}
