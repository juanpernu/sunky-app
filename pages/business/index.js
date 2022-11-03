import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  ArchiveIcon,
  InboxInIcon,
  GiftIcon,
  GlobeIcon,
  CurrencyDollarIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import {
  MenuLanding,
  Title,
  Icon as ProductIcon,
  Text,
  Card,
  Footer,
  Subtitle,
} from "../../components";
import { RegisterBusinessForm } from "../../components/forms";

const faqs = [
  {
    title: "¿Cómo beneficia esto a mi establecimiento?",
    text: "Sunky te permite reducir el desperdicio de alimentos y recuperar dinero con el excedente que de otro modo se habría tirado a la basura. Estar en la aplicación ayuda a los nuevos clientes a descubrir tu negocio. Además, el 76% de los clientes que descubren una tienda a través de Sunky vuelven como clientes habituales.",
  },
  {
    title: "¿Cuánto tiempo se necesita para dar de alta mi negocio?",
    text: "¡Casi no más del tiempo necesario que que usas para tirar la comida! Solo tenés que registrar tu excedente para que lo recoja un cliente. En el momento de la recogida, el cliente te mostrará su ticket digital y entonces podrás entregarle su pack de comida.",
  },
  {
    title: "¿Cuánto cuesta unirse?",
    text: "Registrarse en Sunky es gratis, y no pagarás nada a menos que vendas comida a través de la aplicación. Una vez que comiences a vender alimentos, deduciremos una tarifa anual y una pequeña comisión por cada pack sorpresa vendido. Esta tarifa de comisión varía según lo que cobres por tus packs sorpresa. Ponte en contacto con nosotros y te ofreceremos más información al respecto.",
  },
  {
    title: "¿Cuándo me pagarán el dinero correspondiente?",
    text: "Te enviaremos el dinero que has ganado con Sunky trimestralmente. Lo único que tienes que hacer es proporcionarnos los datos de tu cuenta bancaria.",
  },
  {
    title: "¿Tengo que ofrecer mis propias bolsas o envases?",
    text: "Siempre animamos a los clientes a que traigan sus propios recipientes o bolsas, sin embargo, en algún momento pueden requerir de tus envases o bolsas. Si ya tienes elementos que sirven para ello, puedes usarlos. También podés adquirir bolsas de la marca Sunky. Tu responsable de cuenta puede ofrecerte más información al respecto.",
  },
];

const Business = () => {
  const [selected, setSelected] = useState(null);
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

  const onChangeHandler = () => router.push("/success");

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8">
      <MenuLanding onClick={onClickHandler} />
      <div className="overflow-hidden max-w-7xl mx-auto w-full sm:h-full md:flex md:flex-col h-full lg:grid py-10 lg:grid-cols-12 lg:gap-10 items-center">
        <div className="col-span-6">
          <h2 className="lg:text-8xl text-purple-600 font-bold md:text-7xl text-2xl uppercase">
            Vender tu excedente de comida nunca fue tan fácil
          </h2>
          <Subtitle className="md:mt-10 mt-2">
            Unite al movimiento Sunky.
          </Subtitle>
          <Text className="text-amber-500 flex flex-col md:flex-row md:items-center items-left mb-10 md:mb-0">
            <GlobeIcon className="md:h-10 md:w-10 h-8 w-8 md:mr-4" />
            Ayuda al planeta, transforma pérdidas en ingresos y hace famosa a tu
            comida.
          </Text>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 md:w-full md:mt-10">
          <RegisterBusinessForm onChange={onChangeHandler} />
        </div>
      </div>
      <ProductIcon title="¿Cómo funciona?" items={productItems} />
      <div className="mx-auto text-center lg:max-w-4xl py-20">
        <Title>Preguntas frecuentes</Title>
        <div className="mt-10">
          {faqs.map((faq, i) => (
            <Card
              className="mt-5 text-left hover:cursor-pointer"
              key={i}
              onClick={() => setSelected(i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{faq.title}</h3>
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-600 transition ease-in-out duration-300"
                  style={{
                    transform: selected === i ? "rotate(180deg)" : "rotate(0)",
                  }}
                />
              </div>
              <p
                className="text-base font-regular mt-2 text-gray-600"
                style={{ display: selected === i ? "block" : "none" }}
              >
                {faq.text}
              </p>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Business;
