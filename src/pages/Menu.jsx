import data from "../data";
import Card from "../components/Card";

const Menu = () => {
  return (
    <>
      <section className="container my-3">
        <h1>Our Menu</h1>
        <div className="my-5">
          <h2>The Primo</h2>
          <div className="special-body">
            {data.map((element, index) => {
              return element.type === "primo" ? (
                <Card key={index} data={element} />
              ) : (
                ""
              );
            })}
          </div>
        </div>

        <div className="my-5">
          <h2>The Secondo</h2>
          <div className="special-body">
            {data.map((element, index) => {
              return element.type === "secondo" ? (
                <Card key={index} data={element} />
              ) : (
                ""
              );
            })}
          </div>
        </div>

        <div className="my-5">
          <h2>The Dolce</h2>
          <div className="special-body">
            {data.map((element, index) => {
              return element.type === "dolce" ? (
                <Card key={index} data={element} />
              ) : (
                ""
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
