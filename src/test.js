
import sort from "aureooms-js-sort" ;
import array from "aureooms-js-array" ;
import random from "aureooms-js-random" ;
import compare from "aureooms-js-compare" ;
import itertools from "aureooms-js-itertools" ;
import functools from "aureooms-js-functools" ;

function check ( _test , sortname , method , ctor , n , comparename , compare ) {

	const title = `${sortname} (new ${ctor.name}(${n}), ${comparename})` ;

	_test( title, t => {

		// SETUP ARRAY
		const a = new ctor(n);
		array.iota( a, 0, n, 0 );

		// SORT ARRAY
		random.shuffle( a, 0, n );
		method( compare, a, 0, n );

		// TEST PREDICATE
		t.is( sort.issorted( compare , a , 0 , n ) , n , "check sorted" ) ;
		t.is( a.length, n, "check length a" );

	} );

}

export function test ( _test , algorithms ) {

itertools.exhaust( itertools.map(
function ( args ) {

	functools.star( function ( sortname, sort, comparename, compare, size, type ) {

		if ( type.BYTES_PER_ELEMENT && size > Math.pow( 2, type.BYTES_PER_ELEMENT * 8 ) ) {
			return;
		}

		check( _test , sortname, sort, type, size, comparename, compare );

	}, itertools.list( itertools.chain( args ) ) ) ;

} ,



itertools.product( [ algorithms ,

[
	[ "increasing", compare.increasing ],
	[ "decreasing", compare.decreasing ]
],

[[0], [1], [2], [10], [63], [64], [65]],

[
	[ Array ],
	[ Int8Array ],
	[ Uint8Array ],
	[ Int16Array ],
	[ Uint16Array ],
	[ Int32Array ],
	[ Uint32Array ],
	[ Float32Array ],
	[ Float64Array ]
]

], 1 ) ) );

} ;

