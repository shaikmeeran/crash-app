import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrashService } from '../crash.service';

@Component({
  selector: 'app-crash-listing',
  templateUrl: './crash-listing.component.html',
  styleUrls: ['./crash-listing.component.scss']
})
export class CrashListingComponent implements OnInit {

  crashes: any[];
  isListView = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private crashService: CrashService,
    private router: Router ) { }
 

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { users: any }) => {
      this.crashes = data.users;
    });
  }

  openDetailView(crash) { 
    this.crashService.setCrashData(crash);
    this.router.navigate(['/crash-detail'], { relativeTo: this.activatedRoute });
  }

  toggleListView(event) {
    this.isListView = event.checked;
  } 
}
