import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import * as Parse from 'parse';
import { setServerURL } from './core/configs/parseConfig';
import { environment } from '../environments/environment';

@Component({
  selector: 'ahr-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public environment = environment;

  ngOnInit(): void {
    this.initBack4app();
    console.log('production: ', this.environment.production);
  }

  private initBack4app(): void {
    Parse.initialize(
      this.environment.PARSE_APP_ID,
      this.environment.PARSE_JS_KEY);
    setServerURL(this.environment.serverURL);
  }

  public addQuestion(): void {
    let newQ: Parse.Object = new Parse.Object('question');
    newQ.set('caption', 'caption3');
    newQ.set('description', 'description3');
    // newQ.set('id', '2u7kp19Uzf');
    newQ.save().then((res) => {
      console.log('questions created', res);
    });
  }

  public getQuestions(): void {
    const question: Parse.Object = Parse.Object.extend('question');
    const query: Parse.Query = new Parse.Query('question');
    query.find().then(rt => {
      console.log('rt: ', rt);

      for (const object of rt) {
        // Access the Parse Object attributes using the .GET method
        const caption: string = object.get('caption')
        const description: string = object.get('description')
        console.log(caption);
        console.log(description);
      }
    })
  }

  public updateQuestion(qId: string = '2u7kp19Uzf'): void {
    const query: Parse.Query = new Parse.Query('question');

    query.get(qId).then(q => {
      q.set('caption', 'A string' + new Date().getTime());
      q.set('description', 'A string' + new Date().getTime());
      q.save().then();
    })
  }

  public removeQuestion(qId: string = '2u7kp19Uzf'): void {
    const query: Parse.Query = new Parse.Query('question');
    const beb = query.equalTo('id', 'xKue915KBG');
    console.log('beb: ', beb)
    // query.get(qId).then(q => {
    //   q.destroy().then();
    // })
  }

}
