/**
 * Created by kaiyan2 on 8/22/2016.
 */
let headerParser = (level) => {
    'use strict';
    let jsonTreeList = [];
    let currentNode,currentIndex;
    // Select all headers and go through the header node list
    $(level).each(function (index, element) {
        let headerIndex = parseInt(element.nodeName.substring(1));
        let anchor = 'ht-'+index;

        // Upddating the existing DOMs and add the id attribute to the header element so we can use it for link's anchor
        element.id = anchor;

        // Creat the json tree
        let newNode = {
            'title':element.innerHTML,
            'items':[],
            'anchor':anchor,
            'headerIndex':headerIndex,
            'parent':undefined
        };
        if(currentIndex && currentIndex<headerIndex){
            newNode.parent = currentNode;
            currentNode.items.push(newNode);
        } else {
            while(currentNode && currentNode.headerIndex>=headerIndex){
                currentNode = currentNode.parent;
            }
            if(currentNode){
                newNode.parent = currentNode;
                currentNode.items.push(newNode);
            } else {
                jsonTreeList.push(newNode);
            }
        }
        currentNode = newNode;
        currentIndex = headerIndex;
    });
    return jsonTreeList;
}
console.log(headerParser('h1,h2,h3,h4'));