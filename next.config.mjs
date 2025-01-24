/** @type {import('next').NextConfig} */

const nextConfig = {
    async headers(){
        return[
            {
                source:"/api/:path*",
                headers: [
                        {key: "ACCESS-CONTROL-ALLOW-CREDENTIALS", value: "true"},
                        {key: "ACCESS-CONTROL-ALLOW-ORIGIN", value: "*"},
                        {key: "ACCESS-CONTROL-ALLOW-METHODS", value: "GET,DELETE, PATCH,POST,PUT"},
                        {key: "ACCESS-CONTROL-ALLOW-HEADERS", value: "X-CSRF-TOKEN, X-REQUESTED-WITH, ACCEPT, ACCEPT-VERSION, CONTENT-LENGTH, CONTENT-MD5,CONTENT-TYPE, DATE, X-API-VERSION"},
                ]
            }
        ]
    }
}
export default nextConfig