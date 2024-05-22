// 1.서브(변수) 숨기기
// 2.메인메뉴(변수)에 마우스를 올리면 
// 3.마우스 올린 메뉴의 관련 서브메뉴 보이기
const sub = document.querySelectorAll('.sub')
console.log(sub)
//  css 에서는 {display:none;} 
//  html에서는 <tag style="display:none;"></tag>
//  객체.속성.속성 = 값
sub[0].style.display = `none`; // 서브(변수) 숨기기
sub[1].style.display = `none`; // 서브(변수) 숨기기
sub[2].style.display = `none`; // 서브(변수) 숨기기
sub[3].style.display = `none`; // 서브(변수) 숨기기
const menu = document.querySelectorAll('.gnb > li')
// header .gnb > li:nth-child(2) {}
console.log(menu)
// 메뉴1
menu[0].addEventListener('mouseover',function(){
    sub[0].style.display = `block`;
})
//menu에서 마우스 나갔을 때 서브 숨기기
menu[0].addEventListener('mouseout', function(){
    sub[0].style.display = 'none';
})
// 메뉴2
menu[1].addEventListener('mouseover',function(){
    sub[1].style.display = `block`;
})
//menu에서 마우스 나갔을 때 서브 숨기기
menu[1].addEventListener('mouseout', function(){
    sub[1].style.display = 'none';
})
// 메뉴3
menu[2].addEventListener('mouseover',function(){
    sub[2].style.display = `block`;
})
//menu에서 마우스 나갔을 때 서브 숨기기
menu[2].addEventListener('mouseout', function(){
    sub[2].style.display = 'none';
})
// ------------------------ 메뉴 4
menu[3].addEventListener('mouseover',function(){
    sub[3].style.display = `block`;
})
//menu에서 마우스 나갔을 때 서브 숨기기
menu[3].addEventListener('mouseout', function(){
    sub[3].style.display = 'none';
})
