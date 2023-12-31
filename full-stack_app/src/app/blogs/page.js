export default function BlogPage() {
    return (
        <>
            <section className="relative overflow-hidden py-12">
                <div className="relative">
                    <div className="mx-auto max-w-xl lg:max-w-7xl">
                        <div className="mx-auto max-w-2xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-black">
                                OUR BLOG
                            </span>
                            <h1 className="text-5xl font-bold">Latest news from our blog</h1>
                        </div>

                        <section className="text-gray-600 body-font">
                            <div className="container px-5 pt-24 py-4 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                
                                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                                        <div className="flex relative">
                                            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360" />
                                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                                                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <hr />
        </>
    )
}
