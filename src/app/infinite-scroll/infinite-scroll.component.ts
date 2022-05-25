import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.sass']
})
export class InfiniteScrollComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    for(let i=1; i<=100; i++){
      this.Rana.push(i)
    }
    console.log(this.Rana)
  }
  Rana : any =[]; 
  onScroll() {
    const length = this.Rana.length;
    setTimeout(() =>{
      const p :any = ' '.repeat(100).split('').map((s,i) => i + 1 + length);
      while(p.length) this.Rana.push(p.shift());
    }, 1000);
  }

}
