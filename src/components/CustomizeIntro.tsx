import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { invitations } from "@/lib/data";

const ITEMS_PER_PAGE = 3; // Number of invitations per page

const CustomizeIntro = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hoverCard, setHoverCard] = useState<string | null>(null);

  const totalPages = Math.ceil(invitations.length / ITEMS_PER_PAGE);

  // Get invitations for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const featuredInvitations = invitations.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-serif font-medium text-wedding-charcoal mb-4">
          Start Customizing Your Invitation
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Choose from our beautiful designs or start from scratch to create the perfect invitation for your special day.
        </p>
      </div>

      {/* Invitation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {featuredInvitations.map((invitation) => (
          <Link
            key={invitation.id}
            to={`/customize/${invitation.id}`}
            className="group block"
            onMouseEnter={() => setHoverCard(invitation.id)}
            onMouseLeave={() => setHoverCard(null)}
          >
            <div
              className={`h-full invite-card transition-all duration-300 ${
                hoverCard === invitation.id ? "ring-2 ring-wedding-gold shadow-lg -translate-y-2" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={`${invitation.image}?auto=format&fit=crop&w=600&h=400&q=80`}
                  alt={invitation.title}
                  className={`w-full aspect-[3/2] object-cover transition-transform duration-700 ${
                    hoverCard === invitation.id ? "scale-105" : "scale-100"
                  }`}
                />
              </div>

              <div className="p-4">
                <h3 className="font-serif text-lg font-medium text-wedding-charcoal mb-1">
                  {invitation.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {invitation.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-wedding-gold font-medium">${invitation.price}</span>
                  <span className="text-sm text-wedding-charcoal inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Select <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-md bg-wedding-gold text-white transition-all ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-opacity-90"
          }`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ArrowLeft size={18} /> Prev
        </button>

        <span className="text-wedding-charcoal font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className={`px-4 py-2 rounded-md bg-wedding-gold text-white transition-all ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-opacity-90"
          }`}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next <ArrowRight size={18} />
        </button>
      </div>

      {/* Browse All Designs */}
      <div className="text-center">
        <div className="py-4 px-6 bg-wedding-cream rounded-lg mb-6 inline-block">
          <p className="text-wedding-charcoal">Want to see more options?</p>
        </div>
        <Link
          to="/browse"
          className="inline-flex items-center gap-2 px-6 py-3 bg-wedding-gold text-white rounded-md font-medium transition-all hover:bg-opacity-90"
        >
          Browse All Designs <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default CustomizeIntro;
