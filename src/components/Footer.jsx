import React from 'react'
import FooterSocials from './FooterSocials'
import FooterQuickLinks from './FooterQuickLinks'
import FooterKeywords from './FooterKeywords'
import FooterEmergency from './FooterEmergency'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-8">
            <FooterSocials />
            <FooterQuickLinks />
            <FooterKeywords />
            <FooterEmergency />
            
        </div>
        
        <div className="border-t border-steel-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Antony Kiplimo. All rights reserved. | Quality Iron Sheets Manufacturing</p>
        </div>
    </div>
    </footer>
  )
}

export default Footer