import { sql } from "@vercel/postgres";

export default async function handler(request, response) {
    try {
        const result = await sql`
            CREATE TABLE comment (
                comment_id SERIAL PRIMARY KEY,
                fullname VARCHAR(100) NOT NULL,
                message VARCHAR(1000) NOT NULL,
                created_on TIMESTAMP NOT NULL
            );
        `;
        return response.status(200).json({result});
    } catch (error) {
        return response.status(500).json({result});
    }
}
