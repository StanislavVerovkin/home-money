import {Component, OnInit} from '@angular/core';
import {User} from '../../../../shared/models/user.model';
import {AuthService} from '../../../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    user: User;

    constructor(private auth: AuthService,
                private router: Router) {
    }

    ngOnInit() {
        this.user = JSON.parse(window.localStorage.getItem('user'));
    }

    onLogout() {
        this.auth.logout();
        this.router.navigate(['/login']);
    }
}
