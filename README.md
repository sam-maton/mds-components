# mds-components

Angular component library for the MDS design system. Built with [mds-styles](https://github.com/sam-maton/mds-styles) design tokens.

## Installation

```bash
npm install @smaton/mds-components @smaton/mds-styles
```

> **Note:** `@smaton/mds-styles` provides the CSS custom properties (design tokens) at runtime. Load it once in your application's root stylesheet.

### 1. Load the MDS design tokens

In your app's global stylesheet (e.g. `src/styles.css` or `src/styles.scss`):

```scss
@use "@smaton/mds-styles/scss" as mds;
```

Or with plain CSS:

```css
@import "@smaton/mds-styles";
```

### 2. Import the component

```typescript
import { MdsButtonComponent } from '@smaton/mds-components';

@Component({
  imports: [MdsButtonComponent],
  // ...
})
```

---

## Components

### `<mds-button>`

A versatile button with three variants and full disabled support.

#### Inputs

| Input      | Type                              | Default    | Description                     |
|------------|-----------------------------------|------------|---------------------------------|
| `variant`  | `'filled' \| 'outlined' \| 'text'` | `'filled'` | Visual style of the button      |
| `disabled` | `boolean`                         | `false`    | Disables interaction and styles |

#### Variants

```html
<!-- Filled (default) — solid brand-primary background -->
<mds-button>Save</mds-button>
<mds-button variant="filled">Save</mds-button>

<!-- Outlined — transparent with brand-primary border -->
<mds-button variant="outlined">Cancel</mds-button>

<!-- Text — no background or border, text-only -->
<mds-button variant="text">Learn more</mds-button>
```

#### Disabled state

```html
<mds-button [disabled]="true">Save</mds-button>
<mds-button variant="outlined" [disabled]="true">Cancel</mds-button>
```

---

## Development

### Build the library

```bash
npm run build
```

### Run tests

```bash
npm test
```

### Publish to npm

```bash
npm run publish:lib
```

---

## Design tokens

All styles are driven by [mds-styles](https://github.com/sam-maton/mds-styles) SCSS variables. The following values are used in the button component that are **not yet present in mds-styles** and are candidates for new design tokens:

| Name                     | Value           | Usage                                    |
|--------------------------|-----------------|------------------------------------------|
| `$button-font-size`      | `0.875rem`      | Button label font size                   |
| `$button-font-weight`    | `500`           | Button label font weight                 |
| `$button-line-height`    | `1.5`           | Button label line height                 |
| `$button-letter-spacing` | `0.01em`        | Button label letter spacing              |
| `$button-padding-y`      | `0.5rem`        | Top/bottom padding                       |
| `$button-padding-x`      | `1rem`          | Left/right padding                       |
| `$button-min-width`      | `5rem`          | Minimum button width                     |
| `$button-transition`     | `150ms ease`    | Hover/active transition timing           |
