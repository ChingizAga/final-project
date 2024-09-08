import "../components/CommentCard";
import CommentsCard from "../components/CommentCard";
import { useState, useEffect } from "react";

export default function Comments() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=5");
      const data = await response.json();
      setUsers(data.results);
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="testimonial container py-3 my-3">
      <h2>Reviews</h2>
      <div className="row justify-content-center align-items-center pd">
        {users.map((person, index) => {
          return <CommentsCard key={index} data={person} />;
        })}
      </div>
    </section>
  );
}
