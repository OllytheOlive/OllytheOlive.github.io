var pics = ["http://www.cutenessoverflow.com/wp-content/uploads/2016/06/l.jpg",
            "https://s-media-cache-ak0.pinimg.com/736x/af/1e/d4/af1ed4b27151fdfb1792cf95a240ec48.jpg",
            "http://cfcdn.newsmax.com/Newsmax/files/58/58f7a913-a4a6-47d1-9f38-cf3599f8b2eb.jpg",
            "https://www.ucdavis.edu/sites/default/files/news/general-news/2016/apr/ohi-logo-consortium.jpg",
             "https://1.cdn.edl.io/zx0vgxMF6oWXOTpDc6FH5djem6wHNqKQcNOuhtZTMYDAIaKD.png"];
var divlocation = 0;


function goLeft(){
  divlocation = divlocation - 1;
  
  if(location > 0){
    document.getElementById("pic").scr=pics[locations];
  }
}

function goRight(){
  divlocation=divlocation + 2;
  
  if(location < pics.lenght){
    document.getElementById("pic").src=pics[location];
  }
}