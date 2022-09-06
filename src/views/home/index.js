import React from "react";
import { PopupButton } from "@typeform/embed-react";
import {
  Menu,
  Button,
  Feature,
  Image as ProductImage,
  Left as ProductLeft,
  Right as ProductRight,
  Icon as ProductIcon,
  Text,
  Footer,
} from "../../components";
import { Image } from "../../components/covers/Image";
import {
  HeartIcon,
  LocationMarkerIcon,
  SparklesIcon,
} from "@heroicons/react/outline";

const Home = () => {
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

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8">
      <Menu />
      <Image
        title="Empecemos a salvar la comida"
        imageSrc="https://img.freepik.com/premium-photo/healthy-food-clean-eating-selection_79782-19.jpg?w=2000"
      >
        <p className="text-white text-4xl md:text-6xl lg:text-8xl font-extrabold text-center m-auto">
          Empecemos a salvar la comida
        </p>
        <div className="md:grid md:grid-cols-2 flex flex-col sm:w-full md:gap-8 mt-4">
          <PopupButton id="rxSrgVVL">
            <Button className="w-full mb-4 md:mb-0">Quiero probar</Button>
          </PopupButton>
          <PopupButton id="kdU1E3B5">
            <Button modifier="terciary" className="w-full">
              Tengo un negocio
            </Button>
          </PopupButton>
        </div>
      </Image>
      <ProductImage
        title="Más del 1/3 de comida es desperdiciada"
        copy="Y QUEREMOS CAMBIAR ESO"
        imgSrc="https://toogoodtogo.com/v2020/front-page/2-5-pie.png"
        imgAlt="Sunky - Desperdicio torta"
      />
      <Feature copy="Misión" title="¿Por qué estamos acá?">
        <Text className="mt-8">
          Queremos asegurarnos que la comida rica se come, no se tira. Todos los
          días comida deliciosa y fresca se desperdician en cafés, restaurantes,
          hoteles, comercios y fábricas solamente porque no se vendió a tiempo.
          Sunky app permite a sus consumidores comprar y retirar Cajas Sorpresas
          de comida a un increíble precio directamente en los comercios.
        </Text>
      </Feature>
      <ProductIcon title="¿Cómo funciona?" items={productItems} />
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
        <PopupButton id="rxSrgVVL">
          <Button modifier="secondary" className="mt-8">
            Descargar la App
          </Button>
        </PopupButton>
      </ProductLeft>
      <ProductRight
        title="¿Tenés un negocio que tiene superávit de comida?"
        copy="SE PARTE DE LA SOLUCIÓN"
        imgSrc="https://img.freepik.com/free-photo/hand-holding-chopsticks-food-concept_53876-129545.jpg"
        imgAlt="Sunky - For business"
      >
        <Text>
          Sunky puede ayudarte a reducir el sobrante, todo mientras encontramos
          nuevos clientes para que recuperes costos hundidos.
        </Text>
        <PopupButton id="kdU1E3B5">
          <Button modifier="secondary" className="mt-8">
            Registrar mi negocio
          </Button>
        </PopupButton>
      </ProductRight>
      <Footer />
    </div>
  );
};

export default Home;
