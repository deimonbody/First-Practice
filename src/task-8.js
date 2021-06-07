export default function getTopLetter(str) {
    let maxElem = new Map();
    let elemMax = ["",0];
    str.split('').forEach(function(leter){
      maxElem.set(leter,str.split(leter).length-1)
      if( maxElem.get(leter) > elemMax[1] ) {
        elemMax[0] = leter;
        elemMax[1] = maxElem.get(leter);
      };
    });
    return elemMax[0];
};

getTopLetter("CAATGCCATA");