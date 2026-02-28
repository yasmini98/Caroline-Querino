import { useI18n } from '../app/i18n';

export default function Sobre() {
    const { t } = useI18n();

    return (
        <section id="sobre" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6">
                    {t.about.badge}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {t.about.title}
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                    {t.about.p1}
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                    {t.about.p2}
                    </p>
                    <p className="text-lg text-gray-700">
                    {t.about.p3}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
                    <div>
                        <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                        <div className="text-gray-600">{t.about.stats.years}</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                        <div className="text-gray-600">{t.about.stats.projects}</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-green-600 mb-2">30+</div>
                        <div className="text-gray-600">{t.about.stats.publications}</div>
                    </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-lg transform rotate-3"></div>
                    <img 
                    src="https://media.licdn.com/dms/image/v2/D4D03AQH3jMPS3KHIzA/profile-displayphoto-crop_800_800/B4DZyWB7x8IUAI-/0/1772043619280?e=1773878400&v=beta&t=NkT2qFNV_CL8fx1DnBbOAc9bGfnWuK6w16KiShngDlk"
                    alt={t.about.imageAlt}
                    className="relative rounded-lg shadow-xl"
                    />
                </div>
                </div>
            </div>
            </section>
    );
}