import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() user = { name: 'Dareen', age: 22 };

  ngOnInit() {
    console.log('Component initialized!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges triggered:', changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck detected a change!');
  }

  ngAfterViewInit() {
    console.log('View is initialized');
  }
  ngAfterViewChecked() {
    console.log('View checked for changes');
  }

  ngOnDestroy() {
    console.log('child component is being destroyed');
  }
}
