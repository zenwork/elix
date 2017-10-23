// Elix is a JavaScript project, but we use TypeScript as an internal tool to
// confirm our code is type safe.

/// <reference path="../utilities/shared.d.ts"/>

declare const OverlayMixin: Mixin<{
  connectedCallback?(): void;
}, {
  close(): Promise<void>;
  closed: boolean;
  connectedCallback(): void;
  open(): Promise<void>;
  opened: boolean;
}>;

export default OverlayMixin;
