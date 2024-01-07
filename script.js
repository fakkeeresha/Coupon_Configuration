console.log("welcome");
let date1=new Date();
let id1=document.getElementById('id');
let CouponId=document.getElementById('COUPON_ID');
let CouponAmount=document.getElementById('COUPON_AMOUNT');
let date2=document.getElementById("COUPON_END_DATE");
let priority=document.getElementById("priority");
let CatgoryId=document.getElementById("CATEGORY_ID");
let CouponType=document.getElementById("COUPON_TYPE");
let description=document.getElementById("description");
let CouponName=document.getElementById("COUPON_NAME");
let CouponLink=document.getElementById("COUPON_LINK");
let CouponCategory=document.getElementById("COUPON_CATEGORY");
let CouponPriority=document.getElementById("COUPON_PRIORITY");
let script=document.getElementById('script');
let script2=document.getElementById('script2');
let CouponIMg=document.getElementById('COUPON_IMG')
//let ans=document.getElementById('ans');
let tc=document.getElementById('tc');
let btn2=document.getElementById('btn2')
let CouponCode=document.getElementById('COUPON_CODE')

let id,newDate,COUPON_ID,COUPON_IMG,COUPON_CODE,COUPON_AMOUNT,COUPON_START_DATE,COUPON_END_DATE,PRIORITY,CATEGORY_ID,COUPON_TYPE,DESCRIPTION,COUPON_NAME,COUPON_LINK,COUPON_CATEGORY,COUPON_PRIORITY;
let btn=document.getElementById('btn');


let btn3=document.getElementById('btn3');
let script1=document.getElementById('script1');

let copy1=document.getElementById('copy1');
let copy2=document.getElementById('copy2');
let copy3=document.getElementById('copy3');

let ans=document.getElementById('ans');
let Lbtn=document.getElementById('Lbtn')


function runScripts1(){
    console.log("run scripts");
    COUPON_START_DATE=`to_date('${date1.getDate()}-${date1.getShortMonthName()}-${date1.getFullYear()}','DD-MON-RR')`
    id=id1.value;
    COUPON_ID=CouponId.value;
    COUPON_AMOUNT=CouponAmount.value;
     newDate=date2.value
    COUPON_END_DATE=`to_date('${formatDate()} 11:59:59 PM','MM/DD/YYYY HH:MI:SS AM')`;
    PRIORITY=priority.value;
    CATEGORY_ID=CatgoryId.options[CatgoryId.selectedIndex].text;
    COUPON_TYPE=CouponType.options[CouponType.selectedIndex].text;
    DESCRIPTION=description.value;
    COUPON_NAME=CouponName.value;
    COUPON_LINK=CouponLink.value;
    COUPON_IMG=CouponIMg.value;
    COUPON_CATEGORY=CouponCategory.options[CouponCategory.selectedIndex].text;
    COUPON_PRIORITY=CouponCategory.options[CouponCategory.selectedIndex].value;
    console.log(id+'  '+COUPON_ID);
console.log(COUPON_END_DATE)
   console.log(COUPON_CATEGORY)
   console.log(COUPON_START_DATE)
   console.log(COUPON_END_DATE)

   let scripts=`Insert into SELFCARE.RECHARGE_COUPON_DTLS (ID,COUPON_ID,COUPON_AMOUNT,RECHARGE_MIN,RECHARGE_VALUE,LOAD_DATE,STATUS,COUPON_START_DATE,COUPON_END_DATE,PRIORITY,CATEGORY_ID,COUPON_IMAGES,DESCRIPTION,COMMENTS,COUPON_NAME,DESCRIPTION2,COUPON_LINK,DESCRIPTION1,EMAIL_DESCRIPTION1,EMAIL_DESCRIPTION2,EMAIL_DESCRIPTION3,DESCRIPTION6,DESCRIPTION7,COUPON_TC_LINK,COUPON_TYPE,COUPON_CATEGORY,COUPON_PRIORITY) values(${id},'${COUPON_ID}',${COUPON_AMOUNT},100,${COUPON_AMOUNT},${COUPON_START_DATE},'Y',${COUPON_START_DATE},${COUPON_END_DATE},${PRIORITY},'${CATEGORY_ID}','${COUPON_IMG}','${DESCRIPTION}',null,'${COUPON_NAME}','${DESCRIPTION}','${COUPON_LINK}','${DESCRIPTION}','This voucher entitles you to ${DESCRIPTION}',null,null,'<a href="${COUPON_LINK}" target="_blank">${COUPON_LINK}</a>',null,'https://bit.ly/2LKkCdN',${COUPON_TYPE},'${COUPON_CATEGORY}',${COUPON_PRIORITY});`
console.log(scripts)
console.log(COUPON_END_DATE)

script.value=scripts;

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date = new Date(newDate)) {
  return [
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
    date.getFullYear(),
    
  
  ].join('/');
}
}



function runScripts3(){
  //console.log(tc.value)
  let string=tc.value;
  let lines=string.split('\n');
  let array=[];
 // console.log(lines[3])
 // console.log(lines.length)
  for(let i=0;i<lines.length;i++){
    str=`Insert into SELFCARE.RECHARGE_COUPON_TC (COUPON_ID,DESCRIPTION,PRIORITY,STATUS) values ('${COUPON_ID}','${lines[i]}',${i+1},'Y');`
  array.push(str);

  }
  console.log(array)
  for(let i=0;i<array.length;i++){
console.log(array[i]);
}
 // let res=array.toString();
 let res=array.join('\r\n')
  //script2.value=array.join('');
  script2.value=res;
  //return dates.replace(",", "<br />");
  var arr = ['apple','banana','mango'];
console.log(arr.join('\r\n'));
let hi=arr.join('\r\n');
console.log(hi);
}

function runScripts2(){
  COUPON_CODE=CouponCode.value;
  let res2=`Insert into SELFCARE.RECHARGE_COUPON_AVAILABLE (COUPONID,COUPONCODE,EXPIRYDATE,AVAILABLE,PRICE,COUPON_TYPE) values ('${COUPON_ID}', '${COUPON_CODE}',${COUPON_END_DATE},'Y',${COUPON_AMOUNT},${COUPON_TYPE});`
script1.value=res2;
}


btn.addEventListener('click',()=>{
    runScripts1()
})

btn2.addEventListener('click',()=>{
  runScripts3()

})
btn3.addEventListener('click',()=>{
  runScripts2()
})

copy1.addEventListener('click',()=>{
  
  script.select();
  script.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(script.value);
 // alert('Text Copied')
  
})
copy2.addEventListener('click',()=>{
  
  script1.select();
  script1.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(script1.value);
  //alert('Text Copied')
})
copy3.addEventListener('click',()=>{
  
  script2.select();
  script2.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(script2.value);
 // alert('Text Copied')
})

Date.prototype.monthNames = [
  "January", "February", "March",
  "April", "May", "June",
  "July", "August", "September",
  "October", "November", "December"
];

Date.prototype.getMonthName = function() {
  return this.monthNames[this.getMonth()];
};
Date.prototype.getShortMonthName = function () {
  return this.getMonthName().substr(0, 3);
};
function last(){

}

