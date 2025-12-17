export const mockCourses = [
    {
        id: 'c1',
        title: 'Java Masterclass: Zero to Hero',
        instructor: 'Asha Patel',
        category: 'Backend',
        enrolled: 2450,
        thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
        description: 'Master Java basics, OOPs, collections, and multi-threading.',
        lessons: [
            { id: 'l1', title: 'Java Setup & Hello World', duration: '10:20', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
            { id: 'l2', title: 'Variables & Data Types', duration: '15:45', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
            { id: 'l3', title: 'OOP Concept: Classes', duration: '20:10', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
            { id: 'l4', title: 'Exception Handling', duration: '12:30', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' },
            { id: 'l5', title: 'Final Project: Calculator', duration: '25:00', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' }
        ]
    },
    {
        id: 'c2',
        title: 'Advanced Java Programming',
        instructor: 'Ravi Kumar',
        category: 'Backend',
        enrolled: 1800,
        thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
        description: 'Deep dive into Streams API, Lambdas, and Concurrency.',
        lessons: [
            { id: 'l1', title: 'Lambda Expressions', duration: '14:20', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4' },
            { id: 'l2', title: 'Stream API In-Depth', duration: '18:50', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4' },
            { id: 'l3', title: 'Multithreading Patterns', duration: '22:15', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4' }
        ]
    },
    {
        id: 'c3',
        title: 'Spring Boot Microservices',
        instructor: 'Sarah Lee',
        category: 'Frameworks',
        enrolled: 3200,
        thumbnail: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop',
        description: 'Build scalable microservices using Spring Boot and Cloud.',
        lessons: [
            { id: 'l1', title: 'Spring Boot Start', duration: '12:00', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4' },
            { id: 'l2', title: 'REST API Design', duration: '20:40', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4' },
            { id: 'l3', title: 'Database & JPA', duration: '25:10', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4' }
        ]
    }
];
