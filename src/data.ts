import { Service, Project, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'kitchens',
    title: 'Architectural Kitchen Remodels',
    category: 'Kitchen Renovation',
    description: 'Bespoke culinary spaces custom-designed to bring families together. From premium marble countertops to handcrafted wood cabinetry.',
    fullDetails: 'We handle the complete lifecycle of your high-end kitchen transformation, from spatial architecture and plumbing relocation to exquisite cabinet crafting and built-in lighting choreography.',
    features: [
      'Custom solid hardwood cabinetry & millwork',
      'Integrated spatial lighting design & automation',
      'Premium countertop installations (Quartzite, Marble, Granite)',
      'High-performance professional appliance integration',
      'Custom luxury pantry systems and hidden storage solutions'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=82&w=1200',
    size: 'wide'
  },
  {
    id: 'bathrooms',
    title: 'Sanctuary Master Bathrooms',
    category: 'Bathroom Remodeling',
    description: 'Transform mundane bath spaces into premium residential spas. Featuring floating stone vanities, curb-less rainfall showers, and heated natural stone flooring.',
    fullDetails: 'Our bathroom designs focus on visual serenity and flawless mechanical installation. We perform comprehensive wet-room waterproofing using elite Schluter systems and clean minimalist drainage.',
    features: [
      'Custom curb-less walk-in tile showers with linear drains',
      'Freestanding designer soaking tub integrations',
      'In-floor radiant heating systems',
      'Bespoke marble double-vanities with floating mirrors',
      'Tadelakt lime plaster or boutique porcelain tiling'
    ],
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=82&w=1200',
    size: 'tall'
  },
  {
    id: 'carpentry',
    title: 'Exquisite Accent Carpentry',
    category: 'Custom Millwork',
    description: 'Fine custom woodcraft, built-ins, and bespoke architectural details that give your home its distinctive character.',
    fullDetails: 'True luxury lies in the details. Our master carpenters design and build custom library bookshelves, architectural fireplace mantels, handcrafted ceiling beams, and bespoke storage solutions.',
    features: [
      'Custom library shelving & floor-to-ceiling built-ins',
      'Architectural shiplap, wainscoting & coffered ceilings',
      'Handcrafted solid wood fireplace mantels',
      'Premium floating hardwood staircases',
      'Hidden compartment integrations and bespoke doors'
    ],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=82&w=1200',
    size: 'normal'
  },
  {
    id: 'decks',
    title: 'Premium Structural Decks',
    category: 'Outdoor Living',
    description: 'Sophisticated multi-tier outdoor spaces designed for entertaining, featuring premium cedarwood and architectural composite materials.',
    fullDetails: 'We extend your luxury living experience outdoors. Our premium deck builds are engineered for the robust New Brunswick winters, using concrete piers and heavy-gauge rust-resistant framing.',
    features: [
      'Bespoke cedarwood & premium grade composite decking',
      'Invisible fastening systems for smooth bareground walking',
      'Integrated under-rail LED mood illumination',
      'Architectural glass or horizontal steel cable railing',
      'Custom outdoor kitchens and gas fireplace surrounds'
    ],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=82&w=1200',
    size: 'normal'
  },
  {
    id: 'additions',
    title: 'Luxury Home Extensions & Transformations',
    category: 'Whole House Remodeling',
    description: 'Grand expansions and full-house architectural transformations that preserve the historic character of Saint John homes while introducing state-of-the-art living.',
    fullDetails: 'From structural expansion blueprints to final paint finishes, we provide a unified approach to extensive home additions, maximizing square footage and light infiltration.',
    features: [
      'Architectural design & zoning compliance consultation',
      'Complete structural structural renovations & beams',
      'High-performance energy efficient envelope upgrades',
      'Premium broad-plank hardwood flooring installations',
      'Seamless exterior integration matching local building heritage'
    ],
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=82&w=1200',
    size: 'wide'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'rothesay-kitchen',
    title: 'The Mid-Century Culinary Oasis',
    type: 'Architectural Kitchen',
    location: 'Rothesay, NB',
    timeline: '8 Weeks',
    description: 'A complete structural remodel merging two traditional closed rooms into a flowing mid-century modern kitchen. Features custom white oak cabinetry, a massive 12-foot quartzite island, and concealed luxury appliances.',
    scope: [
      'Removal of load-bearing center wall & steel beam installation',
      'Bespoke rift-sawn White Oak cabinetry by local craftsmen',
      'Book-matched Taj Mahal quartzite countertops & high backsplash',
      'Professional-grade dual fuel range and sub-zero custom panels',
      'Under-cabinet and dynamic toe-kick architectural lighting design'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=82&w=1000', // Basic older empty room layout
    afterImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=82&w=1200', // High-end kitchen luxury with wood cabinets
    isFeatured: true
  },
  {
    id: 'millidgeville-spa',
    title: 'Sanctuary Master Bath Suite',
    type: 'Bathroom Spa Remodel',
    location: 'Millidgeville, St. John',
    timeline: '5 Weeks',
    description: 'Transforming a fragmented 1980s bathroom into an organic modern home spa. Utilizing concrete-look tile with cedar accents, floating stone vanities, and a custom oversized steam shower.',
    scope: [
      'Full rip-out to studs and comprehensive damp-proofing',
      'Linear drain installation & custom built-in tiled bench',
      'Thermally controlled in-floor heating with touch controls',
      'Handcrafted natural cedar slatted ceiling with integrated ambient lighting',
      'Minimalist polished brass plumbing fixtures & rainfall shower head'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=82&w=1000', // Old ceramic white tile styling
    afterImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=82&w=1200', // High-end stone spa bathroom
    isFeatured: true
  },
  {
    id: 'uptown-loft',
    title: 'Historic Uptown Custom Built-ins',
    type: 'Bespoke Millwork & Brick Incorporation',
    location: 'Uptown Saint John, NB',
    timeline: '3 Weeks',
    description: 'Designing and mounting high-end library shelving and custom fireplace millwork in a historic brick loft overlooking the Saint John Harbour. Custom fit to match historical uneven floors with absolute level precision.',
    scope: [
      'Hand-selected rift-sawn walnut woodwork construction',
      'Precision mounting into historic red brick structures securely',
      'Concealed warm white LED channel lights with dimmers',
      'Integrated floating entertainment hub and media storage',
      'Custom oil-rubbed bronze architectural hardware'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=82&w=1000', // Raw wall view
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=82&w=1200', // Timber ceiling loft style warm room with woodwork
    isFeatured: false
  },
  {
    id: 'quispamsis-deck',
    title: 'Kennebecasis Riverview Vista Deck',
    type: 'Luxury Outdoor Space',
    location: 'Quispamsis, NB',
    timeline: '4 Weeks',
    description: 'A structural, two-story engineering feat overlooking the Kennebecasis River. Constructed with high-performance TimberTech composite boards, frameless safety glass railings, and a lower-level rain shelter ceiling.',
    scope: [
      'Deep frost-protected helical pile foundations and ledger-free framing',
      'Premium composite cladding in warm Brazilian Walnut colorway',
      'Hand-finished mahogany stairways with heavy stainless steel railings',
      'Under-deck water drainage system to create a dry lower lounge',
      'Custom built-in seating benches with marine-grade dry cushion storage'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=82&w=1000', // Raw carpentry site construction
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=82&w=1200', // Modern deck/balcony looking out
    isFeatured: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'review-1',
    name: 'Eleanor Vance',
    location: 'Rothesay, NB',
    projectType: 'Architectural Kitchen Remodel',
    rating: 5,
    content: 'SJ Fix & Build transformed our outdated kitchen into the heart of our home. Their attention to detail was jaw-dropping. The White Oak cabinetry is literally a piece of art. Most importantly, they kept the workspace incredibly clean and finished precisely on schedule.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'review-2',
    name: 'Marcus Sterling',
    location: 'Millidgeville, St. John',
    projectType: 'Custom Bathroom Suite & Carpentry',
    rating: 5,
    content: 'From our first consultation to the final item on the walk-through checklist, they behaved like true design-build artists, not typical general contractors. The curb-less shower tile runs absolute perfection, and the heated slate floors are incredible in the winter.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'review-3',
    name: 'Dr. Evelyn Chen',
    location: 'Uptown Saint John, NB',
    projectType: 'Historic Brick Loft Renovation',
    rating: 5,
    content: 'Living in a historic building Uptown comes with major structural quirks. SJ Fix & Build navigated the uneven brick walls with genius solutions. The custom walnut library shelves look like they were built with the original structure in 1890, but function with modern perfection.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300'
  }
];

export const TEAM_MEMBERS = [
  {
    name: 'Sergei James',
    role: 'Founder & Principal Craftsman',
    bio: 'With over 18 years of fine carpentry and structural renovation experience, Sergei oversees every project blueprint and finish detail. His passion for warm wood structures and clean contemporary lines guides the SJ signature look.',
    image: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Clara James',
    role: 'Lead Interior Architect & Design Planner',
    bio: 'Clara coordinates with clients to finalize finishes, custom trim configurations, spatial lighting plans, and beautiful natural stone materials. She translates your daily lifestyle into refined spatial drawings.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
  }
];
