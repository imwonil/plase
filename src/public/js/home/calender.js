
const lengthAtag=  document.querySelector(".number").getElementsByTagName("a")
const number = document.querySelector(".number")
const ns=  document.querySelector(".ns")
const YEAR = moment().format('YYYY') //년도를 나타냄
const MOMENT = moment().format('MM') // 월을 나타냄
const newDay =  moment().format('YYYYMM') //년도월 표시
const DAY = moment().format('DD') //일일
const yearS= document.querySelector(".yearS")
//  const nss = document.querySelector('.nss')
const su = YEAR -10
const nowYearDay = moment().format('YYYYMMDD')
const selectYear  = document.querySelector('#year')
const selectMoment  = document.querySelector('#moment')
const tabItem = document.querySelectorAll(".tab__item");
const tabContent = document.querySelectorAll(".tab__content");

const momentTotall =document.getElementById("momentTotall")

 var mT=0;
   var ToTall =0 
momentTotall.innerText =`합계 : ${mT}`
fetch('/nice') 
.then(res => res.json())
.then(data => {  
const startDay = moment(newDay).startOf('month').format('YYYY-MM-DD hh:mm:ss')
const endDay = moment(newDay).endOf('month').format('YYYY-MM-DD hh:mm:ss')



 const dateB = moment('2000-03-07'); // 기준 점 옮기면 안됨

 const dateA = moment(`2024-${MOMENT}-03`); //날짜 조정 함수  변수 해당 월에 해당하는건만 변수 일일은 고정수
 

 const nexetTime= dateA.diff(dateB, 'day') // 이값을통해 몇요일 알아냄
 
 const dateC = moment(startDay);
 const dateD = moment(endDay);


 const days= dateD.diff(dateC, 'day')  // 한달이 몇칠인가 를 나타내줌

sessionStorage.removeItem("year")
var k =0;
var m =0;
var n=0;
var MO =0;
var kii = days + 2 
var moneyTotall =0;
const years  = document.querySelector('#years').innerText =YEAR
const moments  = document.querySelector('#moments').innerText = MOMENT
 for(var i= 0; i<(nexetTime)%7; i++) { //(nexetTime+4)%7 요일를 맞춰주기위함
  k= k+1


} for(var i= (nexetTime)%7; i< kii + (nexetTime)%7 ; i++) { //(nexetTime+4)%7 요일를 맞춰주기위함
n=0;
    m= m+1
document.querySelector(".number").getElementsByTagName("a")[i].style ="displqy:block"
if(m>=10){ document.querySelector(".number").getElementsByTagName("a")[i].innerText = m;}
else if(m<10){ document.querySelector(".number").getElementsByTagName("a")[i].innerText = `0${m}`; }


const vlaue = document.querySelector(".number").getElementsByTagName("a")[i]





document.querySelector(".number").getElementsByTagName("a")[i].onclick = () =>('click' , myFunction(vlaue.outerText, newDay) )


}
data.forEach((item, index) => {
     
  if(item.approvalDay[index] !== "N") {
    
            item.approvalDay.forEach((it, ind) => {
        
              const  approvaDays = item.approvalDay[ind].substr(0, 6);
              const  app= newDay.substr(2, 4);
             const addToTall =  app + DAY

             
           if(addToTall=== approvaDays) {
                   
      const tr = document.createElement("tr")
      const tbody =document.getElementById("k")
      
     
     
      const td = document.createElement("td")
      const td1 = document.createElement("td")
      const td2 = document.createElement("td")
      const td3 = document.createElement("td")
   tr.appendChild(td)                     
   tr.appendChild(td1)
   tr.appendChild(td2)
   tr.appendChild(td3)
   tbody.appendChild(tr)


          const b =  item.fee[ind]

   td.innerText = approvaDays
   td1.innerText = item.name
   td2.innerText = item.goodsName[ind]
   td3.innerText = item.fee[ind]
   moneyTotall = Number(moneyTotall) + Number(item.fee[ind])
       document.getElementById("dayTotall").innerText = `합계 금액 : ${moneyTotall}`;

           }
         
            })
          
  }
  

   })

function myFunction(m,k){
  var moneyTotall = 0;
 var Mt = 0;
 document.getElementById("dayTotall").innerText = `합계 금액 : ${moneyTotall}`;
  const tbody =document.getElementById("k").getElementsByTagName("td")
  
  for(var oo =0; oo<tbody.length; oo++) {

   const ii = document.getElementById("k").getElementsByTagName("td")[oo].style="display:none"
   console.log(ii)
   
  }
  const clickDays = k.substr(2, 4);
  const addClick = clickDays + m;


     data.forEach((item, index) => {
     
    if(item.approvalDay[index] !== "N") {
      
              item.approvalDay.forEach((it, ind) => {
                console.log(item.approvalDay[ind])
                const  approvaDays = item.approvalDay[ind].substr(0, 6);

               console.log(addClick , approvaDays)
             if(addClick === approvaDays) {
                     
        const tr = document.createElement("tr")
        const tbody =document.getElementById("k")
        
       
       
        const td = document.createElement("td")
        const td1 = document.createElement("td")
        const td2 = document.createElement("td")
        const td3 = document.createElement("td")
     tr.appendChild(td)                     
     tr.appendChild(td1)
     tr.appendChild(td2)
     tr.appendChild(td3)
     tbody.appendChild(tr)


            const b =  item.fee[ind]

     td.innerText = approvaDays
     td1.innerText = item.name
     td2.innerText = item.goodsName[ind]
     td3.innerText = item.fee[ind]
     moneyTotall = Number(moneyTotall) + Number(item.fee[ind])
         document.getElementById("dayTotall").innerText = `합계 금액 : ${moneyTotall}`;

             }
           
              })
            
    }
    
  
     })
   
  
}
if(nowYearDay === YEAR + MOMENT + DAY){ document.querySelector(".number").getElementsByTagName("a")[Number(DAY)].style="border:2px solid #ffffff; background-color:#000000"}


for(var z = YEAR;  z >= su; z--) {

    const Option = document.createElement('option')
    const year = document.querySelector('#year')
    year.appendChild(Option)
    Option.innerText = `${z}년`;
    Option.value = `${z}`;
}

for(var j = 1;  j <= 12; j++) {
       if(j<10) { const Option = document.createElement('option')
       const year = document.querySelector('#moment')
       year.appendChild(Option)
       Option.innerText = `${j}월`;
       Option.value = `0${j}`; }
       else{ const Option = document.createElement('option')
       const year = document.querySelector('#moment')
       year.appendChild(Option)
       Option.innerText = `${j}월`;
       Option.value = `${j}`; }
   
    
 }

 


 selectMoment.addEventListener('change', function (){   //달을 클릭함
   const YEARserchar = sessionStorage.getItem("year")
   number.style="display:none"
   
   MO=(MO+1)%2; 
   
   
     if(document.querySelector('.nss') !== null) {
    const nk =document.querySelector('.nss').remove()

   }
  //  
 const ns =document.querySelector('.ns')
  if(MO ===1) {
   console.log("kkiiikii")
mT=0;
    document.getElementById("dayTotall").innerText = "";
 if(YEARserchar === null) {
   
  
    

const see = selectMoment.options[selectMoment.selectedIndex].value;
    

  
const newDay =  moment().format(YEARserchar)

const dateA = moment(`${YEAR}-${see}-03`)
const startDay = moment( `${YEAR}${see}`).startOf('month').format('YYYY-MM-DD hh:mm:ss')
const endDay = moment(`${YEAR}${see}`).endOf('month').format('YYYY-MM-DD hh:mm:ss')




const dateC = moment(startDay);
const dateD = moment(endDay);
const dateB = moment('2000-03-07') //고정값 
const days= dateD.diff(dateC, 'day')
var mk = days + 2 

const nexetTime= dateA.diff(dateB, 'day') // 이값을통해 몇요일 알아냄
for(var z= 0; z<(nexetTime)%7; z++) { //(nexetTime+4)%7 요일를 맞춰주기위함

const a = document.createElement('a')
const li = document.createElement('li')



ns.appendChild(li)
li.appendChild(a)
 a.innerText = ""
 const TextS = a.value = n
 

}
for(var z= (nexetTime)%7 ; z< mk + (nexetTime)%7 ; z++) { //(nexetTime+4)%7 요일를 맞춰주기위함
m=0;
n=n+1;

const a = document.createElement('a')
const li = document.createElement('li')


ns.appendChild(li)
li.appendChild(a)

a.innerText = n;
if(n>10) {
            
  a.value = n
}else if(n<10) {
  a.value = `0${n}`

}                       
document.querySelector(".ns").getElementsByTagName("a")[z].onclick = () =>('click' , One(`${YEAR}${see}`,a.value) )


}


 
 n=0;
 const newDiv = document.createElement("div");
                  
const  kkk =   document.querySelector('.yearS')
 kkk.appendChild(newDiv).classList.add("nss")

    }else if(YEARserchar !== null ) {
   

const see = selectMoment.options[selectMoment.selectedIndex].value;
    

  
const newDay =  moment().format(YEARserchar)

const dateA = moment(`${YEARserchar}-${see}-03`)
const startDay = moment( `${YEARserchar}${see}`).startOf('month').format('YYYY-MM-DD hh:mm:ss')
const endDay = moment(`${YEARserchar}${see}`).endOf('month').format('YYYY-MM-DD hh:mm:ss')




const dateC = moment(startDay);
const dateD = moment(endDay);
const dateB = moment('2000-03-07') //고정값 
const days= dateD.diff(dateC, 'day')
var mk = days + 2 

const nexetTime= dateA.diff(dateB, 'day') // 이값을통해 몇요일 알아냄
for(var z= 0; z<(nexetTime)%7; z++) { //(nexetTime+4)%7 요일를 맞춰주기위함

const a = document.createElement('a')
const li = document.createElement('li')




ns.appendChild(li)
li.appendChild(a)
 a.innerText = ""
 const TextS = a.value = n

}
for(var z= (nexetTime)%7 ; z< mk + (nexetTime)%7 ; z++) { //(nexetTime+4)%7 요일를 맞춰주기위함
m=0;
n=n+1;

const a = document.createElement('a')
const li = document.createElement('li')


ns.appendChild(li)
li.appendChild(a)

a.innerText = n;

if(n>10) {
            
  a.value = n
}else if(n<10) {
  a.value = `0${n}`

}
document.querySelector(".ns").getElementsByTagName("a")[z].onclick = () =>('click' , One(`${YEARserchar}${see}`, a.value) )
}



 n=0;
 const newDiv = document.createElement("div"); 
 const  kkk =   document.querySelector('.yearS')
   kkk.appendChild(newDiv).classList.add("nss")

  }

  
  const newDiv = document.createElement("div");
                  
  const  kkk =   document.querySelector('.yearS')
   kkk.appendChild(newDiv).classList.add("nss")
 
   
      } else if(MO === 0) {
        document.getElementById("dayTotall").innerText = "";
        mT=0;
        

         if(YEARserchar === null) {
        const nss = document.querySelector('.nss')
        const nk =document.querySelector('.ns').remove()
           
                
            
            const see = selectMoment.options[selectMoment.selectedIndex].value;
                  
           
         
        
            
            const newDay =  moment().format('YYYYMM')
            const dateA = moment(`${YEAR}-${see}-03`)
       const startDay = moment( `${YEAR}${see}`).startOf('month').format('YYYY-MM-DD hh:mm:ss')
       const endDay = moment(`${YEAR}${see}`).endOf('month').format('YYYY-MM-DD hh:mm:ss')
            
            
            
            
            const dateC = moment(startDay);
            const dateD = moment(endDay);
            const dateB = moment('2000-03-07') //고정값 
            const days= dateD.diff(dateC, 'day')
            var mk = days + 2 
            
            const nexetTime= dateA.diff(dateB, 'day') // 이값을통해 몇요일 알아냄
            for(var z= 0; z<(nexetTime)%7; z++) { //(nexetTime+4)%7 요일를 맞춰주기위함
               
               const a = document.createElement('a')
               const li = document.createElement('li')
               
              
           
              
               nss.appendChild(li)
              li.appendChild(a)
                  a.innerText = ""
                
              }
               for(var z= (nexetTime)%7 ; z< mk + (nexetTime)%7 ; z++) { //(nexetTime+4)%7 요일를 맞춰주기위함
               m=0;
              n=n+1;
            
               const a = document.createElement('a')
               const li = document.createElement('li')
               
             
               nss.appendChild(li)
              li.appendChild(a)
              
              a.innerText = n;
              if(n>10) {
            
                a.value = n
              }else if(n<10) {
                a.value = `0${n}`
  
              }
              document.querySelector(".nss").getElementsByTagName("a")[z].onclick = () =>('click' , Two(`${YEAR}${see}`,a.value) )
             
                }
                
               
             
                  n=0;

              const newDiv = document.createElement("div");
                  
               const  kkk =   document.querySelector('.yearS')
               kkk.appendChild(newDiv).classList.add("ns")
          }
          
          else if(YEARserchar !== null) {
            const nss = document.querySelector('.nss')
            const nk =document.querySelector('.ns').remove()
      
            document.getElementById("dayTotall").innerText = "";
            
            

           
            
            const see = selectMoment.options[selectMoment.selectedIndex].value;
                  
         
         

            
            const newDay =  moment().format('YYYYMM')
            const dateA = moment(`${YEARserchar}-${see}-03`)
       const startDay = moment( `${YEARserchar}${see}`).startOf('month').format('YYYY-MM-DD hh:mm:ss')
       const endDay = moment(`${YEARserchar}${see}`).endOf('month').format('YYYY-MM-DD hh:mm:ss')
            
            
            
            
            const dateC = moment(startDay);
            const dateD = moment(endDay);
            const dateB = moment('2000-03-07') //고정값 
            const days= dateD.diff(dateC, 'day')
            var mk = days + 2 
            
            const nexetTime= dateA.diff(dateB, 'day') // 이값을통해 몇요일 알아냄
            for(var z= 0; z<(nexetTime)%7; z++) { //(nexetTime+4)%7 요일를 맞춰주기위함
               
               const a = document.createElement('a')
               const li = document.createElement('li')
               
              
             
              
               nss.appendChild(li)
              li.appendChild(a)
                  a.innerText = ""
                
              }
               for(var z= (nexetTime)%7 ; z< mk + (nexetTime)%7 ; z++) { //(nexetTime+4)%7 요일를 맞춰주기위함
               m=0;
              n=n+1;
            
               const a = document.createElement('a')
               const li = document.createElement('li')
               
             
               nss.appendChild(li)
              li.appendChild(a)
              
              a.innerText = n;
            if(n>10) {
            
              a.value = n
            }else if(n<10) {
              a.value = `0${n}`

            }
             
              document.querySelector(".nss").getElementsByTagName("a")[z].onclick = () =>('click' , Two(`${YEARserchar}${see}`, a.value) )
             
                }
                
               
         
                  n=0;

                  const newDiv = document.createElement("div");
                  
                  const  kkk =   document.querySelector('.yearS')
                  kkk.appendChild(newDiv).classList.add("ns")



          }
       
         
   




      }
   


   
}) 


function One(a,b) { //%1 되였을 때 매출표 표기 클릭 했을 때 해당하는 부분 
  //a변수는 년도 b변수는 클릭한 일일
  console.log(a, b,"a,b")

  const dayTotall =document.getElementById("dayTotall")
  var DTs = 0; 
  dayTotall.innerText = `합계 금액  : ${DTs}`
  const tbody =document.getElementById("k").getElementsByTagName("td")
  console.log(tbody.length,"thody")
  for(var oo =0; oo<tbody.length; oo++) {

   const ii = document.getElementById("k").getElementsByTagName("td")[oo].style="display:none"
  
   
  }
  // const clickDays1 = a +b
  const addClick1 = a +b;



     data.forEach((item, index) => {
    
    if(item.approvalDay[index] !== "N") {
     
              item.approvalDay.forEach((it, ind) => {
               
                const  approvaDays = item.approvalDay[ind].substr(0, 6);
                const cutAddClick = addClick1.substr(2,6)
                console.log(cutAddClick," --" ,approvaDays)
             if(cutAddClick  === approvaDays) {
              // console.log(item)
    
     
        
        const tr = document.createElement("tr")
        const tbody =document.getElementById("k")
        
       
       
        const td = document.createElement("td")
        const td1 = document.createElement("td")
        const td2 = document.createElement("td")
        const td3 = document.createElement("td")
     tr.appendChild(td)                      // 상품 명
     tr.appendChild(td1)
     tr.appendChild(td2)
     tr.appendChild(td3)
        tbody.appendChild(tr)


            const b =  item.goodsName[ind]

           

     td.innerText = approvaDays
     td1.innerText = item.name
     td2.innerText = item.goodsName[ind]
     td3.innerText = item.fee[ind]
     DTs = Number(DTs) + Number(item.fee[ind])
    
     dayTotall.innerText = `합계 금액  : ${DTs}`
             }
          
              })
            
            
    }
    
  
     })
    
  

}
function Two(a,b) {//%0 되였을 때 매출표 표기 클릭 했을 때 해당하는 부분 
  const dayTotall =document.getElementById("dayTotall")
  var DTs = 0; 
  dayTotall.innerText = `합계 금액  : ${DTs}`
    

  const tbody =document.getElementById("k").getElementsByTagName("td")



  for(var oo =0; oo<tbody.length; oo++) {

   const ii = document.getElementById("k").getElementsByTagName("td")[oo].style="display:none"
   console.log(ii)
   
  }
  
  const addClick1 = a +b;



     data.forEach((item, index) => {
     
    if(item.approvalDay[index] !== "N") {
     
              item.approvalDay.forEach((it, ind) => {
               
                const  approvaDays = item.approvalDay[ind].substr(0, 6);
                const cutAddClick = addClick1.substr(2,6)
                console.log(cutAddClick," --" ,approvaDays)
             if(cutAddClick  === approvaDays) {
              
    
     
        
        const tr = document.createElement("tr")
        const tbody =document.getElementById("k")
        
       
       
        const td = document.createElement("td")
        const td1 = document.createElement("td")
        const td2 = document.createElement("td")
        const td3 = document.createElement("td")
     tr.appendChild(td)                      // 상품 명
     tr.appendChild(td1)
     tr.appendChild(td2)
     tr.appendChild(td3)
        tbody.appendChild(tr)


            const b =  item.fee[ind]
       
     td.innerText = approvaDays
     td1.innerText = item.name
     td2.innerText = item.goodsName[ind]
     td3.innerText = item.fee[ind]
     DTs = Number(DTs) + Number(item.fee[ind])
    
     dayTotall.innerText = `합계 금액  : ${DTs}`
             }
           
              })
            
    }
    
  
     })

}

 selectYear.addEventListener('change', function (){
   console.log("698")
  const tbody =document.getElementById("ree").getElementsByTagName("td")
  const tbodys =document.getElementById("rs").getElementsByTagName("td")
  const tbodyss =document.getElementById("k").getElementsByTagName("td")
  for(var oo =0; oo<tbody.length; oo++) {

   const ii = document.getElementById("ree").getElementsByTagName("td")[oo].style="display:none"
   console.log(ii)
   
   
  } //해를 클릭함
  for(var oi =0; oi<tbodys.length; oi++) {

    const is = document.getElementById("rs").getElementsByTagName("td")[oi].style="display:none"
    ToTall =0;
    
    
   } 

 
   //해를 클릭함
    
    const see1 = selectYear .options[selectYear .selectedIndex].value;
   
  
   sessionStorage.setItem("year", see1)
  
  const yT =document.getElementById("yearTotall").innerText ='합계 금액 : 0'

 }) 


 selectMoment.addEventListener('change', function (){
  const tbody =document.getElementById("ree").getElementsByTagName("td")

  
  for(var oo =0; oo<tbody.length; oo++) {

   const ii = document.getElementById("ree").getElementsByTagName("td")[oo].style="display:none"
   
   
   
  } //해를 클릭함
  const ksmak =document.getElementById("k").getElementsByTagName("td")

  
  for(var oo =0; oo<ksmak.length; oo++) {

   const ii = document.getElementById("k").getElementsByTagName("td")[oo].style="display:none"
   console.log(ii)
   
   
  } //
   //해를 클릭함
   const yearsText = document.getElementById("years")
    const see1 = selectYear .options[selectYear .selectedIndex].value;
   
 
   sessionStorage.setItem("year", see1)
   document.getElementById("momentTotall").innerText ='합계 금액 : 0'
     ToTall =0;

 })
 tabItem.forEach((item, index) => {
  // 3. 탭 버튼에 클릭 이벤트를 준다.
  item.addEventListener("click", (e) => {
    // 4. 버튼을 a 태그에 만들었기 때문에, 
    // 태그의 기본 동작(링크 연결) 방지를 위해 preventDefault를 추가한다.
    e.preventDefault(); // a 
    
    // 5. 탭 내용 부분들을 forEach 문을 통해 한번씩 순회한다.
    tabContent.forEach((content) => {
      // 6. 탭 내용 부분들 전부 active 클래스를 제거한다.
      content.classList.remove("active");
    });

    // 7. 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
    tabItem.forEach((content) => {
      // 8. 탭 버튼들 전부 active 클래스를 제거한다.
      content.classList.remove("active");
    });

    // 9. 탭 버튼과 탭 내용 영역의 index에 해당하는 부분에 active 클래스를 추가한다.
    // ex) 만약 첫번째 탭(index 0)을 클릭했다면, 같은 인덱스에 있는 첫번째 탭 내용 영역에
    // active 클래스가 추가된다.
    tabItem[index].classList.add("active");
    tabContent[index].classList.add("active");
    console.log(tabItem[index].id)
const TablItme = tabItem[index].id

if(TablItme ==="OneMoment") {
  document.querySelector('#moment').style="display=block"
  
  
    



    const YEARserchar = sessionStorage.getItem("year")
     if(YEARserchar === null) { sessionStorage.setItem("year" ,YEAR) }
    
         
     
            selectYear.addEventListener('change', function (){ //달를 클릭함
              
            const see1 = selectYear .options[selectYear .selectedIndex].value;
            const tbody =document.getElementById("ree").getElementsByTagName("td")
            console.log(tbody.length,"709")
            for(var oo =0; oo<tbody.length; oo++) {
          
             const ii = document.getElementById("ree").getElementsByTagName("td")[oo].style="display:none"
             
             
            } //해를 클릭함
    
           sessionStorage.setItem("year", see1)
           document.querySelector('#moments').innerText = "달를 선택 하세요"
           
        
         }) 

        
   data.forEach((oneMoment,index) => {
    // const YEARserchar = sessionStorage.getItem("year")
    
    const momentTotall = document.getElementById("momentTotall") 
   
     selectMoment.addEventListener('change', function (){  
    
      
      const YEARserchar = sessionStorage.getItem("year")
      
      const see = selectMoment.options[selectMoment.selectedIndex].value;

      const totall =document.getElementById("yearTotall")
      
     if(oneMoment.approvalDay.length > 0 ) {
      
      for(var tt =0; tt<oneMoment.approvalDay.length; tt ++) {
        
          const cutYEAR = YEARserchar.substr(2, 4);
          const cutMoment = see;
          const YeMo = cutYEAR + cutMoment;
          const ApprovalDay = oneMoment.approvalDay[tt].substr(0,4)

         if(ApprovalDay === YeMo) {
          
          const tr = document.createElement("tr")
          const tbody =document.getElementById("ree")
          const td = document.createElement('td')
          const td1 = document.createElement('td')
          const td2 = document.createElement('td')
          const td3 = document.createElement('td')
        
          tbody.appendChild(tr)
          tr.appendChild(td)
          tr.appendChild(td1)
          tr.appendChild(td2)
          tr.appendChild(td3)
        
          td.innerText =  YeMo
          td1.innerText = oneMoment.name
          td2.innerText = oneMoment.goodsName[tt]
          td3.innerText = oneMoment.fee[tt]
          console.log(oneMoment.fee[tt])
       
            mT = Number(mT) + Number(oneMoment.fee[tt]);
           
          momentTotall.innerText = `합계 금액  : ${mT}`
         
          
         }
       
        
       
      }
    
    }
  
    
    })
   
   })
   
}else if(TablItme ==="OneYear") {
  document.querySelector('#moment').style="display:none"
  const yT =document.getElementById("yearTotall")
  const yearsText = document.getElementById("years")
  const YEARserchar = sessionStorage.getItem("year")
  yearsText.innerText = "년도를 선택 해주세요"
  if(YEARserchar === null) { sessionStorage.setItem("year" , YEAR) 
    
       }
       
data.forEach((oneMoment,index) => {





 selectYear.addEventListener('change', function (){  

  const YEARserchar = sessionStorage.getItem("year")
  const see1 = selectYear .options[selectYear .selectedIndex].value;
  
  sessionStorage.setItem("year", see1)



if(oneMoment.approvalDay.length > 0 ) {
 
  
for(var tt =0; tt<oneMoment.approvalDay.length; tt ++) {
 
  const cutYEAR = YEARserchar.substr(0, 2);

 
  const ApprovalDay = oneMoment.approvalDay[tt].substr(0,2) //

 if(YEARserchar === `20${ApprovalDay}`) {
 
  const tr = document.createElement("tr")
  const tbody =document.getElementById("rs")
  const td = document.createElement('td')
  const td1 = document.createElement('td')
  const td2 = document.createElement('td')
  const td3 = document.createElement('td')

  tbody.appendChild(tr)
  tr.appendChild(td)
  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.appendChild(td3)

  td.innerText = oneMoment.approvalDay[tt]
  td1.innerText = oneMoment.name
  td2.innerText = oneMoment.goodsName[tt]
  td3.innerText = oneMoment.fee[tt]
  
  ToTall = Number(ToTall) + Number(oneMoment.fee[tt])
 
  yT.innerText = `합계 금액  : ${ToTall}`
 }

}

}



})

})


}else if(TablItme ==="OneDay") {

  
  document.querySelector('#moment').style="display=block"



}

  });
  
}); 
})