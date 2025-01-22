import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// TODO: fix
export const HomeSection = () => {
  return (
    <div className="content">
      <div className="text-section" data-aos="zoom-out">
        <h1>
          Welcome <span>Shop Accessories </span> Zone
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          reiciendis inventore iste ratione ex alias quis magni at optio.
        </p>
      </div>
      <div className="video-section" data-aos="zoom-in">
        <DotLottieReact
          src="https://lottie.host/a3fa31fe-eda4-41d0-8e86-e40326692d5d/x0bd0RmZeI.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};
