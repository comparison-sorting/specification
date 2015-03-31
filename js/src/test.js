
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
