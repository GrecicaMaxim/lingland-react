import { styled } from "@mui/system";
import { fetchStrapi } from "@/lib/strapi";

const langs = await fetchStrapi('/learn-languages?populate=*');

export default function LearnForFree() {
    return (
        <div className="learn-for-free-body">
            <h1>Which language do you want to learn?</h1>
            <div className="language-grid">
                {langs.map((n) => (
                    <div className="language-card">
                        <img src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${n.image_url.url}`} width={50} height={50} alt={n.Name} sx={{filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.3))'}}/>
                        <div className="language-title">{n.language_name}</div>
                        <div classNmae="language-users" align="center">{n.number_of_users} users</div>
                    </div>
                ))}
            </div>
        </div>
    );
}