const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const { expressjwt: exjwt }=require('express-jwt') ;
const jwt_decode= require('jwt-decode')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');



const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'srikanthkadarla5@gmail.com', // Your Gmail email address
    pass: 'cfyi trpz ikuf ocbn' // Your Gmail password
  }
});


secretKey="abcd"
algorithm="HS256"

const jwtmw= exjwt({
    secret:secretKey,
    algorithms:[algorithm]
})

const client = new MongoClient('mongodb+srv://srikanthkadarla5:Srikanth2604@cluster0.sek9ked.mongodb.net/counselling1?retryWrites=true&w=majority');

client.connect().then(console.log("db connected"));

const db = client.db('counselling');
const col = db.collection('register');

app.post('/register', async (req, res) => {
    try {
        await col.insertOne(req.body);
        console.log(req.body);
        res.send("Data Inserted Successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
  
    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
  
    // Email options
    const mailOptions = {
      from: 'srikanthkadarla5@gmail.com', // Sender address (must be the same as the authenticated user)
      to: email, // Recipient address
      subject: 'Password Reset OTP', // Subject line
      text: `Your OTP for password reset is: ${otp}` // Plain text body
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'OTP sent successfully' });
      } catch (error) {
        console.error('Failed to send OTP:', error);
        res.status(500).json({ success: false, message: 'Failed to send OTP' });
      }
    });  

app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    const user = await col.findOne({ email });
    console.log(user.email, user.password, password);
    if (!user || !(password === user.password)) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token=jwt.sign(user,secretKey,{ algorithm : algorithm, expiresIn: '1m'});


    res.json({ username: user.name ,token:token}); // Return the username upon successful login
});


app.get('/retrieve', jwtmw, async (req, res) => {
    try {
        console.log(jwt_decode.jwtDecode(req.headers.authorization.substring(7)))
        const result = await col.find().toArray();
        console.log(result);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/', (req, res) => {
    res.send('<center><h1>Hello KL University</h1></center>');
});

app.get('/about', (req, res) => {
    res.send('<h1>This is About Page</h1>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>This is Contact Page</h1>');
});

app.get('/home', (req, res) => {
    res.send('<h1>This is Home Page</h1>');
});

app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, role, email, password } = req.body;
        const result = await col.updateOne({ _id: new ObjectId(id) }, { $set: { name, role, email, password } });
        res.send('updated');
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await col.deleteOne({ _id: new ObjectId(id) });
        res.json({ message: 'deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(9000, () => { console.log('Express server is running on port 9000'); });

