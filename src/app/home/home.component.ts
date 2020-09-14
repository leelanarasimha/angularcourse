import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  intervalSubscription: Subscription;
  routeSubscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.data.subscribe((data: Data) => {
      console.log(data);
    });

    this.intervalSubscription = interval(1000).subscribe(count => {
      console.log(count);
    })
  }

  ngOnDestroy() {
    this.intervalSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }
}
