function getMyImageToolTip(element,messageText) {
var input = document.querySelector(element),
tooltip = input.children[0];
main.children[0] main.addEventListener('mouseover',function() {
tooltip.innerHTML = messageText;
})
}
getMyImageToolTip('.tooltiptext');
