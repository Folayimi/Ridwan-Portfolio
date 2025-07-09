// components/Certificates.jsx
import Image from "next/image";

const certificates = [
  {
    src: "/udacity-certificate.PNG",
    alt: "Udacity Certificate",
    title: "ALX-T Full Stack Developer – UDACITY",
  },
  {
    src: "/hackathon-certificate.PNG",
    alt: "Hackathon Certificate",
    title: "Certificate Of Particiapation – HACKLAB",
  },
  {
    src: "/nuesa-certificate.jpeg",
    alt: "Nuessa Certificate",
    title: "Certificate Of Appreciation  – NUESA",
  },
  {
    src: "/jobberman-certificate.jpeg",
    alt: "Jobberman Certificate",
    title: "Soft-Skills Training – JOBBERMAN",
  },
  {
    src: "/cctv-participation.jpeg",
    alt: "CCTV Certificate",
    title: "Certificate Of Participation – MARET Comm. Ltd.",
  },
  {
    src: "/cctv-training.jpeg",
    alt: "CCTV Certificate",
    title: "Certificate Of Training – MARET Comm. Ltd.",
  },
  // Add more certificates as needed
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-[5%] bg-white text-black">
      <h2 className="text-3xl font-[500] mb-10 text-center">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-[50px]">
        {certificates.map((cert, i) => (
          <div
            key={i}
            className="rounded-xl cflexbs overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white cursor-pointer"
          >
            <Image
              src={cert.src}
              alt={cert.alt}
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
            <div className="p-4 text-sm text-center font-medium">
              {cert.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
