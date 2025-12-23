import { Layout, Building2, PencilRuler, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Interior Design',
        description: 'Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.',
        icon: Layout,
        active: false
    },
    {
        title: 'Architecture',
        description: 'Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.',
        icon: Building2,
        active: true
    },
    {
        title: 'Planning',
        description: 'Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.',
        icon: PencilRuler,
        active: false
    }
];

const Services = () => {
    return (
        <section className="services section bg-white" id="services">
            <div className="interior-container">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h4 style={{ color: 'var(--accent-tan)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', fontSize: '0.8rem', marginBottom: '0.8rem' }}>
                            WHAT WE DO
                        </h4>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Our Service</h2>
                    </div>
                    <div className="flex gap-4 mb-2">
                        <button className="p-2 rounded-full border border-gray-200 hover:border-var(--accent-green) transition-colors">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-full bg-[var(--accent-green)] text-white shadow-lg hover:bg-[#3d7262] transition-colors">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className={`p-10 rounded-3xl transition-all ${service.active ? 'bg-[var(--accent-tan)] text-white shadow-2xl' : 'bg-white border border-gray-100 shadow-xl shadow-gray-100/50'}`}
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${service.active ? 'bg-white/20' : 'bg-gray-50'}`}>
                                <service.icon className={`w-8 h-8 ${service.active ? 'text-white' : 'text-[var(--primary)]'}`} />
                            </div>
                            <h3 className={`text-xl font-bold mb-4 ${service.active ? 'text-white' : 'text-[var(--primary)]'}`}>
                                {service.title}
                            </h3>
                            <p className={`line-height-relaxed ${service.active ? 'text-white/80' : 'text-[var(--text-muted)]'}`}>
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
