import Image from "next/image"
import fbIcon from "../public/images/facebook.png"
import igIcon from "../public/images/instagram.png"
import linkedinIcon from "../public/images/linkedin.png"

export default function FirstPage() {
    return (
        <div className="bg-first-page-background bg-cover">
            <div className="flex h-screen w-full backdrop-blur-sm">
                <div className="flex flex-cols-1 md:flex-cols-2 m-auto p-5 gap-4">
                    <div className="flex-1">
                        <img src="/images/logo-web.png" className="invert animate-bounce" width="200" height="200"></img>
                    </div>
                    <div>
                        <p className="font-bold text-xl md:text-5xl">Budi Ariyansa</p>
                        <p className="font-medium text-xs md:text-base">Coder</p>
                        <p className="font-light text-xs md:text-base">Manusia biasa yang penuh ketidakjelasan</p>
                        <div className="flex mt-3 gap-4">
                            <a href="google.com"><Image className="shrink" src={fbIcon} width="40"/></a>
                            <a href="google.com"><Image className="shrink" src={igIcon} width="40"/></a>
                            <a href="google.com"><Image className="shrink" src={linkedinIcon} width="40"/></a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}