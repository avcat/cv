export const pages = [
  // Page 1
  [
    // introduction
    {
      type: 'Introduction',
      data: {
        name: 'Arkadii Vodolazskyi',
        position: 'WordPress Developer',
      }
    },
    
    // contacts
    {
      type: 'Contacts',
      title: 'Contacts',
      data: [
        {
          url: 'mailto:arkadii.vodolazskyi@pm.me',
          icon: 'proton', 
          title: 'arkadii.vodolazskyi@pm.me', 
        },
        {
          url: 'https://www.linkedin.com/in/avcat',
          icon: 'linkedin', 
          title: 'Arkadii Vodolazskyi', 
        },
        {
          url: 'https://github.com/avcat',
          icon: 'github', 
          title: 'avcat', 
        },
      ]
    },
    
    // work
    {
      type: 'Work',
      title: 'Work Experience',
      data: [

        {
          date: 'Dec 2023 — Mar 2026',
          company: {
            title: 'Limestone Digital',
            url: 'https://limestonedigital.com/',
          },
          position: 'PHP/WordPress Developer', 
          description: [
            'Created and maintained a big project on WordPress, Blade, Tailwind, lots of back-end functionality and integrations with different APIs',
            'Created 20+ sites for American storage facilities with Codeigniter 3',
            'Maintained 20+ WordPress environments on WPEngine',
          ],
          sites: [
            'https://www.diamondleague.com/',
          ]
        },

        {
          date: 'Dec 2024 — Dec 2025',
          company: {
            title: 'Boostylabs',
            url: 'https://boostylabs.com/',
          },
          position: 'WordPress Developer', 
          description: [
            'Created CI/CD infrastructure for the legacy project: Git, CD on Github Actions, composer, vite',
            'Created ACF Blocks plugin for the legacy project, that allows to use ACF Blocks in Git-friendly way',
            'Added integrations, such as Google Search Console, Contact Form 7 with Apix and Pipedrive',
            'Added functionality to track CF7 templates and configs in Git',
          ],
          sites: [
            'https://boostylabs.com/',
          ]
        },

        {
          date: 'Mar 2023 — Dec 2023',
          company: {
            title: 'Redwerk',
            url: 'https://redwerk.com/',
          },
          position: 'PHP/WordPress Developer', 
          description: [
            'Wide maintenance of 8 corporate subdomains, implementation of new functionality, pages, plugin development',
            'Implemented sorting of Case Studies and Testimonials based on user\'s location',
            'Created a new content system, based on ACF Blocks',
            'Improved legacy Content Builder',
          ],
          sites: [
            'https://redwerk.com/',
            'https://qawerk.com/',
            'https://bugcrawl.qawerk.com/',
          ]
        },

      ],
    }
  ],
  
  // Page 2
  [
    // work
    {
      type: 'Work',
      data: [
        
        {
          date: 'Sep 2021 — Feb 2023',
          company: {
            title: 'Zipy',
            url: 'https://www.zipy.co.il/',
          },
          position: 'WordPress Developer', 
          description: [
            'Created and maintained the whole front-end part of flormar.co.il',
            'Site optimization and performance',
            'Newsletter plugin and email development',
            'Adding new features, fixing bugs',
          ],
          sites: [
            'https://flormar.co.il/',
            'https://www.wona.co.il/',
          ]
        },

        {
          date: 'Nov 2020 — Aug 2021',
          company: {
            title: 'DevPro',
            url: 'https://devpro.agency/',
          },
          position: 'Junior WordPress Developer', 
          description: [
            'Full WordPress site development from design to hosting',
            'Adding functionality',
            'Fixing bugs',
          ],
          sites: [
            'https://beit-grand.odessa.ua/',
            'https://bavaria.od.ua/',
            'https://grili.com.ua/',
            'https://med-spa.od.ua/',
            'https://www.keentegro.com/',
            'https://bellaesthetic.com.ua/',
            'https://delicate.od.ua/',
          ]
        },
      ],
    },

    // projects
    {
      type: 'Projects',
      title: 'Personal Projects',
      data: [
        {
          date: 'Dec 2023',
          project: {
            title: 'Custom Blocks',
            url: 'https://github.com/avcat/custom-blocks',
            icon: 'github',
          },
          technologies: [
            'WordPress',
            'ACF',
            'ACF Blocks',
            'Git',
          ],
          description: [
            'WordPress plugin, that utilizes ACF Blocks',
            'Component-based approach, easy to use and maintain, Git-friendly',
          ],
        },

        {
          date: 'Apr 2023',
          project: {
            title: 'Accessa Weather',
            url: 'https://avcat.github.io/accesa-weather/',
            icon: 'github',
          },
          technologies: [
            'Vue',
            'Weather API',
            'Local Storage',
          ],
          description: [
            'Weather widget',
          ],
        },

        {
          date: 'Dec 2022',
          project: {
            title: 'Literary Note',
            url: 'https://lynote.netlify.app/blog',
            icon: 'literary-note',
          },
          technologies: [
            'SvelteKit',
            'Sanity.io',
          ],
          description: [
            'Literature blog',
            'Article navigation, footnotes, own design and parser',
          ],
        },

        {
          date: 'Nov 2022',
          project: {
            title: 'Ideals Weekends',
            url: 'https://github.com/avcat/ideals-weeknds',
            icon: 'github',
          },
          technologies: [
            'WordPress',
            'Docker',
            'Composer',
            'Gulp',
          ],
          description: [
            'WordPress setup',
          ],
        },
      ],
    }
  ],

  // Page 3
  [
    // projects
    {
      type: 'Projects',
      data: [

        {
          date: 'Aug 2022',
          project: {
            title: 'Reenbit Messenger',
            url: 'https://avcat.github.io/reenbit-messenger/',
            icon: 'github',
          },
          technologies: [
            'React',
            'Chuck Norris Jokes API',
          ],
          description: [
            'Simple chat-like app, similar to Telegram',
          ],
        },

        {
          date: 'Nov 2021',
          project: {
            title: 'Home Sweet Home',
            url: 'https://hsh.kiev.ua',
            icon: 'hsh',
          },
          technologies: [
            'WordPress',
            'Woocommerce',
            'RankMath',
            'WPRocket',
            'Telegram',
            'NovaPoshta',
          ],
          description: [
            'Skewers shop with original design',
          ],
        },
      ],
    },

    // education
    {
      type: 'Education',
      title: 'Education',
      data: [
        {
          date: 'Sep 2013 — Dec 2018',
          university: {
            title: 'Odessa National Polytechnic University',
            url: 'https://op.edu.ua/en',
          },
          specialty: 'Automation and computer-integrated technologies, master, hons.',
          certificates: {
            title: 'Other certificates',
            url: 'https://www.linkedin.com/in/avcat/details/certifications/',
            icon: 'linkedin',
          }
        }
      ],
    },

    // skills
    {
      type: 'Skills',
      title: 'Skills',
      data: [
        {
          domain: 'Programming Languages',
          list: [
            'HTML',
            'CSS',
            'JS',
            'PHP',
            'SQL',
          ],
        },
        {
          domain: 'Ecosystems',
          list: [
            'WordPress',
            'WPEngine',
            'Node.js',
            'Docker',
          ],
        },
        {
          domain: 'Frameworks',
          list: [
            'Vue/Nuxt',
            'Svelte/SvelteKit',
            'React',
            'Laravel',
            'Symfony/Codeigniter',
          ],
        },
        {
          domain: 'Other',
          list: [
            'Git',
            'Figma',
            'LAMP',
            'LocalWP',
          ],
        },
      ],
    },

    // languages
    {
      type: 'Languages',
      title: 'Languages',
      data: [
        {
          name: 'Russian, Ukrainian',
          certificates: [
            {
              level: 'Native',
            },
          ],
        },
        {
          name: 'English',
          certificates: [
            {
              level: 'C1',
              year: 2024,
            },
            {
              level: 'B1',
              year: 2013,
            },
          ],
        },
        {
          name: 'Romanian',
          certificates: [
            {
              level: 'A2',
              year: 2024,
            },
            {
              level: 'A2',
              year: 2023,
            },
            {
              level: 'A1',
              year: 2023,
            },
          ],
        },
        {
          name: 'Polish',
          certificates: [
            {
              level: 'A2',
              year: 2017,
            },
          ],
        },
      ],
    }
  ],

];