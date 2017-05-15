//
// NOTE: This is a prototype, and not yet ready for real use.
//

import Symbol from '../mixins/Symbol.js';
import symbols from '../mixins/symbols.js';


const appendedToDocumentSymbol = Symbol('appendedToDocumentSymbol');
const previousFocusedElementSymbol = Symbol('previousFocusedElement');


export default function OverlayMixin(base) {

  // The class prototype added by the mixin.
  class Overlay extends base {

    [symbols.afterTransition](transition) {
      if (super[symbols.afterTransition]) { super[symbols.afterTransition](transition); }
      switch (transition) {
        case 'closing':
          makeVisible(this, false);
          this.style.zIndex = null;
          break;
      }
    }

    [symbols.beforeTransition](transition) {
      if (super[symbols.beforeTransition]) { super[symbols.beforeTransition](transition); }
      switch (transition) {
        case 'opening':
          this[previousFocusedElementSymbol] = document.activeElement;
          const zIndex = maxZIndexInUse();
          this.style.zIndex = zIndex + 1;
          makeVisible(this, true);
          this.focus();
          break;

        case 'closing':
          if (this[previousFocusedElementSymbol]) {
            this[previousFocusedElementSymbol].focus();
          }
          break;
      }
    }

    connectedCallback() {
      if (super.connectedCallback) { super.connectedCallback(); }
      // attributes.writePendingAttributes(this);
      this.setAttribute('tabindex', '0');
      if (this.opened) {
        makeVisible(this, this.opened);
      }
    }

    get opened() {
      return super.opened;
    }
    set opened(opened) {
      const parsedOpened = String(opened) === 'true';
      const changed = parsedOpened !== this.opened;
      if ('opened' in base.prototype) { super.opened = parsedOpened; }
      if (changed) {
        if (parsedOpened) {
          // Opening
          if (!isElementInDocument(this)) {
            this[appendedToDocumentSymbol] = true;
            document.body.appendChild(this);
          }
        }
        if (!this[symbols.applyTransition]) {
          // Do synchronous open/close.
          const transition = parsedOpened ? 'opening' : 'closing';
          this[symbols.beforeTransition](transition);
          this[symbols.afterTransition](transition);
        }
        if (!parsedOpened) {
          // Closing
          if (this[appendedToDocumentSymbol]) {
            this.parentNode.removeChild(this);
            this[appendedToDocumentSymbol] = false;
          }
        }
      }
    }
  }

  return Overlay;

}


// Return true if the element is in the document.
// This is like document.contains(), but also returns true for elements in
// shadow trees.
function isElementInDocument(element) {
  if (document.contains(element)) {
    return true;
  }
  const parent = element.parentNode || element.host;
  return parent ?
    isElementInDocument(parent) :
    false;
}


function makeVisible(element, visible) {
  element.classList.toggle('visible', visible);
}


function maxZIndexInUse() {
  const elements = document.body.querySelectorAll('*');
  const zIndices = Array.prototype.map.call(elements, element => {
    const style = getComputedStyle(element);
    let zIndex = 0;
    if (style.position !== 'static' && style.zIndex !== 'auto') {
      const parsed = parseInt(style.zIndex);
      zIndex = !isNaN(parsed) ? parsed : 0;
    }
    return zIndex;
  });
  return Math.max(...zIndices);
}