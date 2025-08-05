import NavItem from "./NavItem";
import { sidebarItems } from "./sidebarItems";

export default function SidebarLayout() {
  return (
    <>
      <div className="p-3">
        <h1 className="text-xl font-semibold uppercase">MINIDASH</h1>
      </div>
      <div className="px-3 mt-3">
        {sidebarItems.map((item) => {
          return <NavItem item={item} key={item.id} />;
        })}
      </div>
    </>
  );
}
