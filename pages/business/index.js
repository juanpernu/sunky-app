import React from "react";
import { useRouter } from "next/router";
import {
  ArchiveIcon,
  InboxInIcon,
  GiftIcon,
  GlobeIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/outline";
import {
  MenuLanding,
  Button,
  Title,
  Left as ProductLeft,
  Icon as ProductIcon,
  Text,
  Footer,
  Subtitle,
} from "../../components";
import { RegisterBusinessForm } from "../../components/forms";

const Business = () => {
  const router = useRouter();
  const productItems = [
    {
      icon: <ArchiveIcon className="text-purple-500 h-14 w-14" />,
      name: "Armá tu pack",
      description:
        "Incluí tu excedente en la aplicación como un pack sorpresa.",
    },
    {
      icon: <InboxInIcon className="text-purple-500 h-14 w-14" />,
      name: "Recibí la orden",
      description:
        "Las personas con la app van a ver tu negocio y comprarán el pack a través de ella.",
    },
    {
      icon: <GiftIcon className="text-purple-500 h-14 w-14" />,
      name: "Entregá el pack",
      description:
        "A la hora establecida, la persona irá a recoger el pack a tu negocio.",
    },
    {
      icon: <CurrencyDollarIcon className="text-purple-500 h-14 w-14" />,
      name: "Recuperá costos",
      description:
        "Recuperarás costos, ayudarás al planeta y darás visibilidad a tu negocio.",
    },
  ];

  const onClickHandler = (e, href) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8">
      <MenuLanding onClick={onClickHandler} />
      <div className="overflow-hidden max-w-7xl mx-auto w-full sm:h-full h-full grid py-10 grid-cols-12 gap-10 items-center">
        <div className="col-span-6">
          <h2 className="text-8xl text-purple-600 font-bold">
            VENDER TU EXCEDENTE NUNCA HABÍA SIDO TAN FÁCIL
          </h2>
          <Subtitle className="mt-10-*">Unite al movimiento Sunky.</Subtitle>
          <Text className="text-amber-500 flex flex-row items-center">
            <GlobeIcon className="h-10 w-10 mr-4" />
            Ayuda al planeta, transforma pérdidas en igresos y da a conocer tu
            comida.
          </Text>
        </div>
        <div className="col-span-4 col-start-9">
          <RegisterBusinessForm />
        </div>
      </div>
      <ProductIcon title="¿Cómo funciona?" items={productItems} />
      <div className="mx-auto text-center lg:max-w-4xl py-20">
        <Title>Preguntas frecuentes</Title>
        <div></div>
      </div>
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
