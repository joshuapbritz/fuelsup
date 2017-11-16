import { SettingsPage } from './../settings/settings';
import { Component } from '@angular/core';

import { LoggerPage } from '../logger/logger';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LoggerPage;
  tab3Root = ContactPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
