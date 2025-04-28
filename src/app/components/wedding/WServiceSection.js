import Image from "next/image";
import { Card } from "rsuite";
import { motion } from "motion/react";

export default function WServiceSection() {
  const serviceData = [
    {
      id: 1,
      image:
        "https://jaspira.in/wp-content/uploads/elementor/thumbs/Destiantion-wedding-in-Kerala-r0uxk3uh1yqmghlmmlx3v6d655ji4mjs7njp2lqf4o.webp",
      title: "Planning",
      description:
        "We handle every aspect of service with utmost care and professionalism.",
      link: "#",
    },
    {
      id: 2,
      image:
        "https://jaspira.in/wp-content/uploads/elementor/thumbs/shutterstock_313840562-min-1-1144x715-1-pve73kq1gecz21kjisv83uephqgb5y26v90zh9i2vs.webp",

      title: "Venue Selection",
      description:
        "We handle every aspect of service with utmost care and professionalism.",
      link: "#",
    },
    {
      id: 3,
      image:
        "https://jaspira.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-02-at-9.14.15-PM-qey08ued1jimfxaninkaqojzjnyfiesh3kb8w4hc7s.webp",
      title: "Decor & Styling",
      description:
        "We handle every aspect of service with utmost care and professionalism.",
      link: "#",
    },
    {
      id: 4,
      image:
        "https://jaspira.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-02-at-6.22.58-PM-1-qey08vc78djwrj9ad5yxb6bg51tsq3w7foyqdefy1k.webp",
      title: "Catering",
      description:
        "We handle every aspect of service with utmost care and professionalism.",
      link: "#",
    },
    {
      id: 5,
      image:
        "https://jaspira.in/wp-content/uploads/elementor/thumbs/Why-should-you-consider-Kerala-for-your-destination-Wedding-qdd0gb58eyjcrnnjiswoon1niauhcqphc26uy25w60.webp",
      title: "Photography",
      description:
        "We handle every aspect of service with utmost care and professionalism.",
      link: "#",
    },
    {
      id: 6,
      image:
        "https://jaspira.in/wp-content/uploads/elementor/thumbs/Jiapur-6-qxibxsv03g551vlxyb1bv0cl2hzriq41ivavoksefs.webp",
      title: "Entertainment",
      description:
        "We handle every aspect of service with utmost care and professionalism.",
      link: "#",
    },
    {
      id: 7,
      image:
        "https://jaspira.in/wp-content/uploads/elementor/thumbs/Jiapur-7-qxibxuqoh47pp3j7nbukzzvi99qhy4bi74lun4pm3c.webp",

      title: "Makeup & Styling",
      description:
        "We handle every aspect of service with utmost care and professionalism.",
      link: "#",
    },
    {
      id: 8,
      image:
        "https://jaspira.in/wp-content/uploads/elementor/thumbs/Shimla-Destiantion-Wedding-e1738400038322-r0uwnpcrgkds8eo0u3p3euq4xz8zs8ww39y4i7rzmg.webp",
      title: "Destination Weddings",
      description:
        "We handle every aspect of service with utmost care and professionalism.",
      link: "#",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pl-9 ">
      {serviceData.map((data, index) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: index * 0.2,
          }}
          viewport={{ once: true }}
          key={data.id}
        >
          <Card
            width={320}
            shaded
            style={{ color: "black", backgroundColor: "#fffbf6" }}
            className=" custom-shadow4-h-imp "
          >
            {/* <img src={data.image} alt={data.title} /> */}
            <Image src={data.image} alt={data.title} height={300} width={320} />
            <Card.Header as="h5" className=" text-2xl mt-2 mb-1  ">
              {data.title}
            </Card.Header>
            <Card.Body>{data.description}</Card.Body>
            <Card.Footer>
              <a
                href={data.link}
                className=" block m-auto mt-1 mb-3 bg-yellow-200 hover:bg-transparent w-service-learn-more"
              >
                Learn More
              </a>
            </Card.Footer>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
