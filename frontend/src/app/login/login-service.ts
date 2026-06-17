import { Injectable } from '@angular/core';
import { BaseService } from '../base-service';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseService {

  private readonly loginUrl = "/api/auth/login"

  login(email: string, password: string) {
    return this.httpClient.post(this.loginUrl, {
      email: email,
      password: password
    })
  }
}
