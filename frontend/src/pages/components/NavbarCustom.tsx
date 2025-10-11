import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function NavbarCustom() {
  return (
    <Navbar fluid>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Inicio
        </NavbarLink>
        <NavbarLink href="#">Pendiente</NavbarLink>
        <NavbarLink href="#">Configuracion</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
