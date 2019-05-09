import { defaultAriaRole } from './accessibility.js';
import { ensureId } from './idGeneration.js';
import * as symbols from './symbols.js';
import * as template from './template.js';
import Explorer from './Explorer.js';
import GenericMixin from './GenericMixin.js';
import TabButton from './TabButton.js';
import TabStrip from './TabStrip.js';


const Base =
  GenericMixin(
    Explorer
  );


/**
 * Basic tabs structure for navigation and configuration
 *
 * Use tabs when you want to provide a large set of options or elements than
 * can comfortably fit inline, the options can be coherently grouped into pages,
 * and you want to avoid making the user navigate to a separate page. Tabs work
 * best if you only have a small handful of pages, say 2–7.
 *
 * @inherits Explorer
 * @mixes GenericMixin
 * @elementrole {TabButton} proxy
 * @elementrole {TabStrip} proxyList
 */
class Tabs extends Base {

  get defaultState() {
    return Object.assign(super.defaultState, {
      itemRole: 'tabpanel',
      proxyRole: TabButton,
      proxyListRole: TabStrip,
      tabAlign: 'start'
    });
  }

  [symbols.render](state, changed) {
    super[symbols.render](state, changed);
    const { items, proxies } = state;
    if ((changed.items || changed.proxies)
      && items && proxies) {

      // Recreate association between items and proxies.
      const { proxiesAssigned, itemRole } = state;

      // Create role for each item.
      items.forEach((item, index) => {

        const original = this.originalItemAttributes(item);
        const originalRole = original && original.attributes ?
          original.attributes.role :
          null;
        const role = originalRole || itemRole;
        if (role === defaultAriaRole[item.localName]) {
          item.removeAttribute('role');
        } else {
          item.setAttribute('role', role);
        }

        // Point the item at the proxy.
        const proxy = proxies && proxies[index];
        if (proxy) {
          const proxyId = ensureId(proxy);
          if (!proxy.id) {
            proxy.id = proxyId;
          }
          item.setAttribute('aria-labelledby', proxyId);
        } else {
          item.removeAttribute('aria-labelledby');
        }
      });

      // Update default proxy text from item labels.
      // Also indicate which item is controlled by each proxy.
      proxies.forEach((proxy, index) => {
        const item = items[index];
        if (item) {
          if (!proxiesAssigned) {
            const label = item.getAttribute('aria-label') || item.alt;
            proxy.textContent = label;
          }
          // Point the proxy at the item.
          const itemId = ensureId(item);
          if (!item.id) {
            item.id = itemId;
          }
          proxy.setAttribute('aria-controls', itemId);
        } else {
          proxy.removeAttribute('aria-controls');
        }
      });
    }
    if (changed.generic) {
      if ('generic' in this.$.proxyList) {
        /** @type {any} */ (this.$.proxyList).generic = state.generic;
      }
    }
    if ((changed.generic || changed.proxies || changed.proxiesAssigned) &&
        proxies) {
      if (!state.proxiesAssigned) {
        proxies.forEach(proxy => {
          if ('generic' in proxy) {
            proxy.generic = state.generic;
          }
        });
      }
    }
    if (changed.tabAlign) {
      // Apply alignment to proxy list.
      if ('tabAlign' in this.$.proxyList) {
        const proxyList = /** @type {any} */ (this.$.proxyList);
        proxyList.tabAlign = state.tabAlign;
      }
    }
  }

  /**
   * The alignment of the tabs within the tab strip.
   * 
   * The value of this property will be forwarded to the corresponding
   * property
   * 
   * @type {('start'|'center'|'end'|'stretch')}
   * @default 'start'
   */
  get tabAlign() {
    return this.state.tabAlign;
  }
  set tabAlign(tabAlign) {
    this.setState({ tabAlign });
  }

  get [symbols.template]() {
    return template.concat(super[symbols.template], template.html`
      <style>
        #proxyList {
          z-index: 1;
        }
      </style>
    `);
  }

}


customElements.define('elix-tabs', Tabs);
export default Tabs;
