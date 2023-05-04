let value = 0;
const spanValueRef = document.querySelector("#value");

const btnOne = document.querySelector(`[data-action="decrement"]`);
const btnTwo = document.querySelector(`[data-action="increment"]`);

// const operationDecrement = (()=>{
//     value +=1 ;
//     spanValueRef.textContent = value;
// });

// const operationIncrement = (()=>{
//     value -=1 ;
//     spanValueRef.textContent = value;
// });

btnOne.addEventListener("click",()=>{
    value -=1;
    spanValueRef.textContent = value;
});
btnTwo.addEventListener("click",()=>{
    value +=1;
    spanValueRef.textContent = value;
});