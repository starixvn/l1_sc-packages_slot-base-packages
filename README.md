# Slot Base Packages

This monorepo contains core packages for slot game development, providing essential functionality like random number generation and board generation. Built with TypeScript and managed through Lerna for efficient development and versioning.

> **Note**: Packages are published to our private registry at npm.lumigame.com. Make sure you have the correct registry configuration and access.

## Quick Start
```bash
# Clone and install dependencies
git clone <repository-url>
yarn install

# Build all packages
yarn lerna run build

# Publish beta version (from package directory)
yarn betaver && yarn pubbeta
```

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

