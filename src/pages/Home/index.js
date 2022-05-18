import stockPhoto from "../../assets/StockPhoto2.jpg";

function Home() {
  return (
    <div>
      <img alt="stock image two" className="headerImg" src={stockPhoto}></img>
      <div className="whyUs">
        <h1>Why Hire Us?</h1>
        <h5>
          First Class Painting LLC is more then a painting company. We take
          great pride in our ability to create results that not only satify you,
          but provide the most desired outcome for your home or business. Here
          at First Class Painting, we strive to provide the best customer
          service so that you have total control in what you receive. Our
          experince provides a strong understanding of how to deliver the most
          impactful services for your needs.
        </h5>
        <br />
        <div className="flex">
          <ul>
            <li>
              <h5>Fully Licensed & Insured</h5>
            </li>
            <li>
              <h5>
                We have 15+ years of experince painting residential & commercial
                properties
              </h5>
            </li>
            <li>
              <h5>
                Flat rates, so you know exactly how much you're paying before we
                begin
              </h5>
            </li>
            <li>
              <h5>We Accept most forms of payment - Cash/Debit/Credit</h5>
            </li>
            <li>
              <h5>We ensure that the end result is exactly what is wanted</h5>
            </li>
          </ul>
          <div className="images">image goes here</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
