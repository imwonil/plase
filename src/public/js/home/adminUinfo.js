

 fetch('/userGoodsKinds') 
.then(data => data.json())
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
  return Math.ceil(data.length / COUNT_PER_PAGE);
};

const numberButtonWrapper = document.querySelector('.number-button-wrapper');

const setPageButtons = () => {
  numberButtonWrapper.innerHTML = ''; // 페이지 번호 wrapper 내부를 비워줌
  

 
  for (let i = 1; i <= getTotalPageCount(); i++) {
   const a =  numberButtonWrapper.innerHTML += `<span class="number-button"> ${i} </span>`; //페이지 수 를 정함 number-button 에서 번튼 수 를 정함
                                   
                
  }
};



const tbodyK = document.querySelector('#openBtn')

let currentPage = 1;

const setPageOf = (pageNumber) => {
  // ul.innerHTML = ''; // ul 리스트 내부를 비워줌
  tbodyK.innerHTML='' 

  for (let i = COUNT_PER_PAGE * (pageNumber - 1) + 1;  i <= COUNT_PER_PAGE * (pageNumber - 1) + COUNT_PER_PAGE && i <= data.length;
    i++ ) {
        
                 console.log(i, data[i-1].name, "kjj")
   
      const tr = document.createElement('tr')
      const tbodyK = document.querySelector('#openBtn')
       
       const name =  `${data[i-1].name}`
       tbodyK.appendChild(tr).id = `${data[i-1].name}`
       const wonset =  `${data[i-1].wonset}`
      
       const id =  `${data[i-1].id}`
      let z = 0 ;                                                             
                                                             
   
  
     const td = document.createElement('td')
     const td1 = document.createElement('td')
     const td2 = document.createElement('td')
     const td3 = document.createElement('td')
     const td4 = document.createElement('td')
  
     
  
     tr.appendChild(td)
     tr.appendChild(td1)
     tr.appendChild(td2)
     tr.appendChild(td3)
     tr.appendChild(td4)
  
     
       
    
    
     
      td.innerText = data[i-1].phon
      td1.innerText =data[i-1].name
      if(data[i-1].UseTime !== undefined) { 
        const  setconst = []
        
        const lengUseTime= data[i-1].UseTime.length
        const lengthWonset = data[i-1].wonset.length
        const  Wonset = data[i-1].wonset.length
   
      td2.innerText = `상품${lengUseTime} 개가  존재합니다.` // 상품명
   
      td3.innerText =  `${lengUseTime} 개의 유효기간이 존재합니다.` //유효기관 갯수
      td4.innerText = `${setconst.length} 사용하고 있는 자리가 있습니다..` 

      
      document.getElementById(`${data[i-1].name}`).setAttribute('onclick', `change(${data[i-1].phon},${JSON.stringify(data[i-1].UseTime)},${JSON.stringify(data[i-1].expiry)}
      ,${JSON.stringify(id)},${JSON.stringify(name)},${JSON.stringify(data[i-1].wonset)},${JSON.stringify(data[i-1].goodsName)},${JSON.stringify(data[i-1].benchName)},${JSON.stringify(data[i-1].setType)},${JSON.stringify(data[i-1].cdId)})`)
    
      }
  
    
      
      

   

    
  
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
    
    sessionStorage.removeItem("cdId") // 자리 이석을 위한 빌디업 
    

    
         })
 function change(phon,UseTime, expiry,  id, name, wonset, goodsName, benchName, setType, cdId) {
 
    document.getElementById("openBtn").addEventListener("click", open) //chang 클릭하면 모달창 생성
    document.querySelector(".modal").classList.remove("hidden");
 
  
       const req = {
        id: id,
        name : name,
        phon : phon,
        UseTime: UseTime,
        wonset: wonset,
        expiry : expiry,
        goodsName,
        benchName, 
        setType,
        cdId
       
     } 
     sessionStorage.setItem('cdId',req.cdId)
     
       
      fetch("/adminUinfo", { //위에 정보를 adminUinfo에다가 dsta를 전달함 
      method: "POST", 
      headers: {
        "Content-Type" : "application/json",
      } ,
      body: JSON.stringify(req),
        
      }).then((res => res.json()))
        .then((res) => {  
         
          
document.querySelector(".closeBtn").addEventListener("click", close);
document.querySelector(".bg").addEventListener("click", close);

          function close () {
            document.querySelector(".modal").classList.add("hidden");
            location.reload();
           }
     alert("자리이동 및 상세 정보입니다.")
     for(var i =0; i<res[0].wonset.length; i++){
     
      if(res[0].wonset[i] !== undefined) {

     const li = document.createElement('li')
     const a = document.createElement('a')
     const ul = document.querySelector('ul')
    
      ul.appendChild(li)
      
      if(res[0].wonset[i] !== "") {
        console.log(res[0].wonset)
      li.appendChild(a).innerHTML = `${res[0].wonset[i]} 자리 이동` 
      
     
      li.appendChild(a).id = res[0].wonset[i]
       const wonset = res[0].wonset[i]
      document.getElementById(`${res[0].wonset[i]}`).onclick = () => {myFunction(wonset,res[0].id)}
    }
      }
       
    } 
 document.getElementById("detail").setAttribute('phon', `(${res[0].phon})`)
 const detail =  document.getElementById("detail")

 detail.addEventListener("click", phon); //phon 함수 상제 정보 함수
//phon 함수로 상제 정보 url 를 만들어진다. 

// 자리 이동 함수
  function phon () {
         
    setTimeout(() => { 
          alert("상제정보 페이지로 이동합니다.")
          console.log(res[0].phon)
           location.href = `/adminUinfo=0${res[0].phon}` 

       }, 800)//먼제 adminUinfo 정보를 보낸다 즉 모달창이 클릭되는 순간 res.phon를 보낸다
     //setTimeout 함수를 주는 이유는 res.phon 정보를 다보내기 전에
   
      }  
      function myFunction(wonset, id) { 
        
       
        
        
        sessionStorage.setItem('wonset' , wonset)  //기존 자리 좌석 변경할 index
        
       
        setTimeout(() => { 
        
          location.href =" /adminViews"

       }, 700)
             
          }  
      })
  
 

         }
        
     