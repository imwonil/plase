

const boxes = document.querySelectorAll('.button');


fetch('/adminNext')
.then(res => res.json())
.then(data => { 
  const nowTime =  moment().format('yyyyMMDDhhmm') 

 document.getElementById("userName").innerText = `회원명: ${data[0].name}`

 const liLength = document.getElementsByTagName("a").length
   
 const k = []
    
    for(var i=0; i<data[0].goodsName.length ; i++) {
     
     console.log(document.querySelector(".menuCategorys ").getElementsByTagName("a").length )
      if(data[0].goodsName[i] !== "")   {
        
      document.getElementsByTagName("a")[i].style ="display:block"
      document.getElementsByTagName("a")[i].innerText= `${data[0].goodsName[i]} : ${data[0].benchName[i]}`
      document.getElementsByTagName("a")[i].id = `idNumber-${[i]}`
      document.getElementById(`idNumber-${[i]}`).setAttribute("cdId" , [i])
      const index  = document.getElementById(`idNumber-${[i]}`).getAttribute("cdId")
      
      // const b  = document.getElementById(`idNumber-${[i]}`).outerText

      document.getElementById(`idNumber-${[i]}`).onclick = () => {myFunction(index)};
      document.getElementById("move").setAttribute("cdID" ,data[0].id)
      k.push([i]) 
     } 
    
     if(data[0].wonset[i] !=="") {
      const tr = document.createElement('tr')
      const h2 = document.getElementById("useSet")
      
    
      h2.appendChild(tr)
    
       
     const td = document.createElement('td')
    
     tr.appendChild(td)                      // 상품 명
     
     
     td.innerText =`현재 사용중인 자리 : ${data[0].wonset[i]}  상품:${data[0].goodsName[i]} - ${data[0].benchName[i]} `
   
    
     }
     
     // var Time = Math.floor( data[0].UseTime[listInfo]/60)
     // var min = Time%60
     // // var dayss = Math.floor(dataS[q].UseTime[b]/1440)
     // var dayss = Math.floor(data[koko.dataset.id].timeSend/1440)          
     // var tme =  (dayss/1440) //나머지 분
      
     // console.log(Math.floor(tme/60))
     //  console.log(dayss%60 , "아라")
      var hour =  Math.floor(tme/60) // 시간
      const tr = document.createElement('tr')
      const h2 = document.getElementById("useTime")
      
      var tme =  (data[0].UseTime[i]%1440) //나머지 분
      var day = Math.floor( data[0].UseTime[i]/1400) // 1일
      var hour =  Math.floor(tme/60) // 시간
      var min = tme%60  // 분
      var hours =  Math.floor(data[0].UseTime[i]/60)
      
      var mon = Math.floor( tme/60)
      console.log(day,"day")
      console.log(hour,"hour")
      console.log(min,"min")
      h2.appendChild(tr)
    
       
     const td = document.createElement('td')
    
     tr.appendChild(td)                      // 상품 명
     
     
     td.innerText =`상품:${data[0].goodsName[i]} - ${data[0].benchName[i]} : ${day}일 ${hour}시 ${min}분 입니다`
   
   
     
 
}
  
//  if(k.length === 0){ alert ("상품권이 없습니다.")}
//   else{ alert ("상품권이 존재 합니다.")}

 
 

function myFunction (index)  {
        
  const  goodsIndex = data[0].goodsName[index]

   const  benchIndex = data[0].benchName[index]
    const  expiryIndex = data[0].expiryName[index]
  // const  goodsIndex = data[0].goodsName[index]
  if(goodsIndex === "fixedType") {
    alert(`${goodsIndex} : ${benchIndex} 선택하셨습니다`)
     document.getElementById("setName").style ="display:block"
    
     document.getElementById("setName").innerText= `선택한 상품 - 고정석 : ${goodsIndex}`
    
  } else if(goodsIndex === "feeType") {
    alert(`${goodsIndex} : ${benchIndex} 선택하셨습니다`)
  document.getElementById("setName").style ="display:block"
    
  document.getElementById("setName").innerText= `자유석 : ${goodsIndex}`

}else if(goodsIndex === "daysType") {
  alert(`${goodsIndex} : ${benchIndex} 선택하셨습니다`)
document.getElementById("setName").style ="display:block"
  
document.getElementById("setName").innerText= `기간권(요일제) : ${goodsIndex}`

}

  
  // 상품권을 선택 해야지만 선택 가능한 버튼        
boxes.forEach((button) => {
  sessionStorage.setItem('indexof',index)
  button.addEventListener('click', onClickBox)

  function onClickBox() {
    console.log(button.id)
    const id = document.getElementById("move").getAttribute("cdID")
    const userId= data.filter(function (addSave) { return addSave.id === data[0].id});
 
     if (button.id === "start" && data[0].loginStart[index] ==="") {
      const sessionIndexof = sessionStorage.getItem('indexof')
         const req = {
          nowTime,
          id: data[0].id,
          sessionIndexof
         }
         sessionStorage.setItem('indexof',index)
         sessionStorage.setItem('cdId',data[0].id)
          fetch("/userInfor", {
            method: "POST",
            headers : {
              "Content-Type" :"application/json"
            },
            
             body: JSON.stringify(req),
            })
            .then((res => res.json()))
            .then(( res) => {
            location.href ="/"
            
            })
         
         

        
          
        }else if ( button.id === "start" && data[0].loginStart[index] !=="" && data[0].wonset[index] !=="" )
        {alert("사용중인 상품 입니다.")
        document.getElementById("move").style = "display:block"
        document.getElementById("buy").style = "display:none"
        document.getElementById("start").style = "display:none"}
        
        else if(button.id === "start" && data[0].wonset[index] ==="" && data[0].loginStart[index] !=="")
       
         {
          document.getElementById("benchselection").style = "display:block"
          // document.getElementById("move").style = "display:block"
          document.getElementById("buy").style = "display:none"
          document.getElementById("start").style = "display:none"
          console.log("kkdkf")
         
           } 
    
                   
      if(button.value === "move") { 
       const req = {
        id: data[0].id,
        //  wonset:data[0].benchName[index],
        goodsIndex,
        expiryIndex,
        benchIndex,
        index
          }


     
          sessionStorage.setItem('indexof',index)
          sessionStorage.setItem('cdId',data[0].id)
          fetch("/userInfor", {
            method: "POST",
            headers : {
              "Content-Type" :"application/json"
            },
            
             body: JSON.stringify(req),
            })
            .then((res => res.json()))
            .then(( res) => {
              
              location.href =  "/"
            })
        } else if(button.value === "move" && userId[0].wonset[index] !== "") {
          {alert("사용중인 상품 입니다.")}
        } else if(button.value === "cad") {
 
 fetch('/nice')
.then(res => res.json())
.then(datas => { 
  var Nicename = datas.filter(function (addSave) { return addSave.id === data[0].id });
 console.log(Nicename[0])
          document.querySelector(".modal").classList.remove("hidden"); //모달창 생성
          document.getElementById("feeCancal").innerText =`결제 취소 금액 : ${Nicename[0].fee[index]}원`
         
         console.log(Nicename[0].approvalDay[index],"승인날짜",  Nicename[0].hangle[index],"할부", Nicename[0].fee[index],"금액" , Nicename[0].approvalNumber[index],"승인번호")
        
          const approvalDAY =Nicename[0].approvalDay[index].substr(0,6)
          console.log(approvalDAY)
    
           document.querySelector(".modal").classList.remove("hidden"); //모달창 생성
           var TYPE = "VCAT";
           var TYPE2 = "NICEVCAT";
           var FS = '\x1C';
           var H7 = '\x07';
           var sendbuf;
           var iFlag = '0';
          //  document.getElementById("feeName").innerText = `취소 금액 :  ${fee}`
          
           const seet = document.getElementById('seet');
          
           
             
           
           
           console.log(document.getElementById("cancel"),"230")
           const  Button = document.getElementById("cancel").addEventListener("click", handleClick('credit_cancel'))
          
          
          function handleClick(myRadio) //카드 결제 information 
          {        
            console.log(myRadio)
          
            if(myRadio == 'credit_cancel') //신용취소
            {
              // sendbuf = "NICEVCAT" + H7 + "0420" + FS + "10" + FS + "C" + FS +"1000" + FS + "0" + FS + "0" + FS + "00" + FS + "28700883" + FS + "240321" + FS + "" + FS + FS + FS + FS + "0" + FS + FS + FS + FS + "" + FS + H7;
              sendbuf = "NICEVCAT" + H7 + "0420" + FS + "10" + FS + "C" + FS + Nicename[0].fee[index] + FS + "0" + FS + "0" + FS + Nicename[0].hangle[index] + FS + Nicename[0].approvalNumber[index] + FS + approvalDAY + FS + "" + FS + FS + FS + FS + "0" + FS + FS + FS + FS + "" + FS + H7;
              // sendbuf = "NICEVCAT" + H7 + "0420" + FS + "10" + FS + "C" + FS + data[0].fee[index] + FS +"0" + FS + data[0].hangle[index] + FS + data[0].approvalNumber[index] + FS + data[0].approvalNumber[index] + FS + approvalDAY + FS + "" + FS + FS + FS + FS + "0" + FS + FS + FS + FS + "" + FS + H7;
            }
            
            // 		else if(myRadio.value == 'credit_cancel') //신용취소
            // {
            // 	sendbuf = "NICEVCAT" + H7 + "0420" + FS + "10" + FS + "C" + FS + form.money.value + FS + form.tax.value + FS + form.bongsa.value + FS + form.halbu.value + FS + form.agreenum.value + FS + form.agreedate.value + FS + form.catid.value + FS + FS + FS + FS + form.myunse.value + FS + FS + FS + FS + "" + FS + H7;
            // }
      
        
          
            form.SendData.value = sendbuf +""+`${Nicename[0].id}`+""+`${index}`  ;	 // 이정보를 가지고 post 
            console.log(form.SendData.value, "39")		
               
          }	
           
               
        })  
        
          }
      


}




})



      

  

    
    
      
        
  }
  
/// 상품권 먼져 선택을 않해도 크릭 가능 함 사용하기
boxes.forEach((button) => {

  button.addEventListener('click', onClickBox)
  const userId= data.filter(function (addSave) { return addSave.id === data[0].id});
  function onClickBox() {
     const sessionIndexof = sessionStorage.getItem('indexof') 
     if(button.value === "benchselection" && userId[0].wonset[sessionIndexof] === "" ) { 
      
     
         location.href =  "/"
       
      }else if(button.value === "benchselection" && userId[0].wonset[index] !== ""){alert("사용중인 상품 입니다.")}
    
    if(button.id ==="buy") {
      const id = document.getElementById("move").getAttribute("cdID")
      location.href =  "/kioce"
    } 

  
 
      
}

})

})


var TYPE = "VCAT";
var TYPE2 = "NICEVCAT";
var FS = '\x1C';
var H7 = '\x07';
var sendbuf;
var iFlag = '0';
  function reqVCAT_HTTP(myRadio) //VCAT 클릭 이벤트 함수  함수 
  { 	
    var sendMsg;	
    var RecvData;
    
    form.RecvData.value = "";
    sendMsg = form.SendData.value;	
      

    			
      if(sendMsg == "REQ_STOP")
      {	

        sendbuf = make_send_data(sendMsg);	
            
        
   console.log("333")
        $.ajax
          ({ url         : "http://127.0.0.1:9189"    
           , type        : "POST"
           , dataType    : "text"
           //, timeout     : $("#vanpReqTimeOut").val()
           , data        : encodeURI(sendbuf)
           , success     : function(data) {							
               form.RecvData.value = data;	
           
           }
        });			 
          
      }
      else 
      {		
        //요청 시 중복방지로직을 필수로 처리해주세요. 
        if(iFlag == '0')
        {

          console.log("2")
   
          sendbuf = make_send_data(sendMsg);
         
          iFlag = '1';
          
          $.ajax
            ({ url         : "http://127.0.0.1:9188"    
             , type        : "POST"
             , dataType    : "text"				 
             , data        : encodeURI(sendbuf)
             , success     : function(data) {							
              form.RecvData.value = data;							
              iFlag = '0';
       
              // if(data.length <= 506) { return alert("결제가 정상적으로 이루워지 않았습니다.")}
              
                
              const arr1 = form.RecvData.value.split("",60);
              const arr2 = sendbuf.split("",30)
         
              console.log(arr1[16].length)
              
         if(arr1[16].length >=10) { alert(arr1[16])}
            
             const req = {
            id: arr2[19],
            index:arr2[20]


             }  
             
              fetch("/nice", {
                method: "POST",
                headers : {
                  "Content-Type" :"application/json"
                },
                
                 body: JSON.stringify(req),
                })
                .then((res => res.json()))
                .then((res) => { 

                  alert("결제 취소 되였습니다.")

                  location = "/newLogin"
                })
         
             }
             , error       : function(request, status, error) {
              console.log(error )
              if(sendMsg == "RESTART" || sendMsg == "NVCATSHUTDOWN")

              {
                
                //응답 받지 않아서 예외 처리
              }
              else
                alert('AJAX 통신 실패! NVCAT 실행 여부 확인!');
                console.log("dkkfk")
              iFlag = '0';
             }
          });		
        }
        else	
          alert('버튼 중복 클릭');				
      }
    		
             
  }			
  
  
  function make_send_data(senddata) {
    var m_sendmsg;
    var m_totlen;
    var m_bodylen;

    m_bodylen = senddata.NCbyteLength();
    m_totlen = 12 + m_bodylen;

    return NCpad(m_totlen,4) + "VCAT    " + NCpad(m_bodylen,4) + senddata;
    
  }

  String.prototype.NCbyteLength = function(){
    var l=0;
    
    for(var idx = 0; idx < this.length; idx++){
      var c = escape(this.charAt(idx));

      if(c.length == 1) l++;
      else if(c.indexOf("%u") != -1) l += 3;
      else if(c.indexOf("%") != -1) l += c.length/3; //JDK20210427 : UTF-8기준. EUC-KR은 /2로 수정 필요.
    }
    
    return l;
  };

  
  function NCpad(n,width)
  {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
  }

