import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Item } from '../../intefaces/item';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'items-form',
  templateUrl: './items-form.component.html',
  styleUrl: './items-form.component.css'
})
export class ItemsFormComponent implements OnChanges {
  @Input()
  public item: Item | null = null;

  @Output()
  public onValue: EventEmitter<any> = new EventEmitter;

  formItem!: FormGroup;
  public buttonText: string = '';

  constructor(
    private formBuilder: FormBuilder
    ) {
      console.log(this.item);
    }

  ngOnChanges(changes: SimpleChanges): void {
    if ('item' in changes && this.item) {
      console.log(this.item);
    }
  }

  ngOnInit() {

    this.initializeForm();

  }

  emitForm(){
    const itemData = this.formItem.getRawValue();
    console.log(JSON.stringify(itemData));
    const newItem: Item = {
      id: itemData.id,
      name: itemData.name,
      description: itemData.description,
      isStolen: itemData.isStolen,
      owner: itemData.owner
    }

    if (this.formItem.valid) {
      if(this.buttonText !== ''){
        const itemAndOptionData = {item: newItem, option: this.buttonText};
        this.onValue.emit(itemAndOptionData);
      }else{
        this.onValue.emit(newItem);
      }

    }
  }

  onDeleteItem(){

  }

  private initializeForm(): void {
    if (!this.item) {
      this.formItem = this.formBuilder.group({
        id: [''],
        name: ['', Validators.required],
        description: [''],
        isStolen: [false],
        owner: ['', Validators.required],
      });
    } else {
      this.formItem = this.formBuilder.group({
        id: [{ value: this.item.id, disabled: true }],
        name: [this.item.name, Validators.required],
        description: [this.item.description],
        isStolen: [this.item.isStolen],
        owner: [this.item.owner]
      });
    }
  }
}
