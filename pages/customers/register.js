import React from "react";
import { useRouter } from "next/router";
import { Card, Logo } from "../../components";
import { RegisterCustomerForm } from "../../components/forms";

const Register = () => {
  const router = useRouter();

  const onChangeHandler = (id) => {
    router.push({
      pathname: `/business/${id}`,
    });
  };

  return (
    <section className="flex min-h-screen py-10 flex-col items-center justify-center">
      <main className="mt-8 flex w-full flex-1 flex-col items-center justify-center px-8 text-center md:mt-0 md:px-20">
        <div className="mb-4">
          <Logo className="w-36" />
        </div>
        <Card className="w-full md:w-[450px] bg-white p-12">
          <RegisterCustomerForm onChange={onChangeHandler} />
        </Card>
        <div className="mt-4 flex flex-row text-neutral-600">
          <p className="mr-2 text-sm">¿Ya tienes una cuenta?</p>
          <p className="text-sm font-bold hover:text-yellow-500">
            <a href="#" target="_self">
              Inicia sesión
            </a>
          </p>
        </div>
        <div className="mt-4 flex flex-row text-neutral-600 max-w-md">
          <p className="mr-2 text-sm">
            Al registrarte estás aceptando los{" "}
            <a
              href="#"
              className="font-bold text-yellow-500 hover:text-yellow-600"
              target="_self"
            >
              Términos y Condiciones y Políticas de Privacidad
            </a>
          </p>
        </div>
      </main>
    </section>
  );
};

export default Register;
