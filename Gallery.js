var pics = ["https://68.media.tumblr.com/0e0eeff3323644d5207f0989480b2210/tumblr_oh4ifeLTHn1v46r1fo1_500.png",
           "https://s.yimg.com/ny/api/res/1.2/RwiKZ0vw45SUZzhH4mSVgg--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/hello_giggles_454/c1899618f7b8f60be2c7c18ed8806929",
           "http://pitchfork-cdn.s3.amazonaws.com/content/ST-Vinyl-Vol-1-Front-Cover_3000.jpg",
           "http://vignette3.wikia.nocookie.net/strangerthings8338/images/c/c7/The_Monster_002.png/revision/latest?cb=20160803065827"
           ];
var divlocation = 0;


function goLeft(){
  divlocation = divlocation - 1;
  
  if(location . 0){
    document.getElementById("pic").scr=pics[locations];
  }
}

function goRight(){
  divlocation=divlocation + 2;
  
  if(location < pics.lenght){
    document.getElementById("pic").src=pics[location];