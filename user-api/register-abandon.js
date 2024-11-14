const express = require('express');
const db = require('../firestore'); // Impor instance Firestore dari file firestore.js

const app = express();
app.use(express.json());

// Endpoint untuk menambahkan pengguna baru
app.post('/api/register', async(req, res) => {
    try {
        const { userId, name, userName, email, password } = req.body;

        // Validasi bahwa semua field yang diperlukan tidak `undefined`
        if (!name || !userName || !email || !password) {
            return res.status(400).json({ error: 'All fields (name, userName, email, password) are required' });
        } else {
            await db.collection('users').add({
                name,
                userName,
                email,
                password
            });
        }

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error adding user: ', error);
        res.status(500).json({ error: 'Failed to register user' });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validasi bahwa email dan password tidak `undefined`
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        // Cari pengguna berdasarkan email di Firestore
        const usersRef = db.collection('users');
        const querySnapshot = await usersRef.where('email', '==', email).where('password', '==', password).get();

        if (querySnapshot.empty) {
            // Jika tidak ada user yang cocok
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Jika cocok, kirim respons sukses
        res.status(200).json({ message: 'User logged in successfully' });
    } catch (error) {
        console.error('Error logging in: ', error);
        res.status(500).json({ error: 'Failed to log in' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

