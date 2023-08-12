export default function SecondPage() {
    return (
        <div className="bg-black text-white h-full">
            <p className="text-xl md:text-3xl font-bold text-center pt-40 underline underline-offset-4">Tentang Saya</p>

            <div className="flex">
                <div className="flex-initial p-5 mt-20 mb-20 m-auto">
                    <ol className="relative border-l border-gray-300 pb-5">
                        <li className="ml-5 pb-5 pt-6">
                            <div className="border border-gray-500 bg-gray-400 rounded-full w-4 h-4 absolute mt-7 -left-2"></div>
                            <div className="flex">
                                <div className="flex-none mr-4">
                                    <img src="/images/profile.jpeg" width="86" className="rounded"></img>
                                </div>
                                <div className="flex-initial">
                                    <small className="text-sky-500 font-bold">@budiariyansa &#x2714;	</small>
                                    <p>Halo, Saya Budi Ariyansa dan biasa dipanggil Budi</p>
                                </div>
                            </div>
                        </li>
                        <li className="ml-5 pb-5">
                            <div className="border border-gray-500 bg-gray-400 rounded-full w-4 h-4 absolute mt-7 -left-2"></div>
                            <div className="flex">
                                <div className="flex-none mr-4">
                                    <img src="/images/profile.jpeg" width="86" className="rounded"></img>
                                </div>
                                <div className="flex-initial">
                                    <small className="text-sky-500 font-bold">@budiariyansa &#x2714;	</small>
                                    <p>Kelahiran tahun 2001 di Ketapang Kalimantan Barat</p>
                                </div>
                            </div>
                        </li>
                        <li className="ml-5 pb-5">
                            <div className="border border-gray-500 bg-gray-400 rounded-full w-4 h-4 absolute mt-7 -left-2"></div>
                            <div className="flex">
                                <div className="flex-none mr-4">
                                    <img src="/images/profile.jpeg" width="86" className="rounded"></img>
                                </div>
                                <div className="flex-initial">
                                    <small className="text-sky-500 font-bold">@budiariyansa &#x2714;	</small>
                                    <p>Lulusan Universitas Kristen Satya Wacana jurusan Teknik Informatika (Software Engineer) tahun 2023 dengan IPK 3.91</p>
                                </div>
                            </div>
                        </li>
                        <li className="ml-5">
                            <div className="border border-gray-500 bg-gray-400 rounded-full w-4 h-4 absolute mt-7 -left-2"></div>
                            <div className="flex">
                                <div className="flex-none mr-4">
                                    <img src="/images/profile.jpeg" width="86" className="rounded"></img>
                                </div>
                                <div className="flex-initial">
                                    <small className="text-sky-500 font-bold">@budiariyansa &#x2714;	</small>
                                    <p>Saat ini sedang bekerja di PT Sumber Alfaria Trijaya, Tbk sebagai Programmer Analyst</p>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        
    );
}