/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains : ['upload.wikimedia.org','cdn0-production-images-kly.akamaized.net','dbkpop.com','www.biography.com','images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com','i.pinimg.com','assets.pikiran-rakyat.com','images.genpi.co'],
  },
  compiler : {
    styledComponents : true
  }
}

module.exports = nextConfig
