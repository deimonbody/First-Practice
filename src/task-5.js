export default function trim(text, maxLength) {
    if( maxLength <=0 )throw new RangeError();
    if( text.length > maxLength ){
        text = text.slice(0,maxLength-1);
        text+='\u2026';
        return text;
      }else return text;
};
