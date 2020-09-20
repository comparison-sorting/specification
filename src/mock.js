import {copy} from '@aureooms/js-array';

export function mock(compare, a, i, j) {
	const x = Array.prototype.slice.call(a, i, j);
	x.sort(compare);
	copy(x, 0, j - i, a, i);
}
