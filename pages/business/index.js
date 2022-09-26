import React from "react";
import { useRouter } from "next/router";
import { PopupButton } from "@typeform/embed-react";
import {
  HeartIcon,
  LocationMarkerIcon,
  SparklesIcon,
} from "@heroicons/react/outline";
import {
  MenuLanding,
  Button,
  Feature,
  Left as ProductLeft,
  CoverSide,
  Icon as ProductIcon,
  Text,
  Footer,
} from "../../components";

const Business = () => {
  const router = useRouter();
  const productItems = [
    {
      icon: <HeartIcon className="text-purple-500 h-14 w-14" />,
      name: "Descubrí",
      description: "Deliciosa cantidad de comida a tu alrededor",
    },
    {
      icon: <LocationMarkerIcon className="text-purple-500 h-14 w-14" />,
      name: "Retirá",
      description: "Comida deliciosa de negocios cerca tuyo",
    },
    {
      icon: <SparklesIcon className="text-purple-500 h-14 w-14" />,
      name: "Disfrutá",
      description: "Una rica comida que ayuda al planeta",
    },
  ];

  const onClickHandler = (e, href) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8">
      <MenuLanding onClick={onClickHandler} />
      <CoverSide
        imgSrc="/static/customers-bag.png"
        imgAlt="Sunky - For business"
      >
        <h2 className="text-8xl text-purple-600 font-bold">
          VENDER TU EXCEDENTE NUNCA HABÍA SIDO TAN FÁCIL
        </h2>
        <Text>Un pack sorpresa con tu nombre te espera</Text>
        <Button
          onClick={(e) => onClickHandler(e, "/customers/register")}
          modifier="primary"
          className="mt-8"
        >
          Quiero registrarme
        </Button>
      </CoverSide>
      <ProductIcon title="¿Cómo funciona?" items={productItems} />
      <Feature copy="El planeta importa" title="¿Por qué es importante?">
        <Text className="mt-8">
          Más de 1/3 de toda la comida en el mundo acaba desperdiciada, una mala
          noticia para el planeta. El desperdicio de alimentos es responsable
          del 10% de todos los gases de efecto invernadero y supone una
          extensión de terreno cultivado equivalente a China, que al final se
          desperdicia.
        </Text>
        <Text className="mt-8">
          Estamos decididos a solucionar el problema. Nuestra app te permite
          salvar comida deliciosa que todavía no se ha vendido en miles de
          establecimientos y evitar que se desperdicie.
        </Text>
        <Button modifier="secondary" className="mt-8">
          Quiero registrarme
        </Button>
      </Feature>
      <ProductLeft
        title="Es un movimiento"
        copy="NUESTRO TRABAJO NO TERMINA CON NEGOCIOS Y RESTAURANTES"
        imgSrc="https://img.freepik.com/free-photo/blank-map-south-america_53876-145017.jpg"
        imgAlt="Sunky - For customers"
      >
        <Text>
          En Sunky aparte de ayudar a combatir el desperdicio, vas a disfrutar
          de Cajas Secretas de los mejores restaurantes y negocios a un precio
          increíble.
        </Text>
        <Button modifier="secondary" className="mt-8">
          Quiero registrarme
        </Button>
      </ProductLeft>
      <Footer />
    </div>
  );
};

export default Business;
