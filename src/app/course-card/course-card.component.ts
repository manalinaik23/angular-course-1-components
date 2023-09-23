import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, Output, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit,AfterViewInit,AfterContentInit {

  @Input() //iput decorator by which angular know it is input property
  course:Course;

  @Input()
  cardIndex:number;

  @Input()
  noImageTPl:TemplateRef<any>;

  @Output('courseSelected') 
  courseSelected = new EventEmitter<Course>(); // create a custom even emitter

  @ContentChild(CourseImageComponent,{read:ElementRef})
  image:CourseImageComponent;

  @ContentChildren(CourseImageComponent,{read:ElementRef})
  images:QueryList<ElementRef>;

  constructor() { }
  ngAfterContentInit() {
    console.log(this.images);
  }
  ngAfterViewInit() {
  //  console.log(this.image);
    //console.log(this.images);
  }

  ngOnInit(): void {
  }

  onCourseClicked(){
    console.log("Course card clicked !!");
    this.courseSelected.emit(this.course); // this will emit the course object to the app component
  }
  checkItem(){
   // return this.course && this.course.iconUrl;
   return this.course;
  }

  setstyle(){
    /*return {
      beginner:this.course.category == 'BEGINNER' ? true :false
    }*/

    if(this.course.category == 'BEGINNER'){
      return 'beginner';
    }
  }

  cardStyle(){
    return{
      'text-decoration':'underline'
    }
  }
}
