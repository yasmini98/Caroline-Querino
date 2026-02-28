export default function Sobre() {
    return (
        <section id="sobre" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6">
                    Sobre Mim
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Transformando Desafios em Oportunidades
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                    Com expertise em pesquisa e consultoria, atuo na intersecção entre gênero, 
                    tecnologia e sustentabilidade ambiental, oferecendo soluções inovadoras e 
                    baseadas em evidências científicas.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                    Minha abordagem combina rigor acadêmico com aplicação prática, ajudando 
                    organizações a implementar políticas de diversidade, equidade e inclusão, 
                    além de estratégias ESG efetivas.
                    </p>
                    <p className="text-lg text-gray-700">
                    Através de diagnósticos aprofundados e metodologias participativas, 
                    transformo desafios complexos em oportunidades de mudança sustentável.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
                    <div>
                        <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                        <div className="text-gray-600">Anos de Experiência</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                        <div className="text-gray-600">Projetos Concluídos</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-green-600 mb-2">30+</div>
                        <div className="text-gray-600">Publicações</div>
                    </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-lg transform rotate-3"></div>
                    <img 
                    src="https://media.licdn.com/dms/image/v2/D4D03AQH3jMPS3KHIzA/profile-displayphoto-crop_800_800/B4DZyWB7x8IUAI-/0/1772043619280?e=1773878400&v=beta&t=NkT2qFNV_CL8fx1DnBbOAc9bGfnWuK6w16KiShngDlk"
                    alt="Consultora profissional"
                    className="relative rounded-lg shadow-xl"
                    />
                </div>
                </div>
            </div>
            </section>
    );
}