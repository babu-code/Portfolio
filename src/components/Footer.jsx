import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer class="bg-black text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-8">
            <div class="col-span-1 md:col-span-1">
                <h3 class="text-2xl font-bold mb-4">Social Platforms</h3>
                {/* <p class="text-gray-300 mb-4 leading-relaxed">
                    
                </p> */}
                <div class="flex space-x-4">
                    <div class="bg-earth-600 rounded-full p-2">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <div class="bg-earth-600 rounded-full p-2">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                        </svg>
                    </div>
                    <div class="bg-earth-600 rounded-full p-2">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                </div>
            </div>
            
            <div>
                <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                <ul class="space-y-2 text-gray-300">
                    <li><Link href="/" class="hover:text-earth-300 transition-colors">Home</Link></li>
                    <li><Link href="/About" class="hover:text-earth-300 transition-colors">About Me</Link></li>
                    <li><Link href="/skills" class="hover:text-earth-300 transition-colors">Skills</Link></li>
                    <li><a href="/portfolio" class="hover:text-earth-300 transition-colors">Portfolio</a></li>
                    <li><a href="/contact" class="hover:text-earth-300 transition-colors">Contact</a></li>
                </ul>
            </div>
            
            <div>
                <h4 class="text-lg font-semibold mb-4">Business Hours</h4>
                <ul class="space-y-2 text-gray-300">
                    <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                    <li>Saturday: 8:00 AM - 4:00 PM</li>
                    <li>Sunday: Closed</li>
                    <li class="pt-2">
                        <span class="text-earth-300 font-semibold">Emergency Orders:</span><br/>
                        +254 716 241 697
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="border-t border-steel-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Antony Kiplimo. All rights reserved. | Quality Iron Sheets Manufacturing</p>
        </div>
    </div>
    </footer>
  )
}

export default Footer