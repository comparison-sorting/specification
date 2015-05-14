
exports.native = function ( compare , a , i , j ) {

	var x = Array.prototype.slice.call( a , i , j ) ;

	x.sort( compare ) ;

	x.unshift( i , j - i ) ;

	Array.prototype.splice.apply( a , x ) ;

} ;
