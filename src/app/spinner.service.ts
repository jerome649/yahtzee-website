import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class SpinnerService {

  constructor() { }

  private isLoading = new Subject<boolean>();
  isLoadingObs = this.isLoading.asObservable();

  activate(isLoading: boolean) {
    this.isLoading.next(isLoading);
  }

}
