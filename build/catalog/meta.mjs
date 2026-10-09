/**
 * Hand-maintained catalog facts that the source cannot tell us: which raw
 * element or Vuetify tag each component replaces, whether a tag swap is a safe
 * 1:1 codemod, and which chemx hazard rule each helper fixes.
 */

/** replaces.html: raw tags; replaces.vuetify: Vuetify tags; safe1to1: rename tag, keep props. */
export const COMPONENT_META = {
  'x-alert': { summary: 'Status message banner.', replaces: { html: ['div[role=alert]'], vuetify: ['v-alert'] }, safe1to1: true },
  'x-avatar': { summary: 'User or entity avatar with initials and status.', replaces: { html: ['img'], vuetify: ['v-avatar'] }, safe1to1: true },
  'x-badge': { summary: 'Count or dot badge over content.', replaces: { html: [], vuetify: ['v-badge'] }, safe1to1: true },
  'x-btn': { summary: 'Button.', replaces: { html: ['button'], vuetify: ['v-btn'] }, safe1to1: true },
  'x-card': { summary: 'Surface card with title, text and actions slots.', replaces: { html: ['article'], vuetify: ['v-card'] }, safe1to1: true },
  'x-checkbox': { summary: 'Checkbox with label.', replaces: { html: ['input[type=checkbox]'], vuetify: ['v-checkbox'] }, safe1to1: true },
  'x-chip': { summary: 'Compact tag or filter chip.', replaces: { html: ['span'], vuetify: ['v-chip'] }, safe1to1: true },
  'x-dialog': { summary: 'Modal dialog; wraps content in a card with title/actions slots.', replaces: { html: ['dialog'], vuetify: ['v-dialog'] }, safe1to1: false, aliases: ['XModal', 'x-modal'] },
  'x-divider': { summary: 'Horizontal or vertical rule.', replaces: { html: ['hr'], vuetify: ['v-divider'] }, safe1to1: true },
  'x-grid': { summary: 'CSS grid layout: fixed columns or responsive auto-fill.', replaces: { html: ['div'], vuetify: ['v-row', 'v-col'] }, safe1to1: false },
  'x-list': { summary: 'List container.', replaces: { html: ['ul', 'ol'], vuetify: ['v-list'] }, safe1to1: true },
  'x-list-item': { summary: 'List row with title, subtitle, prepend/append.', replaces: { html: ['li'], vuetify: ['v-list-item'] }, safe1to1: true },
  'x-menu': { summary: 'Activator-anchored popup menu.', replaces: { html: [], vuetify: ['v-menu'] }, safe1to1: true },
  'x-nav-drawer': { summary: 'Side navigation drawer, rail or temporary overlay.', replaces: { html: ['aside', 'nav'], vuetify: ['v-navigation-drawer'] }, safe1to1: true },
  'x-progress-linear': { summary: 'Linear progress bar.', replaces: { html: ['progress'], vuetify: ['v-progress-linear'] }, safe1to1: true },
  'x-sheet': { summary: 'Plain surface container.', replaces: { html: ['div', 'section'], vuetify: ['v-sheet'] }, safe1to1: true },
  'x-skeleton': { summary: 'Loading placeholder shape.', replaces: { html: ['div'], vuetify: ['v-skeleton-loader'] }, safe1to1: false },
  'x-stack': { summary: 'Flex stack layout with spacing-scale gaps.', replaces: { html: ['div'], vuetify: ['v-row'] }, safe1to1: false },
  'x-switch': { summary: 'On/off switch.', replaces: { html: ['input[type=checkbox][role=switch]'], vuetify: ['v-switch'] }, safe1to1: true },
  'x-text': { summary: 'Typography: display, title, subtitle, body, caption, overline, code; tone palette.', replaces: { html: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label', 'code'], vuetify: [] }, safe1to1: false },
  'x-text-field': { summary: 'Single-line text input.', replaces: { html: ['input'], vuetify: ['v-text-field'] }, safe1to1: true },
  'x-textarea': { summary: 'Multi-line text input with optional counter.', replaces: { html: ['textarea'], vuetify: ['v-textarea'] }, safe1to1: true },
  'x-tooltip': { summary: 'Hover/focus tooltip.', replaces: { html: ['[title]'], vuetify: ['v-tooltip'] }, safe1to1: true },
  'm-action-bar': { summary: 'Toolbar with title, start/center/end regions.', replaces: { html: ['header'], vuetify: ['v-toolbar', 'v-app-bar'] }, safe1to1: false },
  'm-confirm-dialog': { summary: 'Confirm/cancel dialog for destructive actions.', replaces: { html: [], vuetify: [] }, safe1to1: false },
  'm-data-table': { summary: 'Sortable data table with empty and loading states.', replaces: { html: ['table'], vuetify: ['v-data-table', 'v-table'] }, safe1to1: false },
  'm-empty-state': { summary: 'Empty state with title, description and action.', replaces: { html: [], vuetify: ['v-empty-state'] }, safe1to1: false },
  'm-kpi-tile': { summary: 'Single metric tile with trend.', replaces: { html: [], vuetify: [] }, safe1to1: false },
  'm-pagination': { summary: 'Page navigation with optional range text.', replaces: { html: [], vuetify: ['v-pagination'] }, safe1to1: false },
  'm-search-input': { summary: 'Debounced search field.', replaces: { html: ['input[type=search]'], vuetify: [] }, safe1to1: false },
  'm-stat-strip': { summary: 'Row of KPI tiles.', replaces: { html: [], vuetify: [] }, safe1to1: false },
  'm-tabs-nav': { summary: 'Tab navigation with icons and badges.', replaces: { html: ['nav[role=tablist]'], vuetify: ['v-tabs'] }, safe1to1: false },
  'm-toast': { summary: 'Auto-dismissing notification.', replaces: { html: [], vuetify: ['v-snackbar'] }, safe1to1: false },
};

const CORE = ['core', 'vue', 'react', 'svelte'];

/** Every helper names the chemx rules whose hazards it is the fix for. */
export const HELPER_META = {
  toResult: { entries: CORE, fixes: ['AI_SLOP_SHALLOW_CATCH', 'ERROR_SWALLOWED_EXCEPTION'], summary: 'Promise or thunk to a [data, error] tuple; never throws.' },
  toResultSync: { entries: CORE, fixes: ['AI_SLOP_SHALLOW_CATCH', 'ERROR_SWALLOWED_EXCEPTION'], summary: 'Sync function to a [data, error] tuple.' },
  mapResult: { entries: CORE, fixes: ['ERROR_SWALLOWED_EXCEPTION'], summary: 'Map the ok value; errors pass through.' },
  unwrapOr: { entries: CORE, fixes: ['DATA_FLOW_OPTIONAL_CHAINING_CHURN'], summary: 'Ok value or a fallback.' },
  allPass: { entries: CORE, fixes: ['COMBINATOR_RAW_BOOLEAN', 'CONTROL_FLOW_INLINE_BOOLEAN'], summary: 'Predicate that passes when every predicate passes (short-circuit).' },
  anyPass: { entries: CORE, fixes: ['COMBINATOR_RAW_BOOLEAN', 'CONTROL_FLOW_INLINE_BOOLEAN'], summary: 'Predicate that passes when any predicate passes.' },
  nonePass: { entries: CORE, fixes: ['COMBINATOR_RAW_BOOLEAN', 'CONTROL_FLOW_INLINE_BOOLEAN'], summary: 'Predicate that passes when no predicate passes.' },
  all: { entries: CORE, fixes: ['COMBINATOR_RAW_BOOLEAN', 'CONTROL_FLOW_INLINE_BOOLEAN'], summary: 'Named condition thunks, all true (short-circuit).' },
  any: { entries: CORE, fixes: ['COMBINATOR_RAW_BOOLEAN', 'CONTROL_FLOW_INLINE_BOOLEAN'], summary: 'Named condition thunks, any true.' },
  none: { entries: CORE, fixes: ['COMBINATOR_RAW_BOOLEAN', 'CONTROL_FLOW_INLINE_BOOLEAN'], summary: 'Named condition thunks, none true.' },
  createRuleSet: { entries: CORE, fixes: ['CONTROL_FLOW_INLINE_BOOLEAN', 'COMPLEXITY_CYCLOMATIC_HIGH'], summary: 'Multi-clause validation that names the failing rule.' },
  createPredicateFilter: { entries: CORE, fixes: ['AI_SLOP_UTILITY_REINVENTION', 'CONTROL_FLOW_INLINE_BOOLEAN'], summary: 'Reusable list filter from named predicates.' },
  matchesAnyPattern: { entries: CORE, fixes: ['COMBINATOR_RAW_BOOLEAN'], summary: 'String matches any substring or RegExp.' },
  matchesAllPredicates: { entries: CORE, fixes: ['COMBINATOR_RAW_BOOLEAN'], summary: 'Item passes every predicate.' },
  createDisposer: { entries: CORE, fixes: ['LIFECYCLE_ORPHANED_LISTENER', 'TIMER_DISCIPLINE'], summary: 'Collects teardowns; runs them once in reverse order.' },
  listen: { entries: CORE, fixes: ['LIFECYCLE_ORPHANED_LISTENER'], summary: 'addEventListener that returns its own teardown.' },
  after: { entries: CORE, fixes: ['TIMER_DISCIPLINE', 'RENDER_HACK_TIMEOUT'], summary: 'setTimeout that returns its own teardown.' },
  every: { entries: CORE, fixes: ['TIMER_DISCIPLINE'], summary: 'setInterval that returns its own teardown.' },
  createDebounce: { entries: CORE, fixes: ['TIMER_DISCIPLINE'], summary: 'Debounced function with cancel().' },
  createRestartableTimeout: { entries: CORE, fixes: ['TIMER_DISCIPLINE'], summary: 'Re-armable one-shot timer (pollers).' },
  createRestartableInterval: { entries: CORE, fixes: ['TIMER_DISCIPLINE'], summary: 'Stoppable, restartable interval.' },
  createAsyncRunner: { entries: CORE, fixes: ['ERROR_SWALLOWED_EXCEPTION'], summary: 'Latest-wins async loader engine behind useAsyncData.' },
  fallback: { entries: CORE, fixes: ['DATA_FLOW_OPTIONAL_CHAINING_CHURN'], summary: 'Value or default for null/undefined.' },
  normalizeArray: { entries: CORE, fixes: ['DATA_FLOW_OPTIONAL_CHAINING_CHURN'], summary: 'Nullish, scalar or array to an array.' },
  deepFreeze: { entries: CORE, fixes: ['SYNTHETIC_MOCK_DATA'], summary: 'Recursively frozen config objects.' },
  useAsyncData: { entries: ['vue', 'react', 'svelte'], fixes: ['ERROR_SWALLOWED_EXCEPTION', 'AI_SLOP_SHALLOW_CATCH'], summary: 'data/error/isLoading loader; latest call wins; dropped on unmount.' },
  usePredicateFilter: { entries: ['vue', 'react', 'svelte'], fixes: ['AI_SLOP_UTILITY_REINVENTION', 'CONTROL_FLOW_INLINE_BOOLEAN'], summary: 'Reactive filtered list with count and hasMatches.' },
  useSelfCleaningInterval: { entries: ['vue', 'react', 'svelte'], fixes: ['TIMER_DISCIPLINE'], summary: 'Interval cleared with the component.' },
  useSelfCleaningTimeout: { entries: ['vue', 'react', 'svelte'], fixes: ['TIMER_DISCIPLINE', 'RENDER_HACK_TIMEOUT'], summary: 'Timeout cleared with the component.' },
  useDisposer: { entries: ['vue', 'react', 'svelte'], fixes: ['LIFECYCLE_ORPHANED_LISTENER', 'TIMER_DISCIPLINE'], summary: 'Disposer flushed on unmount (onScopeDispose / effect cleanup / onDestroy).' },
  useDebouncedCallback: { entries: ['react'], fixes: ['TIMER_DISCIPLINE'], summary: 'Debounced latest callback, cancelled on unmount.' },
};
