import {copy} from '@array-like/copy';

export function mock(compare, a, i, j) {
	const x = Array.prototype.slice.call(a, i, j);
	x.sort(compare);
	copy(x, 0, j - i, a, i);
}
