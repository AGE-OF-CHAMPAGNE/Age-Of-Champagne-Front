import React from "react";
import MyLogo from "../../components/UI/MyLogo/MyLogo";
import { Icon } from '@iconify/react';
import classes from "./Home.module.css";
import MyTitle from "../../components/UI/MyTitle/MyTitle";
import MyButton from "../../components/UI/MyButton/MyButton";
import MyButtonLink from "../../components/UI/MyButtonLink/MyButtonLink";
import MyInstruction from "../../components/UI/MyInstruction/MyInstruction";

function Home() {
  const { logo, text, scaled, "chat-container": chatContainer, chat } = classes;

  return (
    <>
      <section className="container">
        <MyLogo className={logo} />
        <MyTitle>Bienvenue</MyTitle>
        <p className={text}>
          Collection de cartes - c&apos;est un passe-temps fascinant qui peut
          apporter du plaisir et beaucoup de connaissances. Si vous êtes
          également intéressé par les cartes et que vous voulez commencer à les
          collectionner, alors Age of Champagne est l&apos;endroit idéal pour
          cela. <br /> <br />
          Nous vous invitons à rejoindre notre communauté et à commencer à
          collectionner des cartes dès maintenant ! Créez un compte sur notre
          site et commencez à explorer le monde fascinant des cartes.
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <img src="src/assets/img/cards/cards.png" alt="cards" />
          <MyButtonLink to="/inscription" className="text-black">
            S&apos;Inscrire
          </MyButtonLink>
        </div>
      </section>
      <section className="container">
        <MyTitle>Fonctionnement</MyTitle>
        <MyInstruction />
        <div className="d-flex justify-content-between align-items-center">
          <div className={chatContainer}>
            <img src="src/assets/img/icons/girl.png" alt="fille" />
            <div className={chat}>Vous n’avez pas encore le jeu ?</div>
          </div>
          <MyButton
            onClick={() =>
              window.location.replace(
                "https://www.espritjeu.com/jeux-de-strategie/aoc-age-of-champagne.html"
              )
            }
            color="#4CAF50"
            className=""
          >
            ACHTER
            <Icon icon="icons8:buy" color="white" />
          </MyButton>
        </div>
        <MyInstruction className={scaled} />
        <MyInstruction />
      </section>
    </>
  );
}

export default Home;
