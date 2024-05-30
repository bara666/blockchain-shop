import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public wallets$ = new Subject<any[]>();
  private baseUrl = 'http://localhost:30000/api/v1';

  constructor(private http: HttpClient) {
    this.getWallets();
  }

  public getWallets() {
    this.http.get(`${this.baseUrl}/getwallets`)
      .subscribe((data) => {
        this.wallets$.next(data as any[]);
      }, (error) => { console.log(error) });
  }

  public getBalance(wallet: string): Observable<number> {
    return this.http.post(`${this.baseUrl}/getbalance`, {
      address: wallet
    }) as Observable<number>;
  }
}
