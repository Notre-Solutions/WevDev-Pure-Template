import React from "react";
import Layout from "../components/layout";

const contact = () => {
  return (
    <Layout>
      <div class="section-container no-padding">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div id="map">Need to add google maps</div>
            </div>
            <div class="col-xs-12">
              <div class="row">
                <div class="col-md-6">
                  <form action="" class="reveal-content contact-form">
                    <div class="form-group">
                      <input
                        type="name"
                        class="form-control"
                        id="name"
                        placeholder="Full name"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        rows={3}
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-lg">
                      Send
                    </button>
                  </form>
                </div>

                <div class="col-md-5 col-md-offset-1">
                  <h3>Head Office</h3>

                  <div>
                    <p>
                      42 rue Rouelle <br />
                      75015 Paris FRANCE
                    </p>
                  </div>
                  <div>
                    <p>
                      contact@mybusiness.com<br></br>+331 45 31 64 32
                    </p>
                  </div>

                  <div>
                    <h3>Employment</h3>
                  </div>
                  <div>
                    <p>
                      To apply for a job with our team, please feel free to send
                      us your Linkedin profile link ou CV to :
                      employment@mybusiness.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default contact;