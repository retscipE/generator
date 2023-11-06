import { Numbers, lowerLetters, upperLetters } from "./types/labels";

export function genRandLetter(upper: boolean): string {
    var l: string;
    if (upper === true) {
        l = upperLetters[Math.floor(Math.random() * ((26-1)+1) + 1)-1]
    } else {
        l = lowerLetters[Math.floor(Math.random() * ((26-1)+1) + 1)-1]
    }
    return l;
}

/**
 * Returns a random number 1 through 9
 */
export function genRandNum(): number {
    return Numbers[Math.floor(Math.random() * ((9-1)+1) + 1)-1]
}

/**
 * Returns a random number in a certain range.
 */
export function genRangeNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}