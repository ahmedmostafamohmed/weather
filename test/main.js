let myhttp = new XMLHttpRequest()
myhttp.open("get","https://forkify-api.herokuapp.com/api/search?q=pizza")
myhttp.send()
recpeList = [];
myhttp.addEventListener("readystatechange",function(){
    if(myhttp.readyState == 4 && myhttp.status == 200){
        recpeList = JSON.parse(myhttp.response).recipes ;
        display();
    }
})
function display(){
    temp = ""
    recpeList.forEach(element => {
        temp += `<div class="col-md-4">
        <div class="position-relative item">
            <img src="${element.image_url}" alt="" class="w-100">
            <div class="layer">
                <h5>${element.title}</h5>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

        </div>
    </div>`
        
    });
    document.getElementById("myElement").innerHTML = temp
}




class person {
    constructor(name,age,gender,salary){
        this.userName = name 
        this.userage = age 
        this.usergender = gender 
        this.usersalary = salary 
    }
    welcome(){
        console.log("welcome" + userName);
    }
}
class student extends person {
    constructor(name,age,gender,salary,gradute){
        super(name,age,gender,salary)
        this.gradute = gradute ;

    }
    sayHello(){
        console.log("hello");
    }
}
let ali = new student("ali",25,"male",8000,true)
console.log(ali.gradute);