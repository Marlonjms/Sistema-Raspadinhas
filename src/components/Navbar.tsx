import { Button } from "@/components/ui/button";
import { UserPlus, LogIn, LucideUserRoundPlus } from "lucide-react";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import logoImg from "../assets/logo.webp";
import { Link } from "react-router-dom"
interface NavbarProps {
  onLoginClick: () => void;
  onRegisterClick?: () => void;
}

export function Navbar({ onLoginClick, onRegisterClick }: NavbarProps) {
  return (
<nav className="flex justify-between items-center h-[4.5rem] gap-3 md:gap-5 bg-black sticky top-0 z-50 mx-1 md:px-4 sm:px-6 lg:px-14">

  {/* Esquerda */}
  <div className="flex items-center gap-4  pl-1 ">
  </div>
  <img src={logoImg} alt="Logo" className="h-[125px] w-[125px]  object-contain"  />
  
  {/* Meio */}
<div className="hidden md:flex items-center gap-4 font-medium text-[14px] text-white tracking-wide">
  <Link
    to="/"
    className="px-3 py-1 rounded-md transition-colors hover:bg-white/10"
  >
    Início
  </Link>
  <Link
    to="/raspadinhas"
    className="px-3 py-1 rounded-md transition-colors hover:bg-white/10"
  >
    Raspadinhas
  </Link>
<Link
  to="/indique-e-ganhe"
  className="px-3 py-1 rounded-md transition-colors hover:bg-white/10"
>
  Indique e Ganhe
</Link>

</div>



{/* Direita */}
<div className="ml-auto flex items-center gap-2 px-1">
  <Button
    variant="outline"
    onClick={onLoginClick}
    className="flex items-center gap-2 px-3 py-3 text-sm border-zinc-800 text-white hover:text-white hover:bg-white/10 bg-transparent rounded-md"
  >
    <span>Entrar</span>
  </Button>

  <Button
    onClick={onRegisterClick}
    className="flex items-center gap-2 px-3 py-2 text-sm bg-[rgb(41,229,5)] hover:bg-green-600 text-black rounded-[8px]"
  >
   <UserPlusIcon style={{ width: "21px", height: "21px" }} />

    <span className="font-semibold">Registrar</span>
  </Button>
</div>
</nav>

  );
}
