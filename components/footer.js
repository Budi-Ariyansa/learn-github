import { sql } from '@vercel/postgres';

export default function Footer() {
    return (
        <div className="footer text-center p-5 bg-gray-400">
            <p className="text-base md:text-xl font-bold">COPYRIGHT &#169; BUDIARIYANSA 2023</p>
        </div>
    );
}