import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.cloudinary_cloud_name, 
        api_key: process.env.cloudinary_api_key, 
        api_secret: process.env.cloudinary_api_secret });
    
    // Upload an image
    const uploadoncloudinary= async function(localfilepath){
        try{
        if(!localfilepath) return null;

       const upload= await cloudinary.uploader.upload(localfilepath, { resource_type: "auto"} );
       //done successfully
       console.log("file uploaded successfully", upload.url);
       return upload;
    }

catch (error){
    fs.unlinkSync(localfilepath);
    return null; 
}
    }

    export {uploadoncloudinary};