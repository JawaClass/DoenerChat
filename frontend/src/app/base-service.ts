import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from './../environments/environment.development'

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService {

  protected readonly backendUrl = environment.backend

  protected readonly httpClient = inject(HttpClient)

}
