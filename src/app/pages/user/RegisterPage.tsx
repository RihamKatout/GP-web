import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import RegisterForm from "../../features/authentication/RegisterForm";
import { LoggedInUserPage } from "..";

export const RegisterPage = () => {
  if (localStorage.getItem("token")) {
    return <LoggedInUserPage />;
  }
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Lottie Animation as Background */}
      <DotLottieReact
        src="https://lottie.host/1a8e801a-e220-49bf-9e42-a2a0c0a6dd3f/hwIuP7H4Bi.lottie"
        loop
        autoplay
        style={{
          position: "absolute",
          top: 0,
          left: "-350px",
          width: "100%",
          height: "100%",
          zIndex: -1, // Places animation behind content
        }}
      />

      {/* Centered Login Form */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <div style={{ marginLeft: "700px" }}>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};
