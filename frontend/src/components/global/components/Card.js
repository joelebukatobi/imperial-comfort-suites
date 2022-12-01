export default function Card() {
  return (
    <div className="card">
      <figure>
        <main>
          <img src="https://via.placeholder.com/300x240" alt="" />
          <div>
            <p>$300/month</p>
            <span>Rent</span>
          </div>
        </main>
        <figcaption>
          <main>
            <h4>Cantey Town Homes</h4>
            <p>2800 Lubbock Ave, Fort Worth, TX 76109 </p>
          </main>
          <div>
            <p>3 Bedroom</p>
            <hr />
            <p>4 Bathrooms</p>
            <hr />
            <p>756 sq.ft</p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
