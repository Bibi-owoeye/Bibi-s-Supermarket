var addItem = document.getElementById('addItem');
var noItem = document.getElementById('noItem');
var inputItem =document.getElementById('inputItem')
var cart = []
var show = document.getElementById('show');
var placeHolder = document.getElementById('placeholder');
var allButtons= document.getElementById('allButtons');
var delAnyItems = document.getElementById('delAnyItems');
var delAnyItems2 = document.getElementById('delAnyItems2');



function addItems(){
    // show.innerHTML = items.value
    if (inputItem.value == ('')){
        noItem.style.display = 'block'
        // addItem.addEventListener('click', () =>{
        //     noItem.classList.remove('d-none');
        //     noItem.classList.add('d-block');
        // });
    
}else{
        allButtons.style.display='block'
        noItem.style.display = 'none'
        cart.push(inputItem.value)
        console.log(cart);
        document.getElementById('inputItem').value= ''
        displayItem()
    }
}

function displayItem(){
    var tableHTML = '<table class="text-center">';
    tableHTML += '<tr>';
    tableHTML += `<th> S/N </th>`

    tableHTML += '<th>'+ 'Products'+ '</th>'
    tableHTML += '</tr>';
    
    for(var i=0; i < cart.length;i++ ){
        tableHTML += '<tr>';
        tableHTML += '<td style= "width: 120px;">'+`<small> ${i+1}</small>` + '</td>' ;    
        tableHTML += '<td>'+`<small> ${cart[i]} </small>` + '</td>' ;    
        tableHTML += '</tr>';
    }
    
    

    tableHTML += '</table>';
    document.getElementById('show').innerHTML = tableHTML;
}

function deleteFirst(){
    cart.shift()
    displayItem()
}
function deleteLast(){
    cart.pop()
    displayItem()
}
function addItemFirst(){
    if (firstItem.value == ''){
        noItemAdded.style.display = 'block'

    
}else{
        
        noItemAdded.style.display = 'none'
        cart.unshift(firstItem.value)
        console.log(cart);
        document.getElementById('firstItem').value= ('')
        displayItem()    }
}
function deleteAnyItem(){
    // var start = Number(prompt('Which number are you deleting'))
    // if( start > cart.length){
    //     alert('maximum number execeeded')
    // }
    // cart.splice(start-1,1)
    // displayItem()
    if (deleteAny.value == ''){
        delAnyItems2.style.display='none' 
        delAnyItems.style.display='block'   }
        else{

            if (Number(deleteAny.value > cart.length)){
                delAnyItems2.style.display='block' 
                delAnyItems.style.display='none' 
                // alert('maximum number excedeed')
            }else{
                // exampleModal1.style.display='none'
                delAnyItems.style.display = 'none'
                delAnyItems2.style.display='none' 
                var newIndex= Number(document.getElementById('deleteAny').value)
                cart.splice(newIndex-1 , 1)
                deleteAny.value=''
                displayItem()
            }
        }
}
function deleteAllItem(){
    var confirmation =confirm('Are you sure you want to delete')
    if (confirmation==true)
    cart.splice(0, cart.length)
    displayItem()
}
function editAnyItem(){
    if (newNumber.value == ''){
        alert('Please input a number')    }
    if (Number(newNumber.value > cart.length)){
        alert('maximum number excedeed')
    }else{
        // exampleModal1.style.display='none'
        var newIndex= Number(document.getElementById('newNumber').value)
        var replacement= document.getElementById('newValue').value
        cart.splice(newIndex-1 , 1,replacement)
        newNumber.value= ''
        newValue.value = ''

        displayItem()
    }




    // var editAny = Number(prompt('Which number do you want to Edit'))
    // var replacement = prompt('new value')
    // cart.splice(editAny-1 , 1,replacement)
    // displayItem()
}
