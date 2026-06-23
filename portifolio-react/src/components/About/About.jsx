import FadeInSection from "../FadeInSection/FadeInSection";
import styles from "./About.module.css";
import ButtonSecondary from "../Button/ButtonSecondary/ButtonSecondary";

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <FadeInSection />
        <h2 className="sectionTitle">Sobre mim</h2>
        <div className={styles.grid}>
          <article className={styles.card}>
            <h3>Quem sou eu</h3>
            <p>
              Sou estudante na área de Tecnologia da Informação e
              Desenvolvimento sempre em busca de aprendizado desenvolvendo
              projetos próprios para praticar e aperfeiçoar minhas habilidades.
            </p>
          </article>
          <article className={styles.card}>
            <h3>Meu objetivo</h3>
            <p>
              Meu objetivo é crescer na área de desenvolvimento especialmente no
              Back-end e tecnologias Cloud. Aprimorar meus conhecimentos,
              aprender com desafios reais e evoluir na área que tanto quero
              seguir.
            </p>
          </article>
        </div>
        <div className={styles.download}>
          <ButtonSecondary
            texto="Baixar CV"
            href="../../assets/pdf/Marcos-curriculo.pdf"
            download="Curriculo-marcos.pdf"
            type="applicaton/pdf"
          />
        </div>
      </div>
    </section>
  );
}
