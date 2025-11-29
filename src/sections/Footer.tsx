const Footer = () => {
    return (
         <footer className="bg-gray-100 dark:bg-slate-950 mt-4 py-12 text-gray-700 dark:text-gray-300">
            <div className="container mx-auto grid md:grid-cols-3 gap-10 px-6">
                <div>
                    <h2 className="text-xl font-semibold">R Ardan</h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        A Software Engineer specializing in scalable web applications and high-performance backend development.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#about" className="hover:text-blue-500">About</a></li>
                        <li><a href="#project" className="hover:text-blue-500">Projects</a></li>
                        <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
                    <ul className="space-y-2">
                        <li>risalardan@gmail.com</li>
                        <li>Jakarta, Indonesia</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto mt-10 px-6">
                <hr className="border-gray-300 dark:border-gray-700" />
            </div>
            <div className="text-center mt-6">
                <p>© {new Date().getFullYear()} R Ardan. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;