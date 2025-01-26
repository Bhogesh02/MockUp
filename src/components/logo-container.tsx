import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to={"/"}>
  <img
    src="/assets/img/logo/ai-image.png"
    alt="AI Icon"
    className="w-10 h-10 object-contain"
  />
</Link>

  );
};
