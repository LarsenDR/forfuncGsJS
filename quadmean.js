/**
 * Function to calculate the quadratic mean from values
 * from from array data
 * by David R. Larsen, November 5, 2019
 * Creative Commons,  http://creativecommons.org/licenses/by-nc/4.0/us/
 * Share and Attribute
 * 
 *  @param {number array} value Data values.
 *  @return The Quadratic Mean Diameter data values.
 *  @customfunction
 */

function QUADMEAN(value) {
  var qmd = 0.0;
  var num = 0.0;
  for(i=0; i<value.length; i++){
     qmd = qmd + (value[i] * value[i]);
     num = num + 1.0;
  }
  var temp = Math.sqrt(qmd/num);
  return temp;
}