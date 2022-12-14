import multer from 'multer';

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    }
});

const uploads = multer({storage: storage});

export default uploads;