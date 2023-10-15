function parseMarkdown(mardownSource) {
    /**  A couple of good sources:   https://stackoverflow.com/questions/65203127/replace-markdown-tag-around-string-with-html-tag
                                    https://randyperkins2k.medium.com/writing-a-simple-markdown-parser-using-javascript-1f2e9449a558
                                    https://dev.to/casualwriter/a-simple-markdown-parser-in-50-lines-of-js-4gpi
        */
    // Define formatting in a markdownTag : htmlTag structure
    markdownFormatting = {
        '__': { htmlTag: 'u', regExpression: new RegExp('__(\\w+)__', "g") },
        '**': { htmlTag: 'b', regExpression: new RegExp('\\*\\*(\\w+)\\*\\*', "g") }
    };

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
