var pardiv = document.createElement("div");
pardiv.style.textAlign = "center"
pardiv.style.paddingTop = "30px"
var inputdate = document.createElement("input");
// this is the input for the date
inputdate.setAttribute("type","date");
inputdate.setAttribute("id","dob");
inputdate.style.width = "30%"
inputdate.style.margin = "10px"
// this is the button for the date
var button = document.createElement("button");
button.innerHTML = "Display data"
button.className = "btn btn-primary"
button.style.margin = "10px"
button.addEventListener("click",displaydata);
// append it to parent div
pardiv.append(inputdate,button)

var currentdata = document.createElement("div");
currentdata.id = "displaydata"
var inputdata = document.createElement("div");
inputdata.id = "displaydata"
var millisec = document.createElement("div");
millisec.id = "displaydata"
var seconds = document.createElement("div");
seconds.id = "displaydata"
var minutes = document.createElement("div");
minutes.id = "displaydata"
var hours = document.createElement("div");
hours.id = "displaydata"
var days = document.createElement("div");
days.id = "displaydata"
var month1 = document.createElement("div");
month1.id = "displaydata"
var year1 = document.createElement("div");
year1.id = "displaydata"

document.body.append(pardiv);

function displaydata(){
var input = document.getElementById("dob").value;
var inpdate = new Date(input);
console.log(inpdate);
var currdate = new Date();
console.log(currdate);
var millisecdiff = currdate.getTime() - inpdate.getTime();
console.log(millisecdiff);
var seconddiff = mathfloor(millisecdiff,1000)
console.log(seconddiff);
var minutesdiff = mathfloor(seconddiff,60)
console.log(minutesdiff);
var hourdiff = mathfloor(minutesdiff,60)
console.log(hourdiff)
var daydiff = mathfloor(hourdiff,24)
console.log(daydiff);
var monthdiff = getmonthdiff(inpdate,currdate)
console.log(monthdiff);
var yeardiff = getYear(inpdate,currdate)
console.log(yeardiff);
currentdata.innerHTML = `Current Date: ${currdate}`;
inputdata.innerHTML = `Given Date: ${inpdate}`;
year1.innerHTML = `${yeardiff} years`;
month1.innerHTML = `${monthdiff} months`;
days.innerHTML = `${daydiff} days`;
hours.innerHTML = `${hourdiff} hours`;
minutes.innerHTML = `${minutesdiff} mins`;
seconds.innerHTML = `${seconddiff} seconds`;
millisec.innerHTML = `${millisecdiff} msec`;
document.body.append(currentdata,inputdata,year1,month1,days,hours,minutes,seconds,millisec)
}

function mathfloor(value1,value2){
return Math.floor(value1/value2)
}

function getYear(value1,value2){
    var d1 = new Date(value1)
    var d2 = new Date(value2)
    return d2.getFullYear() - d1.getFullYear()
}

function getmonthdiff(value1,value2){
    var year = getYear(value1,value2)
    var month = (year*12)+(value2.getMonth()-value1.getMonth())
    return month

}





























