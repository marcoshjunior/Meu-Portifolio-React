import { useEffect, useRef, useState } from "react";
import styles from "./FadeInSection.module.css";

// Serve para aplicar uma animação de "fade + subida"
// quando o elemento entra na tela (scroll)
export default function FadeInSection({ children }) {
  // useRef para observar quando ele aparece na tela
  const ref = useRef(null);
  // Estado que controla se o elemento já apareceu na tela
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Criamos um "observador" que detecta quando o elemento entra na viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // true quando o elemento aparece na tela
        if (entry.isIntersecting) {
          // Atualiza o estado para visível
          setVisible(true);
          // Para de observar depois que apareceu (melhora performance)
          observer.unobserve(entry.target);
        }
      },
      // threshold define quanto do elemento precisa aparecer
      { threshold: 0.15 }, // 0.15 = 15% visível já ativa a animação
    );
    // Se o elemento já existe no DOM, começa a observar
    if (ref.current) observer.observe(ref.current);
    // Cleanup: remove o observer quando o componente desmontar
    return () => observer.disconnect();
  }, []); // [] = roda apenas uma vez quando o componente monta

  return (
    <div
      ref={ref} // Aqui ligamos a referência ao elemento HTML
      // - styles.base = estado inicial (invisível + deslocado)
      // - styles.visible = estado final (visível + posição normal)
      className={`${styles.base} ${visible ? styles.visible : ""}`}
    >
      {/* children = qualquer conteúdo que você envolver com esse componente */}
      {children}
    </div>
  );
}
