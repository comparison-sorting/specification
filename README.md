:notebook_with_decorative_cover: [@comparison-sorting/specification](https://comparison-sorting.github.io/specification)
==

In-place sorting specification for JavaScript.
See [docs](https://comparison-sorting.github.io/specification).
Parent is [js-sort](https://github.com/make-github-pseudonymous-again/js-sort).

```js
import ava from 'ava';
import * as spec from '@comparison-sorting/specification';

spec.test(
    ava, // Any testing library exhibiting the same interface as `ava`.
    [
        [
            'mock', // Name of the implementation.
            (compare, a, i, j) => spec.mock(compare, a, i, j), // Sorting implementation.
        ]
    ],
    {
        length: [24, 1000], // Array lengths to test.
        array: [Int8Array], // Array types to test.
    }
);
```

[![License](https://img.shields.io/github/license/comparison-sorting/specification.svg)](https://raw.githubusercontent.com/comparison-sorting/specification/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@comparison-sorting/specification.svg)](https://www.npmjs.org/package/@comparison-sorting/specification)
[![Tests](https://img.shields.io/github/actions/workflow/status/comparison-sorting/specification/ci.yml?branch=main&event=push&label=tests)](https://github.com/comparison-sorting/specification/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/comparison-sorting/specification.svg)](https://github.com/comparison-sorting/specification/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/comparison-sorting/specification.svg)](https://github.com/comparison-sorting/specification/issues)
[![Downloads](https://img.shields.io/npm/dm/@comparison-sorting/specification.svg)](https://www.npmjs.org/package/@comparison-sorting/specification)

[![Code issues](https://img.shields.io/codeclimate/issues/comparison-sorting/specification.svg)](https://codeclimate.com/github/comparison-sorting/specification/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/comparison-sorting/specification.svg)](https://codeclimate.com/github/comparison-sorting/specification/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/comparison-sorting/specification/main.svg)](https://codecov.io/gh/comparison-sorting/specification)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/comparison-sorting/specification.svg)](https://codeclimate.com/github/comparison-sorting/specification/trends/technical_debt)
[![Documentation](https://comparison-sorting.github.io/specification/badge.svg)](https://comparison-sorting.github.io/specification/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@comparison-sorting/specification)](https://bundlephobia.com/result?p=@comparison-sorting/specification)
