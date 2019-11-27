/**
 * Function to calculate the weighted mean from values and weights 
 * from from array data
 * by David R. Larsen, November 27, 2019
 * Creative Commons,  http://creativecommons.org/licenses/by-nc/4.0/us/
 * Share and Attribute
 * 
 *  @param {number array} value Data values.
 *  @param {number array} weight weight values.
 *  @return The Weighted Mean Diameter of data values using weights.
 *  @customfunction
 */

function MEANWT(value, weight) {
    var qmd = 0.0;
    var num = 0.0;
    for(i=0; i<value.length; i++){
       qmd = qmd + value[i];
       num = num + weight[i];
    }
    var temp = Math.sqrt(qmd/num);
    return temp;
  }