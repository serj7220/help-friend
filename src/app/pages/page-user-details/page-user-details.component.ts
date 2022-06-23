import { zip } from 'rxjs';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { UserService } from '../../shared/services/user.service';
import { User, UserRepos } from '../../core/interfaces/core.interfaces';

@UntilDestroy()
@Component({
  selector: 'app-page-user-details',
  templateUrl: './page-user-details.component.html',
  styleUrls: ['./page-user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageUserDetailsComponent implements OnInit {
  userId: string | null = '';
  user: User = {};
  userRepos: UserRepos[] = [];
  displayedColumns = ['fullName', 'htmlUrl', 'homePage'];
  dataSource!: MatTableDataSource<UserRepos>;

  constructor(
    private location: Location,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private changeDetectionRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(untilDestroyed(this))
      .subscribe(_ => {
        this.userId =  _.get('id');
        if (this.userId !== null) {
          this.getData(this.userId);
        }
    });


  }

  goBack() {
    this.location.back();
  }

  private getData(userId: string) {
    zip(this.userService.getUserById(userId), this.userService.getListRepos(userId))
      .pipe(untilDestroyed(this))
      .subscribe(([userData, reposData]) => {
        this.user = userData;
        reposData.forEach((repo: any) =>
          this.userRepos.push({
            fullName: repo.full_name,
            homePage: repo.homepage,
            htmlUrl: repo.html_url
          })
        )
        this.dataSource = new MatTableDataSource<UserRepos>(this.userRepos);
        this.changeDetectionRef.detectChanges();
      })
  }
}
