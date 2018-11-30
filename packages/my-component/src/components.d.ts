/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface MyComponentAttributes extends StencilHTMLAttributes {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }

  interface MyComponentToggle {
    'toggled': boolean;
  }
  interface MyComponentToggleAttributes extends StencilHTMLAttributes {
    'onToggle'?: (event: CustomEvent) => void;
    'toggled'?: boolean;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MyComponent': Components.MyComponent;
    'MyComponentToggle': Components.MyComponentToggle;
  }

  interface StencilIntrinsicElements {
    'my-component': Components.MyComponentAttributes;
    'my-component-toggle': Components.MyComponentToggleAttributes;
  }


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLMyComponentToggleElement extends Components.MyComponentToggle, HTMLStencilElement {}
  var HTMLMyComponentToggleElement: {
    prototype: HTMLMyComponentToggleElement;
    new (): HTMLMyComponentToggleElement;
  };

  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement
    'my-component-toggle': HTMLMyComponentToggleElement
  }

  interface ElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'my-component-toggle': HTMLMyComponentToggleElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}