import { Injectable } from '@angular/core';
import { Subject, Observable, merge } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  constructor() { }

  private cardNumber = new Subject<string>()
  currentCardNumber = this.cardNumber.asObservable()
  
  setValueCardNumber(info: string) {
    this.cardNumber.next(info)
  }
  

  private cardHolder = new Subject<string>()
  currentCardHolder = this.cardHolder.asObservable()

  setValueCardHolders(info: string) {
    this.cardHolder.next(info)
  }


  private cvv = new Subject<string>()
  currentCVV = this.cvv.asObservable()

  setValueCVV(info: string) {
    this.cvv.next(info)
  }

  
  private month = new Subject<string>()
  currentMonth = this.month.asObservable()

  setValueMonth(info: string) {
    console.log(info);
    this.month.next(info)
  }

    
  private year = new Subject<string>()
  currentYear = this.year.asObservable()

  setValueYear(info: string) {
    info = info.substring(info.length -2)
    this.year.next(info)
  }

}
