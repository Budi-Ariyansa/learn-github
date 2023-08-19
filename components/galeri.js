export default function GalleryPage() {
    return (
        <div className="h-full p-5 bg-[#252B48] pb-20">
            <div className="flex flex-col">
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl m-auto">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="/images/galeri-4.jpeg" alt=""></img>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="/images/galeri-2.jpeg" alt=""></img>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="/images/galeri-3.jpeg" alt=""></img>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="/images/galeri-1.jpeg" alt=""></img>
                    </div>
                </div>
            </div>
            
        </div>
    )
}