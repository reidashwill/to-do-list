// Business Logic for List -------
var list = {
  toDos: [],
  currentId: 0,
}

 List.prototype.addToDo = function(toDo) {
   toDo.id = this.assignId();
   this.toDos.Push(toDo)
 }
 List.prototype.assignId = function(){
   this.currentId += 1;
   return this.currentId;
 }
 List.prototype.deleteToDo = function(id){
   for (var i=0; i<this.toDos.length; i++){
     if (this.toDos[i]){
       if (this.toDos[i.id === id]) {
         delete this.toDos[i];
         return true; 
       }
     }
   }
   return false;
 }


// Business logic for toDo -------
function ToDo(project, status){
  this.project = project,
  this.status = status
}

// User Interface Logic -------
$(document).ready(function(){
  $("form#to-do-list").submit(function(event){
    event.preventDefault();
    
    var projectInput = $("input#project").val();
    var statusInput = "incomplete";
    var project = new ToDo(projectInput, statusInput);
    debugger;
    list.addToDo(project);
    console.log(List.toDos);
  });
});

