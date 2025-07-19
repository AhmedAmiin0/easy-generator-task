# Packages

This directory contains shared packages and libraries that can be used across multiple applications in the monorepo.

## Structure

- **Shared Libraries**: Common utilities, components, and configurations
- **TypeScript Configs**: Shared TypeScript configurations
- **ESLint Configs**: Shared linting rules
- **UI Components**: Reusable UI components
- **Types**: Shared TypeScript type definitions
- **Utils**: Common utility functions

## Creating a New Package

To create a new shared package:

1. Create a new directory in `packages/`
2. Add a `package.json` with appropriate name (e.g., `@easy-generator/package-name`)
3. Add the package to the workspace
4. Use it in your apps by adding it as a dependency

## Example Package Structure

```
packages/
├── ui/                    # Shared UI components
│   ├── package.json
│   ├── src/
│   └── tsconfig.json
├── utils/                 # Shared utilities
│   ├── package.json
│   ├── src/
│   └── tsconfig.json
├── types/                 # Shared types
│   ├── package.json
│   ├── src/
│   └── tsconfig.json
└── config/                # Shared configurations
    ├── eslint/
    ├── typescript/
    └── prettier/
```

## Usage in Apps

```json
{
  "dependencies": {
    "@easy-generator/ui": "workspace:*",
    "@easy-generator/utils": "workspace:*"
  }
}
``` 