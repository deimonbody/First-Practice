
export default function sumDigits(n) {
    let sum = 0;
    String(n).split("").map((x)=> sum+=Number(x) );
    return sum;
};

