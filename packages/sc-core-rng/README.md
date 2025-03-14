# sc-core-rng

Secure RNG core functions using node:crypto.

## Installation

```bash
npm install sc-core-rng
```

## Functions

```typescript
import {
  secureShuffle<T>(array: T[]): T[],           // Shuffle array
  securePickSet<T>(array: T[], count: n): T[], // Pick n unique items
  securePickOne<T>(array: T[]): T,             // Pick one random item
  secureRandomBool(): boolean,                  // Random boolean
  secureRandomFloat(): number,                  // Random float [0,1)
  secureRandomRange(min: n, max: n): number,    // Random int in range
  secureUUID(): string                         // Generate UUID v4
} from "sc-core-rng";
```

## API

### secureShuffle<T>(array: T[]): T[]

Securely shuffles an array using the Fisher-Yates algorithm with crypto.randomInt.

### securePickSet<T>(array: T[], count: number): T[]

Securely picks n unique items from an array.

### securePickOne<T>(array: T[]): T

Securely picks one random item from an array.

### secureRandomBool(): boolean

Generates a cryptographically secure random boolean value.

### secureRandomFloat(): number

Generates a cryptographically secure random number between 0 (inclusive) and 1 (exclusive) using crypto.randomBytes.

### secureRandomRange(min: number, max: number): number

Generates a cryptographically secure random integer between min and max (inclusive). Uses crypto.randomInt for small ranges and crypto.randomBytes for large ranges to ensure full entropy.

### secureUUID(): string

Generates a cryptographically secure v4 UUID using crypto.randomUUID.

## Security

This package uses Node.js's built-in crypto module functions for secure random number generation:

- crypto.randomInt() for efficient integer ranges
- crypto.randomBytes() for raw entropy and floating-point numbers
- crypto.randomUUID() for UUID generation
