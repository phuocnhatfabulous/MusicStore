import IconButton from "./IconButton";
import {
    HomeIcon,
    HeartIcon,
    LibraryIcon,
} from "@styled-icons/heroicons-outline";

const Sidebar = () => {
    return (
        <div className="text-gray-500 px-5 pt-5 pb-36 text-xs lg:text-sm border-r border-gray-900 h-screen overflow-y-scroll sm:max-w-[12rem] lg:max-w-[15rem] hidden md:block">
            <div className="space-y-4">
                <IconButton icon={HomeIcon} label="Home" />
                <IconButton icon={HomeIcon} label="Home" />
                <IconButton icon={HomeIcon} label="Home" />
                <IconButton icon={HomeIcon} label="Home" />
                <IconButton icon={HomeIcon} label="Home" />
                <IconButton icon={HomeIcon} label="Home" />
            </div>
        </div>
    );
};
export default Sidebar;
