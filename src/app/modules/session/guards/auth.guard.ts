import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  baseUrl = 'http://localhost/smart_school/index.php/api/login';

     constructor(private router: Router) {}

        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('activeUser')) {
            // user logged in so, return true.
            return true;
        }
    // not logged in so, redirect to login page with the return url.
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
}
}

