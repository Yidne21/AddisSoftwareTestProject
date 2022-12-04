import { AddEmployee } from "../Style/AddUserStyle";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUserStart, updateUserStart } from "../redux/action";
import { StyledButton } from "../Style/StyledButton";

const initialState = {
  firstname: "",
  lastname: "",
  age: "",
  Gender: "",
  height: "",
};

const AddUser = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { firstname, lastname, age, Gender, height } = formValue;
  const { users } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const selectedUser = users.find((item) => item.id === Number(id));
      setFormValue(selectedUser);
    }
  }, [id, users]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname && lastname && age && Gender && height) {
      if (!editMode) {
        dispatch(createUserStart(formValue));
        setTimeout(() => navigate("/"));
      } else {
        dispatch(updateUserStart({ id, ...formValue }));
        setEditMode(false);
        setTimeout(() => navigate("/"));
      }
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <AddEmployee layout={[1, 1 / 2, 1 / 4]} margin={[1, 1 / 2, 1 / 4]}>
      <h1>{!editMode ? "Add User Detail" : "Update User Detail"}</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          {" "}
          First Name
          <input
            type="text"
            name="firstname"
            onChange={onInputChange}
            value={firstname || ""}
          />
          <br />
        </label>

        <label>
          {" "}
          Last Name
          <input
            type="text"
            name="lastname"
            onChange={onInputChange}
            value={lastname || ""}
          />
        </label>

        <label>
          {" "}
          Age
          <input
            type="number"
            name="age"
            onChange={onInputChange}
            value={age || ""}
          />
        </label>
        <label>
          {" "}
          Height
          <input
            type="text"
            name="height"
            onChange={onInputChange}
            value={height || ""}
          />
        </label>

        <label>
          {" "}
          Gender
          <select onChange={onInputChange} value={Gender || ""} name="Gender">
            <option>...</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </label>
        <div>
          <StyledButton>
            <button type="submitt">{!editMode ? "Add" : "Update"}</button>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              {" "}
              Back
            </button>
          </StyledButton>
        </div>
      </form>
    </AddEmployee>
  );
};
export default AddUser;
