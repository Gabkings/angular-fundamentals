import { Component } from '@angular/core';
import { CourseService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
                <h1>{{ title }}</h1>
                <ul>
                    <li *ngFor=" let course of courses">{{course}}</li>
                </ul>
                `
})


export class CoursesComponent{
    title = "This is my first component"
    courses;
    constructor(service: CourseService){
        this.courses = service.getCourses()   
    }
    
}