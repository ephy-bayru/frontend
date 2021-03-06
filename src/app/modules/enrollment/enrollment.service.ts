import { Injectable } from '@angular/core';
import { CrudService } from './../../services/crud.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EnrollmentService extends CrudService {

  constructor(private httpClient: HttpClient) {
    super(httpClient, '/enrollment/');
  }
  getCourse() {
    return this.httpClient.get <any[]>(`${this.baseUrl}/${'courses'}`);
  }

}
