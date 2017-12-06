/**
 * Created by Rakshith on 9/19/17.
 */
todos=["there there"];
while(true){
    var input = prompt("MAIN MENU: what do u wanna do?\n list,new,quit,del");
        if (input === "list") {
            console.log("*********");
            todos.forEach(function (todo) {
                console.log(todos.indexOf(todo)+": "+todo)
            })
            console.log("*********");
        }
        else if (input === "new") {
            var more=true;
            while(more){
                var newtodo = prompt("enter new todo or enter q to go to main menu");
                if (newtodo==='q'){
                    more=false;
                }
                else{todos.push(newtodo)}

            }
        }
        else if (input==="quit"){
            break
        }
        else if (input==="del"){
            var todel = prompt("enter index to delete");
            todos.splice(todel,1)
        }
}
var h1 = document.querySelector("h1");
h1.style.color = "pink"




