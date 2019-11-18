import { Component, h } from '@stencil/core';


@Component({
  tag: 'ubd-dropdown',
  styleUrl: 'dropdown.css',
  shadow: true
})
export class Dropdown {
  render() {
    return (
      <div class="dropdown">
        <div class="dropdown-toggle">
          <ubd-dropdown-header></ubd-dropdown-header>
        </div>

        <div class="dropdown-menu">
          <ubd-dropdown-option></ubd-dropdown-option>
          <ubd-dropdown-option>Option 1</ubd-dropdown-option>
          <ubd-dropdown-option>Option 2</ubd-dropdown-option>
          <ubd-dropdown-option>Option 3</ubd-dropdown-option>
        </div>
      </div>
    )
  }
}