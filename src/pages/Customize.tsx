import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomizationForm from "@/components/CustomizationForm";
import CustomizeIntro from "@/components/CustomizeIntro";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const Customize = () => {
  const { id } = useParams<{ id: string }>();
  
  // Array of button options
  const buttonOptions = [
    { id: 1, name: "Rustic Elegance" },
    { id: 2, name: "Modern Minimalist" },
    { id: 3, name: "Floral Romance" },
    { id: 4, name: "Vintage Charm" },
    { id: 5, name: "Classic Formal" },
    { id: 6, name: "Garden Party" },
    { id: 7, name: "Beach Destination" }
  ];

  const handleButtonClick = (buttonId) => {
    console.log(`Button ${buttonId} clicked`);
    // Handle navigation or selection logic here
  };

  const ITEMS_PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const invitations = []; // Add your invitations data here
  const totalPages = Math.ceil(invitations.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const displayedInvitations = invitations.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Page Header */}
        <div className="bg-wedding-cream py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-wedding-charcoal mb-4">
              <div className="hidden md:block absolute h-0.5 bg-gray-500 dark:bg-gray-700" 
              style={{ 
                top: '9rem',
                left: '20%',
                right: '21%',
                zIndex: 0
              }}></div>
              <div className="flex flex-wrap justify-center gap-9 mb-4">
                  {buttonOptions.map((button) => (
                    <button
                      key={button.id}
                      onClick={() => handleButtonClick(button.id)}
                      className="bg-wedding-cream hover:bg-wedding-gold text-wedding-charcoal border border-wedding-gold rounded-md py-2 px-3 text-[19px] whitespace-nowrap transition-colors duration-200 hover:shadow-sm"
                    >
                      {button.name}
                    </button>
                  ))}
                </div>
            </h1>
          </div>
        </div>
        
        {/* Customization Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {id ? (
              <CustomizationForm />
            ) : (
              <div>
                <CustomizeIntro />
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Customize;