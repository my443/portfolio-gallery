function pop_out_div(elementID){
    element = document.getElementById(elementID);
    element = document.getElementById(elementID);
    element.classList.add('modal');

    // cloned_element = element.cloneNode(true);
    // cloned_element.id = elementID+'-expanded';
    // cloned_element.classList.add('center');

    // cloned_element.removeAttribute("onmouseover");
    // document.getElementById('displayhere').appendChild(cloned_element);
}

function pop_down_div(elementID){
    element = document.getElementById(elementID);
    element.classList.remove('modal');
}

function fill_preview_area(sourceElementID){
    headline = document.getElementById('item-1-headline').innerHTML;
    tagline = document.getElementById('item-1-tagline').innerHTML;
    
    document.getElementById('headline').innerHTML = headline;
    document.getElementById('tagline').innerHTML = tagline;
    console.log(headline, tagline);
}