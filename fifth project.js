function buttHover(){
    'use strict';
    document.getElementById('butt').style.backgroundColor = '#080';
};
function buttRemoHover(){
    'use strict';
    document.getElementById('butt').style.backgroundColor = '#00BCBA';
};
function show()
{
    'use strict';
    document.getElementById('show').style.visibility ='visible';
};
var n=0;
function hovered()
{
    n = n+1 ;
    document.getElementById('span').innerHTML = n;
     document.getElementById('span').style.color= '#00BCBA';
    document.getElementById('span').style.fontWeight='bold';
    document.getElementById('span').style.fontSize='30px';
};
function goup()
{
    'use strict';
    window.scrollTo(0,0);
}
function check(){
var x=prompt('Name');
if(x=='Amina')
{
     window.location = "fifth project.html";
}else{
    alert('name is wrong!!');
}
   };

function twi()
{
    window.location = "http://www.twitter.com";
};
function fac()
{
    window.location = "http://www.facebook.com"; 
};
function inst()
{
    window.location = "https://www.instagram.com/"; 
};
function yahoo()
{
    window.location = "http://www.yahoo.com"; 
};
function google()
{
    window.location = "http://www.google.com"; 
};
function underLine()
{
    'use strict';
    document.getElementByClassName('Clicks').style.textDecoration = 'underLine';
    document.getElementByClassName('Clicks').style.cursor = 'pointer';
}
function noLine()
{
    'use strict';
    document.getElementByClassName('Clicks').style.textDecoration = 'none';
}
