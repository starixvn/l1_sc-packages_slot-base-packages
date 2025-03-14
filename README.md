# Slot Base Packages

Monorepo for slot game core packages managed with Lerna.

## Packages

- `@sc/core-rng` - Core random number generation utilities
- `@sc/slot-board-generator` - Slot board generation and management

## Development Workflow

### Setup
```bash
yarn install
```

### Build
Build all packages in the correct dependency order:
```bash
yarn lerna run build
```

### Publishing Beta Versions
We use a streamlined process for publishing beta versions:

1. Bump beta version (in package directory):
```bash
yarn betaver
```

2. Publish beta to private registry:
```bash
yarn pubbeta
```

Or combine both steps:
```bash
yarn betaver && yarn pubbeta
```

## Benefits of Lerna

- **Single Repository**: Manage multiple packages in one repository
- **Dependency Management**: Automatic handling of inter-package dependencies
- **Parallel Execution**: Build and test packages in parallel
- **Version Control**: Coordinated versioning across packages
- **Smart Publishing**: Publish only packages that have changed

