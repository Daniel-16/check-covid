import React, { Component } from "react";
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import { Link } from "react-router-dom";

class Prevention extends Component {
  state = {
    activeItem: "1",
  };

  toggle = (tab) => (e) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };

  render() {
    return (
      <MDBContainer>
        <MDBNav className="nav-tabs mt-5">
          <MDBNavItem>
            <MDBNavLink
              link
              to="#"
              active={this.state.activeItem === "1"}
              onClick={this.toggle("1")}
              role="tab"
            >
              Symptoms
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              link
              to="#"
              active={this.state.activeItem === "2"}
              onClick={this.toggle("2")}
              role="tab"
            >
              Prevention
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              link
              to="#"
              active={this.state.activeItem === "3"}
              onClick={this.toggle("3")}
              role="tab"
            >
              Treatment
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem}>
          <MDBTabPane tabId="1" role="tabpanel">
            <p>
              COVID-19 affects different people in different ways. Most infected
              people will develop mild to moderate illness and recover without
              hospitalization
            </p>
            <hr />
            <ul>
              <span className="mt-2">Most common symptoms:</span>
              <li>fever</li>
              <li>dry cough</li>
              <li>tiredness</li>
              <span className="mt-4 mb-3">Less common symptoms:</span>
              <li>aches and pains</li>
              <li>sore throat</li>
              <li>diarrhoea</li>
              <li>conjunctivitis</li>
              <li>headache</li>
              <li>loss of taste or smell</li>
              <li>a rash on skin, or discolouration of fingers or toes</li>
              <span className="mt-2">Serious symptoms:</span>
              <li>difficulty breathing or shortness of breath</li>
              <li>chest pain or pressure</li>
              <li>loss of speech or movement</li>
            </ul>
            <p>
              Seek immediate medical attention if you have serious symptoms.
              Always call before visiting your doctor or health facility.
            </p>
            <p>
              People with mild symptoms who are otherwise healthy should manage
              their symptoms at home.
            </p>
            <p>
              On average it takes 5-6 days from when someone is infected with
              the virus for symptoms to show, however it can take up to 14 days.
              <br />
              <a href="https://www.who.int" target="_blank" rel="noreferrer">
                Learn more on who.int
              </a>
              <br />
              To check your possible state, you can take the self assessment
              test{" "}
              <Link
                to="/selfassessment"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                here
              </Link>
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <p className="mt-2">To prevent the spread of COVID-19:</p>
            <ul>
              <li>
                Clean your hands often. Use soap and water, or an alcohol-based
                hand rub (sanitizer)
              </li>
              <li>
                Maintain a safe distance from anyone who is coughing or
                sneezing.
              </li>
              <li>Wear a mask when physical distancing is not possible.</li>
              <li>Don't touch your eyes, nose and mouth.</li>
              <li>
                Cover your nose and mouth with your bent elbow or a tissue when
                you cough or sneeze.
              </li>
              <li>Stay home if you feel unwell.</li>
              <li>
                If you have fever cough or diffuculty breathing, seek medical
                attention
              </li>
            </ul>
            <p className="mt-2">Masks</p>
            <p>
              Masks can help prevent the spread of the virus from the person
              wearing the mask to others. Masks alone do not protect against
              COVID-19, and should be combined with physical distancing and hand
              hygiene. Follow the advice provided by your local health
              authority.
              <br />
              <a href="https://www.who.int" target="_blank" rel="noreferrer">
                Learn more on who.int
              </a>
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
            <p className="mt-2">Self care</p>
            <p>
              If you feel sick you should rest, drink plenty of fluid, and eat
              nutritious food. Stay in a separate room from the other family
              members, and use a dedicated bathroom if possible. Clean and
              disinfect frequently touched surfaces.
            </p>
            <p>
              Everyone should keep a healthy lifestyle at home. Maintain a
              healthy diet, sleep, stay active, and make social contact with
              loved ones through the phone or internet. Children need extra love
              and attention from adults during difficulty times. Keep to regular
              routines and schedules as much as possible.
            </p>
            <p>
              It is normal to feel sad, stressed, or confused during a crisis.
              Talking to people you trust, such as friends and family, can help.
              If you feel overwhelmed, talk to a health worker or counsellor.
              <br />
              <a href="https://www.who.int" target="_blank" rel="noreferrer">
                Learn more on who.int
              </a>
            </p>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}
export default Prevention;
