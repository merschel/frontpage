import { Settings } from './../../model/settings';
import { SettingsStorageService } from 'src/app/services/settings-storage.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public settingsStorage: SettingsStorageService) { }

  ngOnInit() {}

  setNumberOfTileColumns(newValue) {
    this.settingsStorage.setNumberOfTileColumnsTo(newValue);
  }

}
