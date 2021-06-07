export default function getStats(data) {
    if(data.length == 0) return {min:null, max:null,avg:null};
    let avarage = 0;
    data.map((x)=>{avarage+=x});
    avarage = avarage/data.length;
    return {
        min: Math.min(...data),
        max: Math.max(...data),
        avg: avarage
    };
};
