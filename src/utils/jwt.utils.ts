import * as jose from "jose";


export const jwt = {
    generateToken: async (data: any) =>{
          const jwt = await new jose.SignJWT(data)
            .setProtectedHeader({ alg: "HS256" })
            .sign(new TextEncoder().encode(`${import.meta.env.VITE_JWT_KEY}`));
          return jwt;
    },
    verifyToken: async (token: string) => {
        try {
          const { payload } = await jose.jwtVerify(
            token,
            new TextEncoder().encode(`${import.meta.env.VITE_JWT_KEY}`)
          );
          return payload;
        } catch (error) {
          return null;
        }
    }
}