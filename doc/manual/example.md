```js
import ava from 'ava' ;

import sort from "aureooms-js-sort" ;
import array from "aureooms-js-array" ;
import search from "aureooms-js-search" ;
import heapsort from "aureooms-js-heapsort" ;
import quicksort from "aureooms-js-quicksort" ;
import partition from "aureooms-js-partition" ;
import insitusortspec from "aureooms-js-in-situ-sort-spec" ;

insitusortspec.test( ava , [
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
