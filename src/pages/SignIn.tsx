import { FormEvent, useState } from "react";
import { Envelope, Lock } from "phosphor-react";
import axios from "axios";

import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInputs } from "../components/TextInput";

import { Logo } from "../Logo";

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post("/sessions", {
      email: "andersonnascimentoafsn@gmail.com",
      password: "senha@123",
    });

    setIsUserSignedIn(true);
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text className="text-gray-400 mt-2" size="lg">
          Faça login e comece a usar!
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className="w-full max-w-[400px] flex flex-col items-stretch gap-4 mt-10"
      >
        {isUserSignedIn && <Text>Login realizado!</Text>}

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInputs.Root>
            <TextInputs.Icon>
              <Envelope />
            </TextInputs.Icon>
            <TextInputs.Input
              type="email"
              placeholder="johndue@example.com"
              id="email"
            />
          </TextInputs.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInputs.Root>
            <TextInputs.Icon>
              <Lock />
            </TextInputs.Icon>
            <TextInputs.Input
              type="password"
              placeholder="*********************"
              id="password"
            />
          </TextInputs.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm" asChild>
          <a href="#" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text size="sm" asChild>
          <a href="#" className="text-gray-400 underline hover:text-gray-200">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
