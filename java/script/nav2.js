//1. 서브 메뉴 숨기기 <ul class="sub">
//2. gnb 마우스를 올리면 <ul class="gnb">
//3. sub 3개가 모두 출력<ul class="sub">
//4. 동적 절차 체크 후 html 태그 확인 후
//5. html dom 필요 변수 생성
const sub = document.querySelectorAll('.sub')
const gnb = document.querySelectorAll('.gnb>li')
console.log(sub,gnb)
//1. sub숨기기 style.dispaly=none;
/* sub[0].style.display = 'none'
sub[1].style.display = 'none'
sub[2].style.display = 'none' */
//2. gnb에 마우스를 올리면 
gnb[0].addEventListener('mouseover',subshow)
gnb[1].addEventListener('mouseover',subshow)
gnb[2].addEventListener('mouseover',subshow)
// 4. gnb 마우스를 나가면
gnb[0].addEventListener('mouseout',subhide)
gnb[1].addEventListener('mouseout',subhide)
gnb[2].addEventListener('mouseout',subhide)
function subshow(){
    sub[0].style.display = 'block'
    sub[1].style.display = 'block'
    sub[2].style.display = 'block'
}
function subhide(){
    sub[0].style.display = 'none'
    sub[1].style.display = 'none'
    sub[2].style.display = 'none'
}
// 6. gnb 모든 마우스 올리면 sub모두 출력하기
/* gnb[1].addEventListener('mouseover',function(){
    sub[0].style.display = 'block'
    sub[1].style.display = 'block'
    sub[2].style.display = 'block'
})
gnb[2].addEventListener('mouseover',function(){
    sub[0].style.display = 'block'
    sub[1].style.display = 'block'
    sub[2].style.display = 'block'
}) 
// 7.gbn 모든 마우스 나가면 sub모두 숨기기
gnb[1].addEventListener('mouseout',function(){
    sub[0].style.display = 'none'
    sub[1].style.display = 'none'
    sub[2].style.display = 'none'
})
gnb[2].addEventListener('mouseout',function(){
    sub[0].style.display = 'none'
    sub[1].style.display = 'none'
    sub[2].style.display = 'none'
}) */