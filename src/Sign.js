import react from "react";



const Sign =() => {

    return (

        <div>
          <div class="modal-dialog modal-dialog-centered">
            <div class="card">
         <form>
               <h2 class="title"> Log in</h2>
              <p class="subtitle">Don't have an account? <a href="#"> sign Up</a></p>
             <div class="social-login">         
                </div>
                  <p class="or"><span>or</span></p>
             <div class="email-login">
                <label for="email"> <b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="uname" required />
               <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
           </div>
              <button class="cta-btn">Log In</button>
             <a class="forget-pass" href="#">Forgot password?</a>
        </form>
      </div>


  ...
</div>



        </div>
    )
}

export default Sign;