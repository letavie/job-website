import Link from "next/link";
import Image from "next/image";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  image: string;
}

export default function JobCard({
  id,
  title,
  company,
  location,
  image,
}: JobCardProps) {
  return (
    <div className="border rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">
          {company} - {location}
        </p>
        <Link href={`/jobs/${id}`} className="text-blue-600 mt-2 inline-block">
          View Details
        </Link>
      </div>
    </div>
  );
}
