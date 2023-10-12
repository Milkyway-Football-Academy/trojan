export function getFirstLetters(input: string): string {
    const words = input.trim().split(' ');

    if (words.length === 1) {
        return words[0].charAt(0);
    } else if (words.length === 2) {
        return words[0].charAt(0) + words[1].charAt(0);
    } else {
        return '';
    }
}
