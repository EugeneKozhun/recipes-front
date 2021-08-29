import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent
  ],
  exports: [
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzIconModule,
    NzButtonModule,
    NzDividerModule,
    NzStatisticModule,
    NzBadgeModule
  ]
})
export class SharedModule {}
