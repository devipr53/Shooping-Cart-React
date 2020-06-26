import dotenv from 'dotenv';
dotenv.config();

export default{
    //MYSQL_URL:process.env.MYSQL_URL || 'jdbc:mysql://127.0.0.1:3306/react_db'
    PORT: process.env.PORT || 5000,
    MONGODB_URL : process.env.MONGODB_URL || 'mongodb://localhost:27017/MyReactApp',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
}