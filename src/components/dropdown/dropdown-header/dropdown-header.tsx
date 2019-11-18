import { Component, h } from "@stencil/core"

@Component({
  tag: 'ubd-dropdown-header',
  styleUrl: 'dropdown-header.css'
})
export class DropdownOption {
  render() {
    return (
      <div><slot>Select an option</slot></div>
    )
  }
}