/**
 * Function to calculate the quadratic mean diameter 
 * from basal area and tree per acre
 * by David R. Larsen, January 20, 2019
 * Creative Commons,  http://creativecommons.org/licenses/by-nc/3.0/us/
 * 
 *  @param {number} ba Basal Area.
 *  @param {number} tpa Trees Per Acre.
 *  @param {string} unittype "imperial" or "metric".
 *  @return The Quadratic Mean Diameter based Basal Area and Trees Per Acre.
 *  @customfunction
 */

function QMDBATPA( ba, tpa, unittype){
    var qmdbatpa;
    if( unittype == "imperial" ){
		return Math.sqrt( (ba/tpa)/0.005454154 );
	}else if( unittype == "metric" ){
		return Math.sqrt( (ba/tpa)/0.00007854 );
	}else{
        return 0.0;
    }
	
    return( qmdbatpa );
}