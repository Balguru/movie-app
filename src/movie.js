 import * as React from 'react';
 import movie from './movie';



function Movie(){
    return(
        <div class="main">
         
     

            <section>
     
     <div id="myCarousel" class="carousel slide" data-ride="carousel">

          <ol class="carousel-indicators">
               <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
               <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
           </ol> 


    <div class="carousel-inner" role="listbox">

        <div class="item active">
           <img src="assets/slider1.jpg" alt="movie" width="100%" height="300"/>    
        </div>
       <div class="item">
        <img src="assets/slider2.jpg" alt="movie" width="100%" height="300"/>
       </div>
      <div class="item">
        <img src="assets/slider3.jpg" alt="movie" width="100%" height="300"/> 
       </div>
       <div class="item">
         <img src="assets/slider4.jpg" alt="movie" width="100%" height="300"/>    
       </div>
      <div class="item">
       <img src="assets/slider5.jpg" alt="movie" width="100%" height="300"/>  
      </div>

   </div>

      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
      </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
</div>
 
</section>

         

       

                <div class="container">
                 <div class="row">
                    <div class="slide">
                     <img src="assets/slide.jpg"/>
                    </div>
                 </div>
                </div>

  










    </div>

        
    )
        
}

export default Movie;