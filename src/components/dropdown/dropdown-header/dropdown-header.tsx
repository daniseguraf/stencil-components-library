import { Component, h, Listen, State } from "@stencil/core"

@Component({
  tag: 'ubd-dropdown-header',
  styleUrl: 'dropdown-header.css',
  shadow: true
})
export class DropdownHeader {

  @State() value: any;

  @Listen('valueEmitter')
  valueEmitterHandler(event: CustomEvent) {
    console.log(event);
    this.value = event.detail;
    console.log(this.value);

  }



  render() {
    return (
      <div>
        {this.value}
        <slot></slot>
      </div>
    )
  }
}