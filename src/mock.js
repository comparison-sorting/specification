
export function mock ( compare , a , i , j ) {

	const x = Array.prototype.slice.call( a , i , j ) ;

	x.sort( compare ) ;

	while ( j --> i ) a[j] = x[j-i] ;

}
