import { useState } from "react";
import { AddCategoryApi } from "../../../API/api";

export default function AddCategory() {
  const [addCat, setAddCat] = useState({
    catTitle: "",
    catName: ""
  });

  const handleChange = (event) => {
    setAddCat({ ...addCat, [event.target.name]: event.target.value });
    console.log(addCat)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await AddCategoryApi(addCat);
    console.log(res);
    if (res.status === "success") {
      alert(res.message);
      console.log(addCat);
    } else {
      alert(`Error: ${res.message}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <input type="text" placeholder="catTitle"name="catTitle" onChange={handleChange}/>
        </p>
        <p>
          <input
            type="text"
            placeholder="catName"
            name="catName"
            onChange={handleChange}
          />
        </p>
        <p>
          <button type="submit" className="bt">
            addCategory
          </button>
        </p>
      </form>
    </div>
  );
}