var box1; //생성은 됐지만 데이터는 정의되지 않은 상태
console.log(box1) //undefined
var box1 = 1; //중복 선언해도 에러는 나지 않는다.
box_all() // 변수가 없어도 undefined가 출력된다.
var box2 = 'box1' + 1 ;
box_all()
var box3 = '1'+(1+1);
console.log(box1); //1
console.log(box2); //box11? 2?
console.log(box3); 
box_all()
//=============================
function box_all(){
    console.log("all=>", box1,'과', box2, box3)
    //템플릿 문자열 (es6)
    console.log(`all=>${box1}과 ${box2}와 ${box3}입니다.`)
    console.log(`all=>${box1, box2, box3}`)
}
//---------------회원의 나이를 저장하고 있는 함수
var lee = 20
var kim = 21
var soo = 22
function user_age(){
    console.log(`당신의 나이는 ${kim}살 입니다.`)
}
//-------------------------
var num =0; //기본 상품 갯수
function productNum(){
    num = num+1
    console.log(num)
}
console.log('-------------------')
//var v s let
var a = 1; //초기생성
var a = 2; //이미 생선항 변수를 종복 선언해도 에러없음.
let b = 3;
b = 4; //이미 생성된 변수를 종복 선언하면 에러가 발생
// let(변하는 변수) vs const(변하지 않는 상수)
const c= 5;
//자바 스크립트는 절차적언어이다.
//자바 스크립트는 객체지향언어이다.
//자바 스크립트는 함수형언어이다.
const js ="자바스크립트";
let js_lang ="절차적";
console.log(`${js}는 ${js_lang}언어이다.`)
js_lang ="객체지향"
console.log(`${js}는 ${js_lang}언어이다.`)
js_lang ="함수형언어"
console.log(`${js}는 ${js_lang}언어이다.`)
console.log("-------------------")
//const는 변하지 않는 상수를 가지는 변수이다.
//let은 변하는 데이터 값을 가지는 변수이다.
//var는 변하는 데이터 값을 가지는 변수이다.
const data1 ="변수";
let data2 ="const";
let data3 ="변하지 않는 상수";
console.log(`${data2}는 ${data3}를 가지는 ${data1}이다.`)
data2 ="let";
data3 ="변하는 데이터 값";
console.log(`${data2}는 ${data3}을 가지는 ${data1}이다`)
data2 ="var"
console.log(`${data2}는 ${data3}을 가지는 ${data1}이다`)
console.log("-------------------")
//회원 정보 저장 변수
//이름 : 홍길동
//나이 : 20
//혈액형 : o
//mbti : enfj
//거주지 : 인천시 부평구
//성별 : 남성
let user_name ="홍길동"
let age = 20
const blood ="O"
let mbti ="enfj"
let address ="인천시 부평구"
let gender ="남성"
console.log(`${user_name}의 나이는 ${age}살 입니다.`)
console.log(`${user_name}의 내년 나이는 ${age+1}살 입니다.`)
console.log(`${user_name}의 작년 나이는 ${age-1}살 입니다.`)
console.log(`${user_name}의 혈액형은 ${blood}형 입니다.`)
console.log(`${user_name}의 mati는 ${mbti} 입니다.`)
console.log(`${user_name}의 거주지는 ${address} 입니다.`)
console.log('-----------------')
let global_variable = 1;
function local_func(){
    let local_variable = 2+global_variable;
    console.log(local_variable)
}
console.log(global_variable)
local_func()
console.log('-------------------')
//null(빈, 삭제된) vs undefined(정의 안됨)
let cart1 = 10; //장바구니에 10개의 상품을 담음
console.log(cart1);
cart1 = null; //장바구니 비움
console.log(cart1)
let cart2; //처음 사용자가 아무것도 물건을 담지 않았을 때
console.log(cart2) // undefined
console.log('-------------------')
//하루 총 지출액 가계부 만들기
// 커피1500원, 도시락 6000원, 대중교통 2천원
// 오늘 총 지출액은 000원입니다.
let coffee =1500;
let lunch =6000;
let traffic =2000;
let phone =2000000;
function money(){
    let result = coffee+lunch+traffic
    console.log(`오늘 총 지출액은 ${result} 입니다.`)
}
console.log("---------------")
function phone_money(){
    let result=phone/6;
    console.log(`이번 달 핸드폰 할부 금액은 ${result} 원 입니다.`)
}
function all_rasult(){
    let phone_plan=phone/6;
    let total = phone_plan+coffee+lunch+traffic
    console.log(`핸드폰 할부 금액 포함 총 치출액은 ${total} 원 입니다`)
}
