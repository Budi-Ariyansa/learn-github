export default function ArticlePage() {
    return (
        <div>
            <div className="flex h-full md:h-screen bg-[#252B48]">
                <div className="flex-initial m-auto p-5 max-w-7xl text-justify">
                    <h2 class="text-4xl font-extrabold dark:text-white">Asal Usul</h2>
                    <p class="my-4 text-lg text-gray-500">Sebuah penjelasan atau cerita singkat mengenai suatu hal...</p>
                    <p class="mb-4 text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400">
                        Halo, sebelumnya selamat datang di wesite pribadi saya. Website ini akan berisi beberapa hal sekilas mengenai diri saya, seperti yang sudah ada di section perkenalan dan juga hal - hal 
                        mengenai project - project yang telah saya kerjakan (Untuk section showcase project masih belum saya buat). Pembuatan website ini juga saya gunakan sebagai media pembelajaran <a href="https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs" className="text-sky-400 font-bold" target="_blank">Nextjs</a> dan <a href="https://buefy.org/documentation/" target="_blank" className="text-sky-400 font-bold">Tailwind CSS</a>.
                        Alasan lain dari pembuatan website ini adalah sebagai pengisi waktu luang saya ketika libur seperti hari sabtu dan minggu. Ya sebenarnya, lumayan bisa menambah isian dari portofolio project kedepannya, agar tidak kosong - kosong banget dan sekaligus melatih skill juga 😂. Walaupun project
                        ini terlihat sederhana namun proses pembuatannya cukup memakan waktu karena lama dalam memikirkan desain tampilan yang cocok menurut saya pribadi 😢. 
                    </p>
                    <p class="mb-4 text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400">
                        Sebelumnya website ini sudah pernah saya buat, namun karena ada permasalahan yang agak sulit diselesaikan jadi saya berpindah menggunakan framework lain 
                        berdasarkan rekomendasi beberapa orang terdekat. Wesbite sebelumnya dibuat dengan menggunakan <a className="text-sky-400 font-bold" href="https://vuejs.org" target="_blank">Vuejs</a> dan <a href="https://buefy.org" target="_blank" className="text-sky-400 font-bold">Buefy</a> dan saya upload juga ke <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages" target="_blank" className="text-sky-400 font-bold">Github Pages</a>.
                        Dan isi dari kontennya juga kurang lebih sama dengan konten sekarang ini. Jadi perbedaan hanya ada pada style website dan mungkin akan jauh lebih lengkap lagi konten-konten yang disediakan dibanding website sebelumnya.
                        Untuk update website ini akan diusahakan rutins setiap harinya tergantung kerjaan kantor hehehehe. Sekali lagi terima kasih telah berkunjung di website ini.
                    </p>
                    <table>
                        <tr>
                            <td><small className="font-normal text-gray-500 dark:text-[#5B9A8B] pr-2"><b>Dibuat pada </b></small></td>
                            <td className="font-normal text-gray-500 dark:text-[#5B9A8B]">:</td>
                            <td><small className="font-normal text-gray-500 dark:text-[#5B9A8B] pl-2">Sabtu, 19 Agustus 2023</small></td>
                        </tr>
                        <tr>
                            <td><small className="font-normal text-gray-500 dark:text-[#5B9A8B] pr-2"><b>Oleh </b></small></td>
                            <td className="font-normal text-gray-500 dark:text-[#5B9A8B]">:</td>
                            <td><small className="font-normal text-gray-500 dark:text-[#5B9A8B] pl-2">@budiariyansa</small></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}