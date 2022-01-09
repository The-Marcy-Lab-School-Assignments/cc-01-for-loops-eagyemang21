for(let i = 0; i <= 10; i++){
    console.log(i)
}console.log(8)



function countToFifty(){
 for(let i = 1; i <= 50; i++){
   console.log(i)
    }
}
countToFifty(48)

//2
function countFromOne(number){
  for(let i = 1; i <= number; i++)
    console.log(i)
} 
countFromOne(10)

//3: make a function equal to integers that are multiples of 3 or 5 within 1-50
//3,5,6,9,10,12,15,18,20,21,24,25,27,30,33,35,36,39,40,42,45,48,50
function threeAndFiveInFifty(number){
  for(let count = 1; count <= 50; count++){
      if(count % 3 === 0 || count % 5 === 0){
          return count;
      }
  }
}
threeAndFiveInFifty();

//4: make a function equal to integers that are multiples of 3 or 5 up to given integer
function threeAndFive(n){
  for(let count = 1; count < n; count += 1){
      if(count % 3 === 0 || count % 5 === 0){
          return count;
      }
  }
}
console.log(threeAndFive(18));
//for([intitial expression][conditional expression][increment expression])

