import React, { useState } from "react";

// All images are stable Unsplash URLs (professional gym photos).
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});

  const trainers = [
    {
      id: 1,
      name: "Asha Rao",
      spec: "Strength Coach",
      img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=60",
      bio: "10+ yrs experience in strength & conditioning."
    },
    {
      id: 2,
      name: "Vikram Patel",
      spec: "Yoga Instructor",
      img: "https://cbx-prod.b-cdn.net/COLOURBOX61485964.jpg?width=1600&height=1600&quality=70",
      bio: "Specializes in mobility, breathwork and flexibility."
    },
    {
      id: 3,
      name: "Riya Sen",
      spec: "Cardio & HIIT",
      img: "https://i.pinimg.com/originals/7f/83/0e/7f830eaf744351c16f22bbaba199256c.jpg",
      bio: "Group classes, endurance training and HIIT."
    },
  ];

  const plans = [
    { id: 1, name: "Basic", price: "₹999", dur: "1 month", features: ["Access to gym floor", "1 group class / week"] },
    { id: 2, name: "Pro", price: "₹2499", dur: "3 months", features: ["All Basic features", "4 personal sessions", "Nutrition guide"], recommended: true },
    { id: 3, name: "Premium", price: "₹4999", dur: "12 months", features: ["Unlimited classes", "Weekly PT check-in", "Sauna access"] },
  ];

  const testimonials = [
    { id: 1, name: "Suresh", quote: "Lost 8kg in 3 months — trainers pushed me the right way.", stars: 5 },
    { id: 2, name: "Anita", quote: "Supportive community and great classes.", stars: 5 },
    { id: 3, name: "Ravi", quote: "Best gym equipment & clean spaces.", stars: 4 },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=60",
    "https://cbx-prod.b-cdn.net/COLOURBOX61645975.jpg?width=1600&height=1600&quality=70",
    "https://tse4.mm.bing.net/th/id/OIP.9ZeyTTmhh4fv0Q0hcvWJhQHaEK?pid=Api&P=0&h=180",
    "https://cdn.freepixel.com/preview/free-photos-a-large-man-in-a-gym-flexing-his-muscles-and-lifting-weights-he-is-wearing-a-black-tank-top-and-appe-preview-1004031861.jpg",
    "https://cdn.freepixel.com/preview/free-photos-a-young-man-standing-in-a-gym-with-his-arm-resting-on-a-muscle-building-machine-he-appears-to-be-a-f-preview-100399401.jpg",
  "https://cdn.freepixel.com/preview/free-photos-a-young-man-at-a-gym-focusing-on-his-strength-training-routine-he-is-standing-with-his-feet-shoulder-preview-1004048933.jpg",
    
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=800&q=60"
  ];

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) e.email = "Valid email required";
    if (!/^[0-9]{10}$/.test(form.phone)) e.phone = "Enter 10 digit phone";
    if (!form.message.trim()) e.message = "Please tell us how we can help";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;
    alert("Thanks! Your message has been recorded (demo).");
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* NAVBAR */}
        <header className="fixed w-full z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold">BeastGym</div>
              <nav className="hidden md:flex gap-6 ml-6">
                <a href="#home" className="hover:underline">Home</a>
                <a href="#about" className="hover:underline">About</a>
                <a href="#trainers" className="hover:underline">Trainers</a>
                <a href="#plans" className="hover:underline">Plans</a>
                <a href="#gallery" className="hover:underline">Gallery</a>
                <a href="#contact" className="hover:underline">Contact</a>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={() => setDark(!dark)} className="px-3 py-1 rounded-md border">
                {dark ? "Light" : "Dark"}
              </button>
              <a href="#contact" className="hidden md:inline-block bg-red-600 text-white px-4 py-2 rounded-lg">Join Now</a>

              <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden p-4 border-t">
              <nav className="flex flex-col gap-3">
                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#trainers" onClick={() => setMenuOpen(false)}>Trainers</a>
                <a href="#plans" onClick={() => setMenuOpen(false)}>Plans</a>
                <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
              </nav>
            </div>
          )}
        </header>

        {/* HERO with IMAGE (Option 1) */}
        <section id="home" className="pt-20 relative">
          <div
            className="h-[60vh] md:h-[80vh] w-full overflow-hidden relative rounded-b-3xl bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80')"
            }}
          >
            <div className="absolute inset-0 bg-black/45 flex items-center">
              <div className="max-w-6xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Train Hard. Get Strong. Live Better.</h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">Personalized plans, pro trainers, and a community that keeps you motivated — start your transformation today.</p>
                <div className="mt-6 flex justify-center gap-4">
                  <a href="#plans" className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg">Join Now</a>
                  <a href="#about" className="px-6 py-3 rounded-lg border">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">BeastGym started with a simple idea — help people discover strength through community, consistency and coaching. We offer a full range of classes and programs for every fitness level.</p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">Cardio Zone</li>
                <li className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">Yoga Studio</li>
                <li className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">Weightlifting Area</li>
                <li className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">CrossFit Box</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <img alt="gym" src="https://tse4.mm.bing.net/th/id/OIP.i6gizHS38SI3jbt7VAGB6AHaEK?pid=Api&P=0&h=180" className="w-full h-44 object-cover rounded-lg" />
              <img alt="gym" src="https://wallpaperaccess.com/full/6177852.jpg" className="w-full h-44 object-cover rounded-lg" />
              <img alt="gym" src="https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg" className="w-full h-44 object-cover rounded-lg" />
              <img alt="gym" src="https://images.pexels.com/photos/34791500/pexels-photo-34791500.jpeg?_gl=1*22s9c*_ga*MTY2MjE0MTQ1OS4xNzYzNTcwMDcy*_ga_8JE65Q40S6*czE3NjM1NzAwNzEkbzEkZzEkdDE3NjM1NzAxMDkkajIyJGwwJGgw" className="w-full h-44 object-cover rounded-lg" />
            </div>
          </div>
        </section>

        {/* TRAINERS */}
        <section id="trainers" className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center">Meet Our Trainers</h2>
          <p className="text-center mt-2 text-gray-600 dark:text-gray-300">Certified pros who will guide and push you.</p>

          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {trainers.map(t => (
              <div key={t.id} className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow">
                <img alt={t.name} src={t.img} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">{t.spec}</p>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <div className="text-center text-white">
                    <p className="mb-2">{t.bio}</p>
                    <div className="flex gap-3 justify-center">
                      <a className="underline" href="#">Instagram</a>
                      <a className="underline" href="#">LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PLANS */}
        <section id="plans" className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center">Membership Plans</h2>
          <p className="text-center mt-2 text-gray-600 dark:text-gray-300">Choose a plan that fits your goals.</p>

          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {plans.map(p => (
              <div key={p.id} className={`p-6 rounded-xl shadow ${p.recommended ? "border-2 border-red-500 scale-105 transform" : "bg-white dark:bg-gray-800"}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{p.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{p.dur}</p>
                  </div>
                  <div className="text-2xl font-extrabold">{p.price}</div>
                </div>
                <ul className="mt-4 space-y-2">
                  {p.features.map((f, i) => <li key={i} className="text-sm">• {f}</li>)}
                </ul>
                <div className="mt-6">
                  <a href="#contact" className={`block text-center py-2 rounded-md ${p.recommended ? "bg-red-600 text-white" : "border"}`}>Choose</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center">Gallery</h2>
          <p className="text-center mt-2 text-gray-600 dark:text-gray-300">Equipment, classes and transformations.</p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <img key={i} alt={`gallery-${i}`} src={img} className="w-full h-36 object-cover rounded-lg" />
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="bg-gray-50 dark:bg-gray-800 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center">What Members Say</h2>
            <div className="mt-8 space-y-4">
              {testimonials.map(t => (
                <div key={t.id} className="p-4 rounded-lg bg-white dark:bg-gray-700 shadow">
                  <div className="flex items-center justify-between">
                    <strong>{t.name}</strong>
                    <div>{'★'.repeat(t.stars)}</div>
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">"{t.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center">Get in touch / Join</h2>
          <p className="text-center mt-2 text-gray-600 dark:text-gray-300">We’ll contact you to finalize the plan and schedule.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm">Name</label>
                <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full p-3 rounded border" />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm">Email</label>
                <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full p-3 rounded border" />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm">Phone</label>
                <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="w-full p-3 rounded border" />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm">Message</label>
                <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="w-full p-3 rounded border" rows={4} />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <div>
                <button type="submit" className="bg-red-600 text-white px-6 py-3 rounded">Send Message</button>
              </div>
            </form>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
                <h4 className="font-semibold">Contact Info</h4>
                <p className="text-sm mt-2">Phone: +91 98765 43210</p>
                <p className="text-sm">Email: hello@beastgym.example</p>
                <p className="text-sm">Address: 123 Fitness St, Your City</p>
              </div>

              <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
                <h4 className="font-semibold">Opening Hours</h4>
                <p className="text-sm mt-2">Mon - Fri: 5:30AM - 10:00PM</p>
                <p className="text-sm">Sat - Sun: 7:00AM - 8:00PM</p>
              </div>

              <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
                <h4 className="font-semibold">Follow Us</h4>
                <div className="flex gap-3 mt-2">
                  <a href="#">Instagram</a>
                  <a href="#">Facebook</a>
                  <a href="#">Youtube</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-200 py-8">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>© {new Date().getFullYear()} BeastGym. All rights reserved.</div>
              <div className="flex gap-4">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
              </div>
            </div>
          </div>
        </footer>

        {/* FLOATING CTA */}
        <a href="#contact" className="fixed right-4 bottom-6 bg-red-600 text-white px-4 py-3 rounded-full shadow-lg hidden md:inline-block">Join</a>

      </div>
    </div>
  );
}
