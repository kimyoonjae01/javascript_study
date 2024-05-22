/* let message1 = window.alert("관리자만 접속할 수 있습니다.")
let message2 = window.prompt("1+1?")
let messgae3 =window.confirm("인쇄하시겠습니까?")
console.log(message1,message2,messgae3) */
//window 란? = 웹 브라우저 창 
//window.메서드() ? 웹 브라우저 창에서 실행되는 기능
//window 객체명은 가장 기본이 되는 웹브라우저로 생략가능하다
/* let messgae4 =alert('경고') */// window는 생략
//버튼 클릭 시 구글 이동 함수 생성
function btn_func(){
    window.location.href="https://google.com"
}
/* window.document.write("hello js")
window.open("https://google.com", "_blank" )
window.open("https://google.com", "_blank" , 'width=500', 'height=300') */
function btn_hi(){
    window.document.write("hello js")
}
function btn_google(){
    window.open("https://google.com","_blank")
}
function btn_new_google(){
    window.open("https://google.com", "_blank", "width=500", "heigth=500")
}
/* 인라인 스크립트
    1. 함수,변수 등 자바스크립트는 js 파일 내에서 작성
    2. 상호작용이 필요한 HTML 태그에 JS연결을 위해서
    태그 내에 이벤트(ex)onClick)등으로 함수 연결
*/
/* 인라인스크립트를 피하는 방법
상호작용을 하는 태그를 자바스크립트 내에서 객체로 만든다.
    *객체.속성
    *객체.메서드() */
//========================DOM
const h1Tag = document.getElementsByTagName("h1")
console.log(h1Tag)
console.log(h1Tag[1])
const ulTag = document.getElementsByTagName("ul")
const liTag = ulTag[0].getElementsByTagName("li")
const aTag = liTag[1].getElementsByTagName("a")
console.log(ulTag[0])
console.log(liTag[1])
console.log(aTag)
/* console.log(aTag[0],aTag[1],aTag[2]) */
console.log('==================')
const titleCls = document.getElementsByClassName('title')
console.log(titleCls)
console.log(titleCls[0])
console.log(titleCls[1])
const listCls = ulTag[1].getElementsByClassName('list')
console.log(listCls)
console.log('=======================')
//dom 선택문제
//1. gnbCls : gnb1개 잡기
//2. li_menu1 : gnb의 첫번째 자식 li잡기
//3. li_menu2 : gnb의 두번째 자식 li잡기
//4. lnbAll : 두개의 lnb 클래스 잡기
//5. lnb_sub2 : 첫번째 lnb의 sub_menu 2 a 잡기
const gnbCls = document.getElementsByClassName('gnb')[0]
console.log(gnbCls)
const li_menu1 =gnbCls.getElementsByTagName('li')[0]
console.log(li_menu1)
const li_menu2 =gnbCls.getElementsByTagName('li')
console.log(li_menu2[1])
const inbAll = document.getElementsByClassName('lnb')
console.log(inbAll)
const lnb_sub2 = inbAll[0].getElementsByTagName('a')[1]
console.log(lnb_sub2)