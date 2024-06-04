// // import { writeFile } from "fs";
// // import { NextRequest, NextResponse } from "../../node_modules/next/server";

// // export async function FOST(request: NextRequest){
// //   const data = await request.formData();
// //   const file: File | null = data.get('file') as unknown as File;

// //   if (!file ) {
// //     return NextResponse.json({success: false})
// //   }

// //   const bytes = await file.arrayBuffer();
// //   const buffer = Buffer.from(bytes);

// //   const path = join('/','tmp',file.name)
// //   await writeFile(path,buffer);
// //   console.log(`open ${path} to see upload the file`)
// //   return NextResponse.json({success: true})
// // }
// // server.js (API server running at localhost:8000)

// const express = require('express');
// const multer = require('multer');
// const path = require('path');

// const app = express();
// const port = 8000;

// // Cấu hình thư mục lưu trữ file
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// app.post('/products', upload.single('image'), (req, res) => {
//   const name = req.body.name;
//   const image = req.file;

//   // Xử lý thêm: lưu thông tin sản phẩm vào cơ sở dữ liệu, v.v.
  
//   res.json({
//     message: 'Product created successfully',
//     product: {
//       name,
//       imageUrl: `/uploads/${image.filename}`,
//     },
//   });
// });

// // Tạo thư mục nếu chưa tồn tại
// const fs = require('fs');
// const uploadDir = 'uploads';
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
