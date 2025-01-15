import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="bottom-0 w-full bg-[#21aeb8]">
            <div className="p-4 text-center text-black">
                <p>
                    Copyright © Designed &amp; Developed by{' '}
                    <a href="#" target="_blank" className="underline">
                        APRS
                    </a>{' '}
                    2024
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                    <span> Siga-nos: </span>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                        <FaInstagram size={20} />
                    </a>
                    <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                        <FaWhatsapp size={20} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                        <FaTwitter size={20} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                        <FaGithub size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
}