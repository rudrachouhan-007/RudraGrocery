import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements  CanActivate  {
 allow:boolean=false;

  constructor(private router: Router) {
   }

  canActivate(): boolean
  {
    if(this.allow)
    {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
