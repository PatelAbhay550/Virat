

const cont1 = document.querySelector(".cont1");
const cont2 = document.querySelector(".cont2");
const cont3 = document.querySelector(".cont3");
const cont4 = document.querySelector(".cont4");
const knm = document.querySelector(".snam");
const cont5 = document.querySelector(".cont5");
const selectFormat =document.querySelector('select');
const cont6 = document.querySelector(".cont6");

selectFormat.addEventListener("change", function () {
    const selectedOption = selectFormat.value;
    if (selectedOption === "ODIs") {
        cont1.style.backgroundImage ='url(https://m.timesofindia.com/photo/102015200/102015200.jpg)';
        cont1.style.backgroundBlendMode = 'multiply';
        cont1.style.backgroundRepeat = 'no-repeat';
        cont1.style.backgroundSize = 'cover';
        const p1 = document.getElementById("cont1p1").innerText = "183 v Pakistan, Asia Cup 2012 "
        cont1.style.backgroundPositionY = '0px';


        cont2.style.backgroundImage =
            'url(https://3.bp.blogspot.com/-l10U1Y5vwxU/Ut-btTmCHAI/AAAAAAAATRw/-zTicktXDjw/s1600/Virat-Kohli-New-Zealand-vs-India-1st-ODI-2014.jpg)';
        cont2.style.backgroundBlendMode = 'multiply';
        cont2.style.backgroundRepeat = 'no-repeat';
        cont2.style.backgroundSize = 'cover';
        const p2 = document.getElementById("contp2").innerHTML = "123 v New Zealand, Napier, 2014"
        cont2.style.backgroundPositionY = '0px';

        cont3.style.backgroundImage =
            'url(https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/lsci/db/PICTURES/CMS/265400/265416.3.jpg)';
        cont3.style.backgroundBlendMode = 'multiply';
        cont3.style.backgroundRepeat = 'no-repeat';
        cont3.style.backgroundSize = 'cover';
        const p3 = document.getElementById("contp3").innerHTML = "157 v West Indies, Visakhapatnam, 2018"
        cont3.style.backgroundPositionY = '0px';


        cont4.style.backgroundImage =
            'url(https://www.thestatesman.com/wp-content/uploads/2018/02/Virat-Kohli-3.jpg)';
        cont4.style.backgroundBlendMode = 'multiply';
        cont4.style.backgroundRepeat = 'no-repeat';
        cont4.style.backgroundSize = 'cover';
        const p4 = document.getElementById("contp4").innerHTML = "160* v South Africa, Cape Town, 2018"
        cont4.style.backgroundPositionY = '0px';


        cont5.style.backgroundImage =
            'url(https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/esci/media/motion/cricinfo/2015/1022/cric_151022_COM_CRICKET_AJIT_20151022/cric_151022_COM_CRICKET_AJIT_20151022.jpg)';
        cont5.style.backgroundBlendMode = 'multiply';
        cont5.style.backgroundRepeat = 'no-repeat';
        cont5.style.backgroundSize = 'cover';
        const p5 = document.getElementById("contp5").innerHTML = "138 v South Africa, Chennai, 2015"
        cont5.style.backgroundPositionX = '-70px';


        cont6.style.backgroundImage =
            'url(https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/205800/205837.jpg)';
        cont6.style.backgroundBlendMode = 'multiply';
        cont6.style.backgroundRepeat = 'no-repeat';
        cont6.style.backgroundSize = 'cover';
        const p6 = document.getElementById("contp6").innerHTML = "107 v Pakistan, 2015 World Cup"
        cont6.style.backgroundPositionX = '-70px';


    } else {
        // If 'ODIs' is not selected, you can reset the background image to default.
        // cont1.style.backgroundImage = 'none';
        console.log('not loaded');
    }
});






//T20I

selectFormat.addEventListener("change", function () {
    const selectedOption = selectFormat.value;
    if (selectedOption === "T20Is") {
        cont1.style.backgroundImage =
            'url(https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/297600/297688.4.jpg)';
        cont1.style.backgroundBlendMode = 'multiply';
        cont1.style.backgroundRepeat = 'no-repeat';
        cont1.style.backgroundSize = 'cover';
        const p1 = document.getElementById("cont1p1").innerText = "94* (50) v West Indies (2019) "
        cont1.style.backgroundPositionY = '0px';


        cont2.style.backgroundImage =
            'url(https://resources.pulse.icc-cricket.com/ICC/photo/2022/10/23/5d55fac0-7395-44f2-aab1-686ccb06b71a/qgEXVhUR.jpg)';
        cont2.style.backgroundBlendMode = 'multiply';
        cont2.style.backgroundRepeat = 'no-repeat';
        cont2.style.backgroundSize = 'cover';
        const p2 = document.getElementById("contp2").innerHTML = "82* v Pakistan, Melbourne, 2022"
        cont2.style.backgroundPositionY = '0px';

        cont3.style.backgroundImage =
            'url(https://cdn.wisden.com/wp-content/uploads/2020/05/Kohli-e1589082665275.jpg)';
        cont3.style.backgroundBlendMode = 'multiply';
        cont3.style.backgroundRepeat = 'no-repeat';
        cont3.style.backgroundSize = 'cover';
        const p3 = document.getElementById("contp3").innerHTML = "82* (51) vs Australia, T20 World Cup (2016)"
        cont3.style.backgroundPositionY = '0px';


        cont4.style.backgroundImage =
            'url(https://1.bp.blogspot.com/-D7QV8H7y9_w/XtX18-jhorI/AAAAAAAAokM/2niSyeFlvtokWumWMnWTor6k6_c4oXvPgCNcBGAsYHQ/s1600/183325.4.jpg)';
        cont4.style.backgroundBlendMode = 'multiply';
        cont4.style.backgroundRepeat = 'no-repeat';
        cont4.style.backgroundSize = 'cover';
        const p4 = document.getElementById("contp4").innerHTML = "72* (44) v South Africa, T20 World Cup (2014)"
        cont4.style.backgroundPositionY = '0px';


        cont5.style.backgroundImage =
            'url(https://static.toiimg.com/photo/msid-72480786,resizemode-4,width-400/72480786.jpg?pl=214926)';
        cont5.style.backgroundBlendMode = 'multiply';
        cont5.style.backgroundRepeat = 'no-repeat';
        cont5.style.backgroundSize = 'cover';
        const p5 = document.getElementById("contp5").innerHTML = "70* (29) v West Indies (2019)"
        cont5.style.backgroundPositionX = '-70px';


        cont6.style.backgroundImage =
            'url(https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960,q_50/lsci/db/PICTURES/CMS/235300/235363.jpg)';
        cont6.style.backgroundBlendMode = 'multiply';
        cont6.style.backgroundRepeat = 'no-repeat';
        cont6.style.backgroundSize = 'cover';
        const p6 = document.getElementById("contp6").innerHTML = "49 (51) v Pakistan, Asia Cup (2016)"
        cont6.style.backgroundPositionX = '-70px';


    } else {
        // If 'ODIs' is not selected, you can reset the background image to default.
        // cont1.style.backgroundImage = 'none';
        console.log("no loaded")
    }
});




//IPL
//T20I

selectFormat.addEventListener("change", function () {
    const selectedOption = selectFormat.value;
    if (selectedOption === "IPL") {
        cont1.style.backgroundImage =
            'url(https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/242600/242607.3.jpg)';
        cont1.style.backgroundBlendMode = 'multiply';
        cont1.style.backgroundRepeat = 'no-repeat';
        cont1.style.backgroundSize = 'cover';
        const p1 = document.getElementById("cont1p1").innerText = "109 v Gujarat Lions IPL 2016"
        cont1.style.backgroundPositionX = '1px';


        cont2.style.backgroundImage =
            'url(https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_800,q_50/lsci/db/PICTURES/CMS/243100/243101.jpg)';
        cont2.style.backgroundBlendMode = 'multiply';
        cont2.style.backgroundRepeat = 'no-repeat';
        cont2.style.backgroundSize = 'cover';
        const p2 = document.getElementById("contp2").innerHTML = "113 v Kings XI Punjab IPL 2016"
        cont2.style.backgroundPositionY = '0px';

        cont3.style.backgroundImage =
            'url(https://static.toiimg.com/photo/68964923.cms)';
        cont3.style.backgroundBlendMode = 'multiply';
        cont3.style.backgroundRepeat = 'no-repeat';
        cont3.style.backgroundSize = 'cover';
        const p3 = document.getElementById("contp3").innerHTML = "100 v Kolkata Knight Riders IPL 2019"
        cont3.style.backgroundPositionY = '0px';


        cont4.style.backgroundImage =
            'url(https://1.bp.blogspot.com/-ZlkiWJGHtuc/YFeG3mqSIkI/AAAAAAAAxNM/rYc6__8OFgkZJwZT7izzc3yM1gjmooUswCNcBGAsYHQ/s800/1462796040_royal-challengers-bangalore-rcb-captain-virat-kohli-smashed-masterful-century-snatch-much.jpg)';
        cont4.style.backgroundBlendMode = 'multiply';
        cont4.style.backgroundRepeat = 'no-repeat';
        cont4.style.backgroundSize = 'cover';
        const p4 = document.getElementById("contp4").innerHTML = "108* v Rising Pune Supergiants in IPL 2016"
        cont4.style.backgroundPositionY = '0px';


        cont5.style.backgroundImage =
            'url(https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/310300/310308.6.jpg)';
        cont5.style.backgroundBlendMode = 'multiply';
        cont5.style.backgroundRepeat = 'no-repeat';
        cont5.style.backgroundSize = 'cover';
        const p5 = document.getElementById("contp5").innerHTML = "90* v Chennai Super Kings IPL 2020"
        cont5.style.backgroundPositionX = '-70px';


        cont6.style.backgroundImage =
            'url(https://1.bp.blogspot.com/-zQLWZe3lvk0/YFCBMCdKDyI/AAAAAAAAxCc/01NQeT_TlvElqBVmZLbrOlmNCXJmQ-mYQCNcBGAsYHQ/s1280/maxresdefault%25286%2529.jpg)';
        cont6.style.backgroundBlendMode = 'multiply';
        cont6.style.backgroundRepeat = 'no-repeat';
        cont6.style.backgroundSize = 'cover';
        const p6 = document.getElementById("contp6").innerHTML = "75 v Sunrisers Hyderabad IPL 2016"
        cont6.style.backgroundPositionX = '-370px';


    } else {
        // If 'ODIs' is not selected, you can reset the background image to default.
        // cont1.style.backgroundImage = 'none';
        console.log("no loaded")
    }
});

















selectFormat.addEventListener("change", function () {
    const selectedOption = selectFormat.value;
    if (selectedOption === "Tests") {
        window.location.reload();
        // cont1.style.backgroundImage = 'url(https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/200700/200729.3.jpg)';
        // const p1 = document.getElementById("cont1p").innerText="141 v Australia, Adelaide, 2014";
    }

});
const toggler = document.getElementById("toggle");
const knh1 = document.querySelector(".h1k");
const pk = document.querySelector(".pk");
const nav = document.querySelector('.nav');
const best = document.querySelector('#bn');
const menu = document.querySelector(".nmnu i");
const darkn = document.querySelector("#darkn");
document.addEventListener('DOMContentLoaded', function() {
    toggler.click();
  });

function dark() {
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        toggler.classList.remove('ri-toggle-fill')
        knh1.style.color = 'black';
        bn.style.color = 'black';
        knm.style.color = 'black';
        darkn.innerHTML = 'Light';
        pk.style.color = 'black'; // Change h1 text color to black when in white mode
        nav.style.color = 'black';
        toggler.style.color = 'black';
        menu.style.color = 'black';
        document.querySelector('.li').style.color = 'black';
        nav.style.borderBottom = '1px solid black';
        nav.style.background = 'white';  // Change h1 text color to black when in white mode
        toggler.classList.add('ri-toggle-line')
    } else {
        document.body.style.backgroundColor = 'black';
        toggler.classList.add('ri-toggle-fill')
        toggler.classList.remove('ri-toggle-line')
        knh1.style.color = 'white'; // Change h1 text color to white when in black mode
        pk.style.color = 'white'; // Change h1 text color to white when in black mode
        nav.style.color = 'white';
        knm.style.color = 'white';
        nav.style.borderBottom = '1px solid white';
        darkn.innerHTML = 'Dark';
        bn.style.color = 'white';
        document.querySelector('.li').style.color = 'black';
        
        toggler.style.color = 'white';
        menu.style.color = 'white';
        nav.style.background = 'black'; // Change h1 text color to white when in black mode
    }
}
vid2 = document.getElementById("vid2");
vid3 = document.getElementById("vid3");
vid4 = document.getElementById("vid4");
cont1.addEventListener("mouseenter", () => {
    vid1.style.display = 'block';
  });

  cont1.addEventListener("mouseleave", () => {
    vid1.style.display = 'none';});


cont2.addEventListener("mouseenter", () => {
        vid2.style.display = 'block';
      });
    
      cont2.addEventListener("mouseleave", () => {
        vid2.style.display = 'none';});


cont3.addEventListener("mouseenter", () => {
            vid3.style.display = 'block';
          });
        
cont3.addEventListener("mouseleave", () => {
            vid3.style.display = 'none';});
            

cont4.addEventListener("mouseenter", () => {
                vid4.style.display = 'block';
              });
            
cont4.addEventListener("mouseleave", () => {
                vid4.style.display = 'none';});


//toggle
const elem = document.querySelector(".elem");
const mnnu = document.getElementById("mnnu");
const darknn = document.querySelector("#darkn");

function showw() {
  const liElements = elem.querySelectorAll("li");
  for (const li of liElements) {
    if (li.style.display === 'block') {
      li.style.display = 'none';
    } else {
      li.style.display = 'block';
    }
  }

  if (darknn.style.display === 'none') {
    darknn.style.display = 'block';
  } else {
    darknn.style.display = 'none';
  }

  if (elem.style.display === 'flex') {
    elem.style.display = 'none';
  } else {
    elem.style.display = 'flex';
  }
}

mnnu.addEventListener("click", showw);



function myFunction(x) {
    mnnu.style.display = 'none';
  }
  
  var x = window.matchMedia("(min-width: 600px)")
  myFunction(x) // Call listener function at run time
  x.addEventListener(myFunction) 