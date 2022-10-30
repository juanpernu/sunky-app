import React from "react";
import { useRouter } from "next/router";
import { GlobeIcon } from "@heroicons/react/outline";
import { MenuLanding, Footer, Button } from "../components";

const Home = () => {
  const router = useRouter();

  const onClickHandler = (e, href) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8">
      <MenuLanding onClick={onClickHandler} />
      <div className="h-full py-20 max-w-lg mx-auto">
        <GlobeIcon className="h-12 w-12 mb-2 text-purple-500" />
        <h2 className="text-5xl font-bold text-gray-900 mb-5">
          ¡Felicitaciones, ya te encuentras en la lista de espera!
        </h2>
        <p className="text-base font-regular text-gray-600 mb-2">
          ¡Sunky todavía esta en fase de desembarco, dentro de poco ya vas a
          poder comprar y vender comida a un precio increíble!
        </p>
        <p className="text-base font-regular text-gray-600">
          Ya estas en nuestras listas de espera, te avisaremos cuando estemos
          listos. Mientras tanto te invitamos a seguirnos en nuestras redes
          sociales para que te enteres de todas las novedades.
        </p>
        <Button
          onClick={(e) => onClickHandler(e, "/")}
          modifier="primary"
          className="mt-8"
        >
          Seguir navegando
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
