import { ownEvent } from './utilities.js';
import * as symbols from './symbols.js';
import * as template from './template.js';
import KeyboardMixin from './KeyboardMixin.js';
import PopupSource from './PopupSource.js';


const Base = 
  KeyboardMixin(
    PopupSource
  );


/**
 * A button that invokes an attached popup
 * 
 * @inherits PopupSource
 * @mixes KeyboardMixin
 */
class PopupButton extends Base {

  componentDidMount() {
    super.componentDidMount();

    // If the top-level element gets the focus while the popup is open, the most
    // likely expanation is that the user hit Shift+Tab to back up out of the
    // popup. In that case, we should close.
    this.addEventListener('focus', async (event) => {
      const hostFocused = !ownEvent(this.$.popup, event);
      // It's possible to get a focus event in the initial mousedown on the
      // source button before the popup is even rendered. We don't want to close
      // in that case, so we check to see if we've already measured the popup
      // dimensions (which will be true if the popup fully completed rendering).
      const measured = this.state.popupHeight !== null;
      if (hostFocused && this.opened && measured) {
        this[symbols.raiseChangeEvents] = true;
        await this.close();
        this[symbols.raiseChangeEvents] = false;
      }
    });
  }

  get defaultState() {
    return Object.assign(super.defaultState, {
      role: 'button',
      sourceRole: 'button'      
    });
  }

  [symbols.keydown](event) {
    let handled;

    switch (event.key) {

      // Space or Up/Down arrow keys open the popup.
      case ' ':
      case 'ArrowDown':
      case 'ArrowUp':
        if (this.closed) {
          this.open();
          handled = true;
        }
        break;
    }

    // Prefer mixin result if it's defined, otherwise use base result.
    return handled || (super[symbols.keydown] && super[symbols.keydown](event));
  }

  [symbols.render](changed) {
    super[symbols.render](changed);
    if (changed.sourceRole) {
      // Desktop popups generally open on mousedown, not click/mouseup. On mobile,
      // mousedown won't fire until the user releases their finger, so it behaves
      // like a click.
      const source = this.$.source;
      source.addEventListener('mousedown', event => {
        // mousedown events fire even if button is disabled, so we need
        // to explicitly ignore those.
        if (this.disabled) {
          return;
        }
        // Only handle primary button mouse down to avoid interfering with
        // right-click behavior.
        /** @type {any} */
        const cast = event;
        if (cast.button && cast.button !== 0) {
          return;
        }
        // We give the default focus behavior time to run before opening the
        // popup. See note below.
        setTimeout(() => {
          if (!this.opened) {
            this[symbols.raiseChangeEvents] = true;
            this.open();
            this[symbols.raiseChangeEvents] = false;
          }
        });
        event.stopPropagation();
        // We don't prevent the default behavior for mousedown. Among other
        // things, it sets the focus to the element the user moused down on.
        // That's important for us, because OverlayMixin will remember that
        // focused element (i.e., this element) when opening, and restore focus to
        // it when the popup closes.
      });
      source.tabIndex = -1;
    }
    if (changed.disabled) {
      this.$.source.style.borderStyle = this.state.disabled ? null : 'solid';
    }
  }

  get [symbols.template]() {
    return template.concat(super[symbols.template], template.html`
      <style>
        #source {
          background: buttonface;
          color: inherit;
          cursor: default;
          display: block;
          font-size: inherit;
          font-family: inherit;
          font-style: inherit;
          margin: 0;
          outline: none;
          padding: 0.25em 0.5em;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
          -moz-user-select: none;
          -ms-user-select: none;
          -webkit-user-select: none;
          user-select: none;
          white-space: nowrap;
        }
      </style>
    `);
  }

}


export default PopupButton;
customElements.define('elix-popup-button', PopupButton);
