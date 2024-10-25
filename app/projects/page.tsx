import { BlogPosts } from 'app/components/posts';

export const metadata = {
  title: 'Niranjan Fartare | Projects',
  description: 'Latest Projects by Niranjan Fartare.',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-5 text-3xl font-semibold tracking-tighter">Projects</h1>

      <div className="mb-4">
        <h2 className="text-2xl font-medium">
          <a 
            href="https://hostingchecker.co" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Hosting Checker
          </a>
        </h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          A tool to easily check where a website is hosted, providing key hosting and domain information. 
          Ideal for users looking to gather insights about website infrastructure.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-medium">
          <a 
            href="https://github.com/niranjan-fartare/Movie-Reservation-System" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Movie Reservation System
          </a>
        </h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Developed a backend system for an online ticket booking application inspired by BookMyShow.
          Designed and implemented RESTful APIs for CRUD operations on core entities like City, Theatre,
          Auditorium, Show, and Ticket. Leveraged Java and Spring Boot to build robust and scalable backend 
          services, and utilized JPA/Hibernate for efficient database management and seamless integration 
          with relational databases.
        </p>
      </div>

      {/* Future projects can be added similarly */}
    </section>
  );
}
