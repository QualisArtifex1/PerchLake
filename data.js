// Shared house content. Update this file and publish to share changes with everyone.
// This is a PUBLIC website. Contact numbers below were supplied for publication by the owner.
// Never add key locations, access codes, or passwords.
window.HOUSE_GUIDE = {
  essentials: [
    { title: 'Keys & arrival', icon: 'key', text: 'Ask the owners for key and entry instructions before your visit.', label: 'Shared directly with family' },
    { title: 'Wi-Fi & connection', icon: 'wifi', text: 'Ask the owners for the network name and Wi-Fi password.', label: 'Shared directly with family' },
    { title: 'House systems', icon: 'home', text: 'Change all three filter types every six months. Refill softener salt as needed.', label: 'Water-system care below', href: '#water-system' },
    { title: 'Trash & recycling', icon: 'bin', text: 'Collection days, bin locations, and recycling guidelines will live here.', label: 'Details to add' }
  ],
  maintenance: [
    { title: 'Furnace filter', detail: 'Brand, size, and part number to add', frequency: 'Every 6 months', last: null, next: null },
    { title: 'Downstairs water filters', detail: 'Isolate with the hand levers before changing; see water-system guide', frequency: 'Every 6 months', last: null, next: null },
    { title: 'Upstairs sink filter', detail: 'Brand and replacement cartridge to add', frequency: 'Every 6 months', last: null, next: null },
    { title: 'Water softener salt', detail: 'Solar Salt (blue bag) or Dura Cube; no pellets', frequency: 'As needed', last: null, next: null },
    { title: 'Lawn & outdoor care', detail: 'Service plan to add', frequency: null, last: null, next: null },
    { title: 'Snow removal', detail: 'Service and access instructions to add', frequency: null, last: null, next: null },
    { title: 'Seasonal house check', detail: 'Opening and winter preparation to add', frequency: null, last: null, next: null }
  ],
  waterCare: [
    {
      title: 'Changing the downstairs filters', badge: 'Every 6 months',
      intro: 'The blue filter housings are downstairs in the basement.',
      steps: [
        'First, isolate the filters using the hand levers.',
        'Release trapped pressure using the installed system’s pressure-relief procedure before loosening a housing.',
        'Unscrew the housings and change the filters. Replacement brands and part numbers will be added later.',
        'Follow the equipment instructions for reassembly and flushing, then check for leaks.'
      ],
      note: 'The photos do not show a complete valve layout. Confirm the correct levers and pressure-relief method with the owners before starting.',
      source: { title: 'Pentair filter-change reference', url: 'https://www.pentair.com/content/dam/extranet/nam/filtration/pentair/manuals/150724-fps-10bb-20bb-manual.pdf', note: 'General pressure-relief and leak-check guidance; confirm the exact installed model.' }
    },
    {
      title: 'Refilling the water softener', badge: 'As needed',
      intro: 'Add salt to the salt tank—the cream-colored container with the black lid.',
      steps: [
        'Use Solar Salt (blue bag) or Dura Cube. Do not use pellets.',
        'Fill the salt tank almost all the way to the top.',
        'Let the salt level go almost all the way down before refilling.'
      ],
      note: 'The tank sticker says “Use Dura-Cube Salt Only.” The owners have confirmed that Solar Salt (blue bag) is also approved.'
    }
  ],
  waterPhotos: [
    { file: 'filter-b.jpg', title: 'Downstairs filter B', caption: 'Blue filter housing marked B.', alt: 'Blue basement filter housing labeled B with handwritten service dates' },
    { file: 'filter-c.jpg', title: 'Downstairs filter C', caption: 'Blue filter housing marked C.', alt: 'Blue basement filter housing labeled C with a Pentair Pentek Big Blue label' },
    { file: 'salt-tank.jpg', title: 'Salt tank', caption: 'Cream-colored tank with the black lid.', alt: 'Cream-colored softener salt tank with a black lid in the basement' },
    { file: 'softener-control.jpg', title: 'Softener control & tank', caption: 'Control head and tall treatment tank.', alt: 'Black control head mounted above a tall water-treatment tank' },
    { file: 'wellmate-tank.jpg', title: 'Pentair Wellmate tank', caption: 'Equipment identification photo.', alt: 'Gray tank bearing a Pentair Wellmate label' },
    { file: 'carbon-cartridge.jpg', title: 'Cartridge label reference', caption: 'Pentair Pentek GAC-BB is visible on this cartridge. Confirm which housing it belongs in before buying replacements.', alt: 'Packaged Pentair Pentek GAC-BB granular activated carbon cartridge' },
    { file: 'salt-service-label.jpg', title: 'Salt & service label', caption: 'Original tank sticker. Both salt choices in the guide are owner-confirmed.', alt: 'Country Water Treatment sticker reading Use Dura-Cube Salt Only with service phone numbers' },
    { file: 'filter-service-label.jpg', title: 'Filter service number', caption: 'Service / filter change: (248) 437-9136, as printed on the housing.', alt: 'Close-up of filter housing label with the service phone number 248-437-9136' }
  ],
  checklist: [
    { id: 'kitchen', title: 'Leave the kitchen clean', detail: 'Wash and put away dishes; wipe counters and the sink.' },
    { id: 'food', title: 'Check the fridge', detail: 'Take home perishables and wipe up any spills.' },
    { id: 'trash', title: 'Take care of trash & recycling', detail: 'Empty indoor bins and follow the house disposal instructions.' },
    { id: 'rooms', title: 'Tidy bedrooms & living spaces', detail: 'Follow the owners’ linen plan; put shared items back in place.' },
    { id: 'bathrooms', title: 'Freshen up the bathrooms', detail: 'Wipe surfaces and gather used towels as instructed.' },
    { id: 'outdoors', title: 'Put outdoor items away', detail: 'Return cushions, games, and lake gear to their storage spots.' },
    { id: 'settings', title: 'Check lights & house settings', detail: 'Turn off unused lights; follow the owners’ thermostat instructions.' },
    { id: 'secure', title: 'Do one last walk-through', detail: 'Check windows and doors, lock up, and return keys as instructed.' }
  ],
  contacts: [
    { role: 'Lawn care', category: 'provider', name: 'Matt', phone: '(517) 442-7608', note: 'Lawn care contact.' },
    { role: 'Snow removal', category: 'provider', name: null, phone: null, note: 'Company, contact, and service notes to add.' },
    { role: 'Electrician', category: 'provider', name: 'Larry Fisher', phone: '(517) 937-1490', note: 'Electrical service contact.' },
    { role: 'General contractor', category: 'provider', name: 'Duwane Morley', phone: '(517) 795-0932', note: 'General contracting contact.' },
    { role: 'Handyman', category: 'provider', name: null, phone: null, note: 'Name, business contact, and specialties to add.' },
    { role: 'Plumbing & HVAC', category: 'provider', name: null, phone: null, note: 'Company, contact, and service notes to add.' },
    { role: 'Neighbor', category: 'neighbor', name: 'Pat', phone: '(419) 957-7504', note: 'Neighbor contact.' },
    { role: 'HOA contact', category: 'hoa', name: 'Karen Colyer', phone: '(513) 446-0830', note: 'Homeowners association contact.' },
    { role: 'Water-system service', category: 'provider', name: 'Country Water Treatment', phone: '(248) 437-9136', note: 'Number printed on the equipment labels; current service availability not verified.' }
  ],
  hoa: [
    { label: 'HOA contact', value: 'Karen Colyer' },
    { label: 'Contact phone', value: '(513) 446-0830', phone: '(513) 446-0830' },
    { label: 'Association', value: null },
    { label: 'Fee amount', value: null },
    { label: 'Payment due', value: null },
    { label: 'Payment instructions', value: null }
  ]
};
