// import InsertComment from "@/pages/api/insert-comment";

export default function FourthPage() {
    return(
        <div className="h-full relative mb-40">
            <p className="text-xl text-center font-bold md:text-3xl underline underline-offset-4 mt-40">Silahken Komen</p>
            <div className="flex">
                <div className="mt-10 m-auto">
                    <form action="" method="post" className="p-5">
                        <div>
                            <span className="block text-sm md:text-base font-bold">Nama Lengkap / Fullname</span>
                            <input type="text" className="border-2 border-black p-2 w-full text-sm md:text-base"></input>
                        </div>
                        <div className="mt-3">
                            <span className="block text-sm md:text-base font-bold">Pesan / Message</span>
                            <textarea className="border-2 border-black resize-none p-2 overflow-hidden w-full text-sm md:text-base" rows="5" cols="150"></textarea>
                        </div>
                        <button className="text-sm md:text-base border-black border-2 bg-gray-400 px-5 py-2 rounded-md font-bold">Kirim</button>
                    </form>
                </div>
            </div>
        </div>
    );
}