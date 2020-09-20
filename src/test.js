import {issorted} from '@aureooms/js-sort';
import {shuffle} from '@aureooms/js-random';
import {increasing, decreasing} from '@aureooms/js-compare';
import {
	sorted,
	range,
	exhaust,
	list,
	map,
	product,
	chain
} from '@aureooms/js-itertools';
import functools from '@aureooms/js-functools';

const set = (A) => sorted(increasing, A);

const macro = (t, sortname, method, Ctor, n, compare) => {
	// SETUP ARRAY
	const data = set(range(n));
	const a = Ctor.from(data);

	// SORT ARRAY
	shuffle(a, 0, n);
	method(compare, a, 0, n);

	// TEST PREDICATE
	t.is(n, a.length, 'check length');
	t.is(undefined, a[-1], 'check left boundary');
	t.is(undefined, a[n], 'check right boundary');
	t.is(n, issorted(compare, a, 0, n), 'check sorted');
	t.deepEqual(data, set(a), 'check data');
};

macro.title = (title, sortname, _, Ctor, n, compare) =>
	`${sortname} (new ${Ctor.name}(${n}), ${compare.name})`;

const DEFAULT_COMPARE_FUNCTIONS = [increasing, decreasing];

const DEFAULT_LENGTH_VALUES = [0, 1, 2, 10, 63, 64, 65];

const DEFAULT_ARRAY_TYPES = [
	Array,
	Int8Array,
	Uint8Array,
	Int16Array,
	Uint16Array,
	Int32Array,
	Uint32Array,
	Float32Array,
	Float64Array
];

const DEFAULT_OPTIONS = {
	compare: DEFAULT_COMPARE_FUNCTIONS,
	length: DEFAULT_LENGTH_VALUES,
	array: DEFAULT_ARRAY_TYPES
};

const wrap = (l) => map((x) => [x], l[Symbol.iterator] === undefined ? [l] : l);

export function test(_test, algorithms, options) {
	options = Object.assign({}, DEFAULT_OPTIONS, options);
	exhaust(
		map(
			(args) => {
				functools.star((sortname, sort, compare, size, type) => {
					if (
						type.BYTES_PER_ELEMENT &&
						size > 2 ** (type.BYTES_PER_ELEMENT * 8)
					) {
						return;
					}

					_test(macro, sortname, sort, type, size, compare);
				}, list(chain(args)));
			},

			product(
				[
					algorithms,
					wrap(options.compare),
					wrap(options.length),
					wrap(options.array)
				],
				1
			)
		)
	);
}
