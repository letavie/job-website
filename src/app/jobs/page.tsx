import JobCard from "@/components/JobCard";

const jobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    image: "/images/job1.jpg",
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "DevHouse",
    location: "HCM City",
    image: "/images/job2.jpg",
  },
  {
    id: "3",
    title: "Product Manager",
    company: "StartupX",
    location: "Hanoi",
    image: "/images/job3.jpg",
  },
];

export default function JobsPage() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Job Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </section>
  );
}
