import "./Trusted.css";

function Trusted() {
  return (
    <section className="trusted">
      <h1>Trusted.</h1>
      <p class="trusted-para">
        We've got thousands of happy customers all over the UK. Choose your
        country to see the latest review:
      </p>
      <div className="button-container">
        <button type="button">England</button>
        <button type="button">Wales</button>
        <button type="button">Scotland</button>
      </div>
    </section>
  );
}

export default Trusted;
