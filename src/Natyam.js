import react from 'react';
import { Link } from 'react-router-dom';


const Natyam = ( ) => { 
    return (
      <div >
        <div class="container">

            <div class="row">
                
                   
               <div class="col-md-4">
                  <div class="book1"> 
                     <img src="assets/book1.jpg"/>
                      <i  class="fa fa-heart" aria-hidden="true"></i><span> &nbsp; 72%</span><span> &nbsp; &nbsp; 42K  Votes</span>
                      </div>
                                
               </div>

                <div class="col-md-6">

                      
                 <form action="reservation.php" method="post">
                        <div class="elem-group">
                              <label for="name">Your Name</label>
                             <input type="text" id="name" name="visitor_name" placeholder="Balu" />
                        </div>
                        <div class="elem-group">
                           <label for="email">Your E-mail</label>
                           <input type="email" id="email" name="visitor_email" placeholder="balu.@email.com" required/>
                         </div>
                        <div class="elem-group">
                             <label for="phone">Your Phone</label>
                             <input type="number" id="phone" name="visitor_phone" placeholder="498-348-3872" />
                        </div>
                        <hr/>
                         <div class="elem-group inlined">
                              <label for="adult">Adults</label>
                              <input type="number" id="adult" name="total_adults" placeholder="2" min="1" required/>
                         </div>
  
                        <div class="elem-group inlined">
                          <label for="checkin-date">Check-in Date</label>
                           <input type="date" id="checkin-date" name="checkin" required/>
                         </div>
                          <Link to="/Payment"> <button type="submit">Book The Tickets</button></Link>
                 </form>
            </div>

            <div class="col-md-2">

                    <div class="bookn">  
                       <h6>Natyam</h6>
                        <p>Drama/Romantic</p>
                      </div>
            </div>
            </div>
         </div>
           

           <div class="container">
           <div class="about-movie">

                <h2>About the movie</h2>
               <p>Sitara, a talented dancer from the ancient 
                           village of Natyam is thrust into an adventure 
                     like no other while perusing her dreams.</p>
               </div>
           
           </div>
           
        </div>  
           
       
    )
}

export default Natyam;
