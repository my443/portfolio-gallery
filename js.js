function popOutDiv(elementID){
    element = document.getElementById(elementID);
    element = document.getElementById(elementID);
    element.classList.add('modal');

}

function popDownDiv(elementID){
    element = document.getElementById(elementID);
    element.classList.remove('modal');
}

function fillPreviewArea(json){
    // headline = document.getElementById('item-1-headline').innerHTML;
    // tagline = document.getElementById('item-1-tagline').innerHTML;
    document.getElementById('headline').innerHTML = json.title;
    document.getElementById('tagline').innerHTML = json.tagline;
    document.getElementById('details').innerHTML = json.problem + '<br>' + json.solution + '<br>' + json.additionalText ;
    // console.log(headline, tagline);
}


// Getting the XML File starts here. 

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

    title = getSingleValueFromXML(sourceXML, 'title')
    tagline = getSingleValueFromXML(sourceXML, 'tagline')
    problem = getSingleValueFromXML(sourceXML, 'problem')
    solution = getSingleValueFromXML(sourceXML, 'solution')
    additionaltext = getSingleValueFromXML(sourceXML, 'additionaltext')
    id = getSingleValueFromXML(sourceXML, 'id')
    technologies = getValuesFromAListInTheXML(sourceXML, 'technology');

    json = {
        'id': id,
        'title': title,
        'tagline': tagline,
        'problem': problem,
        'solution': solution,
        'technologies': technologies,
        'additionalText': additionaltext,
    }
    
    fillPreviewArea(json);
}

function getSingleValueFromXML(sourceXML, elementName){
    return sourceXML.getElementsByTagName(elementName)[0].innerHTML
}

function getValuesFromAListInTheXML(sourceXML, listItemElementName){
    elements = sourceXML.getElementsByTagName(listItemElementName)
    returnString = '';

    Array.from(elements).forEach( (element, index) => {
        if (index != 0){
            returnString = returnString + ', ' + element.innerHTML;
        }
        else {
            returnString = element.innerHTML;
        }
        
    });

    return returnString;

}

function gallery(){
    if (document.getElementById('modal').style.display == 'none') {
        document.getElementById('modal').style.display = 'block';
        pictures = new Pictures(['brighterchecklist-1.png', 'brighterchecklist-2.png', 'brighterchecklist-3.png']);
    }
    else {
        document.getElementById('modal').style.display = 'none'    
    }
}

function closeGallery(){
    document.getElementById('modal').style.display = 'none'; 
}

// Keeps track of the picture
function Pictures(listOfImages=[]) {
    this.currentNumber=  1;
    this.listOfImages = listOfImages;
    // this.maxImages = len(listOfImages) - 1; // So that you know where the rollover point is. 
  }

// Add the functions to the prototype of the object
// https://stackoverflow.com/questions/13521833/javascript-add-method-to-object
Pictures.prototype.a = function(c){console.log(c);}


document.onkeydown = function keyPress (e) {
    if(e.key === "Escape") {
        closeGallery();
    }
}


