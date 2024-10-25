export default function FooterComponent ()
{
    return(<div className="border-t-2">
        <div className="grid grid-cols-1 place-content-between font-serif place-items-start p-7 lg:grid-cols-4 sm:grid-cols-2 gap-10 border-b">
        <div>
                <p className="text-md font-bold pt-3">About Us</p>
                <div className="text-gray-500">
                    <p>VignanEdu is your go-to platform for learning and mastering technology. We provide easy access to study resources, tutorials, and practice tests to help you stay updated with the latest in the tech world.</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center">
                    <img className="h-12 w-12 gap-1 " src="favicon.png"/>
                    <p className="text-xl font-bold">Vignan</p>
                    <p className="text-xl font-bold text-blue-500">Edu</p>
                </div>
                <div className="text-gray-500 ">
                    <p>About Us</p>
                    <p>Success Stories</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
            <div>
                <p className="text-md font-bold pt-3">Courses</p>
                <div className="text-gray-500">
                    <p>DSA</p>
                    <p>Web developnment</p>
                    <p>Computer Network</p>
                    <p>Ethical Hacking</p>
                    <p>Compiler Design</p>
                </div>
            </div>
            <div    >
                <div>
                    <p className="text-md font-bold pt-3">Contact Us</p>
                    <div className="flex items-center text-gray-500 gap-3">
                        <img className="h-4 w-5 " src="phone.png" />
                        <a href="tel:7564941074">7564941074</a>
                    </div>
                    <div className="flex items-center text-gray-500 gap-3">
                        <img className="h-4 w-5" src="mail.png" />
                        <a href="mailto:221fa04732@vignan.ac.in">221fa04732@vignan.ac.in</a>
                    </div>
                </div>
                <div className="pt-3">
                    <p className="text-md font-bold">Follow Us</p>
                    <div className="flex items-center p-1.5 gap-2.5">
                        <a href="https://www.instagram.com/"><img className="h-4 w-4" src="instagram.png" /></a>
                        <a href="https://www.linkedin.com/"><img className="h-4 w-4" src="linkedin.png" /></a>
                        <a href="https://www.twitter.com/"><img className="h-4 w-4" src="twitter.png" /></a>
                        <a href="https://www.youtube.com/"><img className="h-4 w-4" src="youtube.png" /></a>
                        <a href="https://www.facebook.com/"><img className="h-4 w-4" src="facebook.png" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center p-3">
            @VignanEdu - All rights reserved-2024
        </div>
    </div>)
}
