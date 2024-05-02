# Send Crypto Form Practice

## Demo: 

Here: https://send-crypto-form-practice.congnv.me

## Setup

### Installation

Install package
```
npm install
```

### Available Scripts

Runs the app in the development mode
```
npm run dev
```

Builds the app for production to the `dist` folder
```
npm run build
```

Runs the app in the production mode. You need run this command first `npm run build`
```
npm run preview
```

Find and fix problems in your JavaScript code - ESLint
```
npm run lint
```
```
npm run lint:fix
```

## Project Structure

Grouping by "File Types" and Features

```
└── src/
    ├── components/
    │   ├── common/ - All shared componment
    │   ├── form/
    │   ├── icons/
    │   ├── token/
    │   ├── user/
    │   ├── ....
    ├── hooks/
    │   ├── ....
    ├── helpers/
    │   ├── ....
    ├── types.ts - All shared type, interface
    ├── ...
```

Why:
- Simple & straightforward
- Stuff are grouped by features
- Suitable for medium projects

## Implementation Decisions

Vite
- Faster spin-up of the development server
- Less waiting time for reflecting file updates
- Improved build performance

Tailwindcss
- Utility-first approach
- Purge Unused Styles Feature
- Works well with other tools
- Reusability and Consistency

Floating UI
- Interactions for React
- Tree-shakeable and smaller bundle
- Helps me easily create dropdowns, selects, tooltips, ...

React Hook Form
- Reducing rendering
- Faster mounting process
- Typescript Compatibility

Zod
- Suitable with React Hook Form 
- Developer-friendly
- TypeScript first-class support
- Smaller bundle

## Completion Time

It took me about 5 hours to complete
