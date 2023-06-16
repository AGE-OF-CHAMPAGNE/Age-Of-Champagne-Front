import React, { useState } from "react";
import MyArrow from "../../components/UI/MyArrow/MyArrow";
import MyPageTitle from "../../components/UI/MyPageTitle/MyPageTitle";
import classes from "./Questions.module.css";

function Questions() {
  const { title } = classes;
  const [questions] = useState([
    {
      id: 0,
      title: "Comment ajouter des cartes dans ma collection ?",
      answer:
        "Pour ajouter la carte à votre collection, vous devez acheter le jeu Age Of Champagne, si vous avez déjà le jeu, vous devez scanner les codes QR au dos de la carte avec notre scanner, puis la carte sera automatiquement ajoutée à votre collection si vous recevez une notification indiquant que la carte a été ajoutée. Si le message apparaît, mais que vous n'avez pas ajouté la carte, essayez de recharger la page.",
    },
    {
      id: 1,
      title: "Comment ajouter des cartes dans ma collection ?",
      answer:
        "Pour ajouter la carte à votre collection, vous devez acheter le jeu Age Of Champagne, si vous avez déjà le jeu, vous devez scanner les codes QR au dos de la carte avec notre scanner, puis la carte sera automatiquement ajoutée à votre collection si vous recevez une notification indiquant que la carte a été ajoutée. Si le message apparaît, mais que vous n'avez pas ajouté la carte, essayez de recharger la page.",
    },
    {
      id: 2,
      title: "Comment ajouter des cartes dans ma collection ?",
      answer:
        "Pour ajouter la carte à votre collection, vous devez acheter le jeu Age Of Champagne, si vous avez déjà le jeu, vous devez scanner les codes QR au dos de la carte avec notre scanner, puis la carte sera automatiquement ajoutée à votre collection si vous recevez une notification indiquant que la carte a été ajoutée. Si le message apparaît, mais que vous n'avez pas ajouté la carte, essayez de recharger la page.",
    },
    {
      id: 3,
      title: "Comment ajouter des cartes dans ma collection ?",
      answer: (
        <div className="d-flex flex-column align-items-center">
          <span>
            Pour ajouter la carte à votre collection, vous devez acheter le jeu
            Age Of Champagne, si vous avez déjà le jeu, vous devez scanner les
            codes QR au dos de la carte avec notre scanner, puis la carte sera
            automatiquement ajoutée à votre collection si vous recevez une
            notification indiquant que la carte a été ajoutée. Si le message
            apparaît, mais que vous n'avez pas ajouté la carte, essayez de
            recharger la page.
          </span>
          <figure className="figure">
            <img
              className="img-thumbnail w-50"
              src="/src/assets/img/questions/scanner.png"
              alt="exemple"
            />
            <figcaption className="figure-caption">
              Page &quot;Scanner&quot;
            </figcaption>
          </figure>
        </div>
      ),
    },
  ]);

  return (
    <div className="container pt-3">
      <section className={title}>
        <MyArrow />
        <MyPageTitle>Choisissez votre question</MyPageTitle>
      </section>
      <section className="pt-3">
        <div className="accordion" id="accordion">
          {questions && questions.length > 0
            ? questions.map((elem) => (
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${elem.id}`}
                      aria-expanded="false"
                      aria-controls={elem.id}
                    >
                      {elem.title}
                    </button>
                  </h2>
                  <div
                    id={elem.id}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">{elem.answer}</div>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </section>
    </div>
  );
}

export default Questions;
