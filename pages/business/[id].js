import dbConnect from "../../lib/dbConnect";
import Business from "../../models/Business";
import { Layout, Subtitle, Text, Card } from "../../components";

const BusinessHome = ({ business }) => {
  return (
    <section>
      <Layout name={business.name} />
      <div key={business._id} className="p-10 md:grid md:grid-cols-2 md:gap-10">
        <Card>
          <Subtitle>Hola {business.name}!</Subtitle>
          <Text>
            Tu cuenta ha sido creada con éxito. Aquí te listamos algunas cosas
            que puedes hacer para prepararte y empezar a salvar tu excedente con
            Sunky.
          </Text>
        </Card>
        <Card>
          <Subtitle>Tendrás noticias nuestras pronto</Subtitle>
          <Text>
            Nos pondremos en contacto contigo en los próximos días para revisar
            los datos y ayudarte a empezar. Si estáis preparados para empezar,
            llámanos al +349 3271 1892.
          </Text>
        </Card>
      </div>
    </section>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  const business = await Business.findById(params.id).lean();
  business._id = business._id.toString();

  return { props: { business } };
}

export default BusinessHome;
