document.getElementById('item3').addEventListener('click', function( event){
    console.log('3 no item clicked');
    event.stopPropagation()
    
})

document.getElementById('father').addEventListener('click', function( ){
    console.log('father clicked');
    
})

document.getElementById('grandfather').addEventListener('click', function( ){
    console.log('grandfather clicked');
    
})