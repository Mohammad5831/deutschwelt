# React + Vite Application

A modern React application built with Vite, TypeScript, and Tailwind CSS.

## Development Server

The project uses a Vite development server.

The development environment provides:

* Fast development builds
* Hot Module Replacement (HMR)
* Automatic updates when source files change
* Local preview support

The development server can be started using the project's package scripts.

## Project Structure

The main project structure is organized as follows:

* `src/main.tsx` — React application entry point. Imports the global stylesheet and mounts the application into the `#root` element.
* `src/App.tsx` — Main application component and primary entry point for UI development.
* `src/index.css` — Global stylesheet and Tailwind CSS entry point.
* `index.html` — Vite HTML shell containing the application root element.
* `package.json` — Project dependencies and development, build, preview, and formatting scripts.
* `vite.config.ts` — Vite configuration, React integration, Tailwind CSS integration, and the `@` path alias.
* `.mise.toml` — Project toolchain configuration for Node.js and pnpm.

Only inspect additional files when required by the current task or when following an import or dependency requires additional context.

## Technology Stack

### Runtime

* React 19
* React DOM 19

### Styling

* Tailwind CSS v4
* `@tailwindcss/vite`

### Build & Development

* Vite 8
* TypeScript 5.7
* `@vitejs/plugin-react`

### Formatting

* oxfmt

## Styling

The project uses **Tailwind CSS v4** through the Vite integration.

Tailwind is imported directly from the global stylesheet:

```css
@import "tailwindcss";
```

No Tailwind configuration file or PostCSS configuration is required for the current setup.

Use Tailwind utility classes directly in JSX for component-level styling.

Global CSS rules, custom fonts, CSS variables, and Tailwind theme customization should be placed in:

```text
src/index.css
```

### Fonts

`src/main.tsx` loads the global stylesheet through `src/index.css`.

CSS `@import` statements should remain at the beginning of the stylesheet, followed by any `@font-face` declarations and global font-family definitions.

## Code Quality

Follow these conventions when modifying the project:

### Strings

Use double quotes for strings containing apostrophes:

```tsx
const message = "We're here to help";
```

Alternatively, escape apostrophes when using single quotes.

### JSX

Ensure that:

* JSX elements are properly closed.
* Braces are balanced.
* Components remain syntactically valid.
* Imports are kept clean and relevant.

### Components

Prefer reusable components and keep UI logic organized.

Components should use default exports unless there is a specific reason to use another export style.

## Development Guidelines

When extending the application:

1. Reuse existing components and styles where possible.
2. Keep the existing project structure consistent.
3. Use Tailwind utilities for component styling.
4. Keep global styles inside `src/index.css`.
5. Avoid unnecessary dependencies.
6. Maintain responsive behavior across supported screen sizes.
7. Verify the application builds successfully after significant changes.
8. Keep components focused and reusable.

## Build Verification

Before committing significant changes, verify that:

* TypeScript contains no new errors.
* JSX is valid.
* Imports resolve correctly.
* The Vite build completes successfully.
* Existing functionality remains intact.
* Responsive layouts continue to work as expected.
