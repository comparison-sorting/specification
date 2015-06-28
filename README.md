[js-in-situ-sort-spec](http://aureooms.github.io/js-in-situ-sort-spec)
==

In place sorting specification for JavaScript. Currently only supports NPM. Parent is
[aureooms/js-sort](https://github.com/aureooms/js-sort).

[![NPM license](http://img.shields.io/npm/l/aureooms-js-in-situ-sort-spec.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-in-situ-sort-spec/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-in-situ-sort-spec.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-in-situ-sort-spec)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-in-situ-sort-spec.svg?style=flat)](http://bower.io/search/?q=aureooms-js-in-situ-sort-spec)
[![Build Status](http://img.shields.io/travis/aureooms/js-in-situ-sort-spec.svg?style=flat)](https://travis-ci.org/aureooms/js-in-situ-sort-spec)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-in-situ-sort-spec.svg?style=flat)](https://coveralls.io/r/aureooms/js-in-situ-sort-spec)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-in-situ-sort-spec.svg?style=flat)](https://david-dm.org/aureooms/js-in-situ-sort-spec#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-in-situ-sort-spec.svg?style=flat)](https://david-dm.org/aureooms/js-in-situ-sort-spec#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-in-situ-sort-spec.svg?style=flat)](https://codeclimate.com/github/aureooms/js-in-situ-sort-spec)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-in-situ-sort-spec.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-in-situ-sort-spec)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-in-situ-sort-spec.svg?style=flat)](https://github.com/aureooms/js-in-situ-sort-spec/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-in-situ-sort-spec.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-in-situ-sort-spec)

## Use

```js
let sort = require( "aureooms-js-sort" ) ;
let array = require( "aureooms-js-array" ) ;
let search = require( "aureooms-js-search" ) ;
let heapsort = require( "aureooms-js-heapsort" ) ;
let quicksort = require( "aureooms-js-quicksort" ) ;
let partition = require( "aureooms-js-partition" ) ;
let insitusortspec = require( "aureooms-js-in-situ-sort-spec" ) ;

insitusortspec.test( [
	[ "heapsort (unary)", heapsort.dary( 1 ) ],
	[ "heapsort (binary)", heapsort.dary( 2 ) ],
	[ "heapsort (ternary)", heapsort.dary( 3 ) ],
	[ "heapsort (4-ary)", heapsort.dary( 4 ) ],
	[ "heapsort (5-ary)", heapsort.dary( 5 ) ],
	[ "quicksort (hoare)", quicksort.single( partition.hoare ) ],
	[ "quicksort (lomuto)", quicksort.single( partition.lomuto ) ],
	[ "dualpivotquicksort (yaroslavskiy)", quicksort.dual( partition.yaroslavskiy ) ],
	[ "insertionsort", sort.insertionsort ],
	[ "selectionsort", sort.selectionsort ],
	[ "bubblesort", sort.bubblesort ],
	[ "fordjohnson" , function ( compare , a , i , j ) {

		sort._fordjohnson( search.binarysearch )( compare , array.swap , a , i , j ) ;

	} ]
] ) ;
```
