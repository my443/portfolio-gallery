function popOutDiv(elementID){
    element = document.getElementById(elementID);
    element = document.getElementById(elementID);
    element.classList.add('modal');

    // cloned_element = element.cloneNode(true);
    // cloned_element.id = elementID+'-expanded';
    // cloned_element.classList.add('center');

    // cloned_element.removeAttribute("onmouseover");
    // document.getElementById('displayhere').appendChild(cloned_element);
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

function parseMarkdown(mardownSource){
    /**  A couple of good sources:   https://stackoverflow.com/questions/65203127/replace-markdown-tag-around-string-with-html-tag
                                    https://randyperkins2k.medium.com/writing-a-simple-markdown-parser-using-javascript-1f2e9449a558
                                    https://dev.to/casualwriter/a-simple-markdown-parser-in-50-lines-of-js-4gpi
        */
    
    // Define formatting in a markdownTag : htmlTag structure
    markdownFormatting = { '__': { htmlTag: 'u', regExpression: new RegExp('__(\\w+)__', "g") },
                            '**': { htmlTag: 'b', regExpression: new RegExp('\\*\\*(\\w+)\\*\\*', "g") }
                        }

    markdownTags = Object.keys(markdownFormatting);

    markdownTags.forEach(element => {
        markDownDetails = markdownFormatting[element];
        htmlTag = markDownDetails['htmlTag'];
        regExpression = markDownDetails['regExpression'];
  
        newstring = mardownSource.replace(regExpression, `<${htmlTag}>$1<\/${htmlTag}>`);          

        mardownSource = newstring;
    });

    return mardownSource;


}

// console.log('started');

// p = parseMarkdown('__some__, __thing__ **more**');

// console.log(p);