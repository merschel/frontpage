import { Group } from './../../model/group'
import { Component, OnInit, Input } from '@angular/core'
import { group } from '@angular/animations';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  //////////////////////////////////////////////
  //////////////////////////////////////////////
          //   Input Variables    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  @Input() group: Group

  //////////////////////////////////////////////
  //////////////////////////////////////////////
          //   Output Variables    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  //////////////////////////////////////////////
  //////////////////////////////////////////////
          //   Member Variables    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  mRegularDistribution: String
  mGap: String

  //////////////////////////////////////////////
  //////////////////////////////////////////////
            //    Constructor    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  constructor() {}

  //////////////////////////////////////////////
  //////////////////////////////////////////////
          //   Life Cycle Functions     //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  ngOnInit() {

    let gap = 0.5 // TODO als Eigenschaft mitgeben

    this.mGap = gap + '%'
    this.mRegularDistribution = 100 / this.group.settings.numberOfColumns - gap + '%'

  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //    Public Functions    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //   Private Functions    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  //////////////////////////////////////////////
  //////////////////////////////////////////////
           //   Getter and Setter    //
  //////////////////////////////////////////////
  //////////////////////////////////////////////

}
