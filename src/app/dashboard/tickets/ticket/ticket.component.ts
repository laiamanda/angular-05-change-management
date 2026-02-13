import { Component, input, output, signal} from '@angular/core';

import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>(); // can add alias, transform
  detailsVisible = signal(false);
  close = output(); // can add alias, transform; not recommend but option

  onToggleDetails() {
    //this.detailsVisible.set(!this.detailsVisible()); // Method 1
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted(){
    this.close.emit()
  }
}
