import React from 'react';

const OurStory: React.FC = () => {
  return (
    <section className="our-story-section">
      <div className="container">
        <h2 className="section-title">Our Story</h2>
        <div className="story-content">
          <p>
            Pathways Foundation for the Poor (PFP) began its journey in East Africa, with Tanzania as its operational base. 
            Registered as a Non-Governmental Organization (NGO) in 2006, PFP has implemented community-driven programs across various zones in Tanzania:
          </p>
          
          <ul className="zones-list">
            <li><strong>Coastal Zone:</strong> Dar es Salaam and Pwani</li>
            <li><strong>Eastern Zone:</strong> Morogoro and Tanga</li>
            <li><strong>Central Zone:</strong> Dodoma and Singida</li>
            <li><strong>Western Zone:</strong> Tabora, Kigoma, Rukwa, and Katavi</li>
          </ul>

          <p>
            Our work spans youth empowerment, gender equality, livelihoods, WASH, and climate resilience, 
            reaching thousands of marginalized individuals, particularly women and girls. In 2024, PFP was 
            officially registered in the United States of America, with its headquarters in Texas, to expand 
            our global presence and strengthen our fundraising and strategic partnerships.
          </p>
          
          <p>
            This new registration enhances our ability to mobilize resources, engage with international donors, 
            and promote global solidarity for our mission to uplift vulnerable communities. With operations rooted 
            in Tanzania and a growing international platform, PFP remains committed to local impact with global collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
