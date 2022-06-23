import { Component, Input } from '@angular/core';
import { User } from '../../../core/interfaces/core.interfaces';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() public user: User = {};
}
