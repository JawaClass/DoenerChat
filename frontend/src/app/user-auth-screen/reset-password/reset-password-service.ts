import { computed, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { BaseService } from '../../base-service';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordService extends BaseService {
  private readonly sendPasswordResetTokenUrl = '/api/auth/password/reset/send_reset_email';

  readonly lastPasswordResetRequestTime = signal<number | null>(null);

  readonly secondsWaitBetweenResetRequests = 30;

  readonly elapsedTimeSinceLastPasswordRequest = computed(() => {
    const start = this.lastPasswordResetRequestTime();
    if (!start) return null;
    const now = start + this.secondsSiceLastResetRequest() * 1000;
    const elapsed = (now - start) / 1000;
    return elapsed;
  });

  readonly resetAfterTimeoutAllowed = computed(() => {
    const elapsed = this.elapsedTimeSinceLastPasswordRequest();
    if (elapsed == null || elapsed > this.secondsWaitBetweenResetRequests) {
      return {
        allowed: true,
      };
    } else {
      return {
        allowed: false,
        waitSeconds: this.secondsWaitBetweenResetRequests - elapsed,
      };
    }
  });

  private readonly everySecond = toSignal(interval(1000), { initialValue: 0 });
  private readonly secondsAcc = signal(0);
  readonly secondsSiceLastResetRequest = computed(() => this.everySecond() - this.secondsAcc());

  sendResetPasswordConfirmToken(email: string) {
    this.secondsAcc.set(this.everySecond());
    this.lastPasswordResetRequestTime.set(Date.now());
    return this.httpClient.post(this.sendPasswordResetTokenUrl, { email });
  }
}
