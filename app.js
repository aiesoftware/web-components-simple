class SimpleComponent extends HTMLElement {
  constructor() {
    super();

    /**
     * Step 1: Define a template.
     *
     * This template could just as easily exist in the HTML and we could retrieve it with a query selection, although it would no
     * longer be encapsulated within the component to which it belongs.
     */
    const template = document.createElement('template');
    template.innerHTML = ` <div class='container'><h4 id='header'></h4></div>`;

    /**
     * Step 2: Clone the DocumentFragment within the template and update the HTML within it however we see fit.
     *
     * If I didn't clone the DocumentFragment, and instead directly used the one inside the HTMLTemplateElement, then it would be
     * usable only once. This is because as soon as a DocumentFragment is appended to the DOM, it becomes an empty fragment.
     * Therefore, when we attempt to use it a second time, the querySelector call for our inner element will return null, as it won't
     * exist within the fragment.
     */
    const fragment = document.importNode(template.content, true);
    fragment.querySelector('#header').textContent = 'Simple Component';

    /**
     * Step 3: Target the components placeholder on the DOM and insert the newly cloned DocumentFragment
     *
     * The consuming HTML will have an empty <aie-simple-component> tag. It is the job of this component to populate the body of that tag
     * with the DocumentFragment clone.
     */
    const component = document.querySelector('aie-simple-component');
    component.appendChild(fragment);
  }
}

/**
 * Define the component name for the HTML tag, and attach it to it's class.
 */
customElements.define('aie-simple-component', SimpleComponent);
