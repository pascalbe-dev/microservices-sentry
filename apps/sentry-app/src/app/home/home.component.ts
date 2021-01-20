import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'sentry-example-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  message$: Observable<string> = of('');

  constructor(private readonly httpClient: HttpClient, private readonly router: Router) {}

  ngOnInit(): void {
    this.createHttpRequest();
  }

  createError(): void {
    throw new Error('Oops. HomeComponent created an error.');
  }

  createHttpRequest(): void {
    this.message$ = this.httpClient
      .get('http://localhost:8080/')
      .pipe(map((o) => o as string));
  }

  navigate(): void {
    this.router.navigate(['/home2']);
  }
}
