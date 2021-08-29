import { Component, OnInit } from '@angular/core';
import { CrashService } from '../crash.service';

@Component({
  selector: 'app-crash-detail',
  templateUrl: './crash-detail.component.html',
  styleUrls: ['./crash-detail.component.scss']
})
export class CrashDetailComponent implements OnInit {

  constructor(private crashService: CrashService) { }

  crashDetails = [];

  ngOnInit(): void {

    let crash = this.crashService.getCrashData();

    for (var key in crash) {
      let tmpObj = {};
      tmpObj["name"] = key;
      tmpObj["value"] = crash[key];
      
      this.crashDetails.push(tmpObj);
      
    }
  }

}
