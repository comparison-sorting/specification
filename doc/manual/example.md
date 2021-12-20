# Examples
```js
import ava from 'ava' ;

import {sort as insertionSort} from '@comparison-sorting/insertion-sort';
import * as heapSort from '@comparison-sorting/heap-sort' ;
import * as quickSort from '@comparison-sorting/quick-sort' ;
import * as partition from '@comparison-sorting/partition' ;
import * as spec from '@comparison-sorting/specification' ;

spec.test( ava , [
	[ 'insertion-sort', insertionSort ],
	[ 'heap-sort (unary)', heapSort.dary( 1 ) ],
	[ 'heap-sort (binary)', heapSort.dary( 2 ) ],
	[ 'heap-sort (ternary)', heapSort.dary( 3 ) ],
	[ 'heap-sort (4-ary)', heapSort.dary( 4 ) ],
	[ 'heap-sort (5-ary)', heapSort.dary( 5 ) ],
	[ 'quick-sort (hoare)', quickSort.single( partition.hoare ) ],
	[ 'quick-sort (lomuto)', quickSort.single( partition.lomuto ) ],
	[ 'quick-sort [dual-pivot] (yaroslavskiy)', quickSort.dual( partition.yaroslavskiy ) ],
] ) ;
```
