import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        name: 'Louis Saville',
        role: 'CEO at Google inc',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Rekha Varadwaz',
        role: 'Manager at Nike inc',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials section bg-offwhite" id="testimonials">
            <div className="interior-container">
                <div className="flex flex-col items-center mb-16 px-4">
                    <h4 style={{ color: 'var(--accent-tan)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', fontSize: '0.8rem', marginBottom: '1rem' }}>
                        TESTIMONIALS
                    </h4>
                    <div className="flex justify-between items-center w-full max-w-4xl">
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Client says about us</h2>
                        <div className="flex gap-4">
                            <button className="p-2 rounded-full border border-gray-200 hover:border-var(--accent-green) transition-colors">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button className="p-2 rounded-full bg-[var(--accent-green)] text-white shadow-lg  hover:bg-[#3d7262] transition-colors">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-white p-10 rounded-[40px] shadow-2xl shadow-gray-100 flex gap-8 items-start hover:-translate-y-2 transition-transform duration-300">
                            <div className="relative flex-shrink-0">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{ width: '100px', height: '100px', borderRadius: '25px', objectFit: 'cover' }}
                                />
                                <div className="absolute -bottom-2 -right-2 bg-[var(--accent-tan)] p-2 rounded-lg text-white">
                                    <Quote className="w-4 h-4 fill-white" />
                                </div>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '2px' }}>{item.name}</h3>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '500' }}>/{item.role}</span>
                                </div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                    "{item.quote}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
