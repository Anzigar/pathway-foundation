/**
 * Mock API service for development
 * This provides realistic data for testing UI components when the backend API is not available.
 */

// Mock blog posts data
const mockBlogPosts = [
  {
    id: "1",
    title: "Transforming Communities Through Sustainable Development",
    slug: "transforming-communities-sustainable-development",
    excerpt: "Discover how our approach to sustainable development is creating lasting change in vulnerable communities across Tanzania.",
    content: `<p>Sustainable development is at the core of our mission at Pathway Foundation. For years, we've been working closely with communities in Tanzania to implement projects that address immediate needs while building long-term resilience.</p>
    
    <h2>Community-Led Approach</h2>
    <p>Our approach always starts with listening to community members. We believe that sustainable change can only happen when local people are the primary decision-makers in development initiatives that affect their lives.</p>
    <p>Through community meetings, surveys, and focus groups, we gather insights about the most pressing challenges and potential solutions. This participatory approach ensures that projects are culturally appropriate and address genuine needs.</p>
    
    <h2>Building Local Capacity</h2>
    <p>Rather than creating dependency, we focus on building local capacity. This means training community members in project management, financial literacy, and specific technical skills needed to maintain infrastructure and programs long after our direct involvement ends.</p>
    
    <h2>Measurable Impact</h2>
    <p>The results speak for themselves:</p>
    <ul>
      <li>12 communities now have sustainable access to clean water</li>
      <li>Over 5,000 children have improved educational opportunities</li>
      <li>3,200 families have increased their household income through our microfinance and skills training programs</li>
    </ul>
    
    <p>As we look to the future, we remain committed to our vision of creating self-sufficient communities with the resources and skills to thrive independently.</p>`,
    image: "/images/blog/sustainable-development.jpg",
    author: "John Doe",
    date: "June 10, 2023",
    category: "Community Development",
    viewCount: 583,
    tags: ["sustainable development", "community engagement", "Tanzania"]
  },
  {
    id: "2",
    title: "The Impact of Clean Water Access on Rural Communities",
    slug: "impact-clean-water-access-rural-communities",
    excerpt: "Learn about the far-reaching effects of providing clean water access to rural communities and how it transforms lives.",
    content: `<p>Access to clean water is something many of us take for granted, but for rural communities in Tanzania, it can be a life-changing development that impacts virtually every aspect of daily life.</p>
    
    <h2>Health Improvements</h2>
    <p>The most immediate benefit of clean water access is improved health. Waterborne diseases like cholera, typhoid, and diarrhea decrease dramatically when communities gain access to safe drinking water. In the villages where we've implemented water projects, we've seen up to a 65% reduction in water-related illnesses.</p>
    
    <h2>Educational Benefits</h2>
    <p>When children no longer need to walk hours each day to collect water, school attendance increases significantly. Girls, who traditionally bear the burden of water collection, see the most dramatic improvements in school participation and academic performance.</p>
    
    <h2>Economic Growth</h2>
    <p>With time freed from water collection and fewer sick days, adults can focus more on productive economic activities. Women often use this opportunity to start small businesses or engage in agriculture, increasing household income and food security.</p>
    
    <h2>Our Approach to Water Projects</h2>
    <p>We don't just drill wells and leave. Our water projects include:</p>
    <ul>
      <li>Community water committees trained in maintenance and financial management</li>
      <li>Water quality testing and monitoring systems</li>
      <li>Hygiene education programs</li>
      <li>Innovative financing mechanisms for sustainability</li>
    </ul>
    
    <p>By addressing water access comprehensively, we ensure that the benefits continue for generations to come.</p>`,
    image: "/images/blog/clean-water-access.jpg",
    author: "Jane Smith",
    date: "May 25, 2023",
    category: "WASH",
    viewCount: 472,
    tags: ["clean water", "health", "education", "WASH"]
  },
  {
    id: "3",
    title: "Youth Empowerment: Building Tomorrow's Leaders",
    slug: "youth-empowerment-building-tomorrows-leaders",
    excerpt: "How investing in youth development creates a ripple effect of positive change in communities facing significant challenges.",
    content: `<p>Youth make up over 60% of Tanzania's population, representing both the country's greatest challenge and its greatest potential resource. At Pathway Foundation, we believe that empowering young people is key to creating sustainable positive change.</p>
    
    <h2>Leadership Development</h2>
    <p>Our youth programs focus first on leadership development. Through workshops, mentorship programs, and practical experience, we help young people develop the confidence, critical thinking skills, and ethical foundation needed to lead effectively.</p>
    
    <h2>Skills Training for Economic Opportunity</h2>
    <p>Unemployment is a significant challenge for youth in Tanzania. Our vocational training programs provide practical skills in high-demand areas such as:</p>
    <ul>
      <li>Sustainable agriculture</li>
      <li>Renewable energy technology</li>
      <li>Digital skills and entrepreneurship</li>
      <li>Construction and trades</li>
    </ul>
    
    <h2>Civic Engagement</h2>
    <p>We encourage youth to become active citizens who contribute positively to their communities. Through service projects, community needs assessment, and advocacy training, young people learn how to identify challenges and implement solutions.</p>
    
    <h2>Success Stories</h2>
    <p>Our youth programs have produced remarkable success stories. Take Amina, for example, who participated in our entrepreneurship program and now runs a successful tailoring business that employs five other young people from her village. Or Joseph, who used his agricultural training to implement innovative farming techniques that have increased crop yields for his entire community.</p>
    
    <p>By investing in youth today, we're building the foundation for stronger communities tomorrow.</p>`,
    image: "/images/blog/youth-empowerment.jpg",
    author: "Michael Johnson",
    date: "May 12, 2023",
    category: "Youth Development",
    viewCount: 347,
    tags: ["youth", "leadership", "empowerment", "education"]
  },
  {
    id: "4",
    title: "Gender Equality: Breaking Barriers in Rural Tanzania",
    slug: "gender-equality-breaking-barriers-rural-tanzania",
    excerpt: "Exploring the progress and challenges in promoting gender equality and women's empowerment in rural communities.",
    content: `<p>Gender inequality remains one of the most persistent barriers to sustainable development in rural Tanzania. Traditional gender roles and limited opportunities have historically restricted women's participation in economic, social, and political life.</p>
    
    <h2>Understanding Local Context</h2>
    <p>Our approach to gender equality begins with understanding the local context. We work with community leaders, both men and women, to identify specific barriers to women's participation and advancement in each community.</p>
    
    <h2>Economic Empowerment</h2>
    <p>Financial independence is often the first step toward greater equality. Our women's economic empowerment programs include:</p>
    <ul>
      <li>Village Savings and Loan Associations (VSLAs)</li>
      <li>Business skills training</li>
      <li>Market access support for women entrepreneurs</li>
      <li>Agricultural training focused on crops traditionally managed by women</li>
    </ul>
    
    <h2>Education and Leadership</h2>
    <p>We place special emphasis on girls' education and women's leadership development. Scholarships, mentoring programs, and leadership training help ensure that women have the skills and confidence to take on influential roles in their communities.</p>
    
    <h2>Engaging Men as Allies</h2>
    <p>Lasting change requires the involvement of everyone. Our male engagement programs work with men and boys to challenge harmful gender norms and become allies in the pursuit of equality. This approach has been particularly effective in changing attitudes about girls' education and domestic violence.</p>
    
    <p>While significant challenges remain, we're encouraged by the progress we've seen. Women are increasingly participating in decision-making bodies, starting successful businesses, and serving as role models for the next generation.</p>`,
    image: "/images/blog/gender-equality.jpg",
    author: "Sarah Williams",
    date: "April 28, 2023",
    category: "Gender Equality",
    viewCount: 305,
    tags: ["gender equality", "women's empowerment", "rural development"]
  },
  {
    id: "5",
    title: "Climate Resilience: Adapting to Environmental Challenges",
    slug: "climate-resilience-adapting-environmental-challenges",
    excerpt: "How communities are building resilience to climate change through innovative adaptation strategies and sustainable practices.",
    content: `<p>Climate change is having profound effects on communities across Tanzania. Irregular rainfall patterns, increased drought frequency, and extreme weather events are threatening agricultural productivity and water security in regions already facing significant challenges.</p>
    
    <h2>Community-Based Adaptation</h2>
    <p>Our climate resilience work focuses on community-based adaptation strategies. By combining traditional knowledge with scientific insights, we help communities develop practical approaches to climate challenges.</p>
    
    <h2>Sustainable Agriculture Practices</h2>
    <p>Agricultural adaptations have been particularly important. We promote:</p>
    <ul>
      <li>Drought-resistant crop varieties</li>
      <li>Water harvesting and conservation techniques</li>
      <li>Agroforestry systems that protect soil and provide multiple benefits</li>
      <li>Climate-smart livestock management</li>
    </ul>
    
    <h2>Environmental Conservation</h2>
    <p>Preserving natural resources is critical for long-term resilience. Our programs support community-led conservation efforts, including reforestation, watershed protection, and sustainable harvesting of natural resources.</p>
    
    <h2>Renewable Energy</h2>
    <p>Access to clean, renewable energy improves quality of life while reducing environmental impact. We've helped implement solar energy systems for household use and community facilities like schools and health centers.</p>
    
    <p>Through these integrated approaches, communities are not just surviving climate challenges but developing the capacity to thrive despite changing conditions. The knowledge and skills gained through these programs will serve these communities for generations to come.</p>`,
    image: "/images/blog/climate-resilience.jpg",
    author: "Robert Brown",
    date: "April 15, 2023",
    category: "Climate Action",
    viewCount: 229,
    tags: ["climate change", "resilience", "sustainable agriculture", "adaptation"]
  },
  {
    id: "6",
    title: "The Power of Community-Led Development",
    slug: "power-community-led-development",
    excerpt: "Why putting communities in the driver's seat of development initiatives leads to more sustainable and effective outcomes.",
    content: `<p>At Pathway Foundation, we firmly believe that the most effective development work happens when communities themselves are in charge. This isn't just a philosophical position—it's an approach supported by decades of development research and our own experience on the ground.</p>
    
    <h2>The Problem with Top-Down Approaches</h2>
    <p>Traditionally, many development projects have been designed by external experts with limited input from the communities they aim to serve. Too often, this results in projects that:</p>
    <ul>
      <li>Don't address the most pressing local needs</li>
      <li>Fail to account for cultural and social contexts</li>
      <li>Lack community buy-in for maintenance and sustainability</li>
      <li>Create dependency rather than self-sufficiency</li>
    </ul>
    
    <h2>Our Community-Led Approach</h2>
    <p>In contrast, our community-led development model puts local people at the center of every project phase:</p>
    
    <h3>1. Needs Assessment and Prioritization</h3>
    <p>Communities identify their own needs and priorities through participatory processes that ensure diverse voices are heard, including those traditionally marginalized.</p>
    
    <h3>2. Project Design</h3>
    <p>Local knowledge informs the design of appropriate, sustainable solutions. Technical expertise is provided as needed but doesn't override community insights.</p>
    
    <h3>3. Implementation</h3>
    <p>Community members take active roles in project implementation, developing skills and ownership in the process.</p>
    
    <h3>4. Monitoring and Evaluation</h3>
    <p>Communities define what success looks like and participate in monitoring progress and evaluating outcomes.</p>
    
    <h2>Results That Speak for Themselves</h2>
    <p>Our community-led projects consistently show better outcomes in terms of sustainability, appropriateness, and long-term impact. When people are invested in a project's success from the beginning, they ensure it continues to deliver benefits for years to come.</p>`,
    image: "/images/blog/community-led-development.jpg",
    author: "Emily Davis",
    date: "April 3, 2023",
    category: "Community Development",
    viewCount: 418,
    tags: ["community development", "participation", "sustainability"]
  }
];

// Mock news items
const mockNewsItems = [
  {
    id: "1",
    title: "Pathway Foundation Launches New Youth Leadership Program",
    slug: "youth-leadership-program",
    excerpt: "We are excited to announce the launch of our new Youth Leadership Program, aimed at empowering young people with the skills and opportunities to become effective leaders in their communities.",
    content: "<p>Full article content here...</p>",
    image: "/images/news/featured-news.jpg",
    date: "June 15, 2023",
    type: "Announcement",
    viewCount: 421
  },
  {
    id: "2",
    title: "Clean Water Project Completed in Mwanza Region",
    slug: "clean-water-project-mwanza",
    excerpt: "We're proud to announce the successful completion of our clean water project in the Mwanza region, providing sustainable access to safe drinking water for over 5,000 people.",
    image: "/images/news/news-1.jpg",
    date: "June 2, 2023",
    type: "News",
    viewCount: 259
  },
  {
    id: "3",
    title: "Annual Report: 2022 Impact and Achievements",
    slug: "annual-report-2022",
    excerpt: "Our annual report detailing the impact of our work in 2022 is now available. Learn about the projects completed, lives changed, and goals for the future.",
    image: "/images/news/news-2.jpg",
    date: "May 28, 2023",
    type: "Announcement",
    viewCount: 184
  },
  {
    id: "4",
    title: "Partnership Formed with Local Health Ministry",
    slug: "health-ministry-partnership",
    excerpt: "We're pleased to announce a new strategic partnership with the Health Ministry to expand healthcare access in rural communities.",
    image: "/images/news/news-3.jpg",
    date: "May 20, 2023",
    type: "News",
    viewCount: 198
  },
  {
    id: "5",
    title: "Education Initiative Shows Promising Results",
    slug: "education-initiative-results",
    excerpt: "Preliminary data from our education initiative shows significant improvements in student attendance and academic performance.",
    image: "/images/news/news-4.jpg",
    date: "May 15, 2023",
    type: "News",
    viewCount: 153
  },
  {
    id: "6",
    title: "Volunteer Opportunities: Summer 2023",
    slug: "volunteer-opportunities-summer-2023",
    excerpt: "Learn about our volunteer opportunities for Summer 2023, including both in-person and remote positions.",
    image: "/images/news/news-5.jpg",
    date: "May 10, 2023",
    type: "Announcement",
    viewCount: 312
  }
];

// Mock upcoming events
const mockEvents = [
  {
    id: "1",
    title: "Community Outreach and Health Fair",
    slug: "community-health-fair",
    description: "Free health screenings, educational resources, and activities for the whole family.",
    startDate: "2023-07-15T10:00:00Z",
    endDate: "2023-07-15T14:00:00Z",
    time: "10:00 AM - 2:00 PM",
    location: "Dar es Salaam, Tanzania",
    image: "/images/events/event-1.jpg"
  },
  {
    id: "2",
    title: "Fundraising Gala: Building Tomorrow Together",
    slug: "fundraising-gala",
    description: "Annual fundraising event with dinner, entertainment, and silent auction to support our ongoing projects.",
    startDate: "2023-07-22T18:00:00Z",
    endDate: "2023-07-22T22:00:00Z",
    time: "6:00 PM - 10:00 PM",
    location: "Serena Hotel, Dar es Salaam",
    image: "/images/events/event-2.jpg"
  },
  {
    id: "3",
    title: "Youth Leadership Workshop",
    slug: "youth-leadership-workshop",
    description: "Interactive workshop for young people aged 16-24 focusing on leadership skills and community engagement.",
    startDate: "2023-08-05T09:00:00Z",
    endDate: "2023-08-05T16:00:00Z",
    time: "9:00 AM - 4:00 PM",
    location: "Mwanza Community Center",
    image: "/images/events/event-3.jpg"
  }
];

// Mock categories
const mockCategories = [
  "Community Development",
  "WASH",
  "Youth Development",
  "Gender Equality",
  "Climate Action",
  "Education"
];

// Helper functions to simulate API behavior with delays
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Mock blog service API
 */
export const mockBlogService = {
  /**
   * Get blog posts with pagination and filtering
   */
  async getBlogPosts(page = 1, limit = 6, category = null) {
    await delay(800); // Simulate network delay
    
    let filteredPosts = [...mockBlogPosts];
    
    if (category && category !== "All") {
      filteredPosts = filteredPosts.filter(post => post.category === category);
    }
    
    const totalItems = filteredPosts.length;
    const totalPages = Math.ceil(totalItems / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
    
    return {
      data: paginatedPosts,
      meta: {
        currentPage: page,
        itemsPerPage: limit,
        totalItems: totalItems,
        totalPages: totalPages
      }
    };
  },
  
  /**
   * Get a single blog post by slug
   */
  async getBlogPostBySlug(slug) {
    await delay(600);
    const post = mockBlogPosts.find(post => post.slug === slug);
    
    if (!post) {
      throw new Error("Blog post not found");
    }
    
    return post;
  },
  
  /**
   * Track a blog post view
   */
  async trackBlogView(blogId) {
    await delay(300);
    const post = mockBlogPosts.find(post => post.id === blogId);
    
    if (!post) {
      return null;
    }
    
    // Increment the view count and return
    post.viewCount += 1;
    return { viewCount: post.viewCount };
  },
  
  /**
   * Get blog categories
   */
  async getBlogCategories() {
    await delay(400);
    return mockCategories;
  }
};

/**
 * Mock news service API
 */
export const mockNewsService = {
  /**
   * Get news items with pagination
   */
  async getNewsItems(page = 1, limit = 6, type = null) {
    await delay(800);
    
    let filteredItems = [...mockNewsItems];
    
    if (type && type !== "All") {
      filteredItems = filteredItems.filter(item => item.type.toLowerCase() === type.toLowerCase());
    }
    
    const totalItems = filteredItems.length;
    const totalPages = Math.ceil(totalItems / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedItems = filteredItems.slice(startIndex, endIndex);
    
    return {
      data: paginatedItems,
      meta: {
        currentPage: page,
        itemsPerPage: limit,
        totalItems: totalItems,
        totalPages: totalPages
      }
    };
  },
  
  /**
   * Get upcoming events
   */
  async getUpcomingEvents(limit = 3) {
    await delay(600);
    return mockEvents.slice(0, limit);
  }
};

const mockApiServices = {
  blogService: mockBlogService,
  newsService: mockNewsService
};

export default mockApiServices;