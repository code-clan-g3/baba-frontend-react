import { LogoMark, Profile1 } from "../../assets/images";
import { HomeSvg, NotificationSvg, UserSvg } from "../../assets/icons";
import { IoSettingsOutline } from "react-icons/io5";
// import { CiEdit } from "react-icons/ci";

const Sidebar = () => {
  return (
    <section className="border-r border-[#E2E8F0] h-screen w-24 grid">
      <div className="justify-items-center">
        <div className="py-6">
          <img src={LogoMark} />
        </div>
        <div className="pb-6">
          <img src={HomeSvg} />
        </div>
        <div className="pb-6">
          <img src={UserSvg} />
        </div>
        <div>
          <img src={NotificationSvg} />
        </div>
      </div>
      <div className="justify-items-center">
        <div className="pb-6">
          <IoSettingsOutline size={24} className="text-[#475569]" />
        </div>
        <div>
          <img className="rounded-full w-12 h-12 object-cover" src={Profile1} />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
