/**
 * Chemical X Protocol: Style Variables
 * Atoms pass dynamic sizes as CSS custom properties, never as ad-hoc inline rules.
 */
/** Serializes CSS variables for template adapters that bind `style` as a string. */
export declare const toStyleString: (vars: Record<string, string>) => string;
