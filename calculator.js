const menuBar = document.querySelector(".menu_bar");
const menuBar2 = document.querySelector(".menu_bar2");
const calculators = document.querySelector(".disapdiv");
const body = document.querySelector("body");
const stands = document.querySelector(".stand");
const sciens = document.querySelector(".scien");
const graps = document.querySelector(".grap");
const progs = document.querySelector(".prog");

const standardCalculator = document.querySelector(".mystandards");
const trigonometry = document.querySelector(".trigo");
const myFunction = document.querySelector(".func");
const insideTrigono = document.querySelector(".insidetri");
const insideFunc = document.querySelector(".insidfuc");
const scientificCalculator = document.querySelector(".scien_calculates");
const calscience = document.querySelector(".insidetrifunc");
const calscience2 = document.querySelector(".sciensecalculator");
const inputNumberTop = document.getElementById("myspan");
const inputNumber = document.getElementById("myindiv");
const clickNumbers = document.querySelector(".btndiv2");

const myPlusMinus = document.getElementById ("plusmins");
const dot = document.querySelector(".standot");


const standard = document.querySelector(".standards");
const scientific = document.querySelector(".sciences");
const graph = document.querySelector(".graphs");
const program = document.querySelector(".programs");



menuBar.onclick = function (){
    calculators.style.transform = "scale(1)";
    menuBar.style.display = "none";
    menuBar2.style.display = "block";
    
}

menuBar2.onclick = function (){
    calculators.style.transform ="scale(0)";
    menuBar.style.display = "block";
    menuBar2.style.display = "none"; 
}
// body.onclick = function (){
//     calculators.style.display = "none";
// }

stands.onclick = function (){
    standard.style.display = "block";
    scientific.style.display = "none";
    graph.style.display = "none";
    program.style.display = "none";
    calculators.style.transform = "scale(0)";
    menuBar2.style.display = "none";
    menuBar.style.display = "block";
    standardCalculator.style.display = "block";
    scientificCalculator.style.display = "none";
}
sciens.onclick = function (){
    scientific.style.display = "block";
    standard.style.display = "none";
    graph.style.display = "none";
    program.style.display = "none";
    calculators.style.transform = "scale(0)";
    menuBar2.style.display = "none";
    menuBar.style.display = "block";
    standardCalculator.style.display = "none";
    scientificCalculator.style.display = "block";

}

graps.onclick = function (){
    graph.style.display = "block";
    standard.style.display = "none";
    scientific.style.display = "none";
    program.style.display = "none";
    calculators.style.transform = "scale(0)";
    menuBar2.style.display = "none";
    menuBar.style.display = "block";
    standardCalculator.style.display = "none";
    scientificCalculator.style.display = "none";
}

progs.onclick = function (){
    program.style.display = "block";
    standard.style.display = "none";
    scientific.style.display = "none";
    graph.style.display = "none";
    calculators.style.transform = "scale(0)";
    menuBar2.style.display = "none";
    menuBar.style.display = "block";
    standardCalculator.style.display = "none";
    scientificCalculator.style.display = "none";
}


window.onload = function (){
    standard.style.display = "block";
    standardCalculator.style.display = "block";
    inputNumber.value = "";
}

trigonometry.onclick = function (){
    insideTrigono.style.display = "block";
    insideTrigono.style.width = "80%";
    insideFunc.style.display = "none";
}
myFunction.onclick = function (){
    insideFunc.style.display = "block";
    insideFunc.style.width = "70%";
    insideFunc.style.marginLeft= "6rem";
    insideTrigono.style.display = "none";
}

calscience.onclick = function (){
    insideTrigono.style.display = "none";
    insideFunc.style.display = "none";
}

calscience2.onclick = function (){
    insideTrigono.style.display = "none";
    insideFunc.style.display = "none";
}
function number(values) {
    inputNumberTop.value+= values;
}
function number(values) {
    inputNumber.value+= values;
}


function clea() {
    // inputNumber.value = "";
    // var myClear = document.getElementById("myindiv").value = " ";
    document.getElementById("myindiv").value = " ";

}

function evalu () {
    var myEqual = document.getElementById("myindiv").value;
    // var myEvalu = eval(myEqual);
    document.getElementById("myindiv").value = eval(myEqual);
}

function mysquare() {
    var mySquar = document.getElementById("myindiv").value;
    var sq = Math.pow(mySquar,2);
    document.getElementById("myindiv").value = sq;
    
}


function mysquareroot() {
    var myRoot = document.getElementById("myindiv").value;
    var sr = Math.sqrt(myRoot);
    document.getElementById("myindiv").value = sr;
}


function dele(){
    var inp = document.getElementById('myindiv').value;
    var inp2 = inp.length;
    var others = inp.slice(0, inp2-1);
    // var last = inp.slice(inp2);

    // alert(others);
    document.getElementById('myindiv').value = others;
}

myPlusMinus.onclick = function (){
   
}
function percentage(){
    var perc = document.getElementById('myindiv').value;
    var toPerce = perc/100;
    document.getElementById('myindiv').value = toPerce;

}

function myoverx() {
    var oneoverx = document.getElementById('myindiv').value;
    var theresultss = 1/oneoverx;
    document.getElementById('myindiv').value = theresultss;
}

function mysin() {
    var myTrisin = document.getElementById("myindiv").value;
    document.getElementById("myindiv").value =Math.sin(myTrisin);
}

function mycos() {
    var myTricos = document.getElementById("myindiv").value;
    document.getElementById("myindiv").value =Math.cos(myTricos);
}

function mytan() {
    var myTritan = document.getElementById("myindiv").value;
    document.getElementById("myindiv").value =Math.tan(myTritan);
}

function myhypo() {
    var myTrihypo = document.getElementById("myindiv").value;
    document.getElementById("myindiv").value =Math.hypot(myTrihypo);
}

// function myseco() {
//     var myTrisecs = document.getElementById("myindiv").value;
//     document.getElementById("myindiv").value =Math.(myTrisecs);
// }

function dele2(){
    var inpd = document.getElementById('myindiv').value;
    var inp2d = inpd.length;
    var othersd = inpd.slice(0, inp2d-1);
    // var last = inp.slice(inp2);

    // alert(others);
    document.getElementById('myindiv').value = othersd;
}