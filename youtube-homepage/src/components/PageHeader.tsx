import logo from "../assets/react.svg";
import { Menu } from "lucide-react";
import { Button } from "../components/Button";

function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-6" />
          <p className="w-25 h-20 fw-bold green underline text-3xl">
            This is the heading
          </p>
        </a>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default PageHeader;
