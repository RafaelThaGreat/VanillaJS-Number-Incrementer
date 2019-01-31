<<<<<<< HEAD
function incrementValue()
{
    let value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    
=======
function incrementValue()
{
    let value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    
>>>>>>> e66036c627da60ebfc97ef93804e73df2d631e9c
}