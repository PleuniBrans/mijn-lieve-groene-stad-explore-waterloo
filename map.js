const stands = [
    'carinas_second_hand',
    'nassar',
    'anatoli',
    'jess',
];
for(const stand of stands){
    document.querySelector(`#${stand}`).onclick = function(){
        const standTextElement = document.querySelector(`#${stand}_text`);
        const shown = standTextElement.classList.contains('map-shown');

        for(var element of document.querySelectorAll('.map-text')){
            element.classList.remove('map-shown');
        }

        if(shown){
            standTextElement.classList.remove('map-shown');
        }else{
            standTextElement.classList.add('map-shown');
        }
    };
}