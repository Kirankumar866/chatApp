import jwt from "jsonwebtoken";

export const generatejwtToken = (user, statusCode, message, res) => {
    try {
        if (!user || !user._id) {
            throw new Error("User or user ID not found");
        }

        const options = {
            maxAge: 15 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: "None", // CSRF attacks cross-site request forgery attacks
		secure: true,
        };

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '5d'});

        console.log(token)
        res.status(statusCode).cookie("token", token, options).json({
            success: true,
            user,
            message,
            token
        });
    } catch (error) {
        console.error("Error generating JWT token:", error.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
