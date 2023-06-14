import { Component } from '@angular/core';
import {switchAll} from "rxjs";
export interface ValidateType {
  red: boolean;
  yellow?: boolean;
  green: boolean;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  password: string = "";
  numbers = new RegExp("(?=.*[0-9])");
  letter = new RegExp("(?=.*[a-z])");
  symbols = new RegExp("(?=.*[!@#$%^&*])");

  easy: ValidateType =  {
    red: false,
    yellow: false,
    green: false,
    name: "easy"
  };

  medium: ValidateType = {
    red: false,
    yellow: false,
    green: false,
    name: "medium"
  };

  strong: ValidateType = {
    red: false,
    green: false,
    name: "strong"
  }
  check(e:any){
    this.password = (e.target.value)

    if (this.password.length < 8) {
      this.easy.red = true
      this.medium.red = true
      this.strong.red = true

      this.easy.yellow = false
      this.medium.yellow = false
    }

    if (this.password.length > 7) {
      this.easy.red = true
      this.medium.red = false
      this.strong.red = false
    }

    if (this.password.length === 0) {
      this.easy.red = false
      this.medium.red = false
      this.strong.red = false
    }

    if (this.numbers.test(this.password) || this.letter.test(this.password) || this.symbols.test(this.password)) {
      this.easy.red = true
    }

    if(this.numbers.test(this.password) && this.letter.test(this.password) && this.password.length > 7) {
      this.easy.yellow = true
      this.medium.yellow = true
    }
    if(this.symbols.test(this.password) && this.letter.test(this.password) && this.password.length > 7) {
      this.easy.yellow = true
      this.medium.yellow = true
    }
    if(this.numbers.test(this.password) && this.symbols.test(this.password) && this.password.length > 7) {
      this.easy.yellow = true
      this.medium.yellow = true
    }

    if (this.password.length > 7 && this.symbols.test(this.password) && this.letter.test(this.password) && this.numbers.test(this.password)) {
      this.easy.green = true
      this.medium.green = true
      this.strong.green = true
    } else {
      this.easy.green = false
      this.medium.green = false
      this.strong.green = false
    }
  };

}

