import stockPhoto from "../../assets/images/paint-cans-colors.jpg";
import interiorPaint from "../../assets/images/interior-painters.jpg";
import exteriorPaint from "../../assets/images/exterior-painters.webp";
import comInteriorPaint from "../../assets/images/com-interior-painting.jpg";
import comExteriorPaint from "../../assets/images/com-exterior-painters.jpg";

function Home() {
  return (
    <div>
      <img alt="stock" className="headerImg" src={stockPhoto}></img>
      <div className="whyUs">
        <h1>Why Hire Us?</h1>
        <h5>
          First Class Painting LLC is more then a painting company. We take
          great pride in our ability to create results that not only satisfy
          you, but provide the most desired outcome for your home or business.
          Here at First Class Painting, we strive to provide the best customer
          service so that you have total control in what you receive. Our
          experience provides a strong understanding of how to deliver the most
          impactful services for your needs.
        </h5>

        <div className="flex">
          <ul>
            <li>
              <h5>Fully Licensed & Insured</h5>
            </li>
            <li>
              <h5>
                We have 15+ years of experience painting residential &
                commercial properties
              </h5>
            </li>
            <li>
              <h5>
                Flat rates, so you know exactly how much you're paying before we
                begin
              </h5>
            </li>
            <li>
              <h5>
                We Accept most forms of payment - Cash/Debit/Credit/Online
                Transfer
              </h5>
            </li>
            <li>
              <h5>We ensure that the end result is exactly what is wanted</h5>
            </li>
          </ul>
          {/* <img src={Star}></img> */}
        </div>
        <div className="whatWeDo">
          <h1>What We Can Do!</h1>
          <h5>
            First Class Painting LLC has the skill set to offer a wide variety
            of services including, but not limited to both commercial and
            residential interior and exterior painting. We always love a
            challenge so if you're curious about if we can complete and be a
            part if your project give us a call at{" "}
            <a href="tel:9107463360">(910)-746-3360</a> or send us an email at{" "}
            <a href="mailto:andrewsa@firstclasspaintingllc.org">
              andrewsa@firstclasspaintingllc.org
            </a>
            .
          </h5>
        </div>

        <div className="picLinks">
          <div className="picCon">
            {/* <h2 className="picHeader">Residential Interior</h2> */}
            <a href="/residential/interior">
              <h2 className="picHeader">Residential Interior</h2>
              <img
                className="linkImg"
                src={interiorPaint}
                alt="residential Interior"
              />
            </a>
          </div>
          <div className="picCon">
            <h2 className="picHeader">Residential Exterior</h2>
            <a href="/residential/exterior">
              <img
                className="linkImg"
                src={exteriorPaint}
                alt="residential exterior"
              />
            </a>
          </div>
          <div className="picCon">
            <h2 className="picHeader">Commercial Interior</h2>
            <a href="/commercial/interior">
              <img
                className="linkImg"
                src={comInteriorPaint}
                alt="commercial Interior"
              />
            </a>
          </div>
          <div className="picCon">
            <h2 className="picHeader">Commercial Exterior</h2>
            <a href="/commercial/exterior">
              <img
                className="linkImg"
                src={comExteriorPaint}
                alt="commercial exterior"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
