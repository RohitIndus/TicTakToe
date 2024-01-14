let button = document.querySelectorAll("button");
console.log(button);

let Player = "X";
const win_com = ["0,1,2","3,4,5","6,7,8","0,3,6","1,4,7","2,5,8","0,4,8","2,4,6"];
// let blank_com = ["0,1,2","3,4,5","6,7,8","0,3,6","1,4,7","2,5,8","0,4,8","2,4,6"];
let x_blank_com = [];
let y_blank_com = [];


for(let i=0;i<button.length;i++)
{
button[i].addEventListener("click", (e) =>
{
    console.log("Inside Listener");
    console.log(button[i]);
    button[i].style.backgroundColor="pink";
    button[i].innerHTML=Player;
        if(Player == "X")
        {            
           let temp_var_1 = e.target.id;
          // console.log(temp_var_1);
           x_blank_com.unshift(temp_var_1);
           x_blank_com.sort(); 
            if(x_blank_com.length>3)
            {
                x_blank_com.pop();
                x_blank_com.sort(); 
               
            }
            console.log(x_blank_com);
            for(let i=0;i<7;i++)
            {
                if(win_com[i]==x_blank_com)
                    {
                        console.log("X is the winner");
                    }
            }


           Player = "0";
        }
        else
        {    
            let temp_var_2 = e.target.id;
          // console.log(temp_var_2);
           y_blank_com.unshift(temp_var_2);
            y_blank_com.sort(); 
            if(x_blank_com.length>3)
            {
                y_blank_com.pop();
                y_blank_com.sort(); 
               
            }
            console.log(y_blank_com);
            for(let i=0;i<7;i++)
            {
                if(win_com[i]==y_blank_com)
                    {
                        console.log("y is the winner");
                    }
            }

           
           Player = "X";
        }
})
}