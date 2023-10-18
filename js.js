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

/** Uses the XML provided to determine the source for the preview section and the images display. */
function parseXMLToArray(){
    sourceXML = this.responseXML;

    title = getSingleValueFromXML(sourceXML, 'title')
    tagline = getSingleValueFromXML(sourceXML, 'tagline')
    problem = getSingleValueFromXML(sourceXML, 'problem')
    solution = getSingleValueFromXML(sourceXML, 'solution')
    additionaltext = getSingleValueFromXML(sourceXML, 'additionaltext')
    id = getSingleValueFromXML(sourceXML, 'id')
    technologies = getValuesFromAListInTheXML(sourceXML, 'technology');
    images = getArrayFromListInXML(sourceXML, 'image')

    json = {
        'id': id,
        'title': title,
        'tagline': tagline,
        'problem': problem,
        'solution': solution,
        'technologies': technologies,
        'additionalText': additionaltext,
        'images': images,
    }

    pictures = new Pictures(images);
    fillPreviewArea(json);
}

/** Returns the text from a single element in the XML. 
 *  If an element occurs more than one time, this selects 
 *  only the first occurrence of the element. 
 */
function getSingleValueFromXML(sourceXML, elementName){
    return sourceXML.getElementsByTagName(elementName)[0].innerHTML
}

/** Returns text from a list of elements in the XML.
 *  If the element occurs more than one time, then all of the occurrences
 *  are returned in a string. 
 *  If the element occurs only 1x, it will also be returned in a single-item.
 */
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

/** Returns an array of the innerHTML for an identified element. */
function getArrayFromListInXML(sourceXML, listItemElementName){
    elements = sourceXML.getElementsByTagName(listItemElementName)
    returnArray = [];
    tempArray = Array.from(elements);

    tempArray.forEach((element) =>{
        returnArray.push(element.innerHTML);
    });

    return returnArray;
}

function gallery(){
    if (document.getElementById('modal').style.display == 'none') {
        document.getElementById('modal').style.display = 'block';
        // pictures = new Pictures(['brighterchecklist-1.png', 'brighterchecklist-2.png', 'brighterchecklist-3.png']);
    }
    else {
        document.getElementById('modal').style.display = 'none'    
    }
}

function closeGallery(){
    document.getElementById('modal').style.display = 'none'; 
}

//Initialize an empty pictures instance. So that it is accessible globally.
let pictures = new Pictures([]);

// Keeps track of the picture
function Pictures(listOfImages=[]) {
    this.currentNumber=  0;
    this.listOfImages = listOfImages;

    if (listOfImages.length > 0)
        this.maxImages = listOfImages.length - 1; // So that you know where the rollover point is. 
    else
        this.maxImages = 0;

    this.nextImage = function() {
        if (this.currentNumber + 1 <= this.maxImages){
            this.currentNumber++;
        }
        else {
            this.currentNumber = 0;
        }
        document.getElementById('pictureOnDisplay').src = 'images/'+listOfImages[this.currentNumber];
    }

    this.previousImage = function() {
        if (this.currentNumber - 1 >= 0){
            this.currentNumber--;
        }
        else {
            this.currentNumber = this.maxImages;
        }
        document.getElementById('pictureOnDisplay').src = 'images/'+listOfImages[this.currentNumber];
    }

  }


document.onkeydown = function keyPress (e) {
    if(e.key === "Escape") {
        closeGallery();
    }
}


