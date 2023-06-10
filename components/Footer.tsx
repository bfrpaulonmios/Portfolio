const Footer = () => {
    return (
        <footer className="bg-gray-900 py-6">
            <div className="max-w-screen-lg mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-white mb-4 md:mb-0">© 2023 Bruno Paulon. All rights reserved.</div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-gray-300">
                            Facebook
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            Twitter
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
