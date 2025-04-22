import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import { MdDeleteForever } from "react-icons/md";
import Sidebar from '../Sidebar/Sidebar';
import { MdOutlineCloudUpload } from "react-icons/md";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null); // State to hold the product being edited
  const [image, setImage] = useState(null); // For storing the uploaded image
  const [image1, setImage1] = useState(null);// Single image file
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [schoolimage, setschoolimage] = useState(null);
  const [collegeimage, setcollegeimage] = useState(null);
  const [hospitalimage, sethospitalimage] = useState(null);
    const [pdf, setPdf] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const fetchInfo = async () => {
    try {
      const res = await fetch('https://praveenproperties.com/api/v1/allproducts');
      const data = await res.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("An error occurred while fetching the products.");
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (_id) => {
    if (!_id) {
      alert("Product ID is required!");
      return;
    }

    try {
      const response = await fetch('https://praveenproperties.com/api/v1/removeproduct', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: _id }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          alert("Product removed successfully!");
          fetchInfo(); // Refresh the product list after removal
        } else {
          alert("Failed to remove product: " + data.message);
        }
      } else {
        const errorData = await response.json();
        alert("Error: " + errorData.message);
      }
    } catch (error) {
      console.error("Error removing product:", error);
      alert("An error occurred while removing the product.");
    }
  };

  const handleEditClick = (product) => {
    setProductDetails(product); // Set the product details to be edited
    setImage(null); // Reset the image for the edit
    setIsModalOpen(true); // Open the modal
  };


  //image Change handlers
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Update image state with selected file
    }
  };

  const handleImageChange1 = (e) => {
    setImage1(e.target.files[0]); 
  };

  const handleImageChange2 = (e) => {
    setImage2(e.target.files[0]); 
  };

  const handleImageChange3 = (e) => {
    setImage3(e.target.files[0]); 
  };

  const handleImageChangeschool = (e) => {
    setschoolimage(e.target.files[0]); 
  };
  const handleImageChangecollege = (e) => {
    setcollegeimage(e.target.files[0]); 
  };
  const handleImageChangehospital = (e) => {
    sethospitalimage(e.target.files[0]); 
  };
  const pdfHandler = (e) => { setPdf(e.target.files[0]); };


  const updateProduct = async () => {
    if (!productDetails) {
      alert("No product to update");
      return;
    }

    let responseData;
    const product = { ...productDetails }; // Copy product details for update
    const formData = new FormData();

    if (image) {
      formData.append('product', image); // Append the image to form data if provided

      // Upload the image if it's provided
      try {
        const resp = await fetch('https://praveenproperties.com/api/v1/upload', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: formData,
        });
        responseData = await resp.json();

        // If image is uploaded successfully, update the product's image URL
        if (responseData.success) {
          product.image = responseData.image_url; // Update image URL in product details
        } else {
          alert("Failed to upload the image");
          return; // Exit if image upload fails
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("An error occurred while uploading the image.");
        return;
      }
    }

    if (image1) {
      const formData = new FormData();
      formData.append('product1', image1);

      const singleImageResponse = await fetch('https://praveenproperties.com/api/v1/upload1', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });
      const singleImageData = await singleImageResponse.json();

      if (singleImageData.success) {
        product.image1 = singleImageData.image_url;
      } else {
        console.error('Failed to upload single image:', singleImageData.message);
      }
    }

if (image2) {
      const formData = new FormData();
      formData.append('product2', image2);

      const singleImageResponse = await fetch('https://praveenproperties.com/api/v1/upload3', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });
      const singleImageData = await singleImageResponse.json();

      if (singleImageData.success) {
        product.image2 = singleImageData.image_url;
      } else {
        console.error('Failed to upload single image:', singleImageData.message);
      }
    }

    if (image3) {
      const formData = new FormData();
      formData.append('product3', image3);

      const singleImageResponse = await fetch('https://praveenproperties.com/api/v1/upload4', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });
      const singleImageData = await singleImageResponse.json();

      if (singleImageData.success) {
        product.image3 = singleImageData.image_url;
      } else {
        console.error('Failed to upload single image:', singleImageData.message);
      }
    }

    
    //school college hospital images
    if (schoolimage) {
    const formData = new FormData();
    formData.append('school', schoolimage);
    
    const singleImageResponse = await fetch('https://praveenproperties.com/api/v1/uploadschool', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    });
    const singleImageData = await singleImageResponse.json();
    
    if (singleImageData.success) {
      product.schoolimage = singleImageData.image_url;
    } else {
      console.error('Failed to upload single image:', singleImageData.message);
    }
    }
    
    //college image
    if (collegeimage) {
    const formData = new FormData();
    formData.append('college', collegeimage);
    
    const singleImageResponse = await fetch('https://praveenproperties.com/api/v1/uploadcollege', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    });
    const singleImageData = await singleImageResponse.json();
    
    if (singleImageData.success) {
      product.collegeimage = singleImageData.image_url;
    } else {
      console.error('Failed to upload single image:', singleImageData.message);
    }
    }
    
    //hospital image
    if (hospitalimage) {
    const formData = new FormData();
    formData.append('hospital', hospitalimage);
    
    const singleImageResponse = await fetch('https://praveenproperties.com/api/v1/uploadhospital', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    });
    const singleImageData = await singleImageResponse.json();
    
    if (singleImageData.success) {
      product.hospitalimage = singleImageData.image_url;
    } else {
      console.error('Failed to upload single image:', singleImageData.message);
    }
    }

//pdf
if (pdf) {
  const formData = new FormData();
  formData.append('pdf', pdf);
  try {
    const response = await fetch('https://praveenproperties.com/api/v1/uploadpdf', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      console.error('Failed to upload PDF:', response.status);
      return;
    }

    const data = await response.json();
    if (data.success) {
      product.pdf = data.pdf_url;
    } else {
      console.error('Failed to upload PDF:', data.message);
    }
  } catch (error) {
    console.error('Error uploading PDF:', error);
  }
}

    // Send a PUT request to update the product
    try {
      const resp = await fetch(`https://praveenproperties.com/api/v1/updateproduct/${product._id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      const data = await resp.json();

      if (data.success) {
        alert("Product Updated Successfully!");
        fetchInfo(); // Refresh the product list after updating
        setIsModalOpen(false); // Close the modal
      } else {
        alert("Failed to update the product.");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      alert("An error occurred while updating the product.");
    }
  };

  return (
    <div className="admin">
      <Sidebar />
      <div className="list-product">
        <h1>All Products List</h1>
        <div className="listproduct-format-main">
          <p>Projects</p>
          <p>Title</p>
          <p>Location</p>
          <p>Start Price</p>
          <p>End Price</p>
          <p>Category</p>
          <p>Land</p>
          <p>Address</p>
          <p className="map">Map</p>
          <p className='imagelist'>School Image</p>
          <p className='imagelist'>College Image</p>
          <p className='imagelist'>Hospital Image</p>
          <p className='imagelist'>pdf</p>
          <p>School List</p>
          <p>College List</p>
          <p>Hospital List</p>
          <p>Remove</p>
        </div>
        <div className="listproduct-allproducts">
          <hr />
          {allProducts.map((product) => (
            <div key={product._id} className="listproduct-format-main listproduct-format">
              <img src={product.image} alt={product.name} className="listproduct-product-icon" />
              <p>{product.name}</p>
              <p>{product.location}</p>
              <p>₹{product.start_price}</p>
              <p>₹{product.end_price}</p>
              <p>{product.category}</p>
              <p>{product.land}</p>
              <p>{product.city}</p>
              <p className="map">{product.map}</p>
              <p className='imagelist'>{product.schoolimage}</p>
              <p className='imagelist'>{product.collegeimage}</p>
              <p className='imagelist'>{product.hospitalimage}</p>
              <p>{product.school_list}</p>
              <p>{product.college_list}</p>
              <p>{product.hospital_list}</p>
              <p className='imagelist'>{product.pdf}</p>

              <MdDeleteForever
                onClick={() => removeProduct(product._id)}
                className="listproduct-remove-icon"
              />
              <button onClick={() => handleEditClick(product)} className="listproduct-edit-btn">Edit</button>
            </div>
          ))}
          <hr />
        </div>

        {isModalOpen && productDetails && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-btn" onClick={() => setIsModalOpen(false)}>&times;</span>
              <h2>Edit Product</h2>
              <div className="names">
                <label htmlFor="productName" className="addproduct-itemfield">Product Name:</label>
                <input
                  id="productName"
                  type="text"
                  value={productDetails.name}
                  onChange={(e) => setProductDetails({ ...productDetails, name: e.target.value })}
                  placeholder="Enter Product Name"
                />
                

       <label htmlFor="category" className="addproduct-itemfield">Category</label>
          <select
            value={productDetails.category}
            onChange={(e) => setProductDetails({ ...productDetails, category: e.target.value })}
             id="category"
            className="add-product-selector"
          >
            <option value="Ongoing Project">Ongoing Project</option>
            <option value="Completed Project">Completed Project</option>
            <option value="Upcoming Project">Upcoming Project</option>
          </select>
        
              </div>
              <div className="prices">
                <label htmlFor="startPrice" className="addproduct-itemfield">Start Price</label>
                <input
                  id="startPrice"
                  type="text"
                  value={productDetails.start_price}
                  onChange={(e) => setProductDetails({ ...productDetails, start_price: e.target.value })}
                  placeholder="Start Price"
                />
                <label htmlFor="endPrice" className="addproduct-itemfield">End Price</label>
                <input
                  id="endPrice"
                  type="text"
                  value={productDetails.end_price}
                  onChange={(e) => setProductDetails({ ...productDetails, end_price: e.target.value })}
                  placeholder="End Price"
                />
              </div>
              <div className="location">
                <label htmlFor="location" className="addproduct-itemfield">Location</label>
                <input
                  id="location"
                  type="text"
                  value={productDetails.location}
                  onChange={(e) => setProductDetails({ ...productDetails, location: e.target.value })}
                  placeholder="Location"
                />
                <label htmlFor="city" className="addproduct-itemfield">Address</label>
                <input
                  id="city"
                  type="text"
                  value={productDetails.city}
                  onChange={(e) => setProductDetails({ ...productDetails, city: e.target.value })}
                  placeholder="City"
                />
              </div>
              <div className="land">
                <label htmlFor="land" className="addproduct-itemfield">Land Type</label>
                <input
                  id="land"
                  type="text"
                  value={productDetails.land}
                  onChange={(e) => setProductDetails({ ...productDetails, land: e.target.value })}
                  placeholder="Land Type"
                />
                <label htmlFor="schoolList" className="addproduct-itemfield">School List</label>
                <input
                  id="schoolList"
                  type="text"
                  value={productDetails.school_list}
                  onChange={(e) => setProductDetails({ ...productDetails, school_list: e.target.value })}
                  placeholder="School List"
                />
              </div>
              <div className="lists">
                <label htmlFor="collegeList" className="addproduct-itemfield">College List</label>
                <input
                  id="collegeList"
                  type="text"
                  value={productDetails.college_list}
                  onChange={(e) => setProductDetails({ ...productDetails, college_list: e.target.value })}
                  placeholder="College List"
                />
                <label htmlFor="hospitalList" className="addproduct-itemfield">Hospital List</label>
                <input
                  id="hospitalList"
                  type="text"
                  value={productDetails.hospital_list}
                  onChange={(e) => setProductDetails({ ...productDetails, hospital_list: e.target.value })}
                  placeholder="Hospital List"
                />
              </div>
              <div className='pdf'>
              <div className="addproduct-itemfield pdfurl">
          <p>Broucher Upload</p>
          <input onChange={pdfHandler} type="file" name="pdf" accept="application/pdf" />
        </div>
              <div className="mapurl">
                <label htmlFor="mapUrl" className="addproduct-itemfield">Map URL</label>
                <input
                  id="mapUrl"
                  type="text"
                  value={productDetails.map}
                  onChange={(e) => setProductDetails({ ...productDetails, map: e.target.value })}
                  placeholder="Map URL"
                />
              </div>
              </div>
              <div className='images1'>
                      <div className="addproduct-itemfield2">
                        <p>Thumbnail Image</p>
                        <label htmlFor="file-input">
                          {image ? (
                            <img
                              src={URL.createObjectURL(image)}
                              alt="Preview"
                              className="addproduct-thumbnail-img"
                            />
                          ) : (
                            <MdOutlineCloudUpload className="addproduct-thumbnail-icon" />
                          )}
                        </label>
                        <input
                          onChange={handleImageChange}
                          type="file"
                          name="image"
                          id="file-input"
                          hidden
                        />
                      </div>
              
                      <div className="addproduct-itemfield2">
                        <p> Image1</p>
                        <label htmlFor="file-input1">
                          {image1 ? (
                            <img
                              src={URL.createObjectURL(image1)}
                              alt="Preview"
                              className="addproduct-thumbnail-img"
                            />
                          ) : (
                            <MdOutlineCloudUpload className="addproduct-thumbnail-icon" />
                          )}
                        </label>
                        <input
                          onChange={handleImageChange1}
                          type="file"
                          name="image1"
                          id="file-input1"
                          hidden
                        />
                      </div>
              
                      <div className="addproduct-itemfield2">
                        <p> Image2</p>
                        <label htmlFor="file-input2">
                          {image2 ? (
                            <img
                              src={URL.createObjectURL(image2)}
                              alt="Preview"
                              className="addproduct-thumbnail-img"
                            />
                          ) : (
                            <MdOutlineCloudUpload className="addproduct-thumbnail-icon" />
                          )}
                        </label>
                        <input
                          onChange={handleImageChange2}
                          type="file"
                          name="image2"
                          id="file-input2"
                          hidden
                        />
                      </div>
              
                      <div className="addproduct-itemfield2">
                        <p> Image3</p>
                        <label htmlFor="file-input3">
                          {image3 ? (
                            <img
                              src={URL.createObjectURL(image3)}
                              alt="Preview"
                              className="addproduct-thumbnail-img"
                            />
                          ) : (
                            <MdOutlineCloudUpload className="addproduct-thumbnail-icon" />
                          )}
                        </label>
                        <input
                          onChange={handleImageChange3}
                          type="file"
                          name="image3"
                          id="file-input3"
                          hidden
                        />
                      </div>
              
              
                      <div className="addproduct-itemfield2">
                        <p>School Image</p>
                        <label htmlFor="file-inputschool">
                          {schoolimage ? (
                            <img
                              src={URL.createObjectURL(schoolimage)}
                              alt="Preview"
                              className="addproduct-thumbnail-img"
                            />
                          ) : (
                            <MdOutlineCloudUpload className="addproduct-thumbnail-icon" />
                          )}
                        </label>
                        <input
                          onChange={handleImageChangeschool}
                          type="file"
                          name="schoolimage"
                          id="file-inputschool"
                          hidden
                        />
                      </div>
              
                      <div className="addproduct-itemfield2">
                        <p>College Image</p>
                        <label htmlFor="file-inputcollege">
                          {collegeimage ? (
                            <img
                              src={URL.createObjectURL(collegeimage)}
                              alt="Preview"
                              className="addproduct-thumbnail-img"
                            />
                          ) : (
                            <MdOutlineCloudUpload className="addproduct-thumbnail-icon" />
                          )}
                        </label>
                        <input
                          onChange={handleImageChangecollege}
                          type="file"
                          name="imagecollege"
                          id="file-inputcollege"
                          hidden
                        />
                      </div>
              
                      <div className="addproduct-itemfield2">
                        <p>Hospital Image</p>
                        <label htmlFor="file-inputhospital">
                          {hospitalimage ? (
                            <img
                              src={URL.createObjectURL(hospitalimage)}
                              alt="Preview"
                              className="addproduct-thumbnail-img"
                            />
                          ) : (
                            <MdOutlineCloudUpload className="addproduct-thumbnail-icon" />
                          )}
                        </label>
                        <input
                          onChange={handleImageChangehospital}
                          type="file"
                          name="imagehospital"
                          id="file-inputhospital"
                          hidden
                        />
                      </div>
                      </div>


              <button onClick={updateProduct} className="update-btn">Update Product</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListProduct;
