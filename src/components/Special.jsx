import Card from "./Card";

export default function Special({ data }) {
  return (
    <section id="special" className="container mb-3">
      <h2>Todays deals!</h2>
      <div className="special-body">
        {data.map((element, index) => {
          return <Card key={index} data={element} />;
        })}
      </div>
    </section>
  );
}
