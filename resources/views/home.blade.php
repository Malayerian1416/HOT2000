@extends('layouts.app')
@section('styles')
    <style>
        .dark body { background-color: #1a202c; color: #f7fafc; }
        .fadeIn { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to   { opacity: 1; transform: scale(1); }
        }
    </style>
@endsection
@section('content')
<body class="dark">

<!-- 🌗 Theme Toggle -->
<div class="flex justify-end p-4">
    <button onclick="toggleTheme()" class="bg-gray-200 dark:bg-gray-800 text-sm px-3 py-2 rounded hover:ring">
        Toggle Theme
    </button>
</div>

<!-- 🧭 Navbar -->
<nav class="bg-white dark:bg-gray-900 shadow text-gray-800 dark:text-white">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-green-600 dark:text-green-400">EnerFast</h1>
        <ul class="flex space-x-6">
            <li><a href="{{route("dashboard")}}" class="hover:text-green-600">Dashboard</a></li>
            <li><a href="#features" class="hover:text-green-600">Features</a></li>
            <li><a href="#contact" class="hover:text-green-600">Contact</a></li>
        </ul>
    </div>
</nav>

<!-- 📣 Promotion Section -->
<section id="promo" class="py-20 bg-green-500 text-white text-center dark:bg-green-700">
    <h2 class="text-4xl font-bold mb-4">Smarter Energy Decisions</h2>
    <p class="text-lg mb-6">Reduce costs. Shrink carbon footprints. Expert guidance at your fingertips.</p>
    <button onclick="toggleModal()" class="bg-white text-green-700 px-6 py-2 rounded hover:bg-gray-100 transition">Sign In / Sign Up</button>
</section>

<!-- ⚙️ Features -->
<section id="features" class="py-16 bg-gray-100 dark:bg-gray-900 text-center text-gray-800 dark:text-white">
    <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div><h3 class="text-xl font-bold mb-2">Real-Time Insights</h3><p>Track energy usage and uncover trends.</p></div>
        <div><h3 class="text-xl font-bold mb-2">Sustainability Goals</h3><p>Meet targets with professional strategies.</p></div>
        <div><h3 class="text-xl font-bold mb-2">Expert Advice</h3><p>Consult certified energy specialists anytime.</p></div>
    </div>
</section>

<!-- 🔐 Auth Modal -->
<div id="authModal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex justify-center items-center">
    <div class="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg shadow-xl w-full max-w-md fadeIn">
        <h2 class="text-2xl font-bold text-center mb-4">Welcome to EnergyWise</h2>
        <form class="space-y-4">
            <input type="email" placeholder="Email" class="w-full px-4 py-2 border rounded dark:bg-gray-700" />
            <input type="password" placeholder="Password" class="w-full px-4 py-2 border rounded dark:bg-gray-700" />
            <button type="submit" class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Submit</button>
        </form>
        <div class="mt-4 space-y-2">
            <button class="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">Sign in with Google</button>
            <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Sign in with Facebook</button>
        </div>
        <button onclick="toggleModal()" class="mt-4 text-sm underline text-green-700 dark:text-green-400">Close</button>
    </div>
</div>

<!-- 📬 Contact -->
<section id="contact" class="py-16 bg-white dark:bg-gray-900 text-center text-gray-700 dark:text-gray-300">
    <h3 class="text-2xl font-bold mb-2">Ready to power up your energy?</h3>
    <p>Start with a free consultation and personalized energy roadmap.</p>
</section>

<!-- 🧱 Footer -->
<footer class="bg-gray-200 dark:bg-gray-800 text-center py-6 text-gray-600 dark:text-gray-300">
    &copy; 2025 EnergyWise – Your energy, your future.
</footer>
@endsection
@section("scripts")
<script>
    function toggleModal() {
        document.getElementById("authModal").classList.toggle("hidden");
    }
    function toggleTheme() {
        const html = document.documentElement;
        html.classList.toggle("dark");
        html.classList.toggle("light");
    }
</script>
@endsection
