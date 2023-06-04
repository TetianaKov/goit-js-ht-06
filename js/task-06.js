document.querySelector('body').style.backgroundColor = '#EBECF0';
const inputRef = document.getElementById('validation-input');
inputRef.addEventListener('blur', onBlurBorderColor);
function onBlurBorderColor(e) {
   const inputDataLength = Number(e.currentTarget.dataset.length);
   const inputValueLength = Number(e.currentTarget.value.trim().length);
    
   switch (inputValueLength) {
   case inputDataLength:
   inputRef.classList.add('valid');
   inputRef.classList.remove('invalid');
   break;
   case 0:
   inputRef.classList.remove('invalid');
   inputRef.classList.remove('valid');
   break;
   default:
   inputRef.classList.add('invalid');
   }
   }