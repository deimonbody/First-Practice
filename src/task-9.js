export default function merge(data) {
    let resultData = {}  ;
    data.map(function(x){
        for(let key of Object.keys(x)){
            if(!resultData[key]) resultData[key] = [];
            let currentKey = resultData[key];
            currentKey.push(x[key]);
        };
    });
    return resultData;
}
