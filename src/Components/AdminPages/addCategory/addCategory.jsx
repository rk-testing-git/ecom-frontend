import React, {useState} from "react";
import "../addCategory/addCategory.scss"
import { Container,Card, CardBody, CardText,Input, Button,} from "reactstrap";
import { createCategory } from "../../../Services/categoryService";
import { toast } from "react-toastify";


function AddCategory() {
    const [cat, setCat] = useState({ title: "" });
  
    const addTitle = () => {
      let valid = true; // Flag to track validation
  
      // Validation: Check if the title is empty
      if (!cat.title.trim()) {
        toast.error("Category title cannot be empty!");
        valid = false;
      }
  
      // Validation: Check if the title is at least 3 characters long
      if (cat.title.trim().length < 3) {
        toast.error("Category title must be at least 3 characters long!");
        valid = false;
      }
  
      // Proceed only if all validations pass
      if (valid) {
        createCategory(cat.title.trim())
          .then((data) => {
            console.log(data);
            toast.success("Category added successfully");
            setCat({ title: "" }); // Reset the input field
          })
          .catch((error) => {
            console.error(error);
            toast.error("Failed to add category. Please try again.");
          });
      }
    };
  
    return (
      <div className="col-sm-12 p-0 mt-5">
        <Container>
          <Card color="light">
            <CardBody>
              <CardText className="text-center">
                <label>
                  <b>
                    <h1>Add Category</h1>
                  </b>
                </label>
              </CardText>
  
              <CardText>
                <label>
                  <b>Category Title</b>
                </label>
                <Input
                  className="mt-3"
                  type="text"
                  value={cat.title} // Bind the value to state
                  onChange={(event) => setCat({ title: event.target.value })}
                />
              </CardText>
              <div className="col-sm-12 p-0 text-center">
                <Button className="mt-4 create-cat w-25" onClick={addTitle}>
                  Create
                </Button>
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }

export default AddCategory