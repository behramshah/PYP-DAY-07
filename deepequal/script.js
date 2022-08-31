function deepEquals (first, second) {
  firstType = typeof(first);
  secondType = typeof(second);

  if (firstType === 'string' || secondType === 'string') {
    return first === second;}

  if(firstType !== secondType) {
    return false;
  } else if (isNaN(first) || isNaN(second)) {
    return isNaN(first) == isNaN(second)
  } else if(Array.isArray(first) || Array.isArray(second)) {
    
    if (Array.isArray(first) && Array.isArray(second) && first.length === second.length) {
       for(let i=0; i<first.length; i++) {
        if(first[i] !== second[i]){
          return false;
        } 
       }
       return true;
           
    } 
  } else if (firstType === 'undefined' || secondType === 'undefined') {
    return firstType === secondType;
  } else if (typeof(first) === 'object' && !Array.isArray(first) || typeof(second) === 'object' && !Array.isArray(second)) {
    if(typeof(first) === 'object' && !Array.isArray(first) && typeof(second) === 'object' && !Array.isArray(second)) {
    return JSON.stringify(first) === JSON.stringify(second)
     } 
    return false;
  } else if (firstType === 'object' && !Array.isArray(first) || secondType === 'object' && !Array.isArray(second)) {
    if(firstType === 'object' && !Array.isArray(first) && secondType === 'object' && !Array.isArray(second)) {
      return JSON.stringify(first) === JSON.stringify(second)
    } return false;
  }   
  return first === second;
};




module.exports = {deepEquals};
