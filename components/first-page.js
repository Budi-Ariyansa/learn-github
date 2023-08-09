import Image from "next/image"
import logoPicture from "../public/images/logo-web.png"
import fbIcon from "../public/images/facebook.png"
import igIcon from "../public/images/instagram.png"
import linkedinIcon from "../public/images/linkedin.png"

export default function FirstPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 font-verdana m-auto">
            <Image 
                src={logoPicture}
                width="200"
                height="200"
                className="invert"
            />
            <div>
                <p className="font-bold text-5xl">Budi Ariyansa</p>
                <p className="font-medium">Coder</p>
                <p className="font-light">Manusia biasa yang penuh ketidakjelasan</p>
                <div className="flex mt-3 gap-x-4">
                    <Image src={fbIcon} width="40" height="40" />
                    <Image src={igIcon} width="40" height="40" />
                    <Image src={linkedinIcon} width="40" height="40" />
                </div>
            </div>
        </div>
    );
}