
import { Outlet } from "react-router-dom";

const LayoutContent: React.FC = () => {
    return (  
        <div className="flex">
            {/* <Sidebar /> */}
            <Outlet />
        </div>
    );
};

const AppLayout: React.FC = () => {
    return (
        <LayoutContent />
    );
};

export default AppLayout;