/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        config.module.rules.push({
          test: /\.(webm)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                publicPath: '/_next/static/videos', // Adjust the path based on your needs
                outputPath: 'static/videos', // Adjust the path based on your needs
                name: '[name].[hash].[ext]',
              },
            },
          ],
        });
    
        return config;
      },
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "i0.wp.com",
          },
          {
            protocol: "https",
            hostname: "avatars.githubusercontent.com",
          },
          {
            protocol: "https",
            hostname: "raw.githubusercontent.com",
          },
          {
            protocol: "https",
            hostname: "*",
          },
        ]
      }
}

module.exports = nextConfig
