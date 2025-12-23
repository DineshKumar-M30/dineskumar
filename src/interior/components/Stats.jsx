const stats = [
    { number: '980', label: 'Project' },
    { number: '520', label: 'Happy Client' },
    { number: '330', label: 'Winners' },
    { number: '120', label: 'Recoment' }
];

const Stats = () => {
    return (
        <section className="stats section bg-white">
            <div className="interior-container text-center">
                <div className="mb-20 max-w-2xl mx-auto">
                    <h2 style={{ fontSize: '2.8rem', fontWeight: '800', lineHeight: '1.2' }}>
                        3000+ Completed Work <br /> Which WE have Successfully Done
                    </h2>
                </div>

                <div className="relative flex justify-between items-center px-10">
                    {/* Background connecting line */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '10%',
                        right: '10%',
                        height: '1px',
                        backgroundColor: '#eee',
                        zIndex: 0
                    }}></div>

                    {stats.map((stat, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center">
                            <div
                                className="bg-white p-8 rounded-3xl shadow-2xl shadow-gray-100 flex flex-col items-center justify-center"
                                style={{
                                    width: '180px',
                                    height: '180px',
                                    marginTop: index % 2 === 0 ? '0' : '40px',
                                    marginBottom: index % 2 === 0 ? '40px' : '0'
                                }}
                            >
                                <span style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)' }}>
                                    {stat.number}
                                </span>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500', marginTop: '5px' }}>
                                    {stat.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
