function timeNow(){
  const today = new Date()
  let year = today.getFullYear();
  let day = today.getDate();
  let month = today.toLocaleString('en-us', { month: 'long' });
  let weekday = today.toLocaleString('en-us', { weekday: 'long' });

  return `Today is ${weekday} the ${day} of ${month}, ${year}`;
}


console.log(timeNow());
