import { Component, h } from "@stencil/core"

@Component({
  tag: 'ubd-dropdown-option',
  styleUrl: 'dropdown-option.css'
})
export class DropdownOption {
  render() {
    return (
      <div class="dropdown-option">
        <slot></slot>
      </div>
    )
  }
}