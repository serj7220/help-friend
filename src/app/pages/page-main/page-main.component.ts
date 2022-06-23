import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

import {User} from '../../core/interfaces/core.interfaces';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageMainComponent implements OnInit {
  currentPage = 1;
  users: User[] = [];

  constructor(
    private userService: UserService,
    private changeDetectionRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.userService.getListUsers(1, 30)
      .subscribe((data: User[]) => {
        this.users = data;
        this.changeDetectionRef.detectChanges();
      })
  }
}
