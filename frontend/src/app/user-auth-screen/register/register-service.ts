import { Injectable } from '@angular/core';
import { BaseService } from '../../base-service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService extends BaseService {


  private readonly registerUrl = "/api/auth/register"

  registerAccount(email: string, password: string) {
    return this.httpClient.post(this.registerUrl, {
      email: email,
      password: password
    }).pipe(
    )
  }


}
