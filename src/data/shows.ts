export type ShowMedia = {
  src: string
  type: 'image' | 'video'
  caption: string
  description?: string
  category?: string
}

export const SHOWS: ShowMedia[] = [
  { src: '/shows/behind-the-scenes.jpg', type: 'image', caption: 'Behind the Scenes', description: 'Featuring state of the art sound system — one of a kind in Malaysia' },
  { src: '/shows/stage.jpg', type: 'image', caption: 'Stage Setup', description: 'Stage setup for a new branch opening ceremony' },
  { src: '/shows/lor-cutout.jpg', type: 'image', caption: "L'OR Cutout", description: 'Specially sourced materials for a Product Launch at Pavilion Bukit Bintang', category: 'Product Launch' },
  { src: '/shows/show-03.jpg', type: 'image', caption: "L'OR Cafe Setup", description: 'A cafe setup for sampling the launch of the new coffee flavour', category: 'Product Launch'  },
  { src: '/shows/show-08.jpg', type: 'image', caption: "L'OR Espresso Capsule Dome", description: 'A 22 feet tall upside down coffee capsule which is facing the front fountain and giant 3D LED Billboard at the front of Pavilion Bukit Bintang', category: 'Product Launch' },
  { src: '/shows/show-06.jpg', type: 'image', caption: 'Sidang Media at Goverment Office', description: "A snippet of a parliamentary meeting being conducted featuring Datuk Seri Saifuddin", category: 'Goverment Meeting Setup' },
  { src: '/shows/reel-06.mp4', type: 'video', caption: 'Sidang Media at Goverment Office', category: 'Goverment Meeting Setup' },
  { src: '/shows/reel-08.mp4', type: 'video', caption: 'Sidang Media at Goverment Office', category: 'Goverment Meeting Setup' },
  { src: '/shows/reel-01.mp4', type: 'video', caption: 'Live Show Reel', description: "Lighting works" },
  { src: '/shows/reel-03.mp4', type: 'video', caption: 'Live Show Reel', description: "Lighting works" },
  { src: '/shows/reel-04.mp4', type: 'video', caption: 'Live Show Reel', description: "Lighting works" },
  { src: '/shows/reel-18.mp4', type: 'video', caption: 'Lighting Works' },
  { src: '/shows/reel-07.mp4', type: 'video', caption: 'Cultural Event Stage Setup', category: 'Cultural Event' },
  { src: '/shows/reel-11.mp4', type: 'video', caption: 'Cultural Event Stage, Sound & Lighting', category: 'Cultural Event' },
  { src: '/shows/reel-09.mp4', type: 'video', caption: 'E-Sports Stage Setup', description: 'Provided sound and lighting for a renowed e-sports event' },
  { src: '/shows/reel-10.mp4', type: 'video', caption: 'Mini Concert', category: 'Mini Concert', description: 'An industrial place with cement flooring turned into a party atmosphere with an ethereal ambiance' },
  { src: '/shows/reel-12.mp4', type: 'video', caption: 'Luxury Brand Product Launch', category: 'Product Launch' },
  { src: '/shows/reel-13.mp4', type: 'video', caption: 'Annual Dinner', category: 'Mini Concert' },
  { src: '/shows/siti-nurhaliza.jpg', type: 'image', caption: 'Siti Nurhaliza', description: "Stage setup for a show stopping performance by Dato' Sri Siti Nurhaliza" },
  { src: '/shows/reel-14.mp4', type: 'video', caption: 'Siti Nurhaliza Stage Performance' },
  { src: '/shows/reel-15.mp4', type: 'video', caption: 'Siti Nurhaliza Stage Performance' },
  { src: '/shows/reel-16.mp4', type: 'video', caption: 'Lighting Performance' },
  { src: '/shows/reel-17.mp4', type: 'video', caption: 'Corporate Stage & Lighting Setup' },
  { src: '/shows/Installation/img-01.jpg', type: 'image', caption: 'Installation', category: 'Installation' },
  { src: '/shows/Installation/img-02.jpg', type: 'image', caption: 'Installation', category: 'Installation' },
  { src: '/shows/Installation/img-03.jpg', type: 'image', caption: 'Installation', category: 'Installation' },
  { src: '/shows/Installation/img-04.jpg', type: 'image', caption: 'Installation', category: 'Installation' },
  { src: '/shows/Installation/img-05.jpg', type: 'image', caption: 'Installation', category: 'Installation' },
  { src: '/shows/Installation/video-01.mp4', type: 'video', caption: 'Installation', category: 'Installation' },
  { src: '/shows/Event Planning/video-01.mp4', type: 'video', caption: 'A-Z Event Planning', description: 'A-Z Event planning containing LED, Sound, Lighting, Stage, Truss Rigging & Interior Designing', category: 'Event Planning' },
  { src: '/shows/Event Planning/video-02.mp4', type: 'video', caption: 'A-Z Event Planning', description: 'A-Z Event planning containing LED, Sound, Lighting, Stage, Truss Rigging & Interior Designing', category: 'Event Planning' },
  { src: '/shows/Event Planning/video-03.mp4', type: 'video', caption: 'A-Z Event Planning', description: 'A-Z Event planning containing LED, Sound, Lighting, Stage, Truss Rigging & Interior Designing', category: 'Event Planning' },
]
