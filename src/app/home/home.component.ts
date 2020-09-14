import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

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
    }, error => {
      console.log(error);
    });

    let customObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count > 3) {
          observer.error('count is greater than 3')
        }

        if (count > 2) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    this.intervalSubscription = customObservable.pipe(map((data: number) => {

      return 'count is ' + (data + 1);
    })).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    })
  }

  ngOnDestroy() {
    this.intervalSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }
}
