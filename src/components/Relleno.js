import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

export default function TextoRelleno() {
  return (
    <>
      <Container fluid style={{ overflowX: "hidden", margin: "2rem 0" }}>
        <h3>Título de muestra Increíble</h3>
        <h4>
          Para este texto de relleno que en realidad debe parecer una bajada
          linda y elocuente
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
          reprehenderit sit necessitatibus animi illum sequi hic beatae nihil
          consectetur similique deserunt alias possimus ipsam libero nulla
          officia porro iure quibusdam? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Nemo, ipsa. Tempora, odit earum ipsa dicta obcaecati
          omnis sed expedita quod sit ut, molestiae deserunt corrupti eum nihil
          doloribus assumenda minima. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Deserunt, suscipit, doloremque nostrum reprehenderit
          minus impedit dolorem vero laborum deleniti tenetur assumenda velit
          distinctio optio accusamus quos eum ab nulla quae.
        </p>
        <img
          style={{ maxHeight: "auto", maxWidth: "100Vw" }}
          src="https://sergioortega.com.ar/assets/dev-plant.jpg"
          alt="La planta dev"
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est tenetur
          eveniet quia illo vel, magni itaque ut aut a eius, nisi, expedita
          autem ab! Dolore error nobis suscipit tempora nisi! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Error earum officiis aut sequi
          aspernatur dolor blanditiis, a rerum ipsum nobis dolore ipsam
          necessitatibus reprehenderit enim quia praesentium iusto velit
          placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laboriosam vero beatae fugit voluptatum temporibus distinctio nesciunt
          delectus rerum ex consectetur autem veritatis, laudantium fugiat
          placeat natus quas culpa mollitia quidem. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Dolore ea veniam porro quos a facilis
          debitis aut minus in inventore maxime molestiae cumque, ipsa officiis,
          nostrum incidunt mollitia deserunt fugiat? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Minus ut laboriosam dolor quos labore
          modi accusantium beatae asperiores, sed aspernatur dolorem fugiat!
          Sequi rem possimus error praesentium atque, provident reiciendis?
        </p>
      </Container>
    </>
  );
}
