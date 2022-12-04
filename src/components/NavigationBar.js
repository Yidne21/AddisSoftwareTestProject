import { StyledNavigationBar } from "../Style/StyledNavigationBar";
import { useNavigate } from "react-router";
const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <StyledNavigationBar>
      <p>Addis Software Test Project</p>

      <div>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/add")}>Add User</button>

        <button onClick={() => navigate("/about")}>About</button>
      </div>
    </StyledNavigationBar>
  );
};
export default NavigationBar;
