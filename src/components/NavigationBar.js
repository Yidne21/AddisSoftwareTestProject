import { StyledNavigationBar } from "../Style/StyledNavigationBar";
import { useNavigate } from "react-router";
const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <StyledNavigationBar>
      <p>Addis Software Test Project</p>

      <div>
        <a onClick={() => navigate("/")}>Home</a>
        <a onClick={() => navigate("/add")}>Add User</a>

        <a onClick={() => navigate("/about")}>About</a>
      </div>
    </StyledNavigationBar>
  );
};
export default NavigationBar;
