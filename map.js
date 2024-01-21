




         document.querySelector('#vic_van_dalen').onclick = function(){
         
             var shown = document.querySelector('#vic_van_dalen_text').classList.contains('map-shown');
        
             for(var element of document.querySelectorAll('.map-text')){
                 element.classList.remove('map-shown');
             }
         
             if(shown){
                document.querySelector('#vic_van_dalen_text').classList.remove('map-shown');
             }else{
                document.querySelector('#vic_van_dalen_text').classList.add('map-shown');
             }
         };
         
         document.querySelector('#nassar').onclick = function(){
             var shown = document.querySelector('#nassar_text').classList.contains('map-shown');
         
             for(var element of document.querySelectorAll('.map-text')){
                 element.classList.remove('map-shown');
             }
         
                 document.querySelector('#nassar_text').classList.toggle('map-shown');
          
             if(shown){
                document.querySelector('#nassar_text').classList.remove('map-shown');
             }else{
                document.querySelector('#nassar_text').classList.add('map-shown');
             }
                 
         };




         document.querySelector('#anatoli').onclick = function(){
             var shown = document.querySelector('#anatoli_text').classList.contains('map-shown');
         
             for(var element of document.querySelectorAll('.map-text')){
                 element.classList.remove('map-shown');
             }
         
                 document.querySelector('#anatoli_text').classList.toggle('map-shown');
          
             if(shown){
                document.querySelector('#anatoli_text').classList.remove('map-shown');
             }else{
                document.querySelector('#anatoli_text').classList.add('map-shown');
             }
                 
         };




         document.querySelector('#jess').onclick = function(){
             var shown = document.querySelector('#jess_text').classList.contains('map-shown');
         
             for(var element of document.querySelectorAll('.map-text')){
                 element.classList.remove('map-shown');
             }
         
                 document.querySelector('#jess_text').classList.toggle('map-shown');
          
             if(shown){
                document.querySelector('#jess_text').classList.remove('map-shown');
             }else{
                document.querySelector('#jess_text').classList.add('map-shown');
             }
                 
         };