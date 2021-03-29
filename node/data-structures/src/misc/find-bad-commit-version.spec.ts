import { findBadCommitVersion } from './find-bad-commit-version';

describe('findBadCommitVersion', () => {
    // Assert if setTimeout was called properly
    it('bad version in the middle', () => {
        let isBadVersion = (n: number) => {
            return n >= 325;
        };
        expect(findBadCommitVersion(500, isBadVersion)).toBe(325);

        isBadVersion = (n: number) => {
            return n >= 99;
        };
        expect(findBadCommitVersion(500, isBadVersion)).toBe(99);

        isBadVersion = (n: number) => {
            return n >= 500;
        };
        expect(findBadCommitVersion(500, isBadVersion)).toBe(500);

        isBadVersion = (n: number) => {
            return n >= 1;
        };
        expect(findBadCommitVersion(500, isBadVersion)).toBe(1);
    });
});
