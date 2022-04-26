import * as React from 'react';
import { Link } from 'react-router-dom';

import Movie  from './movie';






function Download(){

    
    return(
        <div >
           
           <section class="top-header">
         <div class="container">
         <div class="row">
            <div class="col-md-8">
              <div class="col-sm-2">
              <div class="logo">
                <img src="assets/logon.png" /> 
              </div>
              </div>
              <div class="col-sm-6">
              <div class="searh-bar">
                   <input   type="text" placeholder="search  for Movies Events,Play Sports Activites " />       
               </div> 
              </div>
             
            </div>
            <div class="col-md-4">
        
            <Link to="/Sign"> <button class="btn btn-primary"  style={{width:"70px",height:"40px",marginTop:"7px"}}>Sign</button></Link> 
    
          
            </div>

            

             {/* <div class="col-md-3">
             <div class="dropdown">
              <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown">Location</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Hyderabad</a></li>
                  <li><a class="dropdown-item" href="#">Chennai</a></li>
                  <li><a class="dropdown-item" href="#">Pune</a></li>
                </ul>
                </div>
                
            </div>  */}
        </div>
    </div>
    </section> 


<section class="second-header">
      <div class="container">
        <div class="row">
        <div class="col-md-6">
           <div class="header-le">
             <ul>
               <Link to="/Movies" style={{textDecoration:"none"}} activeclassName='btn btn-primary' >  <li >Movies</li></Link>
               <Link to="/Stream" style={{textDecoration:"none"}}><li>Stream<sup>New</sup></li></Link>
               <Link to="/Events" style={{textDecoration:"none"}}> <li >Events</li></Link>
               <Link to="/Plays" style={{textDecoration:"none"}}><li>Plays</li></Link>
               <Link to="/Sports" style={{textDecoration:"none"}} ><li>Sports</li></Link>
                <li>Activites</li>
                <li>Buzz</li>
             </ul>
         </div>
         </div>
         <div class="col-md-6">
         <div class="header-ri">
           <ul>
             <li>Corporates</li>
              <li>Offers</li>
              <li>Gift Cards</li>
              <li>List Your Show<sup>New</sup></li>     
           </ul>

             </div>
          </div>
         </div>
        
    </div>
    </section>
    
    <Movie />
   

    


        
 </div>








 
       
    )
        
}

export default Download;