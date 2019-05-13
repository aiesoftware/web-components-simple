### Simple Web Component

A barebones example of creating and rendering a web component. 
 
Within the component itself, it is essentially a 3 step process:

1) Define a template
2) Clone the DocumentFragment within the template and update the HTML within it however we see fit
3) Target the components placeholder on the DOM and insert the newly cloned DocumentFragment

Alongside that, we must do the following:

1) Insert the component's tag in the HTML
2) Register the component using `customElements.define(tagName, className)` 
