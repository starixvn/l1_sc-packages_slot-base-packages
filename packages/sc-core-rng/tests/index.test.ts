// src/index.test.ts
import { secureShuffle, securePickSet, securePickOne, secureRandomBool, secureRandomFloat, secureRandomRange, secureUUID } from "../src/index";

describe("RNG Functions", () => {
    const testArray = [1, 2, 3, 4, 5];

    test("secureShuffle should return array of same length", () => {
        const result = secureShuffle(testArray);
        expect(result.length).toBe(testArray.length);
        expect(result).not.toEqual(testArray); // Very unlikely to be same order
    });

    test("securePickSet should return correct number of items", () => {
        const count = 3;
        const result = securePickSet(testArray, count);
        expect(result.length).toBe(count);
        result.forEach((item) => expect(testArray).toContain(item));
    });

    test("securePickOne should return single item from array", () => {
        const result = securePickOne(testArray);
        expect(testArray).toContain(result);
    });

    test("secureRandomBool should return a boolean", () => {
        const result = secureRandomBool();
        expect(typeof result).toBe("boolean");
    });

    test("secureRandomFloat should return number between 0 and 1", () => {
        const result = secureRandomFloat();
        expect(typeof result).toBe("number");
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThan(1);
    });

    test("secureRandomRange should return number within range", () => {
        const min = -10;
        const max = 10;
        const result = secureRandomRange(min, max);
        expect(Number.isInteger(result)).toBe(true);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });

    test("secureRandomRange should handle large ranges", () => {
        const min = 0;
        const max = Number.MAX_SAFE_INTEGER;
        const result = secureRandomRange(min, max);
        expect(Number.isInteger(result)).toBe(true);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });

    test("secureUUID should return valid UUID v4", () => {
        const result = secureUUID();
        expect(typeof result).toBe("string");
        expect(result).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
    });

    describe("Edge Cases", () => {
        test("should handle basic edge cases", () => {
            expect(() => securePickSet(testArray, -1)).toThrow();
            expect(() => securePickSet(testArray, 6)).toThrow();
            expect(() => securePickOne([])).toThrow();
        });

        test("should handle secureRandomRange edge cases", () => {
            expect(() => secureRandomRange(10, 5)).toThrow("Min cannot be greater than max");
            expect(() => secureRandomRange(1.5, 5)).toThrow("Min and max must be integers");
            expect(() => secureRandomRange(5, 5.5)).toThrow("Min and max must be integers");

            const result = secureRandomRange(5, 5);
            expect(result).toBe(5);
        });
    });
});
