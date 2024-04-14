
fetch('/adminGoodsKiosk')
.then(res => res.json())
.then(data => {
  const kioceTotall = []
  const close = () => {
    document.querySelector(".modal").classList.add("hidden");
    console.log("dlkfkd")
    location = "/newLogin"
  }
  

  document.querySelector(".closeBtn").addEventListener("click", close);
  document.querySelector(".bg").addEventListener("click", close);
  

  for( var y =0; y<data.length; y++) {
    const menz = data.filter(function (setAdd) { return setAdd.indexType === data[y].indexType });
    
    if(menz[0].indexType === "fixedType") {
   
    for(var i =0; i<menz[0].feeName.length; i++) {
  
    const tr = document.createElement('tr')
    const tbody = document.querySelector('tbody')
    tbody.appendChild(tr)
     
   const td = document.createElement('td')
   const td1 = document.createElement('td')
   const td2 = document.createElement('td')
   const td3 = document.createElement('td')
 
  
   td.innerText = menz[0].feeName[i]
   td1.innerText = menz[0].fee[i]
   td2.innerText = "RoomType"
   td3.innerText = menz[0].expiry[i]
   tr.appendChild(td)                      // 상품 명
   tr.appendChild(td1).id = menz[0].feeName[i]; // 상품 금액
   tr.appendChild(td2).id = menz[0].fee[i]; 
   tr.appendChild(td3).id = "RoomType"  //유효기간 현재 유효 기간에 충전권 금액 들어감
   
   document.getElementById(`${menz[0].fee[i]}`).setAttribute('expiry', `${menz[0].expiry[i]}`)
   const expiry = document.getElementById(`${menz[0].fee[i]}`).getAttribute('expiry')
   const goodsName = document.getElementById(`${menz[0].feeName[i]}`)
   
   document.getElementById(`${menz[0].feeName[i]}`).onclick = () => {myFunction(goodsName.id, expiry, goodsName.outerText, "fixedType")};
        }  
  }
  if(menz[0].indexType === "feeType") {
   
    for(var k =0; k <menz[0].feeName.length; k++) {

    const tr = document.createElement('tr')
    const tbody = document.querySelector('#ree')
    tbody.appendChild(tr)
     
   const td = document.createElement('td')
   const td1 = document.createElement('td')
   const td2 = document.createElement('td')
   const td3 = document.createElement('td')

  
   td.innerText = menz[0].feeName[k]
   td1.innerText = menz[0].fee[k]
   td2.innerText = "Times"
   td3.innerText = menz[0].expiry[k]
   tr.appendChild(td)                      // 상품 명
   tr.appendChild(td1).id = menz[0].feeName[k]; // 상품 금액
   tr.appendChild(td2).id = menz[0].fee[k]; 
   tr.appendChild(td3).id = "feeType"  //유효기간 현재 유효 기간에 충전권 금액 들어감
   document.getElementById(`${menz[0].fee[k]}`).setAttribute('expiry', `${menz[0].expiry[k]}`)
   const expiry = document.getElementById(`${menz[0].fee[k]}`).getAttribute('expiry')
   const goodsName = document.getElementById(`${menz[0].feeName[k]}`)
  
   document.getElementById(`${menz[0].feeName[k]}`).onclick = () => {myFunction(goodsName.id, expiry, goodsName.outerText,"feeType")};
    }  
  }
  if(menz[0].indexType === "daysType") { 
    console.log(menz[0])
    for(var z =0; z <menz[0].feeName.length; z++) {

      const tr = document.createElement('tr')
      const tbody = document.querySelector('#rs')
      tbody.appendChild(tr)
       
     const td = document.createElement('td')
     const td1 = document.createElement('td')
     const td2 = document.createElement('td')
     const td3 = document.createElement('td')
   
    
     td.innerText = menz[0].feeName[z]
     td1.innerText = menz[0].fee[z]
     td2.innerText = "dayType"
     td3.innerText = menz[0].expiry[z]
     tr.appendChild(td)                      // 상품 명
     tr.appendChild(td1).id = `${menz[0].feeName[z]}day`; // 상품 금액
     tr.appendChild(td2).id = `${menz[0].fee[z]}day`; 
     tr.appendChild(td3).id = "RoomType"  //유효기간 현재 유효 기간에 충전권 금액 들어감
     
     document.getElementById(`${menz[0].fee[z]}day`).setAttribute('expiry', `${menz[0].expiry[z]}`)
     const expiry = document.getElementById(`${menz[0].fee[z]}day`).getAttribute('expiry')
     const goodsNameday = document.getElementById(`${menz[0].feeName[z]}day`)
     console.log(goodsNameday,"kki")
     document.getElementById(`${menz[0].feeName[z]}day`).onclick = () => {myFunction(goodsNameday.id, expiry, goodsNameday.outerText, "daysType")};
            

    }  
  }
 
// 1. 탭 버튼과 탭 내용 부분들을 querySelectorAll을 사용해 변수에 담는다.
const tabItem = document.querySelectorAll(".tab__item");
const tabContent = document.querySelectorAll(".tab__content");

// 2. 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
// 이때 index도 같이 가져온다.
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
   
  });
  
}); 

     

       function  myFunction(goodsName, expiry, fee, setGoods)  {
      console.log(goodsName, expiry, fee, setGoods)
        kioceTotall.push(goodsName, expiry, fee,setGoods )
    
        document.querySelector(".modal").classList.remove("hidden"); //모달창 생성
        var TYPE = "VCAT";
        var TYPE2 = "NICEVCAT";
        var FS = '\x1C';
        var H7 = '\x07';
        var sendbuf;
        var iFlag = '0';
        document.getElementById("feeName").innerText = `결제 금액 :  ${fee}`
        const regex = /[^0-9]/g;
        const result = goodsName.replace(regex, "");
        const number = parseInt(result);
      
        const nowTime = moment().format('yy-MM-DD hh:mm')
	
        const seet = document.getElementById('seet');
       
        
          seet.addEventListener('change', function () { 
          const seetValue = seet.options[seet.selectedIndex].value;
        
           
        const  Button = document.getElementById("cad").addEventListener("click", handleClick('credit'))
       
       
       function handleClick(myRadio) //카드 결제 information 
       {        
         console.log(myRadio)
       
         if(myRadio == 'credit') //신용승인
         {
           sendbuf = "NICEVCAT" + H7 + "0200" + FS + "10" + FS + "C" + FS + fee + FS + "0" + FS + "0" + FS + seetValue + FS + "" + FS + "" + FS + "" + FS + "" + FS + FS + FS + "" + FS + FS + FS + FS + ""+ FS + H7;						
         }
         // 		else if(myRadio.value == 'credit_cancel') //신용취소
         // {
         // 	sendbuf = "NICEVCAT" + H7 + "0420" + FS + "10" + FS + "C" + FS + form.money.value + FS + form.tax.value + FS + form.bongsa.value + FS + form.halbu.value + FS + form.agreenum.value + FS + form.agreedate.value + FS + form.catid.value + FS + FS + FS + FS + form.myunse.value + FS + FS + FS + FS + "" + FS + H7;
         // }
   
     
       
         form.SendData.value = sendbuf +"" + kioceTotall ;	 // 이정보를 가지고 post 
         console.log(form.SendData.value, "39")		
            
       }	
         
            
              })
              console.log(kioceTotall,"227")
              return kioceTotall
            }
          
          }
          
    
        


   

})


   var sendbuf;
	var iFlag = '0';
		function reqVCAT_HTTP(myRadio) //VCAT 클릭 이벤트 함수  함수 
		{ 	
			var sendMsg;	
			var RecvData;
			
			form.RecvData.value = "";
			sendMsg = form.SendData.value;	
		    
				
			if(sendMsg.length == 0)
				alert("할부 개월수 및 금액을 확인 해주세요");
			else{				
				if(sendMsg == "REQ_STOP")
				{	

					sendbuf = make_send_data(sendMsg);	
							
					
					$.ajax
						({ url         : "http://127.0.0.1:9189"    
						 , type        : "POST"
						 , dataType    : "text"
						 //, timeout     : $("#vanpReqTimeOut").val()
						 , data        : encodeURI(sendbuf)
						 , success     : function(data) {							
							   form.RecvData.value = data;	
							console.log("dkfkdkf")
						 
						 }
					});			 
					  
				}
				else 
				{		
					//요청 시 중복방지로직을 필수로 처리해주세요. 
					if(iFlag == '0')
					{
  
						
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
                
              if(data.length <= 506) { return alert("결제가 정상적으로 이루워지 않았습니다.")}
               
                
                const arr1 = sendbuf.split("",40);
               
                const str = `${form.RecvData.value}`
               
                const arr = str.split("",20);
                console.log(arr,"303")
                const number1= arr1[19].split(",", 4)
             
                const regex = /[^0-9]/g;
                const result = arr[16].replace(regex, "");
                const number = parseInt(result);

                const regex1 = /[^0-9]/g;
                const result1= number1[0].replace(regex1, "");
                const number2 = parseInt(result1);
               console.log(number2 , "319")
               console.log(arr1 , "320")
               
           const req = {
            approvalDay: arr[8],   //승인 날짜 표기
            approvalNumber : number, //승인 번호
            day:number2,            
            setGoods:number1[3],
            fee:number1[2],
            expiry:number1[1],
            hangle:arr[6],
            approvalDay :arr[8]

           }
           console.log(req, "332")
          
             fetch("/kioce", {
              method: "POST",
              headers : {
                "Content-Type" :"application/json"
              },
              
               body: JSON.stringify(req),
              })
              .then((res => res.json()))
              .then(( res) => {
              alert("결제 되였습니다. ")
                setTimeout(() => {

                  location.href = "/userInfor"
                }, 1500);
            
              
              })
                
							 }
							 , error       : function(request, status, error) {
                console.log("340")
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


			
	