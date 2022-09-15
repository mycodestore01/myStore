import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
  @Input() data: any;
  @Output() addButtonTrigger = new EventEmitter<any>();

  constructor() { }

  ngOnChanges() {
    console.log('ngDoCheck')
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log('ngDoCheck')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInIt() {
    console.log('ngAfterViewInIt')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')   
  }

  add() {
    console.log('add button is cliked');
    this.addButtonTrigger.emit(true)
  }

}
