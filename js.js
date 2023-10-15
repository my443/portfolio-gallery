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
    
    console.log(json);
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



