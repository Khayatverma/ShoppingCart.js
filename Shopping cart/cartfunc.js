var addItemid=0;
function addToCart(item){
    addItemid += 1;
    var selecteditem = document.createElement('div');
    selecteditem.classList.add('cart-img');
    selecteditem.setAttribute('id',addItemid);
    var img = document.createElement('img');
    img.setAttribute('src',item.children[0].currentSrc);
    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;
    var label = document.createElement('div');
    label.innerText = item.children[2].children[0].innerText;
    var select = document.createElement('div');
    select.innerText = item.children[2].children[1].value;
    var dltBTN = document.createElement('button');
    dltBTN.innerText="Delete-item";
    dltBTN.setAttribute('onclick','delItem('+addItemid+')');
    var cartItems = document.getElementById('title');
    selecteditem.append(img);
    selecteditem.append(title);
    selecteditem.append(label);
    selecteditem.append(select);
    selecteditem.append(dltBTN);
    cartItems.append(selecteditem);
    selecteditem.setAttribute('style',"background-color:gray;margin:3px;");
}
function delItem(item){
    document.getElementById(item).remove();

}
function chngtext(){
    document.getElementById("finalbtn").innerText="Order Placed";
    footeritem=document.getElementById("paybtn");
    footeritem.innerText="Payment";
    footeritem.setAttribute("href","payment2.html");
    alert("Please pay for your order.")
}
