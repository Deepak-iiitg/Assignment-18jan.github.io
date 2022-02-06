var heart = document.getElementById('heart');

heart.addEventListener('click', btn);


var count = 0;
function btn() {
   count++;
   if(count % 2 == 0) {
      heart.style.color = "black";
      heart2.style.color = "black";
   } else {
      heart.style.color = "red";
      heart2.style.color ="red";
   }
}
   


var heart2 = document.getElementById('heart2');

heart2.addEventListener('click', btn2);



function btn2() {
   count++;
   if(count % 2 == 0) {
      heart2.style.color = "black";
      heart.style.color = "black";
      
   } else {
      heart2.style.color = "red";
      heart.style.color = "red";
   }
}


var byImage = document.getElementById('upld_img');

byImage.addEventListener('dblclick', btnreact);


function btnreact() {
   count++;
   if(count % 2 == 0) {
      heart2.style.color = "black";
      heart.style.color = "black";
      
   } else {
      heart2.style.color = "red";
      heart.style.color = "red";
   }
}

var bookmark = document.getElementById('bookmarks');
bookmark.addEventListener('click', book_mark);

function book_mark() {
   bookmark.style.color = "orange";
}