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
    //  A couple of good sources: https://stackoverflow.com/questions/65203127/replace-markdown-tag-around-string-with-html-tag
    
    // Define formatting in a markdownTag : htmlTag structure
    markdownFormatting = { '__': 'u'}

    markdownTags = Object.keys(markdownFormatting);

    markdownTags.forEach(element => {
        htmlTag = markdownFormatting[element];
        console.log(element, htmlTag);
        
        newstring = mardownSource.replace(/__(\w+)__/g, "<u>$1<\/u>")
        newstring = mardownSource.replace(/__(\w+)__/g, `<${htmlTag}>$1<\/${htmlTag}>`)
        // console.log ( `/${element}(\w+)${element}/g, "<${htmlTag}>$1<\/${htmlTag}>"`); 
        console.log(newstring);
    });



}

console.log('started');

parseMarkdown('__some__, __thing__');