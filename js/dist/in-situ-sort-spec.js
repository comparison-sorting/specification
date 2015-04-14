(function(exports, undefined){

	'use strict';


/* js/src/partition */
/* js/src/partition/hoare.js */


/**
 * HYP : i < j
 */

var hoare = function ( compare , a , i , j ) {

	var x , t , o ;

	o = i ;
	x = a[o] ;

	while ( true ) {

		while ( true ) {

			--j ;

			if ( i >= j ) {
				a[o] = a[j] ;
				a[j] = x ;
				return j ;
			}

			else if ( compare( x , a[j] ) > 0 ) {
				break ;
			}
		}

		while ( true ) {

			++i ;

			if ( i >= j ) {
				a[o] = a[j] ;
				a[j] = x ;
				return j ;
			}

			else if ( compare( x , a[i] ) < 0 ) {
				break ;
			}
		}


		// invariant i < j

		t    = a[i] ;
		a[i] = a[j] ;
		a[j] =    t ;

	}

} ;

exports.hoare = hoare ;
exports.partition = hoare ;

/* js/src/partition/lomuto.js */


var lomuto = function ( compare, a, i, j ) {

	var t, k, p;

	p = a[i];
	k = i + 1;

	--j;

	while ( k <= j ) {

		if ( compare( p, a[k] ) <= 0 ) {

			t    = a[k];
			a[k] = a[j];
			a[j] = t;

			--j;
		}

		else {
			++k;
		}

	}

	a[i]   = a[k-1];
	a[k-1] = p;

	return k - 1;
};

exports.lomuto = lomuto;

/* js/src/partition/yaroslavskiy.js */

/**
 * HYP : i < j
 *
 * http://cs.stackexchange.com/a/24099/20711
 */

var yaroslavskiy = function ( compare , a , i , j ) {

	var p , q , g , k , l , t ;

	--j ;

	// Choose outermost elements as pivots
	if ( compare( a[i] , a[j] ) > 0 ) {

		t    = a[i] ;
		a[i] = a[j] ;
		a[j] =    t ;

	}

	p = a[i] ;
	q = a[j] ;

	// Partition a according to invariant below
	l = i + 1 ;
	g = j - 1 ;
	k = l ;

	while ( k <= g ) {

		if ( compare( p , a[k] ) > 0 ) {

			t    = a[k] ;
			a[k] = a[l] ;
			a[l] =    t ;

			++l ;

		}

		else if ( compare( q , a[k] ) <= 0 ) {

			while ( compare ( a[g] , q ) > 0 && k < g ) {
				--g ;
			}

			t    = a[k] ;
			a[k] = a[g] ;
			a[g] =    t ;
			--g ;

			if ( compare( p, a[k] ) > 0 ) {

				t    = a[k] ;
				a[k] = a[l] ;
				a[l] =    t ;
				++l ;

			}

		}

		++k ;
	}

	--l ;
	++g ;

	// Swap pivots to final place

	t    = a[i] ;
	a[i] = a[l] ;
	a[l] =    t ;

	t    = a[j] ;
	a[j] = a[g] ;
	a[g] =    t ;

	return [ l , g ] ;

} ;

exports.yaroslavskiy = yaroslavskiy ;

/* js/src/sort */
/* js/src/sort/bubblesort.js */



var bubblesort = function ( compare, a, i, j ) {

	var swapped, k, s, t;

	s = j - 1;

	do {

		// we stop if the array is sorted
		// i.e. if no swap was required
		// in this step

		swapped = false;

		for ( k = i ; k < s ; ++k ) {

			if ( compare( a[k], a[k + 1] ) > 0 ) {

				// swap boxes

				t = a[k];
				a[k] = a[k + 1];
				a[k + 1] = t;

				swapped = true;

			}

		}

	} while ( swapped );
};

exports.bubblesort = bubblesort;

/* js/src/sort/dualpivotquicksort.js */

var __dualpivotquicksort__ = function ( partition ) {

	var dualpivotquicksort = function ( compare, a, i, j ) {

		var p, g, l;

		if (j - i < 2) {
			return;
		}

		p = partition( compare, a, i, j );
		l = p[0];
		g = p[1];

		dualpivotquicksort( compare, a,   i  , l );
		dualpivotquicksort( compare, a, l + 1, g );
		dualpivotquicksort( compare, a, g + 1, j );
	};

	return dualpivotquicksort;

};

exports.__dualpivotquicksort__ = __dualpivotquicksort__;

/* js/src/sort/heapsort.js */


/**
 * Template for a raw implementation of heapsort.
 *
 *
 */

var __heapsort__ = function ( arity ) {

	/**
	 * Note that here we reverse the order of the
	 * comparison operator since when we extract
	 * values from the heap they can only be stored
	 * at the end of the array. We thus build a max-heap
	 * and then pop elements from it until it is empty.
	 */

	var heapsort = function ( compare, a, i, j ) {

		var k, y, t, current, parent, candidate, tmp;

		// construct the max-heap

		for ( k = i + 1 ; k < j ; ++k ) {

			current = k - i;

			// while we are not the root

			while ( current !== 0 ) {

				// address of the parent in a zero-based
				// d-ary heap

				parent = i + ( ( current - 1 ) / arity | 0 );
				current += i;

				// if current value is smaller than its parent
				// then we are done

				if ( compare( a[current], a[parent] ) <= 0 ) {
					break;
				}

				// otherwise
				// swap with parent

				tmp = a[current];
				a[current] = a[parent];
				a[parent] = tmp;

				current = parent - i;

			}

		}

		// exhaust the max-heap

		for ( --k ; k > i ; --k ) {

			// put max element at the end of the array
			// and percolate new max element down
			// the heap

			tmp = a[k];
			a[k] = a[i];
			a[i] = tmp;

			current = 0;

			while ( true ) {

				// address of the first child in a zero-based
				// d-ary heap

				candidate = i + arity * current + 1;

				// if current node has no children
				// then we are done

				if ( candidate >= k ) {
					break;
				}

				// search for greatest child

				t = Math.min( candidate + arity, k );

				y = candidate;

				for ( ++y ; y < t ; ++y ) {

					if ( compare( a[y], a[candidate] ) > 0 ) {
						candidate = y;
					}

				}

				// if current value is greater than its greatest
				// child then we are done

				current += i;

				if ( compare( a[current], a[candidate] ) >= 0 ) {
					break;
				}

				// otherwise
				// swap with greatest child

				tmp = a[current];
				a[current] = a[candidate];
				a[candidate] = tmp;

				current = candidate - i;

			}

		}

	};

	return heapsort;

};

exports.__heapsort__ = __heapsort__;

/* js/src/sort/insertionsort.js */



var insertionsort = function ( compare, a, i, j ) {

	var o, k, t;

	for ( k = i + 1 ; k < j ; ++k ) {

		t = k;
		o = a[t];

		while ( t --> i && compare( a[t], o ) > 0 ) {
			a[t + 1] = a[t];
		}

		a[t + 1] = o;
	}
};

exports.insertionsort = insertionsort;

/* js/src/sort/quicksort.js */


/**
 * Template for the recursive implementation of quicksort.
 * This template allows to generate a specific version of the quicksort
 * algorithm for a certain partitioning algorithm.
 *
 * @param {callable} partition the implementation for the partitioning step
 */

var __quicksort__ = function ( partition ) {


	/**
	 * Sorts interval [left,right) of the array parameter according to a
	 * compare method.
	 *
	 * @param {comparator} compare the comparator function
	 * @param {array} array random access array
	 * @param {offset} left inner left bound of the interval to sort
	 * @param {offset} right outer right bound of the interval to sort
	 *
	 */

	var quicksort = function ( compare , array , left , right ) {

		var pivot ;

		// in the case where interval [left,right) contains
		// only one element we are done!

		if ( right - left < 2 ) return ;

		// otherwise we partition interval [left,right) into three disjoint
		// subintervals [left,pivot), [pivot, pivot+1) and [pivot+1,right)
		// where the pivot is the position whose element
		// is greater or equal to all elements of the first subinterval
		// and less or equal to all elements of the third subinterval

		pivot = partition( compare , array , left , right ) ;

		// and then we just need to ask the recursion fairy
		// to sort the first and third subintervals

		// the recursion fairy sorts [left,pivot)
		quicksort( compare , array , left      , pivot ) ;

		// and then [pivot+1,right)
		quicksort( compare , array , pivot + 1 , right ) ;

	}

	return quicksort ;

}

exports.__quicksort__ = __quicksort__ ;

/* js/src/sort/selectionsort.js */


var selectionsort = function ( compare, a, i, j ) {

	var o, t, k;

	for ( ; i < j ; ++i ) {

		t = k = i;
		o = a[t];

		while ( ++t < j ) {

			if ( compare( o, a[t] ) > 0 ) {
				o = a[t];
				k = t;
			}

		}

		if ( k > i ) {
			a[k] = a[i];
			a[i] = o;
		}

	}
};

exports.selectionsort = selectionsort;

/* js/src/test.js */

exports.test = function ( title , sort , compare , array , left , right , issorted , issame ) {

	test( title , function ( ) {

		var origin ;

		origin = new Array( array.length ) ;
		copy( array , 0 , array.length , origin , 0 ) ;

		sort( compare , array , left , right ) ;

		deepEqual( issorted( compare , array , left , right ) , right , "check sorted" ) ;

		deepEqual( array.length , origin.length , "check length a" ) ;

		deepEqual( issame( array , 0 , left , origin , 0 ) , left ) ;

		deepEqual( issame( array , right , array.length , origin , right ) , array.length ) ;

	} ) ;

} ;

})(typeof exports === 'undefined' ? this['insitu-sort-spec'] = {} : exports);
