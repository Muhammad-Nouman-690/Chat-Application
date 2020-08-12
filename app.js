function chat(){
    var res = document.getElementById('msg')
    var para = document.createElement('p')
    var textNode = document.createTextNode(res.value)
    para.appendChild(textNode)

    var msgs = document.getElementById('messages')
    msgs.appendChild(para) 

    // for blank inputField
    res.value = ""
}