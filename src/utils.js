function getRandomNumber(max=1, min=1 )
{
 return  Math.floor(Math.random() * max);

}

function calculateSatus(initial=59, current=0,count=0){
  const newHealth=Math.max(0,current - count);
  const newPercentage = Math.ceil((newHealth/initial)*100);
  return {
    newHealth,
    newPercentage,
  }
}

function calculateBarColor(percentage =0){
  if (percentage > 66 ) return "green";
  if (percentage > 33 ) return "orange";

  return "red";


}