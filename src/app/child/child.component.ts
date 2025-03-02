import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() user = { name: 'Dareen', age: 22 };

  ngOnInit() {
    console.log('ngOnInit:Component initialized!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges triggered:', changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck detected a change!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit:View is initialized');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked:View checked for changes');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit:content is initialized');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked: Content checked');
  }  
  ngOnDestroy() {
    console.log('ngOnDestroy:child component is being destroyed');
  }
}
