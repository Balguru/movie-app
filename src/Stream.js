import react from 'react'
import { Link } from 'react-router-dom';


const Stream = () => {

    return (

        <div class="main">
            <h1> Stream</h1>
        <div class="container">
           <div class="row">
           <h2>Recommanded Movies</h2>

                  <div class="col-md-2"> 
                   <div class="pic2">
                      <div class="image1">
                      <Link to="/Bachelor"><img src="assets/pic2.jpg" /></Link>
                      <i class="fa fa-heart" aria-hidden="true"></i> <span> &nbsp; 52%</span><span> &nbsp; &nbsp; 50K  Votes</span>
                      </div>
                     
                      <div class="name">
                      <h6>Most Eligible Bachelor</h6>
                      <p>Comedy/Romantic</p>
                      </div>
                   </div>
                  </div>

                  <div class="col-md-2">
                  <div class="pic3">
                    <div class="image2"> 
                    <Link to="/Pelli"><img src="assets/pic3.jpg"/></Link>
                      <i  class="fa fa-heart" aria-hidden="true"></i><span> &nbsp; 82%</span><span> &nbsp; &nbsp; 62K  Votes</span>
                      </div>
                      <div class="name">
                      <h6>Pelli SandaD</h6>
                      <p>Drama/Family</p>
                      </div>
                  </div>
                  </div>

                  <div class="col-md-2">
                  <div class="pic4">
                  <div class="image2"> 
                  <Link to="/Samudram"><img src="assets/pic4.jpg"/></Link>
                      <i  class="fa fa-heart" aria-hidden="true"></i><span> &nbsp; 82%</span><span> &nbsp; &nbsp; 62K  Votes</span>
                      </div>
                      <div class="name">
                      <h6>Maha Samudram</h6>
                      <p>Drama/Comedy/Action</p>
                      </div>
                  </div>
                  </div>

                  <div class="col-md-2">
                  <div class="pic5">
                  <div class="image2"> 
                  <Link to="/Doctor"><img src="assets/pic5.jpg"/></Link>
                      <i  class="fa fa-heart" aria-hidden="true"></i><span> &nbsp; 69%</span><span> &nbsp; &nbsp; 55K  Votes</span>
                    </div>
                    <div class="name">
                      <h6>Varun Doctor</h6>
                      <p>Action/Comedy/thriller</p>
                    </div>
                  </div>
                  </div>

                  <div class="col-md-2">
                  <div class="pic6">
                  <div class="image2"> 
                  <Link to="/Story"><img src="assets/pic6.jpg"/></Link>
                      <i  class="fa fa-heart" aria-hidden="true"></i><span> &nbsp; 62%</span><span> &nbsp; &nbsp; 50K  Votes</span>
                  </div>
                  <div class="name">
                      <h6>Love Story</h6>
                      <p>Drama/Romantic</p>
                    </div>
                  </div>
                  </div>

                  <div class="col-md-2">  
                  <div class="pic7">
                  <div class="image2"> 
                      <Link to="/Natyam"><img src="assets/pic7.jpg"/></Link>
                      <i  class="fa fa-heart" aria-hidden="true"></i><span> &nbsp; 72%</span><span> &nbsp; &nbsp; 42K  Votes</span>
                      </div>
                      <div class="name">  
                      <h6>Natyam</h6>
                      <p>Drama/Romantic</p>
                      </div>
                  </div>
                  </div>
                  
             </div>
         </div> 
        

         </div>
    )
}

export default Stream;