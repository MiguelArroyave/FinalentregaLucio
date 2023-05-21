
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
  ) { }

login(id:number){
        localStorage.setItem("item",String(id))
   }

}
