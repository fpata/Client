import { Component } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(private modalService: ModalService){

  }
  
get open() {
    return this.modalService.isOpen;
  }

  get config() {
    return this.modalService.config;
  }

  discardWrapper(event: Event) {
    this.modalService.isOpen = false;
    if (this.config.discard) {
      this.config.discard(event);
    }
  }

  confirmWrapper(event: Event) {
    this.modalService.isOpen = false;
    if (this.config.confirm) {
      this.config.confirm(event);
    }
  }

  ngOnInit() {}
}


export class ModalConfig {
  title?: string = '';
  description?: string = '';
  confirm?: Function = () => {};
  discard?: Function = () => {};

  constructor(
    title: string = '',
    description: string = '',
    confirm = null,
    discard = null
  ) {
    if (title) this.title = title;
    if (description) this.description = description;
    if (confirm) this.confirm = confirm;
    if (discard) this.discard = discard;
  }
}
