function appearText(){
    const text = document.querySelectorAll('.services__description');
    text.forEach(item => {
       let textPosition = item.getBoundingClientRect().top;
       let screenPosition = window.innerHeight;
       if(textPosition < screenPosition / 2){
           item.classList.add('appear');
       }
    });
}
window.addEventListener('scroll', appearText);

