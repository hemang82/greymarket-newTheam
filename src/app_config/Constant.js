const Constant = {

    APP_NAME: process.env.APP_NAME,

    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
    GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,

    AWS_STORAGE_BUCKET_NAME: process.env.REACT_APP_AWS_STORAGE_BUCKET_NAME,
    AWS_ACCESS_KEY_ID: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    AWS_S3_REGION_NAME: process.env.REACT_APP_AWS_S3_REGION_NAME,

    KEY: process.env.REACT_APP_KEY,
    IV: process.env.REACT_APP_IV,

};

export default Constant;
