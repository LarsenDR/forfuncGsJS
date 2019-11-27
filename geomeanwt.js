/**
 * Function to calculate the geomentric mean from values and weights 
 * from from array data
 * by David R. Larsen, November 27, 2019
 * Creative Commons,  http://creativecommons.org/licenses/by-nc/3.0/us/
 * Share and Attribute
 * 
 *  @param {number array} value Data values.
 *  @param {number array} weight weight values.
 *  @return The Weighted Geometric Mean Diameter from data values and weights.
 *  @customfunction
 */

function GEOMEANWT(value, weight) {
    var geom = 0.0;
    var num = 0.0;
    for(i=0; i<value.length; i++){
       geom = geom + Math.log(value[i]);
       num = num + weight[i];
    }
    var temp = Math.exp(geom/num);
    return temp;
  }