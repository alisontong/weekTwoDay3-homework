$(function() {

  // form to create new todo
  var $delButton = $('#delete');
  var $newToDo = $('#new-todo');

  // element to hold our list of todos
  var $toDoList = $('#todo-list');

  // todo template
  var todoTemplate = _.template($('#todo-template').html());

  // `toDos` array is our model (holds our data)
  // contains test (or "seed") data
  //var toDos = [
    //{name: "laundry", desc: "clean clothes"},
    //{name: "grocery shopping", desc: "buy food"},
    //{name: "nap time", desc: "remember to sleep!"}
 // ];

  // append existing todos (from seed data) to `$toDoList`
  // `_.each` is an "iterator" function provided by Underscore.js
  //_.each(toDos, function (todo, index) {
  //  var $todo = $(toDoTemplate(todo));
    //$todo.attr('data-index', index);
    //$toDoList.append($todo);
  //});

  // submit form to create new todo
  $newToDo.on('submit', function(event) {
    event.preventDefault();
    //create variables
    var toDoName = $('#todo-name').val();
    var toDoDesc = $('#todo-desc').val();
    var toDo = new ToDo(toDoName, toDoDesc);

    // create new todo object from form data
    function ToDo(toDoName, toDoDesc){
    this.name = toDoName;
    this.desc = toDoDesc;
    }

    ToDo.all = []

    //save to the toDos
    ToDo.prototype.save = function(toDoName, toDoDesc){
         ToDo.all.push(toDo)
    }
    toDo.save();

    //render
    ToDo.prototype.render = function(toDoName, toDoDesc){
         var index = ToDo.all.indexOf(toDo)
         var $toDo = $(todoTemplate(toDo))
         $toDo.attr('data-index',index);
         $toDoList.append($toDo)
    }
    toDo.render();

    // reset the form
    $newToDo[0].reset();
    $('#todo-name').focus();
  });

  // add class to todo on click to mark it as done
  $toDoList.on('click', '.todo', function() {
    $(this).addClass('done');
  });


  //Delete button that selects based on class .done 
  $delButton.on('click', function() {
    event.preventDefault();
    _.each(toDos, function (toDo, index){
      //loops through array and changes index to null for all that have class=done
      if ($('[data-index=' + index + ']').hasClass("done")) { 
        toDos[index] = null;
      }
    });
    //filters out all null values in array and returns what is left over in new toDos array
    toDos = toDos.filter(function(element) {
      return element !== null;
    });
    //removes from the visual todo list anything that is crossed off
    $('.done').remove();
  });



});
 // var toDos = [
 //    {name: "laundry", desc: "clean clothes"},
 //    {name: "grocery shopping", desc: "buy food"},
 //    {name: "nap time", desc: "remember to sleep!"}
 //  ];
