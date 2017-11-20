import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'hello-world',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;

  @Prop() last: string;

  render() {
    return <div>Hello, World! I'm {this.first} {this.last}</div>;
  }
}
