import jwt from 'jsonwebtoken'

const userAuth = async (req, res, next) => {
    const {token} = req.headers;
    
    if(!token){
        return res.json({success: false, message: 'Not Authorized. Login Again'})
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if(tokenDecode.id){
            // Initialize req.body if it doesn't exist
            if (!req.body) {
                req.body = {};
            }
            req.body.userId = tokenDecode.id
        }else{
            return res.json({success: false, message: 'Not Authorized. Login Again'})
        }

        next();
    } catch (error) {
        console.log(error); // Better error logging
        res.json({success: false, message: "Authentication failed"})
    }
}

export default userAuth;