function mobiomass(dbh, mht, species) {
     let mobio;
    if( (species == "black") && (dbh > 9.9) && (dbh < 36.1) ){
      mobio = 1.67079 + 0.04796 * Math.pow(dbh,2) + 0.81549 * Math.log(Math.pow(dbh,2) * mht);
    }else if((species == "post") && (dbh > 9.9) && (dbh < 36.1)){
      mobio = -0.50714 + 0.01655 * Math.pow(dbh,2) + 0.81549 * Math.log(Math.pow(dbh,2) * mht);
    }else if((species = "hickory") && (dbh > 9.9) && (dbh < 36.1)) {
      mobio = 0.70177 + 0.05791 * Math.pow(dbh,2) + 0.60755 * Math.log(Math.pow(dbh,2) * mht);
    }else if((species = "white") && (dbh > 9.9) && (dbh < 36.1)){
      mobio = 0.61557 + 0.00373 * Math.pow(dbh,2) + 0.71159 * Math.log(Math.pow(dbh,2) * mht);
    }else{
      mobio = 0.0;
    }
    return mobio;
}

