import { Component, Input, OnInit, SimpleChange,OnChanges,AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.sass']
})
export class LifeComponent implements OnInit {

  
  @Input() value: string = 'tech'
  constructor(){
    console.log('Constructor called');
    // console.log(this.value);
  }
  ngOnChanges(change:SimpleChange){
    console.log('ngOnChanges called!');
    console.log(change);
  }

  ngOnInit(){
    console.log('ngOnInit called!');
    // console.log(this.value);
  }
  ngDoCheck(){
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called!');
  }
}
