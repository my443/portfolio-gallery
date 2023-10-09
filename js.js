function pop_out_div(elementID){
    element = document.getElementById(elementID);
    element = document.getElementById(elementID);
    element.classList.add('center');

    // cloned_element = element.cloneNode(true);
    // cloned_element.id = elementID+'-expanded';
    // cloned_element.classList.add('center');

    // cloned_element.removeAttribute("onmouseover");
    // document.getElementById('displayhere').appendChild(cloned_element);
}

function pop_down_div(elementID){
    element = document.getElementById(elementID);
    element.classList.remove('center');
}