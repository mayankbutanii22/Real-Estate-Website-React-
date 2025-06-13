import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  properties: [
    {
      id: 1,
      title: 'Luxury Villa in Beverly Hills',
      price: '$2,500,000',
      location: 'California, USA',
      image: 'https://www.arvindsmartspaces.com/wp-content/uploads/2022/01/Artboard-1-Mobile.jpg',
      description: 'A luxurious villa with pool and garden in Beverly Hills.',
      
    },
    {
      id: 2,
      title: 'Modern Apartment in New York',
      price: '$1,200,000',
      location: 'New York, USA',
      image: 'https://cdn.galeriemagazine.com/wp-content/uploads/2025/04/MASTER-4-ONE57-DHD_COVER.jpg?strip=all&lossy=0&quality=92&webp=92&ssl=1',
      description: 'Stylish 2BHK apartment with city view in Manhattan.',
    },
    {
      id: 3,
      title: 'Cozy Cottage in Vermont',
      price: '$850,000',
      location: 'Vermont, USA',
      image: 'https://static.cozycozy.com/images/catalog/type/cottage.jpg?v=2',
      description: 'A charming cottage surrounded by nature.',
      
    },
    {
      id: 4,
      title: 'Beachfront Condo in Miami',
      price: '$1,450,000',
      location: 'Miami, Florida, USA',
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/491728020.jpg?k=9f005a8a6966fb02abdd23e9e79c6e93ccda1496d4733b25e5da508525e5df0f&o=&hp=1',
      description: 'A beautiful condo with ocean views.',
 
    },
    {
      id: 5,
      title: 'Penthouse in Chicago',
      price: '$3,000,000',
      location: 'Chicago, Illinois, USA',
      image: 'https://robbreport.com/wp-content/uploads/2022/07/BennettPark_PHTerrace.jpg?w=1000',
      description: 'Luxurious penthouse with city skyline views.',
     
    },
    {
      id: 6,
      title: 'Country House in Texas',
      price: '$900,000',
      location: 'Texas, USA',
      image: 'https://i.ytimg.com/vi/zTOGllwS3t0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCRxJH2tMVt9r5dqXQrLO0VWdul-Q',
      description: 'Spacious country house with large land.',
    
    },
    {
      id: 7,
      title: 'Historic Home in Boston',
      price: '$1,100,000',
      location: 'Boston, Massachusetts, USA',
      image: 'https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2018/07/otis-house-gerst.jpg',
      description: 'Beautiful historic house in downtown Boston.',
  
    },
    {
      id: 8,
      title: 'Modern Loft in San Francisco',
      price: '$1,700,000',
      location: 'San Francisco, California, USA',
      image: 'https://onekindesign.com/wp-content/uploads/2022/08/Industrial-Warehouse-Loft-Knock-Architecture-Design-07-1-Kindesign.jpg',
      description: 'Stylish loft with modern amenities.',
    
    },
    {
      id: 9,
      title: 'Mountain Cabin in Colorado',
      price: '$750,000',
      location: 'Colorado, USA',
      image: 'https://thumbs.dreamstime.com/z/cabin-colorado-rocky-mountains-rustic-remote-86682797.jpg',
      description: 'Cozy cabin with mountain views.',
     
    },
    {
      id: 10,
      title: 'Downtown Apartment in Seattle',
      price: '$1,000,000',
      location: 'Seattle, Washington, USA',
      image: 'https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_737,h_414/q_auto,f_auto/4216-126/helios-apartments-exterior',
      description: 'Modern apartment in downtown Seattle.',
    
    },
    {
      id: 11,
      title: 'Family Home in Atlanta',
      price: '$650,000',
      location: 'Atlanta, Georgia, USA',
      image: 'https://s29980.pcdn.co/wp-content/uploads/sites/6/2020/02/Leland_homerama_2498x1665.jpg',
      description: 'Spacious family home with garden.',
    
    },
    {
      id: 12,
      title: 'Luxury Condo in Las Vegas',
      price: '$1,300,000',
      location: 'Las Vegas, Nevada, USA',
      image: 'https://www.lasvegasluxuryresidences.com/wp-content/uploads/2017/01/104-Family-Room-3.jpg',
      description: 'High-end condo in the heart of Vegas.',
    
    },
    {
      id: 13,
      title: 'Suburban House in Denver',
      price: '$780,000',
      location: 'Denver, Colorado, USA',
      image: 'https://previews.123rf.com/images/arinahabich/arinahabich1207/arinahabich120701648/14500167-house-in-suburban-development-of-denver-colorado.jpg',
      description: 'Comfortable house in a quiet suburb.',
     
    },
    {
      id: 14,
      title: 'Elegant Mansion in Palm Springs',
      price: '$4,500,000',
      location: 'Palm Springs, California, USA',
      image: 'https://media.vrbo.com/lodging/35000000/34390000/34384900/34384806/fec613ba.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
      description: 'Stunning mansion with pool and views.',
    
    },
    {
      id: 15,
      title: 'Studio Apartment in Austin',
      price: '$450,000',
      location: 'Austin, Texas, USA',
      image: 'https://ar.rdcpix.com/17734db1fe7487bfca67958f28abdd13c-f3649556179rd-w480_h360.jpg',
      description: 'Compact and modern studio apartment.',
    
    },
    {
      id: 16,
      title: 'Charming Bungalow in Oregon',
      price: '$520,000',
      location: 'Oregon, USA',
      image: 'https://www.priceypads.com/wp-content/uploads/2024/05/1842-SE-46th-Ave.jpg',
      description: 'Lovely bungalow with garden space.',
   
    },
    {
      id: 17,
      title: 'Luxury Penthouse in Toronto',
      price: '$2,800,000',
      location: 'Toronto, Canada',
      image: 'https://cameronmiller.ca/wp-content/uploads/2021/07/Via-Bloor-Image-3.jpg',
      description: 'Elegant penthouse with city views.',
      
    },
    {
      id: 18,
      title: 'Beach House in Malibu',
      price: '$3,400,000',
      location: 'Malibu, California, USA',
      image: 'https://cdn.trendir.com/wp-content/uploads/old/house-design/2015/11/12/malibu-beach-house-ocean-side.jpg',
      description: 'Beachfront house with stunning views.',
    
    },
    {
      id: 19,
      title: 'Country Estate in Virginia',
      price: '$1,800,000',
      location: 'Virginia, USA',
      image: 'https://virginiaestates.com/wp-content/uploads/2022/11/northern-virginia-estates.webp',
      description: 'Large estate with plenty of land.',
    
    },
    {
      id: 20,
      title: 'Modern Home in Portland',
      price: '$950,000',
      location: 'Portland, Oregon, USA',
      image: 'https://mads.media/wp-content/uploads/2023/04/Rio-Vista-FULL-RES28-1.jpg',
      description: 'Contemporary home with open floor plan.',
     
    },
  ],
};

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {},
});

export default propertySlice.reducer;