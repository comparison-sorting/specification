"use strict";

(function () {

	"use strict";

	var definition = function definition(exports, undefined) {

		/* js/src/NativeSort.js */

		exports.NativeSort = function (compare, a, i, j) {

			var x = Array.prototype.slice.call(a, i, j);

			x.sort(compare);

			while (j-- > i) a[j] = x[j - i];
		};

		/* js/src/test.js */

		var util, sort, array, random, compare, itertools, functools;

		util = require("util");
		sort = require("aureooms-js-sort");
		array = require("aureooms-js-array");
		random = require("aureooms-js-random");
		compare = require("aureooms-js-compare");
		itertools = require("aureooms-js-itertools");
		functools = require("aureooms-js-functools");

		var check = function check(sortname, method, ctor, n, comparename, compare) {

			var title;

			title = util.format("%s (new %s(%d), %s)", sortname, ctor.name, n, comparename);

			console.log(title);

			test(title, function () {

				var a;

				// SETUP ARRAY
				a = new ctor(n);
				array.iota(a, 0, n, 0);

				// SORT ARRAY
				random.shuffle(a, 0, n);
				method(compare, a, 0, n);

				// TEST PREDICATE

				deepEqual(sort.issorted(compare, a, 0, n), n, "check sorted");
				deepEqual(a.length, n, "check length a");
			});
		};

		exports.test = function (algorithms) {

			itertools.exhaust(itertools.map(function (args) {

				functools.star(function (sortname, sort, comparename, compare, size, type) {

					if (type.BYTES_PER_ELEMENT && size > Math.pow(2, type.BYTES_PER_ELEMENT * 8)) {
						return;
					}

					check(sortname, sort, type, size, comparename, compare);
				}, itertools.list(itertools.chain(args)));
			}, itertools.product([algorithms, [["increasing", compare.increasing], ["decreasing", compare.decreasing]], [[0], [1], [2], [10], [63], [64], [65]], [[Array], [Int8Array], [Uint8Array], [Int16Array], [Uint16Array], [Int32Array], [Uint32Array], [Float32Array], [Float64Array]]], 1)));
		};

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-in-situ-sort-spec", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["insitusortspec"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-in-situ-sort-spec");
})();