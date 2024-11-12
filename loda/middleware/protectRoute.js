import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';
import { ENV_VARS } from '../config/envVars.js';

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies["jwt-netflix"]; // Fixed typo from cookie to cookies
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized access" });
        }

        const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET); // Verifying token
        if (!decoded) {
            return res.status(401).json({ success: false, message: "Unauthorized access" });
        }

        const user = await User.findById(decoded.userId).select('-password'); // Fixed userId retrieval
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        req.user = user; // Attaching the user to the request object
        next(); // Passing control to the next middleware
    } catch (error) {
        console.log('Error in protectRoute:', error.message);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};
