import { StyledNavigationBar } from "../Style/StyledNavigationBar";

const NavigationBar = () => {
  return (
    <StyledNavigationBar>
      <p>Addis Software Test Project</p>

      <div>
        <a href="/">Home</a>
        <a href="/add">Add User</a>
        <a href="about">About</a>
      </div>
    </StyledNavigationBar>
  );
};
export default NavigationBar;
