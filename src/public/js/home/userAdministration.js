const tabItem = document.querySelectorAll(".tab__item");
const tabContent = document.querySelectorAll(".tab__content");

fetch('/userGoodsKinds')
.then(res => res.json())
.then(data => {
  const timeDaysType = {name:[], psword:[], phon:[], goodsName:[], id:[], UseTime:[]}



 data.forEach((itme, index) => {
  itme.goodsName.forEach((itmes, indexs) => {

           
    var tme =  (itme.UseTime[indexs]%1440) //나머지 분
    var day = Math.floor( itme.UseTime[indexs]/1400) // 1일
    var hour =  Math.floor(tme/60) // 시간
    var min = (itme.UseTime[indexs])%60
    var hours =  Math.floor(itme.UseTime[indexs]/60)
   
    var mon = Math.floor( tme%60) //분
    
   
    var Time = Math.floor( itme.UseTime[indexs]/60)
    var min = Time%60              
        
    console.log(day,hour , min,"hour")
     if(itmes === "daysType") {
       timeDaysType.id.push(itme.id)  
       timeDaysType.name.push(itme.name)  
       timeDaysType.goodsName.push(itme.goodsName)  
       timeDaysType.phon.push(itme.phon)  
       timeDaysType.UseTime.push(`${day}일 ${hour}시: ${mon}분`) 
     }
 

  })

 
})

const COUNT_PER_PAGE = 10; // 한 페이지 당 몇개가 들어갈지 설정
const timeDaysTypeLength =  timeDaysType.goodsName.length
console.log(timeDaysTypeLength)
const getTotalPageCount = () => {   //Ajax 에서 불러온 data 길이에서 COUNT_PER_PAGE 값을 나눈값
  return Math.ceil(timeDaysTypeLength  / COUNT_PER_PAGE);
};

const numberButtonWrapper = document.querySelector('.number-button-wrapper');

const setPageButtons = () => {
  numberButtonWrapper.innerHTML = ''; // 페이지 번호 wrapper 내부를 비워줌
  
  console.log(getTotalPageCount())
 
  for (let i = 1; i <= getTotalPageCount(); i++) {
   const a =  numberButtonWrapper.innerHTML += `<span class="number-button"> ${i} </span>`; //페이지 수 를 정함 number-button 에서 번튼 수 를 정함
                                   
                
  }
};



const tbodyK = document.querySelector('.k')

let currentPage = 1;

const setPageOf = (pageNumber) => {
  // ul.innerHTML = ''; // ul 리스트 내부를 비워줌
  tbodyK.innerHTML='' 

  for (let i = COUNT_PER_PAGE * (pageNumber - 1) + 1;  i <= COUNT_PER_PAGE * (pageNumber - 1) + COUNT_PER_PAGE && i <= timeDaysTypeLength;
    i++ ) {
        
     
      if(data.length === i) { return } // data.lenght 와 i 가 일치 했을때 리턴 해준다 이는 마지막 COUNT_PER_PAGE 값가 일치 시켜주기 위함
         

    
    const tr = document.createElement('tr');
    const td = document.createElement("td")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")

      tbodyK.appendChild(tr)
   

 tr.appendChild(td)                      // 상품 명
 tr.appendChild(td1)
 tr.appendChild(td2)
 tr.appendChild(td3)
 
 
 td.innerText =  timeDaysType.name[i-1]
 td1.innerText = timeDaysType.phon[i-1]
 td2.innerText = "기간권"
 td3.innerText =  timeDaysType.UseTime[i-1]
  
    

    
  
}
 
};



setPageButtons()
const pageNumberButtons = document.querySelectorAll('.number-button');




pageNumberButtons.forEach((numberButton, index) => {    //numberButton
  numberButton.addEventListener('click', (e) => {  
    setPageOf(+e.target.innerHTML);  //+e.target.innerHTML
    for(var uuu=0; uuu<=pageNumberButtons.length; uuu++) {
      console.log(uuu === +e.target.innerHTML)
  
      if(uuu === +e.target.innerHTML){ pageNumberButtons[index].style="text-decoration: underline"
       } else if(pageNumberButtons[uuu-1] !== undefined) {
        
   
          pageNumberButtons[uuu-1].style="color:#4c00fd;"}
       }
  });
});
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// prevButton.addEventListener('click', () => {
//   if (currentPage > 1) {
// 		currentPage -= 1;
//     setPageOf(currentPage);
//   }
// });

// nextButton.addEventListener('click', () => {
//   if (currentPage < getTotalPageCount()) {
// 		currentPage += 1;
//     setPageOf(currentPage);
//   }
// });

tabItem.forEach((item, index) => {
 
  item.addEventListener("click", (e) => {
    
    e.preventDefault(); // a 
    
    
    tabContent.forEach((content) => {
    
      content.classList.remove("active");
    });

  
    tabItem.forEach((content) => {
   
      content.classList.remove("active");
    });

    tabItem[index].classList.add("active");
    tabContent[index].classList.add("active");


if(item.id === "time") { 
  const users = {name:[], psword:[], phon:[], goodsName:[], id:[], UseTime:[]}
    
  data.forEach((itme, index) => {
       itme.goodsName.forEach((itmes, indexs) => {
        var tme =  (itme.UseTime[indexs]%1440) //나머지 분
        var day = Math.floor( itme.UseTime[indexs]/1400) // 1일
        var hour =  Math.floor(tme/60) // 시간
        var min = (itme.UseTime[indexs])%60
        var hours =  Math.floor(itme.UseTime[indexs]/60)
       
        var mon = Math.floor( tme%60) //분
        
       
        var Time = Math.floor( itme.UseTime[indexs]/60)
        var min = Time%60              
            
        console.log(day,hour , min,"hour")
          if(itmes === "feeType") {
            users.id.push(itme.id)  
            users.name.push(itme.name)  
            users.goodsName.push(itme.goodsName)  
            users.phon.push(itme.phon)  
            users.UseTime.push(`${day}일 ${hour}시: ${mon}분`) 
           
          }
      

       })
     
      
  })
  const timeLength =   users.goodsName.length
 const COUNT_PER_PAGE = 4; // 한 페이지 당4 몇개가 들어갈지 설정


 const getTotalPageCount = () => {   //Ajax 에서 불러온 data 길이에서 COUNT_PER_PAGE 값을 나눈값
   return Math.ceil(timeLength/ COUNT_PER_PAGE );
 };
 
 const numberButtonWrapper = document.querySelector('.number-button-wrapper');
 
 
 
 const setPageButtons = () => {
   numberButtonWrapper.innerHTML = ''; // 페이지 번호 wrapper 내부를 비워줌
  console.log(getTotalPageCount())
  
   for (let i = 1; i <= getTotalPageCount(); i++) {
    const a =  numberButtonWrapper.innerHTML += `<span class="number-button"> ${i} </span>`; //페이지 수 를 정함 number-button 에서 번튼 수 를 정함
                                    
                 
   }
 };
 
 
 setPageButtons()
 const tbodyree = document.querySelector('.ree')
 
 
 let currentPage = 1;
 
 const setPageOf = (pageNumber) => {
   // ul.innerHTML = ''; // ul 리스트 내부를 비워줌
   tbodyree.innerHTML='' 
  
   for (let i = COUNT_PER_PAGE * (pageNumber - 1) + 1;  i <= COUNT_PER_PAGE * (pageNumber - 1) + COUNT_PER_PAGE && i <=timeLength;
     i++ ) {
      if(users.name.length === i-1) { return }
      console.log(  users.name[i-1] ) 

     const tr = document.createElement('tr')
     const td = document.createElement("td")
     const td1 = document.createElement("td")
     const td2 = document.createElement("td")
     const td3 = document.createElement("td")
 
       tbodyree.appendChild(tr)
    
 
  tr.appendChild(td)                      // 상품 명
  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.appendChild(td3)
  
  
  td.innerText =  users.name[i-1]
  td1.innerText = users.phon[i-1]
  td2.innerText = "충전권"
  td3.innerText = users.UseTime[i-1]

 
 
    
   
 }

 };



 const pageNumberButtons = document.querySelectorAll('.number-button');
 
 
 
 
 pageNumberButtons.forEach((numberButton, index) => {    //numberButton 클릭
   numberButton.addEventListener('click', (e) => {  
     setPageOf(+e.target.innerHTML);  //+e.target.innerHTML
     for(var uuu=0; uuu<=pageNumberButtons.length; uuu++) {
      console.log(uuu === +e.target.innerHTML)
  
      if(uuu === +e.target.innerHTML){ pageNumberButtons[index].style="text-decoration: underline"
       } else if(pageNumberButtons[uuu-1] !== undefined) {
        
   
          pageNumberButtons[uuu-1].style="color:#4c00fd;"}
       
  
      } 
   });
 });
 const prevButton = document.querySelector('.prev-button');//이전버튼
 const nextButton = document.querySelector('.next-button');//이후버튼
 
//  prevButton.addEventListener('click', () => {  //이전버튼
//    if (currentPage > 1) { 
//      currentPage -= 1;
//      setPageOf(currentPage);
//    }
//  });
 
//  nextButton.addEventListener('click', () => {  //이후버튼
//    if (currentPage < getTotalPageCount()) {
//      currentPage += 1;
//      setPageOf(currentPage);
//    }
//  });
 


   
  
   
 }else if( item.id ==="fixedType") {
  const users = {name:[], psword:[], phon:[], goodsName:[], id:[], UseTime:[]}
    
  data.forEach((itme, index) => {
    itme.goodsName.forEach((itmes, indexs) => {
      var tme =  (itme.UseTime[indexs]%1440) //나머지 분
      var day = Math.floor( itme.UseTime[indexs]/1400) // 1일
      var hour =  Math.floor(tme/60) // 시간
      var min = (itme.UseTime[indexs])%60
      var hours =  Math.floor(itme.UseTime[indexs]/60)
     
      var mon = Math.floor( tme%60) //분
      
     
      var Time = Math.floor( itme.UseTime[indexs]/60)
      var min = Time%60              
          
      console.log(day,hour , min,"hour")
       if(itmes === "fixedType") {
         users.id.push(itme.id)  
         users.name.push(itme.name)  
         users.goodsName.push(itme.goodsName)  
         users.phon.push(itme.phon)  
         users.UseTime.push(`${day}일 ${hour}시: ${mon}분`) 
       }
   

    })
  
   
})

const timeLength =   users.goodsName.length
const COUNT_PER_PAGE = 4; // 한 페이지 당4 몇개가 들어갈지 설정


const getTotalPageCount = () => {   //Ajax 에서 불러온 data 길이에서 COUNT_PER_PAGE 값을 나눈값
return Math.ceil(timeLength/ COUNT_PER_PAGE );
};

const numberButtonWrapper = document.querySelector('.number-button-wrapper');



const setPageButtons = () => {
numberButtonWrapper.innerHTML = ''; // 페이지 번호 wrapper 내부를 비워줌
console.log(getTotalPageCount())

for (let i = 1; i <= getTotalPageCount(); i++) {
 const a =  numberButtonWrapper.innerHTML += `<span class="number-button"> ${i} </span>`; //페이지 수 를 정함 number-button 에서 번튼 수 를 정함
                                 
              
}
};


setPageButtons()
const tbodyree = document.querySelector('.rs')


let currentPage = 1;

const setPageOf = (pageNumber) => {
// ul.innerHTML = ''; // ul 리스트 내부를 비워줌
tbodyree.innerHTML='' 

for (let i = COUNT_PER_PAGE * (pageNumber - 1) + 1;  i <= COUNT_PER_PAGE * (pageNumber - 1) + COUNT_PER_PAGE && i <= timeLength;
  i++ ) {
   if(users.name.length === i-1) { return }
   console.log(  users.name[i-1] ) 

  const tr = document.createElement('tr')
  const td = document.createElement("td")
  const td1 = document.createElement("td")
  const td2 = document.createElement("td")
  const td3 = document.createElement("td")

    tbodyree.appendChild(tr)
 

tr.appendChild(td)                      // 상품 명
tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)


td.innerText =  users.name[i-1]
td1.innerText = users.phon[i-1]
td2.innerText = "고정석"
td3.innerText = users.UseTime[i-1]




 

}

};



const pageNumberButtons = document.querySelectorAll('.number-button');




pageNumberButtons.forEach((numberButton, index) => {    //numberButton 클릭
numberButton.addEventListener('click', (e) => {  
  setPageOf(+e.target.innerHTML);  //+e.target.innerHTML
  for(var uuu=0; uuu<=pageNumberButtons.length; uuu++) {
    console.log(uuu === +e.target.innerHTML)

    if(uuu === +e.target.innerHTML){ pageNumberButtons[index].style="text-decoration: underline"
     } else if(pageNumberButtons[uuu-1] !== undefined) {
      
 
        pageNumberButtons[uuu-1].style="color:#4c00fd;"}
     

    }
  
});
});
const prevButton = document.querySelector('.prev-button');//이전버튼
const nextButton = document.querySelector('.next-button');//이후버튼

// prevButton.addEventListener('click', () => {  //이전버튼
// if (currentPage > 1) { 
//   currentPage -= 1;
//   setPageOf(currentPage);
// }
// });

// nextButton.addEventListener('click', () => {  //이후버튼
// if (currentPage < getTotalPageCount()) {
//   currentPage += 1;
//   setPageOf(currentPage);
// }
// });






 }else if(item.id === "daysType") {
  const users = {name:[], psword:[], phon:[], goodsName:[], id:[], UseTime:[]}

  data.forEach((itme, index) => {
    itme.goodsName.forEach((itmes, indexs) => {
      var tme =  (itme.UseTime[indexs]%1440) //나머지 분
      var day = Math.floor( itme.UseTime[indexs]/1400) // 1일
      var hour =  Math.floor(tme/60) // 시간
      var min = (itme.UseTime[indexs])%60
      var hours =  Math.floor(itme.UseTime[indexs]/60)
     
      var mon = Math.floor( tme%60) //분
      
     
      var Time = Math.floor( itme.UseTime[indexs]/60)
      var min = Time%60              
          
      console.log(day,hour , min,"hour")
       if(itmes === "daysType") {
          users.id.push(itme.id)  
          users.name.push(itme.name)  
          users.goodsName.push(itme.goodsName)  
          users.phon.push(itme.phon)  
          users.UseTime.push(`${day}일 ${hour}시: ${mon}분`) 
       }
   

    })
  
   
})
const timeLength =    users.goodsName.length
const COUNT_PER_PAGE = 10; // 한 페이지 당4 몇개가 들어갈지 설정


const getTotalPageCount = () => {   //Ajax 에서 불러온 data 길이에서 COUNT_PER_PAGE 값을 나눈값
return Math.ceil(timeLength/ COUNT_PER_PAGE );
};

const numberButtonWrapper = document.querySelector('.number-button-wrapper');



const setPageButtons = () => {
numberButtonWrapper.innerHTML = ''; // 페이지 번호 wrapper 내부를 비워줌
console.log(getTotalPageCount())

for (let i = 1; i <= getTotalPageCount(); i++) {
 const a =  numberButtonWrapper.innerHTML += `<span class="number-button"> ${i} </span>`; //페이지 수 를 정함 number-button 에서 번튼 수 를 정함
                                 
              
}
};


setPageButtons()
const tbodyk = document.querySelector('.k')


let currentPage = 1;

const setPageOf = (pageNumber) => {
// ul.innerHTML = ''; // ul 리스트 내부를 비워줌
tbodyk.innerHTML='' 
 console.log(pageNumber,"nun")

for (let i = COUNT_PER_PAGE * (pageNumber - 1) + 1;  i <= COUNT_PER_PAGE * (pageNumber - 1) + COUNT_PER_PAGE && i <= timeLength;
  i++ ) {
   if(users.name.length === i-1) { return }
  
  const tr = document.createElement('tr')
  const td = document.createElement("td")
  const td1 = document.createElement("td")
  const td2 = document.createElement("td")
  const td3 = document.createElement("td")

    tbodyk.appendChild(tr)
 

tr.appendChild(td)                      // 상품 명
tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)


td.innerText =  users.name[i-1]
td1.innerText = users.phon[i-1]
td2.innerText = "기간권"
td3.innerText = users.UseTime[i-1]




 

}

};



const pageNumberButtons = document.querySelectorAll('.number-button');




pageNumberButtons.forEach((numberButton, index) => { 
 
   
     //numberButton 클릭
numberButton.addEventListener('click', (e) => { 

 
  
  setPageOf(+e.target.innerHTML);  //+e.target.innerHTML
  
  for(var uuu=0; uuu<=pageNumberButtons.length; uuu++) {
    console.log(uuu === +e.target.innerHTML)

    if(uuu === +e.target.innerHTML){ pageNumberButtons[index].style="text-decoration: underline"
     } else if(pageNumberButtons[uuu-1] !== undefined) {
      
 
        pageNumberButtons[uuu-1].style="color:#4c00fd;"}
     

    }
});
});
const prevButton = document.querySelector('.prev-button');//이전버튼
const nextButton = document.querySelector('.next-button');//이후버튼

// prevButton.addEventListener('click', () => {  //이전버튼
// if (currentPage > 1) { 
//   currentPage -= 1;
//   setPageOf(currentPage);
// }
// }); 

// nextButton.addEventListener('click', () => {  //이후버튼
// if (currentPage < getTotalPageCount()) {
//   currentPage += 1;
//   setPageOf(currentPage);
// }
// });





 }








  });
    
}); 

})