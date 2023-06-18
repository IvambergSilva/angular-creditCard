import { Component, OnInit } from '@angular/core';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  month: string = ''
  year: string = ''
  
  monthList: string[] = []
  yearList: string[] = []

  constructor (
    private creditCardService: CreditCardService
  ) {}
  
  ngOnInit(): void {
    this.generateDateOptions()
    this.year = 'Year'
    this.month = 'Month'
  }

  generateDateOptions(){
    const date = new Date().getFullYear()

    for (let i = 0; i < 12; i++) {
      if (i < 9) {
        this.monthList.push(`0${i+1}`)
      } else {
        this.monthList.push(`${i+1}`)
      }
      
      this.yearList.push(`${date+i}`)
    }
  }

  
  filterInputNumber(event: any, id: string) {
    const input = event.target.value;
    const numericInput = input.replace(/[\D]/g, '');
    event.target.value = numericInput;
    
    id == 'cardNumber' ? this.getValueCardNumber(numericInput) : this.getValueCVV(numericInput)
  }

  getValueCardNumber(value: string) {
    this.creditCardService.setValueCardNumber(value)
  }
  
  getValueCardHolders(value: string) {
    this.creditCardService.setValueCardHolders(value)
  }

  getValueCVV(value: string){
    this.creditCardService.setValueCVV(value)
  }

  getValueMonth(){
    this.creditCardService.setValueMonth(this.month)
  }
  
  getValueYear(){    
    this.creditCardService.setValueYear(this.year)
  }

}
