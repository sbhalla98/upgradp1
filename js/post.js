document.getElementById("commentBox").style.display = "none";
function editable(){
    
    document.getElementById("blogBody").contentEditable = "true";
    document.getElementById("blogTitleNew").contentEditable = "true";
    document.getElementById("blogTitleNew").focus();
    document.getElementById("blogBody").focus();
    document.getElementById("bedit").innerHTML =   '<button class="btn" id="edit" onclick="noneditable(blogBody)">'+"Save" +"&nbsp<i class='material-icons' style='font-size: 15px;'>save</i></button>";
  

}
function noneditable(){

    document.getElementById("blogBody").contentEditable = "false";
    document.getElementById("blogTitleNew").contentEditable = "false";
    document.getElementById("bedit").innerHTML =  '<button class="btn" id="edit" onclick="editable(blogBody)">Edit &nbsp<i class="material-icons" style="font-size: 15px;">edit</i></button> ';

}
var c = 0;
function like(){
  c++;
  if(c==1){
  document.getElementById("likestatement").innerHTML = c + " person likes this!";
  }
  else{
    document.getElementById("likestatement").innerHTML = c + " persons have liked this!";
  }

}
var x = document.getElementById("text").defaultValue;
function comment(id){
    document.getElementById("nocomment").style.display = "none";
    document.getElementById("commentBox").style.display = "block";
    if(id.value == ""){
        alert('!invalid comment!');
    }
    else{
      var earlierComment = document.getElementById("t01").innerHTML;
 document.getElementById("t01").innerHTML ='<div style="background-color:white;padding:10px;margin:1%;margin-bottom:0px;">'+id.value+'</div>' + earlierComment;
 document.getElementById("text").value = x; 
    }   
}

