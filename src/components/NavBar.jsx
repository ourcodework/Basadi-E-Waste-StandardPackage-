import React from 'react'

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F6FBF6]/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-bold text-[#16A249]">Basadi E-WASTE</h2>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-[#16A249] transition-smooth">About</a>
            <a href="#services" className="text-foreground hover:text-[#16A249] transition-smooth">Services</a>
            <a href="#impact" className="text-foreground hover:text-[#16A249] transition-smooth">Impact</a>
            <a href="#contact" className="text-foreground hover:text-[#16A249] transition-smooth">Contact</a>
          </div>
          
          {/* <Button variant="default" className="bg-primary hover:bg-primary/90">
            Get Started
          </Button> */}
        </div>
      </div>
    </nav>
  )
}

export default NavBar