import { Component, h, Prop, Event, EventEmitter } from "@stencil/core"

@Component({
  tag: 'ubd-dropdown-option',
  styleUrl: 'dropdown-option.css',
  shadow: true
})
export class DropdownOption {
  @Prop() value: string;
  @Event() valueEmitter: EventEmitter;

  // @Event()
  valueHandler = () => {
    this.valueEmitter.emit(this.value)
    // console.log(this.value);
  }

  render() {
    return (
      <div class="dropdown-option" onClick={this.valueHandler}>
        <slot></slot>
      </div>
    )
  }
}