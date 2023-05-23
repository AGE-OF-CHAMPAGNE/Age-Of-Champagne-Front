import React from "react";
import { Icon } from "@iconify/react";
import MyLogo from "../../components/UI/MyLogo/MyLogo";
import classes from "./Home.module.css";
import MyTitle from "../../components/UI/MyTitle/MyTitle";
import MyButton from "../../components/UI/MyButton/MyButton";
import MyButtonLink from "../../components/UI/MyButtonLink/MyButtonLink";
import MyInstruction from "../../components/UI/MyInstruction/MyInstruction";
import MyMap from "../../components/UI/MyMap/MyMap";
import MyVignobleCardList from "../../components/MyVignobleCardList/MyVignobleCardList";
import MySlider from "../../components/UI/MySlider/MySlider";

function Home() {
  const {
    logo,
    text,
    scaled,
    "chat-container": chatContainer,
    chat,
    "btn-light": btnLight,
    "p-wrapper": pWrapper,
    "rules-section": rulesSection,
  } = classes;

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
        <MySlider
          name="homepage"
          imgs={[
            { id: 0, src: "/src/assets/img/slider/AoC_-30.jpg", alt: "" },
            { id: 1, src: "/src/assets/img/slider/AoC_-31.jpg", alt: "" },
            { id: 2, src: "/src/assets/img/slider/AoC_-32.jpg", alt: "" },
            { id: 3, src: "/src/assets/img/slider/AoC_-33.jpg", alt: "" },
            { id: 4, src: "/src/assets/img/slider/AoC_-34.jpg", alt: "" },
            { id: 5, src: "/src/assets/img/slider/AoC_-36.jpg", alt: "" },
            { id: 6, src: "/src/assets/img/slider/AoC_-37.jpg", alt: "" },
            { id: 7, src: "/src/assets/img/slider/AoC_-38.jpg", alt: "" },
            { id: 8, src: "/src/assets/img/slider/AoC_-39.jpg", alt: "" },
            { id: 9, src: "/src/assets/img/slider/AoC_-41.jpg", alt: "" },
            { id: 10, src: "/src/assets/img/slider/AoC_-42.jpg", alt: "" },
            { id: 11, src: "/src/assets/img/slider/AoC_-43.jpg", alt: "" },
            { id: 12, src: "/src/assets/img/slider/AoC_-44.jpg", alt: "" },
          ]}
        />
      </section>

      <section className="container">
        <MyTitle>Fonctionnement</MyTitle>
        <MyInstruction
          title="Commencez Le Jeu"
          description="En achetant le jeu de société Age Of Champagne, vous aurez désormais la possibilité de bénéficier d'avantages exclusifs auprès de nos partenaires en visitant leurs caves à vin."
        />
        <div className="d-flex justify-content-start align-items-center column-gap-5">
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
            className={btnLight}
          >
            ACHTER
            <Icon className="mb-1" icon="icons8:buy" color="white" width="22" />
          </MyButton>
        </div>
        <MyInstruction
          img={{
            src: "src/assets/img/icons/—Pngtree—flat scan qr code scene_5450282 2.png",
            alt: "scanner",
          }}
          color="#AC7CCA"
          side="right"
          className={scaled}
          description="Ensuite, vous avez la possibilité de vous inscrire gratuitement pour collectionner les cartes et bénéficier de réductions auprès de nos vignobles partenaires."
          title="Inscrivez-Vous"
        />
        <MyInstruction
          color="#689900"
          title="Scannez le QR code"
          description="Pour ajouter une carte à votre collection, scannez le QR code situé au verso de la carte du vignoble."
          img={{ src: "src/assets/img/icons/scan.png", alt: "phone" }}
        />
      </section>

      <section className="container">
        <MyTitle>Qu’est-ce que Age Of Champagne?</MyTitle>
        <div className={pWrapper}>
          <img src="src/assets/img/icons/image.png" alt="aoc" />
          <p>
            <span>
              <a href="https://www.ageofchampagne.fr/">Age of Champagne</a> est
              un jeu de stratégie
            </span>{" "}
            très thématique sur la fabrication du Champagne, mêlant les
            mécaniques de pose d&apos;ouvriers, gestion de ressources et
            collection de cartes. <br />
            <br />
            Au fil de la partie,{" "}
            <span>vous devrez réaliser des investissements judicieux</span>,
            optimiser la transformation de vos précieux raisins pour répondre
            aux demandes des différents marchés. Trois collaborateurs
            polyvalents n&apos;attendent que vos directives pour vous épauler
            dans votre stratégie. Le Chef de cave à la tête de la Maison de
            Champagne la plus prestigieuse et éco-responsable à l&apos;issue de
            la dixième vendange, sera élu Chef de cave de la décennie et
            remportera ainsi la partie.
          </p>
        </div>
      </section>

      <section className={`container ${rulesSection}`}>
        <MyTitle>Règles du jeu</MyTitle>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <img src="src/assets/img/icons/3D.png" alt="fille" />
          <MyButton className="text-black">
            TELECHARGER{" "}
            <Icon icon="ic:baseline-download" color="black" width="22" />
          </MyButton>
          <img
            src="src/assets/img/icons/3D-1.png"
            className="d-none d-sm-block"
            alt="garcon"
          />
        </div>
      </section>

      <section className={`container ${classes.topthreeBg}`}>
        <h1 className="display-2 text-white text-center">TOP 3 VIGNOBLES</h1>
        <MyVignobleCardList
          cards={[
            {
              id: 0,
              color: "#F8E977",
            },
            {
              id: 1,
              color: "#F8E977",
            },
            {
              id: 2,
              color: "#F8E977",
            },
          ]}
        />
      </section>

      <section className="container">
        <MyMap />
      </section>
    </>
  );
}

export default Home;
