import {Component, Input} from '@angular/core';
import {ValidateType} from "../app.component";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  // @ts-ignore
  @Input() item: ValidateType
}
