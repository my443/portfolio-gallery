function popOutDiv(elementID){
    element = document.getElementById(elementID);
    element = document.getElementById(elementID);
    element.classList.add('modal');

}

function popDownDiv(elementID){
    element = document.getElementById(elementID);
    element.classList.remove('modal');
}

function fillPreviewArea(sourceElementID){
    headline = document.getElementById('item-1-headline').innerHTML;
    tagline = document.getElementById('item-1-tagline').innerHTML;
    
    document.getElementById('headline').innerHTML = headline;
    document.getElementById('tagline').innerHTML = tagline;
    console.log(headline, tagline);
}

/* Item name does not require the .xml extension */
function getDescription(itemName){
    var xmlhttp = new XMLHttpRequest();
    urlpath = 'items/' + itemName + '.xml';

    xmlhttp.addEventListener("load", parseXMLToArray);
    xmlhttp.open("GET", urlpath , true);
    xmlhttp.send();
}

function parseXMLToArray(){
    sourceXML = this.responseXML;
    console.log(sourceXML);

    title = sourceXML.getElementsByTagName('title')[0].innerHTML

    
    console.log(title);
}




