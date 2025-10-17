import Card from "../components/Card";

const About = () => {
    return (
        <section id="about" className="py-20 px-6 sm:px-8 bg-gray-100 dark:bg-slate-950">
            <div className="max-w-6xl mx-auto text-center my-4">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-gray-700 dark:text-gray-300">
                Back-End Developer with hands-on experience in building and integrating scalable web-based applications using Java
                and Spring Boot frameworks. Proficient in developing software using monolithic, modular, and microservices architecture. Enjoys solving complex problems and working in both individual and collaborative team environments. Strong background in API integration, system automation, and database management
                </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <Card
                    title="Software Engineer"
                    description=""
                />
                    <Card
                    title="Back End Developer"
                    description=""
                />
                <Card
                    title="Full Stack Developer"
                    description=""
                />
            </div>
        </section>
    );
};

export default About;