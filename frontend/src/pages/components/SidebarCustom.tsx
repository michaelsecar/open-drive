import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";

export default function SidebarCustom() {
  return (
    <Sidebar
      className="h-screen"
      aria-label="Sidebar with multi-level dropdown example"
    >
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem href="#">Inicio</SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
