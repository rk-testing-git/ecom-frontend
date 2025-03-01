import React, { useState, useEffect } from "react";
import { Button, Table, FormGroup, Input,Pagination,PaginationItem,PaginationLink } from "reactstrap";
import { fetchCategories, deleteCategory, loadSingleCategory, updateCategory, searchCategoryByName } from "../../../Services/categoryService";
import { CardText, CardBody, Card, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { toast } from "react-toastify";

function ManageCategories() {
    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 7;

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modal, setModal] = useState(false);
  const [clickCategory, setClickCategory] = useState(null);

  const [updateModal, setUpdateModal] = useState(false);
  const [updatedCategory, setUpdatedCategory] = useState({
    categoryId: "",
    categoryName: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const toggle = () => setModal(!modal);
  const closeModal = () => setModal(false);

  const openModal = (clickCategoryId) => {
    setModal(true);
    loadSingleCategory(clickCategoryId)
      .then((data) => {
        setClickCategory(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const openUpdateModal = (categoryId) => {
    setUpdateModal(true);
    loadSingleCategory(categoryId)
      .then((data) => {
        setUpdatedCategory({
          categoryId: data.categoryId,
          categoryName: data.categoryName,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const closeUpdateModal = () => {
    setUpdateModal(false);
  };

  const handleUpdate = () => {
    updateCategory(updatedCategory.categoryId, {
      categoryName: updatedCategory.categoryName,
    })
      .then(() => {
        toast.success("Category updated successfully!");
        closeUpdateModal();
        fetchCategories()
          .then((data) => {
            setCategories(data);
          })
          .catch((error) => {
            console.error(error);
            toast.error("Failed to refresh categories list.");
          });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to update category.");
      });
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading categories:", error);
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  const handleDelete = (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      deleteCategory(categoryId)
        .then(() => {
          toast.success("Category deleted successfully!");
          fetchCategories()
            .then((data) => {
              setCategories(data);
            })
            .catch((error) => {
              console.error(error);
              toast.error("Failed to refresh categories list.");
            });
        })
        .catch((error) => {
          console.error(error);
          toast.error("Failed to delete category.");
        });
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      searchCategoryByName(searchTerm)
        .then((data) => {
          setCategories([data]);
        })
        .catch((error) => {
          console.error(error);
          toast.error("Category not found.");
        });
    } else {
      fetchCategories()
        .then((data) => {
          setCategories(data);
        })
        .catch((error) => {
          console.error(error);
          toast.error("Failed to refresh categories list.");
        });
    }
  };

  if (loading) {
    return <div>Loading categories...</div>;
  }

  const modelHtml = () => {
    return (
      <Modal isOpen={modal} toggle={closeModal} size="lg">
        <ModalHeader toggle={closeModal}></ModalHeader>
        <ModalBody>
          {clickCategory && (
            <Card className="shadow-sm" color="light">
              <CardBody>
                <h5>Category Id: {clickCategory.categoryId}</h5>
                <CardText>
                  <h5>Category Name: {clickCategory.categoryName}</h5>
                </CardText>
              </CardBody>
            </Card>
          )}
        </ModalBody>
        <ModalFooter>
          <Button className="modal-close-btn w-25" size="sm" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  };

  const updateModalHtml = () => {
    return (
      <Modal isOpen={updateModal} toggle={closeUpdateModal} size="lg">
        <ModalHeader toggle={closeUpdateModal}>Update Category</ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>Category Name</label>
            <Input
              type="text"
              value={updatedCategory.categoryName}
              onChange={(e) =>
                setUpdatedCategory({
                  ...updatedCategory,
                  categoryName: e.target.value,
                })
              }
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
          <Button color="secondary" onClick={closeUpdateModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  };



  // Calculate total pages
  const totalPages = Math.ceil(categories.length / rowsPerPage);

  // Get current page's categories
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentCategories = categories.slice(indexOfFirstRow, indexOfLastRow);

  // Page change handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="col-sm-12 p-0">
      <h1 className="text-center m-0 my-3">View All Categories</h1>
      <div className="col-sm-11 m-auto p-0 ">
        <FormGroup className="justify-content-evenly row m-0 my-4 mb-4">
          <Input
            className="w-50 "
            type="text"
            placeholder="Search Categories"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button color="primary w-auto" onClick={handleSearch}>
            Search
          </Button>
        </FormGroup>
        <Table
          bordered
          borderless
          responsive
          hover
          className="text-center bg-white"
        >
          <thead>
            <tr>
              <th>Category Id</th>
              <th>Category Name</th>
              <th>View Category</th>
              <th>Update Category</th>
              <th>Delete Category</th>
            </tr>
          </thead>
          <tbody>
            {currentCategories.map((category) => (
              <tr key={category.categoryId}>
                <td>{category.categoryId}</td>
                <td>{category.categoryName}</td>
                <td>
                  <Button
                    color="primary"
                    size="sm"
                    onClick={() => openModal(category.categoryId)}
                  >
                    View
                  </Button>
                </td>
                <td>
                  <Button
                    color="info"
                    size="sm"
                    onClick={() => openUpdateModal(category.categoryId)}
                  >
                    Update
                  </Button>
                </td>
                <td>
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => handleDelete(category.categoryId)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="col-sm-12 p-0 d-flex justify-content-end">
          <Pagination>
            <PaginationItem disabled={currentPage === 1}>
              <PaginationLink
                previous
                href="#"
                onClick={() => handlePageChange(currentPage - 1)}
              />
            </PaginationItem>

            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem active={currentPage === index + 1} key={index}>
                <PaginationLink
                  href="#"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem disabled={currentPage === totalPages}>
              <PaginationLink
                next
                href="#"
                onClick={() => handlePageChange(currentPage + 1)}
              />
            </PaginationItem>
          </Pagination>
        </div>
      </div>

      {clickCategory && modelHtml()}
      {updateModal && updateModalHtml()}
    </div>
  );
}

export default ManageCategories;