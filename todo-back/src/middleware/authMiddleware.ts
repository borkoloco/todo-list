import { expressjwt as jwt } from "express-jwt";
import jwksRsa from "jwks-rsa";
require("dotenv").config();

const authMiddleware = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }) as jwksRsa.GetVerificationKey,
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ["RS256"],
  getToken: (req) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      throw new Error("No authorization token found");
    }
    return token;
  },
});

export default authMiddleware;
