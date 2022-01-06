import Image from "next/image";
import logo from "../../images/twitter.jpg";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";
import { SidebarOptions } from "./SidebarOptions";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
export const Sidebar = () => {
  const router = useRouter();

  const { data: session } = useSession();
  return (
    <div className=" hidden  sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className=" hoverAnimationC flex  items-center justify-center w-14 h-14 p-0 xl:ml-24">
        <Image src={logo} height={30} width={30} />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarOptions text="Home" Icon={HomeIcon} active />
        <SidebarOptions text="Explore" Icon={HashtagIcon} />
        <SidebarOptions text="Notifications" Icon={BellIcon} />
        <SidebarOptions text="Messages" Icon={InboxIcon} />
        <SidebarOptions text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarOptions text="Lists" Icon={ClipboardListIcon} />
        <SidebarOptions text="Profile" Icon={UserIcon} />
        <SidebarOptions text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="hidden xl:block ml-auto bg-[#1d9bf0] w-56 h-[52px] rounded-full font-bold shadow-md hover:bg-[#1a8cd8] text-white transition duration-200 ease-linear">
        Tweet
      </button>
      <div
        onClick={() => {
          router.push("/");
          signOut();
        }}
        className="text-[#d9d9d9] flex items-center justify-center hoverAnimationC xl:ml-auto xl:-mr-5 mt-auto "
      >
        <img
          className="h-10 w-10 rounded-full mr-2"
          src={session?.user.image}
          alt=""
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold capitalize">
            {session?.user.name}{" "}
            <span>
              {session?.user.verified && (
                <CheckCircleIcon className="verified" />
              )}
            </span>
          </h4>
          <p className="text-[#6e767d]">@{session?.user.tag}</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
};
