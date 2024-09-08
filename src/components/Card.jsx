import "./Card.css";

const lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

export default function Card({ data }) {
  return (
    <>
      <div className="card">
        <div
          className="imgBx"
          style={{ background: `url(${data.image}) no-repeat center / cover` }}
        ></div>
        <div className="content">
          <span className="price">
            <span>{`${data.price}`}</span>
          </span>
          <div className="pd white">
            <h5 className="card-font">{data.name}</h5>
            <p className="card-font">
              {data.description ? data.description : lorem}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
