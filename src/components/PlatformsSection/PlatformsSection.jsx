import React from 'react';

const platformData = [
  {
    title: 'Android',
    description: 'Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to its full capabilities.',
    imgSrc: 'https://static.hexnode.com/v2/assets/img/ads-pages/multi-platforms/android.jpg',
    imgAlt: 'Android Management with Hexnode UEM',
  },
  {
    title: 'iOS',
    description: 'Manage, secure, and monitor iOS devices in your organization. With Hexnode’s ABM and ASM integration, deploy devices and apps with ease.',
    imgSrc: 'https://static.hexnode.com/v2/assets/img/ads-pages/multi-platforms/iOS.jpg',
    imgAlt: 'iOS Management with Hexnode UEM',
  },
  {
    title: 'macOS',
    description: 'Secure and control your macOS devices with Hexnode. Easily enforce policies and ensure compliance with corporate standards.',
    imgSrc: 'https://static.hexnode.com/v2/assets/img/ads-pages/multi-platforms/macOS.jpg',
    imgAlt: 'macOS Management with Hexnode UEM',
  },
  // Add other platforms as needed
];

function PlatformsSection() {
  return (
    <div id="platforms" className="bg-white scroll-margin-top">
      <section className="py-16 lg:py-20 bg-gray-100 relative">
        <div className="absolute top-[-65px] xl:top-[-74px] opacity-0 w-0 h-0" id="platforms"></div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-5">
            Multi-platform Endpoint Management
          </h2>
          <p className="hidden md:block text-lg text-center text-gray-700">
            Devices of varying platforms? Hexnode thrives in a diverse environment.
          </p>
          <div className="flex flex-col md:flex-row items-center md:space-x-8 mt-8">
            <div className="md:w-1/2 max-h-[565px] overflow-hidden rounded-lg">
              <img
                src={platformData[0].imgSrc}
                alt={platformData[0].imgAlt}
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              {platformData.map((platform, index) => (
                <div key={index} className="border-b last:border-0 py-4">
                  <h3 className="text-lg font-bold text-gray-900">{platform.title}</h3>
                  <p className="text-gray-700 mt-2">{platform.description}</p>
                  <a
                    href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                    className="text-red-600 font-semibold mt-4 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try Hexnode on your endpoints
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PlatformsSection;
