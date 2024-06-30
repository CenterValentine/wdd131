

function fullName(firstName, lastName){
return '${firstName} ${lastName}';
};


fullName = function (firstName, lastName){
    return '${firstName} ${lastName}';
}

fullName = (firstName,lastName) => {
    return '${firstName} ${lastName}';
}

document.querySelector('#fullName').innerHTML = fullName()