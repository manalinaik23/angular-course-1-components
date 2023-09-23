import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  

   courses = COURSES;

   /* Angular Pipes
   startDate = new Date(2000,1,1);
   title:string = COURSES[1].description;
   price = 9.99;
   rate=6.7;
   item = COURSES[4];*/

   /*@ViewChild(CourseCardComponent)
   card:CourseCardComponent*/
  @ViewChildren('test')
   coursesData:QueryList<CourseCardComponent>
   /*my code */
   @ViewChild('test')
     card = CourseCardComponent;
   /*my code */

  /* @ViewChild('card1',{read:ElementRef})
   card:CourseCardComponent

   @ViewChild('container')
   element:ElementRef*/

   //Framework call this method as this is in the lifecycle.
   //do not modify the data inside of this method.
  //  ngAfterViewInit() {
  //  this.coursesData.changes.subscribe(
  //   cards=>console.log(cards)
  //  );
  // }

  ngAfterViewInit(){
    this.coursesData.changes.subscribe(item=>console.log(item));
  }

  addCourse(){
      this.courses.push({
        id: 5,
        description: 'Angular Security Course',
        longDescription: "Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
        category: 'ADVANCED',
        lessonsCount: 11
    })
  }
   

  //below function receives the event emitter
  onCourseClick(course:Course){
    //console.log("App clicked!!" ,course );
    //console.log(this.courses);
    //console.log(this.element);
    console.log("CourseData");
    this.coursesData.forEach(item=>{
      console.log(item);
    })
  }

}
