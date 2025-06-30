import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Blog from "../models/Blog.js";

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );
    const imageFile = req.file;

    if (!title || !description || !category || !imageFile) {
      return res.json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);

    //Uplad Image to ImageKit
    const response = await imagekit.upload({
      file: fileBuffer, // required
      fileName: imageFile.originalname, // required
      folder: "/blogs",
    });

    //Optimize the imgae through imageKit URL transformation
    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" }, // Auto Compression
        { format: "webp" }, //convert to modern format
        { width: "1280" }, //width resizing
      ],
    });

    const image = optimizedImageUrl;
    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });

    res.json({ success: true, message: "Blog added successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getAllBlogs = async () => {
  try {
    const blogs = await Blog.find({ isPublished: true });
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getBlogsId = async () => {
  try {
    const { blogId } = req.parse;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.json({ success: false, message: "Blog not found" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
