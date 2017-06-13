var pics = ["http://www.cutenessoverflow.com/wp-content/uploads/2016/06/l.jpg",
            "https://s-media-cache-ak0.pinimg.com/736x/9b/d2/3d/9bd23dbd2b30846bcd90562a168633bb.jpg",
            "https://sd.keepcalm-o-matic.co.uk/i-w600/keep-calm-and-love-leadership-3.jpg",
            "https://s-media-cache-ak0.pinimg.com/736x/af/1e/d4/af1ed4b27151fdfb1792cf95a240ec48.jpg",
            "http://cfcdn.newsmax.com/Newsmax/files/58/58f7a913-a4a6-47d1-9f38-cf3599f8b2eb.jpg",
            "https://www.ucdavis.edu/sites/default/files/news/general-news/2016/apr/ohi-logo-consortium.jpg",
             "https://1.cdn.edl.io/zx0vgxMF6oWXOTpDc6FH5djem6wHNqKQcNOuhtZTMYDAIaKD.png",
           "https://s-media-cache-ak0.pinimg.com/736x/c3/10/32/c31032fc4bc86436a657ce947b7de3b0.jpg"];
var divLocation = 0;


function goLeft(){
  divLocation = divLocation - 1;
  
  if(divLocation > 0){
    document.getElementById("pic").src=pics[divLocation];
  }
}

function goRight(){
  divLocation = divLocation + 1;
  
  if(divLocation < pics.length){
    document.getElementById("pic").src=pics[divLocation];
  }
}