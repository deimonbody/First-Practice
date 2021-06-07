function trans(num,arr,flag){
  if(num.length == 1) {
        let string = `0${num[0]}`
        if(flag){
          string+=":"
        }
        arr.push(string)
    }else{
      let string = `${num[0]}${num[1]}`
      if(flag){
          string+=":"
        }
      arr.push(string)
    }
};



export default function formatTime(seconds) {
  let objForHours = {
      "12":"12",
      "13":"1",
      "14":"2",
      "15":"3",
      "16":"4",
      "17":"5",
      "18":"6",
      "19":"7",
      "20":"8",
      "21":"9",
      "22":"10",
      "23":"11",
      "24":"12"
    }   
    //Find Our Time 
    if(seconds == 0 ){
      return "12:00:00 AM"
    }
    let hours = Math.trunc(seconds/3600) //Get Hours
    seconds = seconds - (hours *3600)
    let minutes = Math.trunc(seconds/60) //Get Minutes
    seconds = seconds - (minutes *60)    //Get rest of Seconds

    minutes = String(minutes)
    seconds = String(seconds)

    let time = []

    if(hours == 0){
          hours = "12"
          trans(hours,time,true)
          trans(minutes,time,true)
          trans(seconds,time)
          time.push(" AM")
      }else if (hours >= 12){
        hours = objForHours[hours]
        trans(hours,time,true)
        trans(minutes,time,true)
        trans(seconds,time)
        time.push(" PM")
      }else{
        trans(String(hours),time,true)
        trans(minutes,time,true)
        trans(seconds,time)
        time.push(" AM")
      }
      return time.join("")
}