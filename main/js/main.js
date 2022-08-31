import header from "../component/header.js";
var header_ = document.querySelector('.header__');
var menu = document.querySelector('.menu');
header_.innerHTML = header.render();

var d1 = {
    menu: ["Tin tức", "Đào tạo", "Liên kết"],
    tinTức: [
        {
            tiêuĐề: "1",
            ảnh: "",
            thờiGian: ""
        },
        {
            tiêuĐề: "2",
            ảnh: "",
            thờiGian: ""
        },
    ],
    banner_blog: [
        {
            id: 1,
            image: "./main/img/tin tức 1.png",
            time: "02/02/2021",
            text: "Cơ hội nhận học bổng từ Portugal"
        },
        {
            id: 2,
            image: "./main/img/tin tức 2.png",
            time: "08/05/2021",
            text: "Tuần lễ văn hóa của khoa Bồ Đào Nha"
        },
    ],
    number: [
        {
            id: 1,
            icon: "./main/img/97_-removebg-preview.png",
            phầnTrăm: "97%",
            text: "Sinh viên ra trường có việc làm"
        },
        {
            id: 2,
            icon: "./main/img/số_1-removebg-preview.png",
            phầnTrăm: "Số 1",
            text: "Đào tạo tiếng Bồ Đào Nha"
        },
        {
            id: 3,
            icon: "./main/img/14000-removebg-preview.png",
            phầnTrăm: "14000+",
            text: "Sinh viên"
        },
        {
            id: 4,
            icon: "./main/img/15_năm-removebg-preview.png",
            phầnTrăm: "15",
            text: "Năm kinh nghiệm dày dặn"
        },
    ],
    đàoTạo: [
        {
            id: 1,
            img: "./main/img/đại học.png",
            text: "Đại học"
        },
        {
            id: 2,
            img: "./main/img/Sau đại học.png",
            text: "Sau đại học"
        },
        {
            id: 3,
            img: "./main/img/vừa học vừa làm.png",
            text: "Vừa học vừa làm"
        },
    ]
};

// var rs = "";
// for (let i = 0; i < d1.menu.length; i++) {
//     rs += '<li class="dib fw_700" style="margin: 20px 50px ;"><a class="ttu" style="color: #0C8144;" href="#">'+d1.menu[i]+'</a></li>';
// };
// menu.innerHTML = rs;
// var rs2 = "";
// d1.tinTức.forEach(function(D){
//     rs2 += '<li class="dib fw_700" style="margin: 20px 50px ;"><a class="ttu" style="color: #0C8144;" href="#">'+D.tiêuĐề+'</a></li>';
// });
// for (let i = 0; i < d1.length; i++) {
//     var D = d1[i];
//     rs2 += '<li class="dib fw_700" style="margin: 20px 50px ;"><a class="ttu" style="color: #0C8144;" href="#">'+D.tiêuĐề+'</a></li>';
// };

var banner_blog = document.querySelector('._news')
var number = document.querySelector('.number');
var đàoTạo_=document.querySelector('.dt_conten');
function read() {
    d1.banner_blog.map(function (item) {
        banner_blog.innerHTML += `
            <div class="news_conten relative df gap_20 ">
                <div class="news_img btn col-sm-6 col-lg-6">
                    <img class="w1 h1 òc" src="${item.image}" alt=""> 
                </div>
                <div class="tt_news col-sm-6 col-lg-6">
                    <h1 style="color: #0C8144;" class="cpi">${item.text}</h1>
                </div>
                <div class="day pa r0 b0 fw_700 ">
                    <p class="cpi">${item.time}</p>
                </div>
            </div>
        </div>
        `
    }),

        d1.number.map(function (item) {
            number.innerHTML += `
        <div class="number_conten df aic  bd3 jcsa">
        <div class="number_icon wmx150 col-sm-4 col-md-4 col-xs-4 col-lg-4 fni">
            <img class="w1 cpi ofc" src="${item.icon}" alt="">
        </div>
        <div class="number_title col-xs-8 ">
            <h1 class="tac fs_40 cpi" style="color: #0C8144; ">${item.phầnTrăm}</h1>
            <h4 class="tac cpi" style="color: #0C8144; margin-top: 8px ;">${item.text}</h4>
        </div>
        </div>
        `
        }),
        d1.đàoTạo.map(function(i){
            đàoTạo_.innerHTML+=`
            <div class="dt_item relative">
            <div class="dt_img ">
                <img class="h250 w1  cpi" style="object-fit: cover;"
                    src="${i.img}" alt="">
            </div>
                <div class="h3 pa tt t50 l50 cl_fff fs_25 cpi w1 tac ">${i.text}</div>
            </div>
            `
        })
}
read();

var clicked=document.querySelector('.clicked');
var trs=document.querySelector('.trs');
clicked.addEventListener('click',function(){
    trs.classList.add('active_clicked');
})
var close=document.querySelector('.close').addEventListener('click',function(){
    trs.classList.remove('active_clicked');
})