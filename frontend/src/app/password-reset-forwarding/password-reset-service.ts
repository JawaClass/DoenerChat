import { inject, Injectable } from '@angular/core';
import { BaseService } from '../base-service';
import { ActivatedRoute, Router } from '@angular/router';
import { th } from 'zod/v4/locales';

@Injectable({
  providedIn: 'root',
})
export class PasswordResetService extends BaseService {
  private route = inject(ActivatedRoute);

  private readonly tokenParamName = 'token';

  private readonly verifyUrl = '/api/auth/password/reset/verify';

  private readonly changePasswordUrl = '/api/auth/password/reset/update';

  getUrlToken() {
    return this.route.snapshot.queryParamMap.get(this.tokenParamName);
  }

  verifyResetToken() {
    return this.httpClient.post(this.verifyUrl, {
      token: this.getUrlToken(),
    });
  }

  changePassword(newPassword: string) {
    return this.httpClient.post(this.changePasswordUrl, {
      token: this.getUrlToken(),
      newPassword: newPassword,
    });
  }
}
