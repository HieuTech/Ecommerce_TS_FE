import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyCJM0EwBQK5T92ww5tRZNEs0qqbIvNh6Vc",
  authDomain: "ecommerce-react-ts-45a3b.firebaseapp.com",
  projectId: "ecommerce-react-ts-45a3b",
  storageBucket: "ecommerce-react-ts-45a3b.appspot.com",
  messagingSenderId: "569609164200",
  appId: "1:569609164200:web:6a90b5659d5d74c2a4399d",
  measurementId: "G-VTH0Y9BQ97",
};

const app = initializeApp(firebaseConfig);

export const uploadFileToStorage = async (file: File, folder: string) =>{

    const storage = getStorage(app);
    const filename = uuidv4() + "." + file.name.split(".").pop(); 

    const storageRef = ref(storage,`${folder}/${filename}` );

    const res = await uploadBytes(storageRef, file)
    const url  = await getDownloadURL(res.ref)
    return url
}

// export default  uploadFileToStorage
