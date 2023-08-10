export default function SecondPage() {
    return (
        <div className="bg-black text-white h-full">
            <p className="text-xl md:text-3xl font-bold text-center pt-20 underline underline-offset-4">Tentang Saya</p>

            <div className="flex">
                <div className="flex-initial p-5 mt-20 m-auto">
                    <div className="flex mb-5">
                        <div className="flex-none mr-4">
                            <img src="/images/profile.jpeg" width="86" className="rounded"></img>
                        </div>
                        <div>
                            <p className="text-xs text-sky-400">@budiariyansa <b>&#10004;</b></p>
                            <p className="text-sm md:text-base shrink">Halo, Saya Budi Ariyansa dan biasa dipanggil Budi</p>
                        </div>
                    </div>
                    <div className="flex mb-5">
                        <div className="flex-none mr-4">
                            <img src="/images/profile.jpeg" width="86" className="rounded"></img>
                        </div>
                        <div>
                            <p className="text-xs text-sky-400">@budiariyansa <b>&#10004;</b></p>
                            <p className="text-sm md:text-base shrink">Kelahiran tahun 2001 di Ketapang Kalimantan Barat</p>
                        </div>
                    </div>
                    <div className="flex mb-5">
                        <div className="flex-none mr-4">
                            <img src="/images/profile.jpeg" width="86" className="rounded"></img>
                        </div>
                        <div>
                            <p className="text-xs text-sky-400">@budiariyansa <b>&#10004;</b></p>
                            <p className="text-sm md:text-base shrink">Lulusan Universitas Kristen Satya Wacana jurusan Teknik Informatika (Software Engineer) tahun 2023 dengan IPK 3.91</p>
                        </div>
                    </div>
                    <div className="flex mb-5">
                        <div className="flex-none mr-4">
                            <img src="/images/profile.jpeg" width="86" className="rounded"></img>
                        </div>
                        <div>
                            <p className="text-xs text-sky-400">@budiariyansa <b>&#10004;</b></p>
                            <p className="text-sm md:text-base shrink">Saat ini sedang bekerja di PT Sumber Alfaria Trijaya, Tbk sebagai Programmer Analyst</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}