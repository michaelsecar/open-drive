import SidebarCustom from "./components/SidebarCustom";
import NavbarCustom from "./components/NavbarCustom";
import TableCustom from "./components/TableCustom";

export default function HomePage() {
  return (
    <div className="bg-gray-900">
      <NavbarCustom />
      <div className="flex w-full">
        <SidebarCustom />
        <div className="flex w-full p-5">
          <TableCustom />
        </div>
      </div>
    </div>
  );
}
