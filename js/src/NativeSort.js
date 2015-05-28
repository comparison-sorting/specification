
exports.NativeSort = function ( compare , a , i , j ) {

	var x = Array.prototype.slice.call( a , i , j ) ;

	x.sort( compare ) ;

	while ( j --> i ) a[j] = x[j-i] ;

} ;
