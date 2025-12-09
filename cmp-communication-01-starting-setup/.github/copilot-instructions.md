# Copilot Instructions - Vue 3 Component Communication Practice

## Project Overview
This is a **Vue 3 learning project** focused on component communication patterns. The app demonstrates a friend contact list with parent-to-child data flow using props and component-level state management.

## Architecture

### Component Structure
- **`App.vue`**: Root component that manages the friends list data and renders `FriendContact` components
- **`FriendContact.vue`**: Child component that receives friend data via props and manages its own UI state (show/hide details)

### Data Flow Pattern
- Parent (`App.vue`) owns the source of truth: `friends` array in its `data()` function
- Child components receive data through props: `name`, `phoneNumber`, `emailAddress`
- Child components manage their own local UI state: `detailsAreVisible` toggle

**Example from codebase:**
```vue
<!-- Parent passes data down via props -->
<friend-contact 
  :name="friend.name"
  :phone-number="friend.phone"
  :email-address="friend.email"
></friend-contact>

<!-- Child declares props as array (learning project style) -->
props: ['name', 'phoneNumber', 'emailAddress']
```

## Development Workflow

### Commands
- **Start dev server**: `npm run serve` (hot-reload enabled at http://localhost:8080)
- **Build for production**: `npm run build`
- **Lint code**: `npm run lint`

### Vue CLI Configuration
- Uses Vue CLI 4.5 with Babel preset for transpilation
- ESLint configured for Vue 3 with `plugin:vue/vue3-essential`
- Console/debugger statements allowed in development, warned in production

## Code Conventions

### Component Registration
Global component registration in `main.js` using kebab-case names:
```javascript
app.component('friend-contact', FriendContact);
```

### Props Naming
- Use camelCase in JavaScript: `phoneNumber`, `emailAddress`
- Use kebab-case in templates: `:phone-number`, `:email-address`
- Props declared as array of strings (simple style for learning)

### Component State
- Use Options API exclusively (no Composition API in this project)
- Local UI state goes in component's `data()` function
- Shared data lives in parent component

### Styling Approach
- Global styles in `App.vue` using `#app` selector
- No scoped styles - all CSS is global
- Consistent color scheme: primary `#58004d`, accent `#ff0077`

### Template Syntax
- Use `v-for` with `:key` for lists
- Use `v-if` for conditional rendering
- Bind props with `:` shorthand (not `v-bind:`)
- Event handlers with `@` shorthand (not `v-on:`)
- Access props/data with `this.` in template expressions (explicit this syntax)

## Key Files
- `src/main.js`: App initialization and global component registration
- `src/App.vue`: Parent component with friends data array
- `src/components/FriendContact.vue`: Child component demonstrating props and local state
- `.eslintrc.js`: Linting rules for Vue 3

## Important Notes
- **Props are one-way**: Data flows down from parent to child only
- **No prop validation**: Props use simple array syntax without type checking (suitable for learning)
- **No state management library**: App uses component-level state only
- **Options API only**: Do not use Composition API or `<script setup>` syntax in this project
