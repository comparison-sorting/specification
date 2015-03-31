
var util, array, random, compare, itertools, functools, randint, sample, shuffle ;

util = require( "util" ) ;
array = require( "aureooms-js-array" ) ;
random = require( "aureooms-js-random" ) ;
compare = require( "aureooms-js-compare" ) ;
itertools = require( "aureooms-js-itertools" ) ;
functools = require( "aureooms-js-functools" ) ;

// SETUP RANDOM
randint = random.randint ;
sample = random.__sample__( randint ) ;
shuffle = random.__shuffle__( sample ) ;

itertools.product( [

[
	[ "testsort", insitusort.testsort ]
],

[
	[ "increasing", compare.increasing ],
	[ "decreasing", compare.decreasing ]
],

[0, 1, 2, 10, 63, 64, 65],

[
	Array,
	Int8Array,
	Uint8Array,
	Int16Array,
	Uint16Array,
	Int32Array,
	Uint32Array,
	Float32Array,
	Float64Array
]

], 1, [] ).forEach( function ( args ) {

	functools.star( function ( sortname, sort, comparename, compare, size, type ) {

		var title , a ;

		if ( type.BYTES_PER_ELEMENT && size > Math.pow( 2, type.BYTES_PER_ELEMENT * 8 ) ) {
			return;
		}

		title = util.format( "%s (new %s(%d), %s)" , sortname , type.name , size , comparename ) ;

		console.log( title );

		// SETUP ARRAY
		a = new type( n ) ;
		array.iota( a , 0 , n , 0 ) ;
		shuffle( a , 0 , n ) ;

		insitusort.test( title , sort , compare , a , 0 , n , sort.issorted , array.issame ) ;

	}, args );

} );
