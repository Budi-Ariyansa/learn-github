import TimeLineSVG from "./timeline-svg"

export default function AboutMePage() {
    return (
        <div>
            <div className="flex h-screen bg-[#252B48]">
                <div className="m-auto">
                    <ol class="items-center sm:flex">
                        <li class="relative mb-6 sm:mb-0">
                            <div class="flex items-center">
                                <TimeLineSVG />
                                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div class="mt-3 sm:pr-8 max-w-xs">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Nama</h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sabtu, 19 Agustus 2023</time>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Halo, Saya Budi Ariyansa dan biasa dipanggil Budi atau Bud. Nama cina saya yaitu <b>Aliang </b>😁</p>
                            </div>
                        </li>
                        <li class="relative mb-6 sm:mb-0">
                            <div class="flex items-center">
                                <TimeLineSVG />
                                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div class="mt-3 sm:pr-8 max-w-xs">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Kelahiran</h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sabtu, 19 Agustus 2023</time>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Saya kelahiran 09 Mei 2001 di Ketapang Kalimantan Barat yang merupakan salah satu kota kecil di provinsi tersebut.</p>
                            </div>
                        </li>
                        <li class="relative mb-6 sm:mb-0">
                            <div class="flex items-center">
                                <TimeLineSVG />
                                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div class="mt-3 sm:pr-8 max-w-xs">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Lulusan</h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sabtu, 19 Agustus 2023</time>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Saya merupakan lulusan Universitas Kristen Satya Wacana jurusan Teknik Informatika (Software Engineer) tahun 2023 dengan IPK 3.91</p>
                            </div>
                        </li>
                        <li class="relative mb-6 sm:mb-0">
                            <div class="flex items-center">
                                <TimeLineSVG />
                                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div class="mt-3 sm:pr-8 max-w-xs">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Pekerjaan</h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sabtu, 19 Agustus 2023</time>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Saat ini sedang bekerja di PT Sumber Alfaria Trijaya, Tbk sebagai Programmer Analyst.</p>
                            </div>
                        </li>
                        
                    </ol>
                </div>
            </div>
        </div>
    )
}