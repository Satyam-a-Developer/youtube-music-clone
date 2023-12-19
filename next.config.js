/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.infrastructureLogging = { debug: /PackFileCache/ }
     
    },
      webpack(config, options) {
          config.module.rules.push({
            test: /\.(ogg|mp3|wav|mpe?g)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: '[name]-[hash].[ext]',
                },
              },
            ],
          });
          return config;
        },
      reactStrictMode:false,
    
   
      images: {
  
        // remotePatterns:[
        //       "avatars.githubusercontent.com",
        //       'images.dog.ceo',
        //       'is1-ssl.mzstatic.com',
        //       'images.unsplash.com',
        //       "fakestoreapi.com",
        //       "api.slingacademy.com"
        //   ]
          remotePatterns: [{
            protocol: "https",
            hostname:  'avatars.githubusercontent.com',
            
           
          },
          {
            protocol: "https",
            hostname:  'images.dog.ceo',
            
           
          },
          {
            protocol: "https",
            hostname:  'is1-ssl.mzstatic.com',
            
           
          },
          {
            protocol: "https",
            hostname:  'api.slingacademy.com',
            
           
          },
          {
            protocol: "https",
            hostname:  'images.unsplash.com',
            
           
          }
        
        
        ],
          // remotePatterns: ['is1-ssl.mzstatic.com'],
          // remotePatterns: ['avatars.githubusercontent.com'],
          // remotePatterns: ['images.dog.ceo'],
          // remotePatterns: ['avatars.githubusercontent.com']
        
  
      },
  }
  
  module.exports = 
      nextConfig
    
      
      
  
  
  
  