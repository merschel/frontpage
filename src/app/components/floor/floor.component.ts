import { Settings } from './../../model/settings';
import { TileStorageService } from './../../services/tile-storage.service';
import { Component, OnInit } from '@angular/core';
import { SettingsStorageService } from 'src/app/services/settings-storage.service';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {

  constructor( public settingsStorage: SettingsStorageService,
               private tileStorageService: TileStorageService ) {}

  ngOnInit() {}

}
