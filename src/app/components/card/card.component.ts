import { Component, OnInit, OnDestroy} from '@angular/core';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  cardNumber: string = 'XXXX XXXX XXXX XXXX'
  cardHolders: string = 'FULL NAME'

  month: string = 'MM'
  year: string = 'YY'
  
  cvv: string = 'XXX'

  subscribes: Subscription[] = []

  constructor(
    private creditCardService: CreditCardService
  ) {}

  ngOnInit(): void {
    this.subscribes = [
      this.creditCardService.currentCardNumber.subscribe(cardNumber => this.cardNumber = cardNumber),
      this.creditCardService.currentCardHolder.subscribe(cardHolders => this.cardHolders = cardHolders),
      this.creditCardService.currentCVV.subscribe(cvv => this.cvv = cvv),
      this.creditCardService.currentMonth.subscribe(month => this.month = month),
      this.creditCardService.currentYear.subscribe(year => this.year = year)
    ]
  }
  
  ngOnDestroy(): void {
    this.subscribes.forEach(subs => subs.unsubscribe())
  }


}
