import React from 'react';
import styles from './Agents.module.css';

const agents = [
  { name: 'Mayank Patel', phone: '+91 99355 99447', image: 'https://www.squirrel.co.nz/_next/image?url=https%3A%2F%2Fsquirrelconz-production-app.azurewebsites.net%2Fmedia%2Fpmjgnfeo%2F29.jpg&w=3840&q=80' },
  { name: 'Ravi Patel', phone: '+91 88243 76589', image: 'https://assets.w3.tue.nl/w/fileadmin/_processed_/5/a/csm_75a043c4e02a734099514e73604d296c_d9937a8b42.jpg' },
   { name: 'Ketan Sharma', phone: '+91 97345 67890', image: 'https://bioera.in/wp-content/uploads/2015/10/Ketan-PROFILE1.png' },
  { name: 'Avinash Budhwani', phone: '+91 76560 23489', image: 'https://chandigarhicai.org/uploads/ABHISHEK,%20559743.jpg' },
   { name: 'Prakash Singh', phone: '+91 99797 556876', image: 'https://media.licdn.com/dms/image/v2/D4D03AQHWTWdo68ON0w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1707480585699?e=2147483647&v=beta&t=GIdxI3nlyjqBRYPmQGFcCjRlJ5SfpK4Yh13bQSfYxoY' },
  { name: 'Sahil Arora', phone: '+91 99345 67890', image: 'https://pbs.twimg.com/profile_images/1393338513563668482/1cAFB7PB_400x400.jpg' },
   { name: 'Vikas Verma', phone: '+91 98367 72345', image: 'https://images.contactout.com/profiles/2ad27c5d2eb06b2f39c29baa8375392c' },
  { name: 'Vishal Bhardwaj', phone: '+91 89499 87654', image: 'https://i0.wp.com/bollywoodprime.net/wp-content/uploads/2021/08/Vishal-Bhardwaj.jpg?resize=800%2C600&ssl=1' },
   { name: 'Anuk Jain', phone: '+91 97123 45678', image: 'https://anujjainmd.com/wp-content/uploads/2023/02/port-ANUJ.jpg' },
  { name: 'Manoj Parmar', phone: '+91 78745 67890', image: 'https://yt3.googleusercontent.com/5UGEAXZtp28eMcKoiImS42SSCrAqEPs6Z7G091aq5GzD8BQNQ70HCXXXOtu6aAvQ01oOFEAsbw=s900-c-k-c0x00ffffff-no-rj' },
     { name: 'Bhavik Jain', phone: '+91 97379 72368', image: 'https://media.licdn.com/dms/image/v2/D4D03AQEex6J9QmbL8g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715791020238?e=2147483647&v=beta&t=f0TrPiAqZRvXQyyS31aooxf3gZ83Y1IuzRb2Ue8ri8M' },
  { name: 'Krushna Kumar', phone: '+91 63470 57198', image: 'https://unreasonablegroup.com/cdn-cgi/image/format=auto,fit=scale-down,width=480,quality=90/https://d820a6sl534t.cloudfront.net/uploads/profile_image/e33b8d9c-44d0-4328-9158-8d074ed8bf6d/large_41c14b0a-78e7-4aa0-9cb6-03dcafe7c9a4.jpg' },
   { name: 'Urmil Patel', phone: '+91 95545 63470', image: 'https://images.squarespace-cdn.com/content/v1/5ba44e15f4e5314671d9c0f0/1548890201436-UT9ZFFSAYUAR2CR5WGUD/Urmil.jpg' },
  { name: 'Dhruv Kaswala', phone: '+91 87654 32109', image: 'https://media.licdn.com/dms/image/v2/C5103AQH4SWchti6ClQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1567186532943?e=2147483647&v=beta&t=LKjor1RH5QujzM4pfltszcd6ATm_8lePEbJJXcCo_SE' },
   { name: 'Deepdas Aggarwal', phone: '+91 76543 21098', image: 'https://scrs.in/public/uploads/members/1728896216.jpg' },
  { name: 'Farhan Khan', phone: '+91 83210 98765', image: 'https://www.fda.gov/files/styles/person_portrait_large/public/Farhan-Khan.jpg?itok=ozpV4X2n' },
     { name: 'Yash Sharma', phone: '+91 99876 54321', image: 'https://imageio.forbes.com/specials-images/imageserve/663975c006ce09b3123adc47/0x0.jpg?format=jpg&crop=1004,1005,x336,y748,safe&height=416&width=416&fit=bounds' },
  { name: 'Nutan Singh', phone: '+91 88354 67890', image: 'https://res.cloudinary.com/weboo/image/upload/v1451382682/Nutan-Kumar.jpg' },
];

const Agents = () => {
  return (
    <div className={styles.agents}>
      <h1>Agents List</h1>
      <div className={styles.grid}>
        {agents.map((a, i) => (
          <div key={i} className={styles.card}>
            <img src={a.image} alt={a.name} />
            <h3>{a.name}</h3>
            <p>{a.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;