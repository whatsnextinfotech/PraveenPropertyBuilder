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



// Schema for Creating Products
const Product = mongoose.model("Product", {
    id: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    image1: {
      type: String,
      require: true,
  },
  image2: {
    type: String,
    require: true,
   },
  image3: {
  type: String,
  require: true,
  },
  schoolimage: {
    type: String,
    require: true,
   },
   collegeimage: {
     type: String,
     require: true,
   },
   hospitalimage: {
     type: String,
     require: true,
   },
    category: {
        type: String,
        require: true,
    },
    start_price: {
        type: String,
        require: true,
    },
    end_price: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    map: {
        type: String,
        require: true,
    },
    land: {
        type: String,
        require: true,
    },
    school_list: {
        type: String,
        require: true,
    },
    college_list: {
        type: String,
        require: true,
    },
    hospital_list: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now,
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
app.put('/api/v1/updateproduct/:id', async (req, res) => {
    try {
        // Find product by id and update with new data
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                image: req.body.image,
                location: req.body.location,
                category: req.body.category,
                start_price: req.body.start_price,
                end_price: req.body.end_price,
                city: req.body.city,
                land: req.body.land,
                map: req.body.map,
                school_list: req.body.school_list,
                college_list: req.body.college_list,
                hospital_list: req.body.hospital_list
            },
            { new: true } // Returns the updated product
        );

        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        console.log("Updated Product:", updatedProduct);
        res.json({
            success: true,
            message: 'Product updated successfully!',
            product: updatedProduct
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while updating the product',
            error: error.message
        });
    }
});

// Get Product by ID Endpoint
app.get('/product/:id', async (req, res, next) => {
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
