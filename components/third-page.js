export default function ThirdPage() {
    return (
        <div className="h-full">
            <p className="text-xl font-bold underline underline-offset-4 md:text-3xl text-center mt-40">Sebuah Konten</p>
            <div className="flex mt-10 p-5">
                <div className="flex m-auto ">
                    <div className="flex-initial">
                        <img width="400" className="rounded-l-lg" src="/images/suatu-ketika-1.jpeg" alt="Foto Halalbihal Bersama Teman Unit 1705"></img>
                    </div>
                    <div className="flex-initial">
                        <img width="400" src="/images/suatu-ketika-2.jpeg" alt="Foto dari lantai 17 di Paddington Heights Alam Sutera"></img>
                    </div>
                    <div className="flex-initial">
                        <img width="400" className="rounded-r-lg" src="/images/suatu-ketika-3.jpeg" alt="Foto Mall Central Park ketika Malam Hari"></img>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="m-auto w-5/6">
                    <p className="text-sm md:text-base text-justify">&nbsp;
                        &nbsp;Halo, sebelumnya selamat datang di wesite pribadi saya. Website ini akan berisi beberapa hal sekilas mengenai diri saya dan juga hal - hal 
                        mengenai project - project yang telah saya kerjakan. Pembuatan website ini juga saya gunakan sebagai media pembelajaran <a href="https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs" className="text-sky-400 font-bold" target="_blank">Nextjs</a> dan <a href="https://buefy.org/documentation/" target="_blank" className="text-sky-400 font-bold">Tailwind CSS</a>.
                        Ketiga foto diatas saya pilih secara random tanpa ada alasan khusus. Foto pertama merupakan foto saya bersama teman ketika Event Halalbihalal di kantor. 
                        Foto kedua merupakan foto Cityscape dari lantai 17 dan foto terakhir merupakan foto di Mall Central Park ketika malam hari.
                    </p>
                    <p className="text-sm md:text-base text-justify">&nbsp;
                        Sebelumnya website ini sudah pernah saya buat, namun karena ada permasalahan yang agak sulit diselesaikan jadi saya berpindah menggunakan framework lain 
                        berdasarkan rekomendasi beberapa orang terdekat. Wesbite sebelumnya dibuat dengan menggunakan <a className="text-sky-400 font-bold" href="https://vuejs.org" target="_blank">Vuejs</a> dan <a href="https://buefy.org" target="_blank" className="text-sky-400 font-bold">Buefy</a> dan saya upload juga ke <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages" target="_blank" className="text-sky-400 font-bold">Github Pages</a>.
                        Dan isi dari kontennya juga kurang lebih sama dengan konten sekarang ini. Jadi perbedaan hanya ada pada style website dan mungkin akan jauh lebih lengkap lagi konten-konten yang disediakan dibanding website sebelumnya.
                        Untuk update website ini akan diusahakan rutins setiap harinya tergantung kerjaan kantor hehehehe. Sekali lagi terima kasih telah berkunjung di website ini dan anda bisa komen nanti di kolom chat dibawah.
                        Chat dibawah bisa benaran dipake ya karena datanya nanti akan masuk ke database saya. <b>Thanks and See You...</b>
                    </p><br></br>
                    <small><b>Created by :</b> @budiariyansa</small><br></br>
                    <small><b>Last Update :</b> Kamis, 10 Agustus 2023</small>
                </div>
            </div>
        </div>
    );
}