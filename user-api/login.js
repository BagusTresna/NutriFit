const loginUser = async (request, h) => {
    const { email, password } = request.payload;

    try {
        // Autentikasi pengguna dengan Firebase Authentication
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // Dapatkan token ID untuk otentikasi lebih lanjut (jika diperlukan)
        const token = await user.getIdToken();
        return h.response({ message: 'User logged in successfully', uid: user.uid, token: token }).code(200);
    } catch (error) {
        return h.response({ error: error.message }).code(400);
    }
};

module.exports = [
    { method: 'POST', path: '/user-login', handler: loginUser },
    // Endpoint lain
];
