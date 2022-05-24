import { AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  ContentChild,
  ViewChild, 
  DoCheck, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit,  
  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent 
implements OnInit,
           OnDestroy,
           OnChanges,
           DoCheck,
           AfterContentInit,
           AfterContentChecked,
           AfterViewInit,
           AfterViewChecked {

    counter = 0;
    interval: any;

    @Input()
    MyName = "";
    
    @ContentChild('projectedContent', {static: true}) projectedContent: any;
    @ViewChild('childContent', {static: true}) childContent: any;

  constructor() {
    console.log("child constructor is called");
   }

  ngOnInit(): void {
    console.log("child OnInit is called");
    console.log('OnInit - ' + this.projectedContent);
    console.log('OnInit - ' + this.childContent);

    // this.interval = setInterval(() => {
    //   this.counter = this.counter + 1;
    //   console.log(this.counter);
    // },1000);
  }
  
  ngOnDestroy(): void {
    // clearInterval(this.interval);
    console.log("child OnDestory is called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log("child OnChanges is called");
    console.log('OnChanges - ' + this.projectedContent);
    console.log('DoCheck - ' + this.childContent);
  }

  ngDoCheck(){
    console.log("child OnDoCheck is called");
    console.log('DoChecked - ' + this.projectedContent);
    console.log('OnChanges - ' + this.childContent);
  }

  ngAfterContentInit(): void {
    console.log("in After Content Init");
    console.log('After Content Init - ' + this.projectedContent);
    console.log('After Content Init - ' + this.childContent);
  }

  ngAfterContentChecked(){
    console.log("in After Content Checked");
    console.log('After Content Checked - ' + this.childContent);
  }

  ngAfterViewInit(){
    console.log("in After View Init");
    console.log('After View Init - ' + this.childContent);
  }

  ngAfterViewChecked(){
    console.log("in After View Checked");
  }
}
