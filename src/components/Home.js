import { StyledListItem } from "../Style/StyledTable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserStart, loadUsersStart } from "../redux/action";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { LoadingStyle } from "../Style/LoadingStyle";
import { StyledButton } from "../Style/StyledButton";

const Home = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.data);


  useEffect(() => {
    dispatch(loadUsersStart());
  },[dispatch]);

  if (loading) {
    return (
      <LoadingStyle>
        <div>
          <h1>loading..</h1>
        </div>
      </LoadingStyle>
    );
  }

      function refreshPage() {
        window.location.reload(false);
      }

  const handleDelete = (id) => {
    console.log(typeof id);
    if (window.confirm("are you sure you want to delete ?")) {
      dispatch(deleteUserStart(id));
      refreshPage();
      toast.success("user deleted successfully");
    }
  };

  return (
    <StyledListItem>
      <h1>User Data</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Height</th>
            <th>Actions</th>
          </tr>
        </thead>
        {users &&
          users.map((item, index) => (
            <tbody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.age}</td>
                <td>{item.Gender} </td>
                <td>{item.height}</td>
                <td>
                  <StyledButton danger>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </StyledButton>
                  <StyledButton>
                    <button>
                      <Link to={`/editUser/${item.id}`}>edit</Link>
                    </button>
                  </StyledButton>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </StyledListItem>
  );
};
export default Home;
