<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, ViewChild } from '@angular/core';
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  searchToggleStatus: boolean;

  constructor(public settings: SettingsService) { }

<<<<<<< HEAD
  toggleCollapsedSidebar() {
=======
  toggleCollapsedSideabar() {
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
  }

  searchToggleChange() {
    this.searchToggleStatus = !this.searchToggleStatus;
  }
}
