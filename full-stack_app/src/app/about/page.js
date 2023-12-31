export default function AboutPage() {
    return (
        <>
            <section className="relative overflow-hidden py-12">
                <div className="relative">
                    <div className="mx-auto max-w-xl lg:max-w-7xl">
                        <div className="mx-auto mb-14 max-w-2xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-black">
                                ABOUT US
                            </span>
                            <h1 className="text-5xl font-bold">Exciting news from us</h1>
                        </div>
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-6 mx-auto flex flex-wrap">
                                <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                                    <div className="w-full sm:p-4 px-4 mb-6">
                                        <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
                                        <div className="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
                                    </div>
                                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                        <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                        <p className="leading-relaxed">Users</p>
                                    </div>
                                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                        <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
                                        <p className="leading-relaxed">Subscribes</p>
                                    </div>
                                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                        <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
                                        <p className="leading-relaxed">Downloads</p>
                                    </div>
                                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                        <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
                                        <p className="leading-relaxed">Products</p>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                                    <img className="object-cover object-center w-full h-full" src="https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg" alt="stats" />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <hr className="my-8" />
        </>
    )
}
