import { Component, DestroyRef, OnInit, inject, OnDestroy, signal, effect} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  // currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  // private interval?: NodeJS.Timeout;
  private destroyRef = inject(DestroyRef) // only available 16+
  
  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    });
  //   effect((onCleanup) => {
  //   const tasks = getTasks();
  //   const timer = setTimeout(() => {
  //     console.log(`Current number of tasks: ${tasks().length}`);
  //   }, 1000);
  //   onCleanup(() => {
  //     clearTimeout(timer);
  //   });
  // });
    // console.log(this.currentStatus())
  }

  // constructor() {
  //   setInterval(() => {
  //     const rnd = Math.random(); // 0-1

  //     if (rnd < 0.5) {
  //       this.currentStatus = 'online';
  //     } else if (rnd < 0.9) {
  //       this.currentStatus = 'offline';
  //     } else {
  //       this.currentStatus = 'unknown';
  //     }
  //   }, 5000);
  // }

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random(); // 0-1

      if (rnd < 0.5) {
        // this.currentStatus = 'online';
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        // this.currentStatus = 'offline';
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  // ngAfterViewInit() {
  //   console.log('After view init');
  // }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}
