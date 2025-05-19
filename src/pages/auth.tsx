import { useRef, useState } from "react";

import InputField from "../components/input-fields";

import { authValidation } from "../utils/validation";

const AuthenticationPage = () => {
  const [isSignin, setIsSignIn] = useState(true);
  const [validationError, setValidationError] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const handleToggleSignIn = () => setIsSignIn(!isSignin);

  const handleFormSubmit = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    let error: string;
    if (!isSignin) {
      const name = nameRef.current?.value;
      error = authValidation(email, password, name, true);
    } else {
      error = authValidation(email, password);
    }

    setValidationError(error);
  };

  return (
    <section className="relative flex items-center bg-[url(signin-bg.jpg)] bg-center w-full h-screen">
      <div className="absolute inset-0 bg-black/60"></div>
      <nav className="absolute top-1 w-full py-6 px-8 max-w-[calc(83.3333%-6rem)] mx-auto">
        <img
          src="brand-logo.png"
          alt="brand-logo"
          width={148}
          height={40}
          className="scale-[1.2]"
        />
      </nav>
      <div className="relative w-[450px] max-h-fit bg-black/70 rounded-sm py-12 px-16 mx-auto">
        <h1 className="text-white text-4xl font-bold">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit();
          }}
          className="flex flex-col gap-4 mt-8"
        >
          {!isSignin && (
            <InputField ref={nameRef} id="name" type="text" label="Full name" />
          )}
          <InputField
            ref={emailRef}
            id="email"
            type="email"
            label="Email or mobile number"
          />
          <InputField
            ref={passwordRef}
            id="password"
            type="password"
            label="Password"
          />

          {validationError && <p className="text-red-600">{validationError}</p>}

          <button
            type="submit"
            className="bg-red-600 text-white cursor-pointer rounded-sm font-medium py-2"
          >
            {isSignin ? "Sign in" : "Sign up"}
          </button>

          <p className="text-gray-400">
            {isSignin ? "New to Netflix ? " : "Already register ? "}
            <span
              className="font-medium text-white"
              onClick={handleToggleSignIn}
            >
              {isSignin ? " Sign up now." : "Sign in now."}
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default AuthenticationPage;
