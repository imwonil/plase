const tabItem = document.querySelectorAll(".tab__item");
const tabContent = document.querySelectorAll(".tab__content");

fetch('/userGoodsKinds')
.then(res => res.json())
.then(data => {
 const  userData ={goodsName:[], id:[], UseTime:[], phone:[], name:[]}
data.forEach((dataInfo, index) => {
   dataInfo.goodsName.forEach((goods, indesx) => {
  
       
    var tme =  (dataInfo.UseTime[indesx]%1440) //나머지 분
    var day = Math.floor( dataInfo.UseTime[indesx]/1400) // 1일
    var hour =  Math.floor(tme/60) // 시간
    var min = (dataInfo.UseTime[indesx])%60
    var hours =  Math.floor(dataInfo.UseTime[indesx]/60)
   
    var mon = Math.floor( tme%60) //분
    
   
    var Time = Math.floor( dataInfo.UseTime[indesx]/60)
    var min = Time%60              
        
    console.log(day,hour , min,"hour")


       userData.goodsName.push(data[index].goodsName[indesx])
       userData.id.push(data[index].id)
       userData.UseTime.push(`${day}일 ${hour}시: ${mon}분`)
       userData.phone.push(data[index].phon)
       userData.name.push(data[index].name)
   
    
     
    })

})
const usersLength =  userData.id.length

const COUNT_PER_PAGE = 20; // 한 페이지 당 몇개가 들어갈지 설정


const getTotalPageCount = () => {   //Ajax 에서 불러온 data 길이에서 COUNT_PER_PAGE 값을 나눈값
  return Math.ceil(usersLength / COUNT_PER_PAGE);
};

const numberButtonWrapper = document.querySelector('.number-button-wrapper');

const setPageButtons = () => {
  numberButtonWrapper.innerHTML = ''; // 페이지 번호 wrapper 내부를 비워줌
  

 
  for (let i = 1; i <= getTotalPageCount(); i++) {
   const a =  numberButtonWrapper.innerHTML += `<span class="number-button"> ${i} </span>`; //페이지 수 를 정함 number-button 에서 번튼 수 를 정함
                                   
                
  }
};



const tbodyK = document.querySelector('.ks')

let currentPage = 1;

const setPageOf = (pageNumber) => {
  // ul.innerHTML = ''; // ul 리스트 내부를 비워줌
  tbodyK.innerHTML='' 

  for (let i = COUNT_PER_PAGE * (pageNumber - 1) + 1;  i <= COUNT_PER_PAGE * (pageNumber - 1) + COUNT_PER_PAGE && i <= usersLength;
    i++ ) {
        
    
     // data.lenght 와 i 가 일치 했을때 리턴 해준다 이는 마지막 COUNT_PER_PAGE 값가 일치 시켜주기 위함
         


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
 
 
 td.innerText = userData.name[i-1]
 td1.innerText =userData.phone[i-1]
 td2.innerText = userData.goodsName[i-1]
 td3.innerText = userData.UseTime[i-1]
 

    
  
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


})