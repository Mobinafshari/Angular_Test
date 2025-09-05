import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent implements OnInit, OnDestroy {
  messages = input.required<string[]>();
  private messageService = inject(MessagesService);
  private cdRef = inject(ChangeDetectorRef);
  ngOnInit(): void {
    this.messageService.messages$.subscribe(() => {
      this.cdRef.markForCheck();
    });
  }
  ngOnDestroy(): void {
    
  }
  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
