
document.view.onclick=function(event){
    if(!event.target.childrenNode.hidden){
        event.target.childrenNode=event.target.childrenNode.hidden
    }
}