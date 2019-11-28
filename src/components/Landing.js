import React from "react";
import "./Landing.css";

function Landing() {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="container register">
        <div class="row">
          <div class="col-md-3 register-left">
            <h3> Join our Newsletter! </h3>

            <p> Recieve monthly coupons, style guides and more stright to your
              inbox! </p>
          </div>

          <div >
            
              <h3 class="register-heading"> Sign Up Here </h3>
              <div class="row register-form">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="First Name"
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>

                  <div class="form-group">
                    <div class="maxl">
                      <label class="radio inline">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked
                        />
                        <span> Male </span>
                      </label>
                      
                      <br></br>
                                           
                      <label class="radio inline">
                        <input type="radio" name="gender" value="female" />
                        <span>Female </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Your Email"
                    />
                  </div>

                  <input type="submit" class="btnRegister" value="Complete!" />
                </div>
              </div>
            
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
     


      <div class="container">
                <div class="row">
                    <div class="col-md">
                        <section>
                            <div class="overlay-wcs">
                                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                                    <source src="https://player.vimeo.com/external/338097672.sd.mp4?s=516d04c46f9ffb029e8b30cdb4cd66a1dd0f3af3&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
                                </video>
                            </div>
                        </section>
                    </div>
                </div>
            </div>  

    </>
  );
}
export default Landing;
