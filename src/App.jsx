import { useState, useMemo } from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

import {
  LayoutDashboard,
  Users,
  Stethoscope,
  CalendarCheck,
  FileText,
  Bed,
  Pill,
  Bell,
  Settings,
} from "lucide-react";

const sampleWeekly = [
  { day: "Mon", visits: 120 },
  { day: "Tue", visits: 140 },
  { day: "Wed", visits: 200 },
  { day: "Thu", visits: 160 },
  { day: "Fri", visits: 210 },
  { day: "Sat", visits: 170 },
  { day: "Sun", visits: 110 },
];

const sampleMonthly = [
  { month: "Jan", revenue: 20 },
  { month: "Feb", revenue: 30 },
  { month: "Mar", revenue: 25 },
  { month: "Apr", revenue: 55 },
  { month: "May", revenue: 40 },
  { month: "Jun", revenue: 70 },
  { month: "Jul", revenue: 60 },
  { month: "Aug", revenue: 50 },
];

const mockPatients = Array.from({ length: 57 }).map((_, i) => ({
  id: i + 1,
  name: ["Anita Patel", "John Doe", "Sarah Lee", "Michael Chen"][
    i % 4
  ],
  age: 20 + (i % 60),
  gender: i % 2 === 0 ? "F" : "M",
  phone: `555-010${(i % 10)}${Math.floor(i / 10)}`,
  status: i % 3 === 0 ? "Active" : "Inactive",
}));

const mockDoctors = [
  { id: 1, name: "Dr. Smith", specialization: "Cardiology", avail: true },
  { id: 2, name: "Dr. Brown", specialization: "Dermatology", avail: false },
  { id: 3, name: "Dr. Johnson", specialization: "Orthopedics", avail: true },
  { id: 4, name: "Dr. Williams", specialization: "Pediatrics", avail: true },
];

const mockAppointments = [
  { id: 1, patient: "Anita Patel", doctor: "Dr. Smith", date: "Jun 14", status: "Pending" },
  { id: 2, patient: "John Doe", doctor: "Dr. Brown", date: "Jun 15", status: "Confirmed" },
  { id: 3, patient: "Sarah Lee", doctor: "Dr. Johnson", date: "Jun 16", status: "Cancelled" },
  { id: 4, patient: "Michael Chen", doctor: "Dr. Williams", date: "Jun 17", status: "Confirmed" },
];

const mockMedicines = [
  { id: 1, name: "Paracetamol", stock: 120, expiry: "2026-02-01" },
  { id: 2, name: "Amoxicillin", stock: 8, expiry: "2024-12-01" },
  { id: 3, name: "Ibuprofen", stock: 45, expiry: "2025-05-12" },
];

// Simple role-based visibility helper
const useRole = (initial = "admin") => {
  const [role, setRole] = useState(initial);
  const can = useMemo(() => ({
    isAdmin: role === "admin",
    isDoctor: role === "doctor",
    isReception: role === "reception",
  }), [role]);
  return { role, setRole, can };
};

function IconNotification({ count }) {
  return (
    <div className="relative inline-block">
      <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">🔔</button>
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">{count}</span>
      )}
    </div>
  );
}

function SummaryCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between h-full">
      <div>
        <h3 className="text-sm font-semibold text-gray-600">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>

      <div className="p-3 bg-blue-100 rounded-full">
        {Icon && <Icon size={28} className="text-blue-600" />}
      </div>
    </div>
  );
}

function PatientsTable({ patients, onAdd }) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 10;

  const filtered = patients.filter((p) =>
    `${p.name} ${p.phone}`.toLowerCase().includes(query.toLowerCase())
  );

  const pageCount = Math.ceil(filtered.length / perPage);
  const pageData = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Patients</h3>
        <div className="flex items-center gap-2">
          <input
            className="border rounded px-2 py-1"
            placeholder="Search patients..."
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(1); }}
          />
          <button onClick={onAdd} className="bg-blue-600 text-white px-3 py-1 rounded">Add New</button>
        </div>
      </div>
      <table className="w-full text-sm table-auto">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="p-2">#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-2">{p.id}</td>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.phone}</td>
              <td>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-3">
        <div className="text-sm text-gray-500">{filtered.length} results</div>
        <div className="flex gap-2">
          <button onClick={() => setPage((s) => Math.max(1, s - 1))} className="px-2 py-1 border rounded">Prev</button>
          <div className="px-3 py-1 border rounded">{page} / {pageCount || 1}</div>
          <button onClick={() => setPage((s) => Math.min(pageCount, s + 1))} className="px-2 py-1 border rounded">Next</button>
        </div>
      </div>
    </div>
  );
}

function DoctorsGrid({ doctors, onToggle }) {
  const [special, setSpecial] = useState("all");
  const specialList = ["all", ...new Set(doctors.map((d) => d.specialization))];

  const filtered = doctors.filter((d) => special === "all" || d.specialization === special);

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Doctors</h3>
        <select className="border px-2 py-1 rounded" value={special} onChange={(e) => setSpecial(e.target.value)}>
          {specialList.map((s) => (<option key={s} value={s}>{s}</option>))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map((d) => (
          <div className="p-3 border rounded flex items-center justify-between" key={d.id}>
            <div>
              <div className="font-semibold">{d.name}</div>
              <div className="text-xs text-gray-500">{d.specialization}</div>
            </div>
            <div>
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" checked={d.avail} onChange={() => onToggle(d.id)} />
                <span className="text-xs">Available</span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AppointmentsTable({ appointments }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-3">Upcoming Appointments</h3>
      <table className="w-full text-sm table-auto">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="p-2">Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a.id} className="border-t">
              <td className="p-2">{a.patient}</td>
              <td>{a.doctor}</td>
              <td>{a.date}</td>
              <td>
                <span className={`px-2 py-1 rounded text-xs ${a.status === "Confirmed" ? "bg-green-100 text-green-700" : a.status === "Pending" ? "bg-orange-100 text-orange-700" : "bg-red-100 text-red-700"
                  }`}>{a.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BillingForm() {
  const [items, setItems] = useState([
    { id: 1, desc: "Consultation", qty: 1, price: 50 },
  ]);

  function updateItem(i, key, val) {
    setItems((cur) => cur.map((it) => (it.id === i ? { ...it, [key]: val } : it)));
  }

  const total = items.reduce((s, it) => s + it.qty * it.price, 0);

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-lg font-semibold">Billing</h3>
      <table className="w-full text-sm mt-3">
        <thead>
          <tr className="text-left text-gray-500"><th>Description</th><th>Qty</th><th>Price</th><th></th></tr>
        </thead>
        <tbody>
          {items.map((it) => (
            <tr key={it.id} className="border-t">
              <td className="p-2"><input className="w-full border rounded px-2 py-1" value={it.desc} onChange={(e) => updateItem(it.id, 'desc', e.target.value)} /></td>
              <td><input type="number" min={0} className="w-20 border rounded px-1 py-1" value={it.qty} onChange={(e) => updateItem(it.id, 'qty', Number(e.target.value) || 0)} /></td>
              <td><input type="number" min={0} className="w-28 border rounded px-1 py-1" value={it.price} onChange={(e) => updateItem(it.id, 'price', Number(e.target.value) || 0)} /></td>
              <td><button className="text-red-500" onClick={() => setItems((cur) => cur.filter(x => x.id !== it.id))}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-3">
        <button onClick={() => setItems((cur) => [...cur, { id: Date.now(), desc: '', qty: 1, price: 0 }])} className="px-3 py-1 border rounded">Add Item</button>
        <div className="text-lg font-semibold">Total: ${total.toFixed(2)}</div>
      </div>
    </div>
  );
}

function BedsGrid() {
  const beds = [
    { id: 1, ward: 'ICU', status: 'occupied' },
    { id: 2, ward: 'General', status: 'available' },
    { id: 3, ward: 'Emergency', status: 'cleaning' },
    { id: 4, ward: 'General', status: 'available' },
  ];

  const color = (s) => s === 'available' ? 'bg-green-100 text-green-700' : s === 'occupied' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700';

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-3">Beds</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {beds.map(b => (
          <div key={b.id} className="p-3 border rounded">
            <div className="font-medium">Bed {b.id}</div>
            <div className="text-xs text-gray-500">{b.ward}</div>
            <div className={`mt-2 inline-block px-2 py-1 rounded text-xs ${color(b.status)}`}>{b.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PharmacyTable({ medicines }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-3">Pharmacy Inventory</h3>
      <table className="w-full text-sm">
        <thead className="text-left text-gray-500"><tr><th>Name</th><th>Stock</th><th>Expiry</th></tr></thead>
        <tbody>
          {medicines.map(m => (
            <tr key={m.id} className={`border-t ${m.stock < 10 ? 'bg-red-50' : ''}`}>
              <td className="p-2">{m.name}</td>
              <td>{m.stock}</td>
              <td>{m.expiry}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Added basic routing and navigation between pages
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function HospitalManagementDashboard() {
  const { role, setRole, can } = useRole('admin');
  const [patients] = useState(mockPatients);
  const [doctors, setDoctors] = useState(mockDoctors);
  const [appointments] = useState(mockAppointments);
  const [medicines] = useState(mockMedicines);
  const [notifCount] = useState(3);
  const [tab, setTab] = useState("dashboard");

  function toggleDoctor(id) {
    setDoctors((cur) => cur.map(d => d.id === id ? { ...d, avail: !d.avail } : d));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-[1300px] mx-auto grid grid-cols-12 gap-6">
        <aside className="col-span-12 md:col-span-3 lg:col-span-2">
          <div className="bg-white p-4 rounded-lg shadow">
            {/* <img src="/mnt/data/HMD.png" alt="preview" className="w-full rounded mb-4" /> */}
            <nav className="flex flex-col gap-2 text-sm mt-12">
              <button
                onClick={() => setTab("dashboard")}
                className={`flex items-center gap-2 px-3 py-2 rounded w-full
    ${tab === "dashboard" ? "bg-blue-600 text-white" : "text-black"}
  `}
              >
                <LayoutDashboard size={18} />
                Dashboard
              </button>

              <button
                onClick={() => setTab("patients")}
                className={`flex items-center gap-2 px-3 py-2 rounded w-full
    ${tab === "patients" ? "bg-blue-600 text-white" : "text-black"}
  `}
              >
                <Users size={18} />
                Patients
              </button>

              <button
                onClick={() => setTab("doctors")}
                className={`flex items-center gap-2 px-3 py-2 rounded w-full
    ${tab === "doctors" ? "bg-blue-600 text-white" : "text-black"}
  `}
              >
                <Stethoscope size={18} />
                Doctors
              </button>

              <button
                onClick={() => setTab("appointments")}
                className={`flex items-center gap-2 px-3 py-2 rounded w-full
    ${tab === "appointments" ? "bg-blue-600 text-white" : "text-black"}
  `}
              >
                <CalendarCheck size={18} />
                Appointments
              </button>

              <button
                onClick={() => setTab("billing")}
                className={`flex items-center gap-2 px-3 py-2 rounded w-full
    ${tab === "billing" ? "bg-blue-600 text-white" : "text-black"}
  `}
              >
                <FileText size={18} />
                Billing
              </button>

              <button
                onClick={() => setTab("beds")}
                className={`flex items-center gap-2 px-3 py-2 rounded w-full
    ${tab === "beds" ? "bg-blue-600 text-white" : "text-black"}
  `}
              >
                <Bed size={18} />
                Beds
              </button>

              <button
                onClick={() => setTab("pharmacy")}
                className={`flex items-center gap-2 px-3 py-2 rounded w-full
    ${tab === "pharmacy" ? "bg-blue-600 text-white" : "text-black"}
  `}
              >
                <Pill size={18} />
                Pharmacy
              </button>

              <button
                onClick={() => setTab("Setting")}
                className={`flex items-center gap-2 px-3 py-2 rounded w-full
    ${tab === "Setting" ? "bg-blue-600 text-white" : "text-black"}
  `}
              >
                <Settings size={18} />
                Setting
              </button>

              <button
                onClick={() => setTab("Notification")}
                className={`flex items-center gap-2 px-3 py-2 rounded w-full
    ${tab === "Notification" ? "bg-blue-600 text-white" : "text-black"}
  `}
              >
                <Bell size={18} />
                Notification
              </button>
            </nav>
            <div className="mt-4">
              <label className="text-xs">Role</label>
              <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full mt-1 border rounded px-2 py-1 text-sm">
                <option value="admin">Admin</option>
                <option value="doctor">Doctor</option>
                <option value="reception">Receptionist</option>
              </select>
            </div>
          </div>
        </aside>

        <main className="col-span-12 md:col-span-9 lg:col-span-10">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Hospital Management Dashboard</h1>
            <div className="flex items-center gap-4">
              <IconNotification count={notifCount} />
              <div className="text-sm">Signed in as <strong>{role}</strong></div>
            </div>
          </div>
          {tab === "dashboard" && (
            <>

              {/* Summary cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6 h-18">
                <SummaryCard title="Patients" value={1200} icon={Users} />
                <SummaryCard title="Doctors" value={150} icon={Stethoscope} />
                <SummaryCard title="Appointments" value={300} icon={CalendarCheck} />
                <SummaryCard title="Beds" value={80} icon={Bed} />
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="font-semibold mb-3">Weekly Visits</h3>
                  <div style={{ height: 400 }}>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart data={sampleWeekly}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="visits" fill="#2563eb"/>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="font-semibold mb-3">Monthly Revenue</h3>
                  <div style={{ height: 400 }}>
                    <ResponsiveContainer width="100%" height={400}>
                      <LineChart data={sampleMonthly}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="revenue" stroke="#3182ce" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </>
          )}

          {tab === "patients" && (
            <PatientsTable patients={patients} onAdd={() => alert('Open Add Patient modal (to implement)')} />
          )}
          {tab === "appointments" && (
            <AppointmentsTable appointments={appointments} />
          )}
          {tab === "doctors" && (
            <DoctorsGrid doctors={doctors} onToggle={toggleDoctor} />
          )}
          {tab === "billing" && (
            <BillingForm />
          )}

          {tab === "beds" && (
            <BedsGrid />
          )}

          {tab === "pharmacy" && (
            <PharmacyTable medicines={medicines} />
          )}

        </main>
      </div >
    </div >
  );
}