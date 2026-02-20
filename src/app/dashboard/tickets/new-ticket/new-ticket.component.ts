import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild, output} from '@angular/core';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); // 17+ //this.form()
  // @ViewChild(ButtonComponent) buttons; // an option for getting more elements

  // onSubmit(titleElement: HTMLInputElement, ticketText: String ) {
  //   // console.dir(titleElement);
  //   console.dir(titleElement.value);
  // }

  // @Output() add = new EventEmitter();
  enteredTitle = '';
  enteredText = '';

  add = output<{title: string; text: string}>();

  ngOnInit() {
    console.log('On init');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(){
    console.log('After View Init');
    console.log(this.form?.nativeElement);
  }

  onSubmit() { // titleElement: string, ticketText: string
    // console.dir(titleElement);
    // form.reset();

    this.add.emit({title: this.enteredTitle, text: this.enteredText});

    // this.form?.nativeElement.reset();  // Reset Form
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
