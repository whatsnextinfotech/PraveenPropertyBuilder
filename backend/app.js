const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/error');
const cookieParser = require('cookie-parser');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, "config/config.env") });
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const bodyParser = require('body-parser');
const fs = require('fs');
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const cors = require('cors');
app.use(cors());

const auth = require('./routes/auth');

// Image Storage Engine
const uploadDir = path.join(__dirname, 'upload', 'images');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
    
}

// Image Storage Engine
const storage = multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({ storage: storage });

// Serve images statically
app.use('/api/v1/images', express.static(uploadDir));

// Upload Endpoint
app.post('/api/v1/upload', upload.single('product'), (req, res) => {
    console.log("File:", req.file);

    if (!req.file) {
        return res.status(400).json({ success: 0, message: "File not uploaded" });
    }

    res.json({
        success: 1,
        image_url: `https://praveenproperties.com/api/v1/images/${req.file.filename}`,
    });
});

//test
// Image Storage Engine for second upload endpoint
const uploadDir2 = path.join(__dirname, 'upload', 'image1');
if (!fs.existsSync(uploadDir2)) {
    fs.mkdirSync(uploadDir2, { recursive: true });
}

const storage2 = multer.diskStorage({
    destination: uploadDir2,
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload2 = multer({ storage: storage2 });

app.use('/api/v1/image1', express.static(uploadDir2));

// Upload Endpoint for second directory
app.post('/api/v1/upload1', upload2.single('product1'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: 0, message: 'File not uploaded' });
    }

    res.json({
        success: 1,
        image_url: `https://praveenproperties.com/api/v1/image1/${req.file.filename}`,
    });
});

//image3

// Image Storage Engine for second upload endpoint
const uploadDir3 = path.join(__dirname, 'upload', 'image3');
if (!fs.existsSync(uploadDir3)) {
    fs.mkdirSync(uploadDir3, { recursive: true });
}

const storage3 = multer.diskStorage({
    destination: uploadDir3,
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload3 = multer({ storage: storage3 });

app.use('/api/v1/image3', express.static(uploadDir3));

// Upload Endpoint for second directory
app.post('/api/v1/upload3', upload3.single('product2'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: 0, message: 'File not uploaded' });
    }

    res.json({
        success: 1,
        image_url: `https://praveenproperties.com/api/v1/image3/${req.file.filename}`,
    });
});

//images 4

// Image Storage Engine for second upload endpoint
const uploadDir4 = path.join(__dirname, 'upload', 'image4');
if (!fs.existsSync(uploadDir4)) {
    fs.mkdirSync(uploadDir4, { recursive: true });
}

const storage4 = multer.diskStorage({
    destination: uploadDir4,
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload4 = multer({ storage: storage4 });

app.use('/api/v1/image4', express.static(uploadDir4));

// Upload Endpoint for second directory
app.post('/api/v1/upload4', upload4.single('product3'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: 0, message: 'File not uploaded' });
    }

    res.json({
        success: 1,
        image_url: `https://praveenproperties.com/api/v1/image4/${req.file.filename}`,
    });
});

//school image
// Image Storage Engine for second upload endpoint
const uploadDirschool = path.join(__dirname, 'upload', 'imageschool');
if (!fs.existsSync(uploadDirschool)) {
    fs.mkdirSync(uploadDirschool, { recursive: true });
}

const storageschool = multer.diskStorage({
    destination: uploadDirschool,
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});

const uploadschool = multer({ storage: storageschool });

app.use('/api/v1/imageschool', express.static(uploadDirschool));

// Upload Endpoint for second directory
app.post('/api/v1/uploadschool', uploadschool.single('school'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: 0, message: 'File not uploaded' });
    }

    res.json({
        success: 1,
        image_url: `https://praveenproperties.com/api/v1/imageschool/${req.file.filename}`,
    });
});


//college image
// Image Storage Engine for second upload endpoint
const uploadDircollege = path.join(__dirname, 'upload', 'imagecollege');
if (!fs.existsSync(uploadDircollege)) {
    fs.mkdirSync(uploadDircollege, { recursive: true });
}

const storagecollege = multer.diskStorage({
    destination: uploadDircollege,
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});

const uploadcollege = multer({ storage: storagecollege });

app.use('/api/v1/imagecollege', express.static(uploadDircollege));

// Upload Endpoint for second directory
app.post('/api/v1/uploadcollege', uploadcollege.single('college'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: 0, message: 'File not uploaded' });
    }

    res.json({
        success: 1,
        image_url: `https://praveenproperties.com/api/v1/imagecollege/${req.file.filename}`,
    });
});



//hospital images

// Image Storage Engine for second upload endpoint
const uploadDirhospital = path.join(__dirname, 'upload', 'imagehospital');
if (!fs.existsSync(uploadDirhospital)) {
    fs.mkdirSync(uploadDirhospital, { recursive: true });
}

const storagehospital = multer.diskStorage({
    destination: uploadDirhospital,
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});

const uploadhospital = multer({ storage: storagehospital });

app.use('/api/v1/imagehospital', express.static(uploadDirhospital));

// Upload Endpoint for second directory
app.post('/api/v1/uploadhospital', uploadhospital.single('hospital'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: 0, message: 'File not uploaded' });
    }

    res.json({
        success: 1,
        image_url: `https://praveenproperties.com/api/v1/imagehospital/${req.file.filename}`,
    });
});


//pdf
// Define the directory to store uploaded PDF files
const uploadDirpdf = path.join(__dirname, 'upload', 'pdf');

// Ensure the directory exists
if (!fs.existsSync(uploadDirpdf)) {
    fs.mkdirSync(uploadDirpdf, { recursive: true });
}

// Multer storage configuration for PDF files
const storagepdf = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDirpdf);
    },
    filename: (req, file, cb) => {
        const uniqueName = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    },
});

// Multer upload instance with PDF validation and size limit
const uploadpdf = multer({
    storage: storagepdf,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'application/pdf') {
            cb(null, true);
        } else {
            cb(new Error('Only PDF files are allowed!'), false);
        }
    },
    limits: { fileSize: 20 * 1024 * 1024 }, // 20 MB size limit
});

// Serve static files for uploaded PDFs
app.use('/api/v1/pdf', express.static(uploadDirpdf));

// Upload endpoint for PDF files
app.post('/api/v1/uploadpdf', (req, res) => {
    uploadpdf.single('pdf')(req, res, (err) => {
        if (err) {
            if (err.code === 'LIMIT_FILE_SIZE') {
                return res.status(400).json({
                    success: 0,
                    message: 'File size should not exceed 20 MB',
                });
            }
            return res.status(400).json({ success: 0, message: err.message });
        }

        if (!req.file) {
            return res.status(400).json({
                success: 0,
                message: 'File not uploaded. Please provide a valid PDF file.',
            });
        }

        res.status(200).json({
            success: 1,
            pdf_url: `https://praveenproperties.com/api/v1/pdf/${req.file.filename}`,
        });
    });
});


// Schema for Creating Products
const Product = mongoose.model("Product", {
  id: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: "New Project"
  },
  image: {
    type: String,
    default: ""
  },
  image1: {
    type: String,
    default: ""
  },
  image2: {
    type: String,
    default: ""
  },
  image3: {
    type: String,
    default: ""
  },
  schoolimage: {
    type: String,
    default: ""
  },
  collegeimage: {
    type: String,
    default: ""
  },
  hospitalimage: {
    type: String,
    default: ""
  },
  category: {
    type: String,
    default: "General"
  },
  start_price: {
    type: String,
    default: "0"
  },
  end_price: {
    type: String,
    default: "0"
  },
  location: {
    type: String,
    default: "Not Specified"
  },
  city: {
    type: String,
    default: "Unknown"
  },
  map: {
    type: String,
    default: ""
  },
  land: {
    type: String,
    default: "0 sqft"
  },
  school_list: {
    type: String,
    default: ""
  },
  college_list: {
    type: String,
    default: ""
  },
  hospital_list: {
    type: String,
    default: ""
  },
  pdf: {
    type: String,
    default: ""
  },
  date: {
    type: Date,
    default: Date.now
  }
});







// Add Product Endpoint
app.post('/api/v1/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        image1: req.body.image1,
        image2: req.body.image2,
        image3: req.body.image3,
        schoolimage:req.body.schoolimage,
        collegeimage:req.body.collegeimage,
        hospitalimage:req.body.hospitalimage,
        location: req.body.location,
        category: req.body.category,
        start_price: req.body.start_price,
        end_price: req.body.end_price,
        city: req.body.city,
        land: req.body.land,
        map: req.body.map,
        school_list: req.body.school_list,
        college_list: req.body.college_list,
        hospital_list: req.body.hospital_list,
        pdf:req.body.pdf
    });
    console.log(product);
    await product.save();
    console.log("Saved Successfully!");
    res.json({
        success: true,
        name: req.body.name,
    });
});

// Product Update Endpoint
// Product Update Endpoint
app.put('/api/v1/updateproduct/:id', async (req, res) => {
    try {
        // Log the incoming request
        console.log("Update request received for ID:", req.params.id);
        console.log("Update payload:", JSON.stringify(req.body, null, 2));
        
        // Check if ID is valid
        if (!req.params.id) {
            return res.status(400).json({
                success: false,
                message: 'Product ID is required'
            });
        }
        
        // Find the product first to verify it exists and to preserve fields
        const existingProduct = await Product.findById(req.params.id);
        if (!existingProduct) {
            console.log("Product not found:", req.params.id);
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        
        // Create an update object that preserves existing values
        // and only updates provided fields
        const updateData = { ...existingProduct.toObject() };
        
        // Only update fields that are explicitly provided in the request body
        if (req.body.name !== undefined) updateData.name = req.body.name;
        if (req.body.image !== undefined) updateData.image = req.body.image;
        if (req.body.image1 !== undefined) updateData.image1 = req.body.image1;
        if (req.body.image2 !== undefined) updateData.image2 = req.body.image2;
        if (req.body.image3 !== undefined) updateData.image3 = req.body.image3;
        if (req.body.schoolimage !== undefined) updateData.schoolimage = req.body.schoolimage;
        if (req.body.collegeimage !== undefined) updateData.collegeimage = req.body.collegeimage;
        if (req.body.hospitalimage !== undefined) updateData.hospitalimage = req.body.hospitalimage;
        if (req.body.category !== undefined) updateData.category = req.body.category;
        if (req.body.start_price !== undefined) updateData.start_price = req.body.start_price;
        if (req.body.end_price !== undefined) updateData.end_price = req.body.end_price;
        if (req.body.location !== undefined) updateData.location = req.body.location;
        if (req.body.city !== undefined) updateData.city = req.body.city;
        if (req.body.land !== undefined) updateData.land = req.body.land;
        if (req.body.map !== undefined) updateData.map = req.body.map;
        if (req.body.school_list !== undefined) updateData.school_list = req.body.school_list;
        if (req.body.college_list !== undefined) updateData.college_list = req.body.college_list;
        if (req.body.hospital_list !== undefined) updateData.hospital_list = req.body.hospital_list;
        if (req.body.pdf !== undefined) updateData.pdf = req.body.pdf;
        
        // Remove MongoDB-specific fields to avoid "Performing an update on the path '_id' would modify the immutable field '_id'" error
        delete updateData._id;
        
        // Perform the update with the properly prepared data
        console.log("Updating with data:", JSON.stringify(updateData, null, 2));
        
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            updateData,
            { 
                new: true,  // Return the updated document
                runValidators: true  // Run schema validators
            }
        );

        console.log("Product updated successfully:", updatedProduct);
        
        return res.status(200).json({
            success: true,
            message: 'Product updated successfully',
            product: updatedProduct
        });
    } catch (error) {
        console.error("Error in update endpoint:", error);
        
        // Specific error handling
        if (error.name === 'CastError') {
            return res.status(400).json({
                success: false,
                message: 'Invalid product ID format',
                error: error.message
            });
        }
        
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: 'Validation error',
                error: error.message
            });
        }
        
        return res.status(500).json({
            success: false,
            message: 'Server error while updating product',
            error: error.message
        });
    }
});

// Get Product by ID Endpoint
app.get('/api/v1/product/:id', async (req, res, next) => {
    const product = await Product.findById(req.params.id).populate('name');

    if (!product) {
        return next(new ErrorHandler('Product not found', 400));
    }

    res.status(201).json({
        success: true,
        product
    });
});

// Delete Product Endpoint
app.delete('/api/v1/removeproduct', async (req, res) => {
    const { id } = req.body; // Destructure the ID from the request body

    console.log("Product ID received:", id); // Log the ID being passed

    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Product ID is required",
        });
    }

    try {
        // Attempt to find and delete the product by ID
        const result = await Product.findOneAndDelete({ _id: id });

        if (result) {
            console.log("Product removed successfully.");
            return res.status(200).json({
                success: true,
                message: "Product removed successfully",
            });
        } else {
            console.log("Product not found.");
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
    } catch (error) {
        console.error("Error removing product:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while removing the product",
            error: error.message,
        });
    }
});

// Get All Products Endpoint
app.get('/api/v1/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log("All product fetched");
    res.send(products);
});

// Recently Added Products Endpoint
app.get('/api/v1/recentlyadded', async (req, res) => {
    let products = await Product.find({ category: "Ongoing Project" });
    let recentlyadded = products.slice(0).slice(-6);
    console.log("Recently Added Fetched");
    res.send(recentlyadded);
});

// Ongoing Project Products Endpoint
app.get('/api/v1/ongoingproject', async (req, res) => {
    let products = await Product.find({ category: "Ongoing Project" }).sort({ id: -1 });
    console.log("Ongoing Project Fetched");
    res.send(products);
});

// Completed Project Products Endpoint
app.get('/api/v1/completedproject', async (req, res) => {
    let products = await Product.find({ category: "Completed Project" });
    console.log("Completed Project Fetched");
    res.send(products);
});

// Upcoming Project Products Endpoint
app.get('/api/v1/upcomingproject', async (req, res) => {
    let products = await Product.find({ category: "Upcoming Project" });
    console.log("Upcoming Project Fetched");
    res.send(products);
});

app.use('/api/v1/', auth);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
    })
}

app.use(errorMiddleware);

module.exports = app;
