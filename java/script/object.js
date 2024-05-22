//객체
// 2개이상의 데이터를 담을 수 있다 
//배열 : 2개 이상의 데이터 '값'
//갹채 : 2개 이상의 데이터 '속성' , '값'
const obj1 = {
    type :'코리안 숏헤어',
    age :2,
    color :['흰색','갈색']
}
console.log(obj1)
console.log(obj1.type)
console.log(`고양이 종은 ${obj1.type} 입니다.`)
console.log(obj1.color[0])
console.log(obj1.color[0],obj1.color[1])
const cat1 = {
    name :'러블',
    type : "러시안 블루",
    age : '회색',
    age:1,
    gender:'암',
    health:'양호',
    birth:'5/20',
    birth_message:function(){
        return `${this.name}아 ${this.birth} 생일 축하해~!`
    },
}
console.log(cat1)
console.log(cat1.birth_message())
/* const movie = {
    kor_name : '퓨리오사-매드맥스 사가',
    eng_name : 'Furkosa : A Mad Max Sage',
    date:'2024/05/22',
    rate : '37.4%',
    egg_score:'99%',
    director:'조지 밀러',
    actor: ['안야 테일러 조이', '크리스 헴스워스', '톰 버크'],
    genre: ['액션'],
    age:'15세 이상 관람가',
    time : 148,
    country :'미국',
    story:'문명 붕괴 45년 후, 황폐해진 세상에 무참이 던져진 퓨리오사가 고향으로 돌아가기 위해 자신의 이;ㄴ생 전부를 걸고 떠나는 거대한 여정을 그린 액션 블록버스터'
} */
const movie =[{
    kor_name : '퓨리오사-매드맥스 사가',
    eng_name : 'Furkosa : A Mad Max Sage',
    date:'2024/05/22',
    rate : '37.4%',
    egg_score:'99%',
    director:'조지 밀러',
    actor: ['안야 테일러 조이', '크리스 헴스워스', '톰 버크'],
    genre: ['액션'],
    age:'15세 이상 관람가',
    time : 148,
    country :'미국',
    story:'문명 붕괴 45년 후, 황폐해진 세상에 무참이 던져진 퓨리오사가 고향으로 돌아가기 위해 자신의 이;ㄴ생 전부를 걸고 떠나는 거대한 여정을 그린 액션 블록버스터'
},{
    kor_name : '청춘',
    eng_name : 'Furkosa : A Mad Max Sage',
    date:'2024/05/22',
    rate : '37.4%',
    egg_score:'99%',
    director:'조지 밀러',
    actor: ['안야 테일러 조이', '크리스 헴스워스', '톰 버크'],
    genre: ['액션'],
    age:'15세 이상 관람가',
    time : 148,
    country :'미국',
    story:'문명 붕괴 45년 후, 황폐해진 세상에 무참이 던져진 퓨리오사가 고향으로 돌아가기 위해 자신의 이;ㄴ생 전부를 걸고 떠나는 거대한 여정을 그린 액션 블록버스터'
}]
console.log(movie)
console.log(`img src="${movie.poster}" alt="${movie.kor_name}"`)
console.log('========================')
/*
    고양이1/코숏/1살/남/갈색,흰색,검은색/중성화 유
    고양이2/코숏/2살/여/검은색,흰색/중성화 무
    고양이3/코숏/3살/남/흰색,회색/중성화 유
*/
const cat_shelter = [{
    name :'고양이1',
    age : '1살',
    gender :'수',
    type : '코숏',
    color : ['검은색','흰색','갈색'],
    surgery : 'O',
},{
    name :'고양이2',
    age : '2살',
    gender :'암',
    type : '코숏',
    color : ['검은색','흰색'],
    surgery : 'x',
},{
    name :'고양이3',
    age : '3살',
    gender :'수',
    type : '코숏',
    color : ['흰색','회색'],
    surgery : 'o',
}]
console.log (cat_shelter)
console.log (cat_shelter[0])
console.log (cat_shelter[1])
console.log (cat_shelter[2])
console.log (`현재 보호소 동물은 ${cat_shelter.length} 마리입니다.`)
console.log (`현재 보호소 동물 나이대는 ${cat_shelter[0].age},${cat_shelter[1].age},${cat_shelter[2].age} 입니다.`)