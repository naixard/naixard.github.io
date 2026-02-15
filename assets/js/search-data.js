// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-now",
          title: "Now",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/now/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "post-my-thoughts-on-the-big-con-how-the-consulting-industry-weakens-our-businesses-infantilizes-our-governments-and-warps-our-economies",
      
        title: "My thoughts on The Big Con: How the Consulting Industry Weakens our Businesses,...",
      
      description: "I&#39;ve just finished an eye-opening book, The Big Con by Mariana Mazzucato and Rosie Collington. It argues that management consulting firms have weakened governments and corporations around the world in pursuit of profit.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/book-review-the-big-con/";
        
      },
    },{id: "post-karuizawa-trip-winter-2026",
      
        title: "Karuizawa Trip Winter 2026",
      
      description: "Karuizawa has two sides: serene nature and modern glamour. Last week, I went to a very old ryokan (Japanese inn) in Karuizawa with my wife.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/karuizawa-trip-2026/";
        
      },
    },{id: "post-yokohama-night-sky-january-2026",
      
        title: "Yokohama Night Sky January 2026",
      
      description: "Yokohama is a nice place to live. It has (mini) golf and a great night scape. This weekend, I had an (unplanned) date with my wife.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/yokohama-night-date-jan-2026/";
        
      },
    },{id: "post-my-review-of-inspired-how-to-create-tech-products-customers-love",
      
        title: "My review of Inspired - How to Create Tech Products Customers Love",
      
      description: "A book I should have read before trying to contribute to software development.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/book-review-inspired/";
        
      },
    },{id: "post-year-2025-in-review",
      
        title: "Year 2025 in Review",
      
      description: "My reflection of 2025.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/year-2025-in-review/";
        
      },
    },{id: "post-discovering-classical-music-by-the-kanagawa-philharmonic-orchestra",
      
        title: "Discovering Classical Music by the Kanagawa Philharmonic Orchestra",
      
      description: "A personal reflection on attending two classical music concerts by the Kanagawa Philharmonic Orchestra. Thoughts on Beethoven, Brahms, Shostakovich, and the surprising role of the conductor.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/classical-concert/";
        
      },
    },{id: "post-my-review-of-the-body-keeps-the-score",
      
        title: "My review of The Body Keeps the Score",
      
      description: "This book is very hard to read without background knowledge in psychology or underlying interests in trauma.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/book-review-the-body-keeps-the-score/";
        
      },
    },{id: "post-my-review-of-outliers",
      
        title: "My review of Outliers",
      
      description: "Outliers by Malcolm Gladwell reminded me of the Veritasium video Is Success Luck or Hard Work? The central idea is that success is a combination of both luck and hard work.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/book-review-outliers/";
        
      },
    },{id: "post-my-review-of-how-big-things-get-done",
      
        title: "My review of How Big Things Get Done",
      
      description: "This book is a compelling exploration of project management challenges. I gained insight into why megaprojects often fail, run behind schedule, and go over budget — and how to mitigate these issues.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/book-review-how-big-things-get-done/";
        
      },
    },{id: "post-metal-gear-solid",
      
        title: "Metal Gear Solid",
      
      description: "I heard about this PlayStation (PS1) game quite a lot when I was in elementary school. It was great, ahead of its time, I heard. But I never played the game.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/metal-gear-solid-1/";
        
      },
    },{id: "post-a-strange-spinach",
      
        title: "A Strange Spinach",
      
      description: "Last month, my wife brought home a very unusual spinach. A quick Google search led me to an unexpected realization of the &quot;spinach&quot; I ate in Indonesia.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/a-strange-spinach/";
        
      },
    },{id: "post-my-review-of-why-we-sleep-the-new-science-of-sleep-and-dreams",
      
        title: "My review of Why We Sleep: The New Science of Sleep and Dreams...",
      
      description: "This book practically told me to sleep — and honestly, it was right. I should&#39;ve slept more.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/book-review-why-we-sleep/";
        
      },
    },{id: "post-my-review-of-deep-work-rules-for-focused-success-in-a-distracted-world",
      
        title: "My review of Deep Work: Rules for Focused Success in a Distracted World...",
      
      description: "Until recently, I was overwhelmed by social media. Reading this book made me realize how to return the time I lost to the internet.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/book-review-deep-work/";
        
      },
    },{id: "post-hello-world-v3-0",
      
        title: "Hello World v3.0",
      
      description: "This is the first blog post for my second try to building a personal website.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/a-new-personal-website/";
        
      },
    },{id: "news-my-personal-website-is-online",
          title: 'My personal website is online!',
          description: "",
          section: "News",},{id: "news-finished-reading-deep-work-rules-for-focused-success-in-a-distracted-world-by-cal-newport",
          title: 'Finished reading Deep Work: Rules for Focused Success in a Distracted World by...',
          description: "",
          section: "News",},{id: "news-finished-reading-why-we-sleep-the-new-science-of-sleep-and-dreams-by-matthew-walker",
          title: 'Finished reading Why We Sleep: The New Science of Sleep and Dreams by...',
          description: "",
          section: "News",},{id: "news-earned-data-structures-and-algorithms-certification-from-gtx",
          title: 'Earned Data Structures and Algorithms certification from GTx',
          description: "",
          section: "News",},{id: "news-passed-jlpt-n1",
          title: 'Passed JLPT N1',
          description: "",
          section: "News",},{id: "news-finished-reading-outliers-the-story-of-success-by-malcolm-gladwell",
          title: 'Finished reading Outliers: The Story of Success by Malcolm Gladwell',
          description: "",
          section: "News",},{id: "news-finished-reading-how-big-things-get-done-by-bent-flyvbjerg-and-dan-gardner",
          title: 'Finished reading How Big Things Get Done by Bent Flyvbjerg and Dan Gardner...',
          description: "",
          section: "News",},{id: "news-finished-reading-sherlock-holmes-the-sign-of-four-by-sir-arthur-conan-doyle",
          title: 'Finished reading “Sherlock Holmes The Sign of Four” by Sir Arthur Conan Doyle...',
          description: "",
          section: "News",},{id: "news-finished-reading-the-body-keep-the-score-by-bessel-van-der-kolk-m-d",
          title: 'Finished reading The Body Keep the Score by Bessel van der Kolk, M.D....',
          description: "",
          section: "News",},{id: "news-i-am-continuing-my-graduate-studies-at-the-university-of-tokyo-department-of-systems-innovation",
          title: 'I am continuing my graduate studies at the University of Tokyo, Department of...',
          description: "",
          section: "News",},{id: "news-finished-reading-marine-biology-a-very-short-introduction-by-philip-v-mladenov",
          title: 'Finished reading Marine Biology - A Very Short Introduction by Philip V. Mladenov....',
          description: "",
          section: "News",},{id: "news-finished-reading-why-nations-fail-by-daron-acemoglu-and-james-a-robinson",
          title: 'Finished reading Why Nations Fail by Daron Acemoglu and James A. Robinson.',
          description: "",
          section: "News",},{id: "news-created-a-now-page-describing-what-i-m-currently-working-on",
          title: 'Created a Now page describing what I’m currently working on.',
          description: "",
          section: "News",},{id: "news-finished-reading-the-pig-that-wants-to-be-eaten-by-julian-baggini",
          title: 'Finished reading The Pig that Wants to Be Eaten by Julian Baggini.',
          description: "",
          section: "News",},{id: "news-finished-reading-inspired-how-to-create-tech-product-customer-love-by-marty-cagan",
          title: 'Finished reading Inspired - How to Create Tech Product Customer Love by Marty...',
          description: "",
          section: "News",},{id: "news-comment-is-now-enabled-on-all-blog-posts-using-giscus",
          title: 'Comment is now enabled on all blog posts using Giscus!',
          description: "",
          section: "News",},{id: "news-finished-reading-the-big-con-by-mariana-mazzucato-and-rosie-collington",
          title: 'Finished reading The Big Con by Mariana Mazzucato and Rosie Collington.',
          description: "",
          section: "News",},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/adriankosasih", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=EkHUhFgAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
