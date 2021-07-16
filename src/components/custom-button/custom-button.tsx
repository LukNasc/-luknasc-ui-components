import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'custom-button',
  styleUrl: 'custom-button.css',
  shadow: true,
})
export class CustomButton {
  @Prop() text: string
  @Prop() variant: string
  @Prop() disabled: boolean

  constructor() {
    this.checkClasses.bind(this);
  }

  checkClasses() {
    let classes = ["btn"];
    if (this.variant) {
      switch (this.variant) {
        case "primary":
        case "secondary":
          classes.push("btn-" + this.variant);
          break;
        default:
          console.error("the variant value '" + this.variant + "' is invalid");
      }
    }
    return classes.length > 1 ? classes.join(" ") : classes[0];
  }

  render() {
    return (
      <button class={this.checkClasses()} disabled={this.disabled}>
        {this.text}
      </button>
    );
  }

}
