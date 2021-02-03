const nums = [1,2,3,4,55,6,7.8,9,6]

for(x in nums){
  if(x == 5)
  break
  console.log(x)
}

for (w in nums){
  if(w == 5)
  continue
  console.log(w)
}