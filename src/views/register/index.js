import React from "react";
import { Card, Logo } from "../../components";
import { SingupForm } from "../../components/forms";

const Register = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <canvas className="h-54 w-full absolute -z-50" />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="mb-4">
          <Logo className="w-36" />
        </div>
        <Card className="w-[450px] bg-white p-12">
          <SingupForm onChange={() => console.log("hola")} />
        </Card>
        <div className="mt-4 flex flex-row text-neutral-600">
          <p className="mr-2 text-sm">¿Ya tienes una cuenta?</p>
          <p className="text-sm font-bold hover:text-yellow-500">
            <a href="#" target="_self">
              Inicia sesión
            </a>
          </p>
        </div>
      </main>
    </section>
  );
};

export default Register;
