const DATASET = {
  "last_updated": "2026-08-25",
  "total_disclosed_funding_usd": 266110000,
  "total_committed_funding_usd": 266110000,
  "total_pledged_funding_usd": 0,
  "company_funding": {
    "Google": 50000000,
    "Meta": 116000000,
    "Microsoft": 110000,
    "BlackRock": 100000000
  },
  "funding_breakdown": {
    "Google.org skilled trades commitment (2026 total, includes the earlier $10M/$15.75M electrical grants)": 50000000,
    "Meta America's Workforce Academy (first-year investment)": 115000000,
    "Meta Be Pro Be Proud partnership ($1M+)": 1000000,
    "Microsoft Datacenter Academy local grants (CVCC $50,000 + DMACC $60,000 scholarships)": 110000,
    "BlackRock Foundation Future Builders Initiative": 100000000
  },
  "excluded_from_total": [
    "Google Iowa $500,000 curriculum sub-grant (subsumed in the $50M national commitment)",
    "Google.org $10M (2025) and $15.75M (early 2025) etA awards (subsumed in the $50M total)",
    "Meta $1 billion Future Is For Everyone Fund (community fund, not a trades-training program)",
    "Meta $10M AEP Neighbor to Neighbor commitment (energy bill assistance)",
    "Atlanta Technical College $800,000+ lab funding (via ATC Foundation and industry partners, not solely Microsoft)",
    "AWS Mississippi $250,000 InCommunities Fund and $200,000 equipment/curriculum donation (community/K-12 education)",
    "AWS $2 million Eastern Oregon community contribution",
    "Google $15M Virginia Energy Impact Fund (energy affordability)",
    "Vantage $175M Port Washington water/sewer infrastructure investment"
  ],
  "methodology": "Every value in this dataset was taken from a page fetched during research on 2026-08-24. Values that could not be confirmed from a fetched page are written as 'n.a.'. Hyperscalers covered: Microsoft, Google, Meta, AWS/Amazon, Apple, Oracle/OpenAI, Equinix, Digital Realty, Vantage, plus BlackRock as a closely related AI-infrastructure investor.",
  "workers_actual": 56020,
  "workers_projected": 422700,
  "regional_impact": [
    {
      "code": "VA",
      "name": "Virginia",
      "driver": "The largest US data center market: Google supports local electrical apprenticeship training facilities via etA aiming to add capacity for 2,741 apprentices by 2030 while building data centers backed by 500+ MW of new energy capacity; AWS ran its first Virginia Information Infrastructure Pre-Apprenticeship cohort (20 students) near its Fredericksburg-area data centers, and Google's STAR construction track runs at Northern Virginia Community College; Microsoft's Critical Environment Training Lab operates in South Hill.",
      "sources": [
        "https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/virginia-community-investments/",
        "https://www.fxbgadvance.com/p/germanna-graduates-first-amazon-web",
        "https://datacenters.google/workforce-development-and-education/",
        "https://blogs.microsoft.com/on-the-issues/2026/01/13/community-first-ai-infrastructure/",
        "https://finance.yahoo.com/technology/ai/articles/ai-companies-spending-265-million-173148687.html"
      ]
    },
    {
      "code": "TX",
      "name": "Texas",
      "driver": "Google's etA initiative targets existing electrical workers plus 1,700+ apprentices by 2030, raising the projected new-electrician pipeline nearly 110%, explicitly because 'new energy and data center investments create significant demand for electrical jobs'; BlackRock's Future Builders put $30M into Texas electrical training (12,000+ Texans) for its Texas data centers; Meta's AWA pilot includes a Houston training center and a Texas data center projected at 1,800+ peak construction workers; Dallas is cited as a market where workers jump employers for data center signing bonuses.",
      "sources": [
        "https://datacenters.google/google-announces-initiative-to-boost-texas-electrician-workforce/",
        "https://www.blackrock.com/corporate/newsroom/media/press-releases/philanthropic-skilled-trades-initiative-texas",
        "https://dailyreporter.com/2026/06/25/meta-abc-construction-career-academy-data-center-growth/",
        "https://www.reuters.com/business/meta-funds-skilled-trades-jobs-program-ai-data-center-buildout-2026-06-08/",
        "https://finance.yahoo.com/technology/ai/articles/ai-companies-spending-265-million-173148687.html"
      ]
    },
    {
      "code": "OH",
      "name": "Ohio",
      "driver": "Central Ohio is a multi-hyperscaler hotspot: Google's STAR program at Columbus State Community College feeds workers into the New Albany Google data center build; Meta's America's Workforce Academy has a Columbus pilot training center and Be Pro Be Proud activations across Columbus and Bowling Green schools; AWS ran a central Ohio pre-apprenticeship pilot and a fusion splicing workshop at Tolles Career & Technical Center in Plain City.",
      "sources": [
        "https://www.nbc4i.com/news/local-news/columbus/columbus-state-google-program-offers-new-starts-including-to-grandmother-of-17/",
        "https://dailyreporter.com/2026/06/25/meta-abc-construction-career-academy-data-center-growth/",
        "https://datacenters.atmeta.com/be-pro-be-proud/",
        "https://www.fxbgadvance.com/p/germanna-graduates-first-amazon-web",
        "https://www.aboutamazon.com/news/aws/amazon-data-center-investment-community-impact"
      ]
    },
    {
      "code": "IA",
      "name": "Iowa",
      "driver": "Google's $7B Iowa cloud/AI investment (Cedar Rapids data center plus Council Bluffs expansion) came with a $500,000 etA program targeting a 95% increase in the state's electrical workforce pipeline and 700+ apprentices; Microsoft's Datacenter Academy at DMACC West Des Moines serves its West Des Moines campuses; Apple's Waukee data center has 150 skilled tradespeople on site.",
      "sources": [
        "https://blog.google/feed/new-7-billion-investment-iowa/",
        "https://www.businessrecord.com/google-announces-initiative-to-increase-electrical-workers-in-iowa/",
        "https://www.dmacc.edu/west/microsoft-data-center.html",
        "https://www.dsmpartnership.com/stories/investing-in-community-apples-growing-impact-in-waukee"
      ]
    },
    {
      "code": "WI",
      "name": "Wisconsin",
      "driver": "Microsoft's Fairwater AI datacenter in Mount Pleasant peaked at more than 3,000 construction workers (electricians, plumbers, pipefitters, carpenters, iron and steel workers, concrete workers, earth movers) with a second $4B datacenter following, supported by the state's first Datacenter Academy at Gateway Technical College in Racine; Vantage's $15B Lighthouse campus in Port Washington (Oracle/OpenAI-backed) is being built with Wisconsin Building Trades Council union labor; Meta is building a $1B campus in Beaver Dam but Wisconsin residents must travel out of state for AWA training.",
      "sources": [
        "https://blogs.microsoft.com/on-the-issues/2025/09/18/made-in-wisconsin-the-worlds-most-powerful-ai-datacenter/",
        "https://dailyreporter.com/2025/10/31/vantage-union-labor-data-center-wisconsin/",
        "https://dailyreporter.com/2026/06/25/meta-abc-construction-career-academy-data-center-growth/"
      ]
    },
    {
      "code": "MI",
      "name": "Michigan",
      "driver": "The Oracle/OpenAI/Related Digital Stargate 'The Barn' campus in Saline Township is being built under a NABTU National Maintenance Agreement with 14 signatory unions and is expected to employ more than 2,500 tradespeople and apprentices; the site is drawing hundreds of electricians.",
      "sources": [
        "https://nabtu.org/press_releases/north-americas-building-trades-unions-announce-data-center-agreement/",
        "https://finance.yahoo.com/technology/ai/articles/ai-companies-spending-265-million-173148687.html"
      ]
    },
    {
      "code": "LA",
      "name": "Louisiana",
      "driver": "Meta's Richland Parish data center anchors an AWA pilot training center in Baton Rouge, with the Richland Parish Chamber of Commerce as a community partner.",
      "sources": [
        "https://dailyreporter.com/2026/06/25/meta-abc-construction-career-academy-data-center-growth/",
        "https://about.fb.com/news/2026/06/americas-workforce-academy-free-skilled-trade-training/",
        "https://finance.yahoo.com/technology/ai/articles/meta-dangles-1-billion-fund-191500878.html"
      ]
    },
    {
      "code": "IN",
      "name": "Indiana",
      "driver": "Meta's AWA pilot includes an Indianapolis training center and Boone County Economic Development Corporation as a partner, with the first AWA cohort training in Indiana; Microsoft signed a Datacenter Academy MOU with Ivy Tech Community College (Valparaiso); Google's STAR program operates in Indiana; AWS runs fusion splicing workshops with Ivy Tech.",
      "sources": [
        "https://dailyreporter.com/2026/06/25/meta-abc-construction-career-academy-data-center-growth/",
        "https://datacenters.atmeta.com/2026/07/americas-workforce-academy-building-the-skilled-trades-pipeline/",
        "https://www.ivytech.edu/about-ivy-tech/newsroom/news/all-locations/2026/microsoft-mou/",
        "https://datacenters.google/workforce-development-program",
        "https://www.aboutamazon.com/news/aws/amazon-data-center-investment-community-impact"
      ]
    },
    {
      "code": "GA",
      "name": "Georgia",
      "driver": "Microsoft's Datacenter Academy opened at Atlanta Technical College with more than $800,000 in facility funding; Google's STAR program operates in Georgia with etA pathways to journeyman status; Reuters identifies Georgia among the states with persistent shortages of electricians for data-center and power-project construction.",
      "sources": [
        "https://www.atlantatech.edu/atlanta-technical-college-celebrates-launch-of-one-of-georgias-first-datacenter-academy-lab-facilities/",
        "https://datacenters.google/workforce-development-and-education/",
        "https://www.reuters.com/business/energy/data-center-rush-worsens-shortages-power-grid-workers--reeii-2026-05-18/"
      ]
    },
    {
      "code": "NC",
      "name": "North Carolina",
      "driver": "Reuters identifies both Carolinas among the states where data-center and power-project growth has created persistent shortages of qualified craft workers, especially electricians; Microsoft funded a $50,000 Datacenter Academy expansion at Catawba Valley Community College in Hickory, NC; Meta runs Be Pro Be Proud activations in its North Carolina data center region; Google's STAR construction program graduates cohorts in South Carolina.",
      "sources": [
        "https://www.reuters.com/business/energy/data-center-rush-worsens-shortages-power-grid-workers--reeii-2026-05-18/",
        "https://cvcc.edu/cvcc-receives-microsoft-grant/",
        "https://datacenters.atmeta.com/be-pro-be-proud/",
        "https://datacenters.google/workforce-development-and-education/"
      ]
    },
    {
      "code": "SC",
      "name": "South Carolina",
      "driver": "Reuters identifies both Carolinas among the states where data-center and power-project growth has created persistent shortages of qualified craft workers, especially electricians; Microsoft funded a $50,000 Datacenter Academy expansion at Catawba Valley Community College in Hickory, NC; Meta runs Be Pro Be Proud activations in its North Carolina data center region; Google's STAR construction program graduates cohorts in South Carolina.",
      "sources": [
        "https://www.reuters.com/business/energy/data-center-rush-worsens-shortages-power-grid-workers--reeii-2026-05-18/",
        "https://cvcc.edu/cvcc-receives-microsoft-grant/",
        "https://datacenters.atmeta.com/be-pro-be-proud/",
        "https://datacenters.google/workforce-development-and-education/"
      ]
    },
    {
      "code": "MS",
      "name": "Mississippi",
      "driver": "AWS's $10B Mississippi investment came with fiber-optic technician certification courses at Holmes and Hinds Community Colleges, workshops in Richland, Madison and Jackson, a $250,000 InCommunities Fund and $200,000 in donated equipment/curriculum matched by Accelerate Mississippi; AWS also piloted its Information Infrastructure Pre-Apprenticeship in Jackson.",
      "sources": [
        "https://www.aboutamazon.com/news/aws/aws-training-programs-sustainability-projects-mississippi",
        "https://www.fxbgadvance.com/p/germanna-graduates-first-amazon-web"
      ]
    },
    {
      "code": "WY",
      "name": "Wyoming",
      "driver": "Microsoft's Cheyenne expansion will require thousands of skilled tradespeople during construction (nearly 2,000 have already worked on the existing footprint), supported by the Datacenter Academy at Laramie County Community College, which has trained over 1,000 students since 2019.",
      "sources": [
        "https://news.microsoft.com/source/2026/04/14/microsoft-announces-intent-to-expand-datacenter-operations-in-cheyenne-accelerating-innovation-and-economic-growth/"
      ]
    },
    {
      "code": "NE",
      "name": "Nebraska",
      "driver": "Google runs a multi-week STAR fiber-optics program in Omaha in its data center community, and its Iowa/Nebraska investments include Foodbank for the Heartland support.",
      "sources": [
        "https://datacenters.google/workforce-development-and-education/",
        "https://datacenters.google/workforce-development-program"
      ]
    },
    {
      "code": "AZ",
      "name": "Arizona",
      "driver": "Microsoft operates Datacenter Academy programs (3- and 9-month) with Estrella Mountain Community College and Glendale Community College serving its Phoenix datacenters; Microsoft also runs water leak-detection partnerships in the greater Phoenix area.",
      "sources": [
        "https://local.microsoft.com/blog/build-the-skills-to-work-at-our-microsoft-phoenix-datacenters/",
        "https://blogs.microsoft.com/on-the-issues/2026/01/13/community-first-ai-infrastructure/"
      ]
    },
    {
      "code": "WA",
      "name": "Washington",
      "driver": "Microsoft's Central Washington datacenters are served by a 12-24 month Datacenter Academy with Big Bend Community College, plus the Quincy Water Reuse Utility; AWS has run fiber splicing training at Joint Base Lewis-McChord near Tacoma.",
      "sources": [
        "https://local.microsoft.com/blog/build-the-skills-to-work-at-our-microsoft-central-washington-datacenters/",
        "https://blogs.microsoft.com/on-the-issues/2026/01/13/community-first-ai-infrastructure/",
        "https://aws.amazon.com/government-education/workforce-development/aws-fiber-optic-fusion-splicing/"
      ]
    },
    {
      "code": "NM",
      "name": "New Mexico",
      "driver": "Meta deploys Be Pro Be Proud mobile skilled-trades workshops in its data center regions in these states (Sumner County Schools, TN named).",
      "sources": [
        "https://datacenters.atmeta.com/be-pro-be-proud/",
        "https://datacenters.atmeta.com/investing-in-people/"
      ]
    },
    {
      "code": "TN",
      "name": "Tennessee",
      "driver": "Meta deploys Be Pro Be Proud mobile skilled-trades workshops in its data center regions in these states (Sumner County Schools, TN named).",
      "sources": [
        "https://datacenters.atmeta.com/be-pro-be-proud/",
        "https://datacenters.atmeta.com/investing-in-people/"
      ]
    },
    {
      "code": "IL",
      "name": "Illinois",
      "driver": "Meta deploys Be Pro Be Proud mobile skilled-trades workshops in its data center regions in these states (Sumner County Schools, TN named).",
      "sources": [
        "https://datacenters.atmeta.com/be-pro-be-proud/",
        "https://datacenters.atmeta.com/investing-in-people/"
      ]
    }
  ],
  "initiatives": [
    {
      "id": "init-1",
      "company": "Microsoft",
      "company_short": "MSFT",
      "program_name": "Microsoft-NABTU skilled trades partnership (Memorandum of Understanding), part of Microsoft's Community-First AI Infrastructure Initiative",
      "partner_org": "North America's Building Trades Unions (NABTU); TradesFutures (NABTU-affiliated 501(c)(3)); NABTU Joint Apprenticeship Training Committees (JATCs)",
      "announcement_date": "2026-01-13",
      "funding_amount_usd": null,
      "funding_status": "not-disclosed",
      "funding_status_detail": "not disclosed",
      "training_centers": [
        {
          "name": "NABTU-affiliated JATC training centers across all 50 U.S. states and Canada (no individual centers named in sources)",
          "city": "",
          "state": ""
        }
      ],
      "states": [],
      "national": true,
      "program_type": "both",
      "program_type_detail": "both (registered apprenticeship + journey-level upskilling + pre-apprenticeship via TradesFutures)",
      "trade_types": [
        "electrical",
        "iron/steel",
        "pipefitting",
        "construction"
      ],
      "workers_trained": 1500,
      "workers_trained_type": "projected",
      "workers_trained_detail": "1,500 instructors trained to date (actual); AI literacy courses aimed at 'millions of skilled craft professionals' (goal); TradesFutures apprenticeship-readiness program enrolls more than 7,700 people annually",
      "data_center_relevance": "high",
      "data_center_relevance_note": "the MOU explicitly establishes a cooperative framework to build a pipeline of skilled workers in the regions where Microsoft is building datacenters, and lets NABTU identify qualified contractors to bid on Microsoft infrastructure projects",
      "notes": "No dollar figure attached to the Microsoft-NABTU MOU in any fetched source. NABTU notes its unions and signatory contractors already invest over $2.5B annually in their own training system.",
      "source_urls": [
        {
          "url": "https://blogs.microsoft.com/on-the-issues/2026/01/13/community-first-ai-infrastructure/",
          "supports": "Jan 13, 2026 announcement; 'new and first-of-its-kind partnership between Microsoft and North America's Building Trades Unions (NABTU)'; cooperative framework for a skilled-worker pipeline in datacenter regions; NABTU to identify qualified contractor partners"
        },
        {
          "url": "https://nabtu.org/press_releases/nabtu-and-microsoft-expand-nationwide-initiative-to-strengthen-ai-training-and-career-pathways-across-the-skilled-trades/",
          "supports": "April 21, 2026 expanded partnership; 1,500 instructors already trained; training centers in all 50 states and Canada; TradesFutures operates in 34 states and enrolls 7,700+ people annually; AI education integrated into the JATC model; electricians, ironworkers, pipefitters named"
        },
        {
          "url": "https://news.microsoft.com/source/2026/04/14/microsoft-announces-intent-to-expand-datacenter-operations-in-cheyenne-accelerating-innovation-and-economic-growth/",
          "supports": "Trades named for Microsoft datacenter build-out: electricians, plumbers, pipefitters, carpenters, structural iron and steel workers, concrete workers, earth movers"
        }
      ]
    },
    {
      "id": "init-2",
      "company": "Microsoft",
      "company_short": "MSFT",
      "program_name": "Microsoft Datacenter Academy (Datacenter Community / community skilling program)",
      "partner_org": "Community colleges and vocational schools; Laramie County Community College (LCCC); Southside Virginia Community College; Southern Virginia Higher Education Center; Gateway Technical College; Des Moines Area Community College (DMACC) West; Estrella Mountain Community College; Glendale Community College; Big Bend Community College; Atlanta Technical College; Catawba Valley Community College; Ivy Tech Community College",
      "announcement_date": "2019 (Cheyenne academy launch); program expansion re-committed 2026-01-13",
      "funding_amount_usd": 110000,
      "funding_status": "committed",
      "funding_status_detail": "committed (only local grants disclosed: $50,000 to Catawba Valley Community College Foundation and $60,000 in DMACC student scholarships; national program funding not disclosed)",
      "training_centers": [
        {
          "name": "Datacenter Academy at Laramie County Community College",
          "city": "Cheyenne",
          "state": "WY"
        },
        {
          "name": "Critical Environment Training Lab (SoVA) with Southside Virginia Community College and Southern Virginia Higher Education Center",
          "city": "South Hill",
          "state": "VA"
        },
        {
          "name": "Wisconsin's first Datacenter Academy at Gateway Technical College",
          "city": "Racine",
          "state": "WI"
        },
        {
          "name": "Microsoft Datacenter Academy at DMACC West Campus",
          "city": "West Des Moines",
          "state": "IA"
        },
        {
          "name": "Microsoft Datacenter Academy at Estrella Mountain Community College",
          "city": "Phoenix metro",
          "state": "AZ"
        },
        {
          "name": "Microsoft Datacenter Academy at Glendale Community College",
          "city": "Phoenix metro",
          "state": "AZ"
        },
        {
          "name": "Microsoft Datacenter Academy at Big Bend Community College",
          "city": "Central Washington",
          "state": "WA"
        },
        {
          "name": "Microsoft Datacenter Academy at Atlanta Technical College",
          "city": "Atlanta",
          "state": "GA"
        },
        {
          "name": "Valley Datacenter Academy at Catawba Valley Community College",
          "city": "Hickory",
          "state": "NC"
        },
        {
          "name": "Data Center Academy at Ivy Tech Community College",
          "city": "Valparaiso",
          "state": "IN"
        }
      ],
      "states": [
        "WY",
        "VA",
        "WI",
        "IA",
        "AZ",
        "WA",
        "GA",
        "NC",
        "IN"
      ],
      "national": false,
      "program_type": "not-disclosed",
      "program_type_detail": "not disclosed as apprenticeship - community/technical skilling with internships and apprenticeships at Microsoft datacenters, 3-month to ~20-month tracks",
      "trade_types": [
        "DC operations",
        "HVAC",
        "electrical",
        "mechanical",
        "iron/steel",
        "low-voltage",
        "fiber",
        "IT"
      ],
      "workers_trained": 1000,
      "workers_trained_type": "projected",
      "workers_trained_detail": "Over 1,000 students trained at the Cheyenne (LCCC) academy since 2019 (actual); Gateway Technical College academy training 'more than 1,000 students in five years' (goal)",
      "data_center_relevance": "high",
      "data_center_relevance_note": "trains for datacenter operations and critical-environment roles after construction is complete rather than for construction trades, but is explicitly sited in Microsoft datacenter communities and Brad Smith ties it to 'AI infrastructure is driving demand for skilled trades nationwide'",
      "notes": "The $800,000 backing the Atlanta Technical College lab came through the ATC Foundation and industry partners, not solely Microsoft, so it is excluded from the disclosed-funding total.",
      "source_urls": [
        {
          "url": "https://blogs.microsoft.com/on-the-issues/2026/01/13/community-first-ai-infrastructure/",
          "supports": "Microsoft will 'expand our Datacenter Academy program'; partnership with local community colleges and vocational schools; Critical Environment Training Lab (SoVA) opened 2024 in South Hill with Southside Virginia Community College and Southern Virginia Higher Education Center using donated decommissioned datacenter equipment"
        },
        {
          "url": "https://careers.microsoft.com/v2/global/en/datacenteracademy.html",
          "supports": "Program structure: five core pillars (curriculum alignment, scholarships, mentorship, simulation labs, work experience); roles include Datacenter Technician, Datacenter Inventory and Asset Technician, Critical Environment Technician; internships typically 16 weeks in the Americas"
        },
        {
          "url": "https://news.microsoft.com/source/2026/04/14/microsoft-announces-intent-to-expand-datacenter-operations-in-cheyenne-accelerating-innovation-and-economic-growth/",
          "supports": "Datacenter Academy launched 2019 with Laramie County Community College in Cheyenne, WY; includes working laboratory; 'has trained over 1,000 students'"
        },
        {
          "url": "https://blogs.microsoft.com/on-the-issues/2025/09/18/made-in-wisconsin-the-worlds-most-powerful-ai-datacenter/",
          "supports": "Wisconsin's first Datacenter Academy at Gateway Technical College, Racine, WI, training 'more than 1,000 students in five years'"
        },
        {
          "url": "https://www.dmacc.edu/west/microsoft-data-center.html",
          "supports": "Microsoft Datacenter Academy at DMACC West Des Moines, IA; Microsoft providing $60,000 in student scholarships; equipment donation; infrastructure cabling, copper and fiber optic testing"
        },
        {
          "url": "https://cvcc.edu/cvcc-receives-microsoft-grant/",
          "supports": "Catawba Valley Community College Foundation received a $50,000 contribution from Microsoft for the Valley Datacenter Academy (Hickory, N.C. dateline)"
        },
        {
          "url": "https://www.atlantatech.edu/atlanta-technical-college-celebrates-launch-of-one-of-georgias-first-datacenter-academy-lab-facilities/",
          "supports": "Microsoft Datacenter Academy at Atlanta Technical College, Atlanta, GA, opened May 20; backed by more than $800,000 in funding through the ATC Foundation and industry partners (TA Realty / TA Digital Group); Microsoft scholarships cover tuition, books, fees, certification testing"
        },
        {
          "url": "https://www.ivytech.edu/about-ivy-tech/newsroom/news/all-locations/2026/microsoft-mou/",
          "supports": "Ivy Tech Community College (Valparaiso, Ind.) signed MOU with Microsoft for a Data Center Academy; Brad Smith: 'AI infrastructure is driving demand for skilled trades nationwide'"
        },
        {
          "url": "https://local.microsoft.com/blog/build-the-skills-to-work-at-our-microsoft-phoenix-datacenters/",
          "supports": "Datacenter Academy 3-month and 9-month programs in Phoenix with Estrella Mountain Community College and Glendale Community College"
        },
        {
          "url": "https://local.microsoft.com/blog/build-the-skills-to-work-at-our-microsoft-central-washington-datacenters/",
          "supports": "Datacenter Academy 12- to 24-month programs with Big Bend Community College in Central Washington"
        }
      ]
    },
    {
      "id": "init-3",
      "company": "Google",
      "company_short": "Google",
      "program_name": "Google.org electrical workforce grant to the electrical training ALLIANCE (etA) - initial $10M electrician training commitment",
      "partner_org": "electrical training ALLIANCE (etA); International Brotherhood of Electrical Workers (IBEW); National Electrical Contractors Association (NECA)",
      "announcement_date": "2025-04-30",
      "funding_amount_usd": 10000000,
      "funding_status": "committed",
      "funding_status_detail": "committed (Reuters describes it as a $10M grant / financial commitment; IBEW Local 177 characterizes it as a pledge)",
      "training_centers": [],
      "states": [],
      "national": true,
      "program_type": "both",
      "program_type_detail": "both - apprenticeship expansion plus retraining/upskilling of the existing electrical workforce",
      "trade_types": [
        "electrical"
      ],
      "workers_trained": 100000,
      "workers_trained_type": "projected",
      "workers_trained_detail": "Goal: train 100,000 electrical workers and 30,000 new apprentices; etA aims to increase the electrical workforce pipeline by 70% within five years (all targets, not actuals)",
      "data_center_relevance": "high",
      "data_center_relevance_note": "Reuters frames the grant as a response to power-project delays and electricity shortages driven by AI data center demand; IBEW Local 177 ties it to 'unprecedented power demands from data centers supporting artificial intelligence expansion'",
      "notes": "IBEW reporting puts the early-2025 etA award at $15.75M, larger than the $10M figure reported at announcement; both are subsumed in Google's later $50M total, which is counted once in the aggregate.",
      "source_urls": [
        {
          "url": "https://www.reuters.com/sustainability/boards-policy-regulation/google-funding-electrician-training-ai-power-crunch-intensifies-2025-04-30/",
          "supports": "April 30, 2025; $10 million grant directed to nonprofit organizations for electrical workers, allocated through the electrical training Alliance, IBEW and NECA; could enhance the supply of electricians by 70% by the decade's end; framed against AI data center electricity demand"
        },
        {
          "url": "https://blog.google/company-news/outreach-and-initiatives/google-org/electrical-workers-ai-training/",
          "supports": "Google.org funding to etA supports an effort to train 100,000 electrical workers and 30,000 new apprentices; etA program 'aims to increase the electrical workforce pipeline by 70% within the next five years'; AI Essentials course for apprentices"
        },
        {
          "url": "https://ibew177.org/content/whats-behind-googles-10m-pledge-train-electricians",
          "supports": "$10M pledge; 100,000 electrical workers and 30,000 new apprentices over five years; ties demand to data centers supporting AI expansion"
        },
        {
          "url": "https://ibew.org/google-funding-means-more-jobs-training-for-ibew-members/",
          "supports": "Google.org awarded the electrical training ALLIANCE $15.75 million in early 2025; etA is the official training partner of IBEW and NECA"
        }
      ]
    },
    {
      "id": "init-4",
      "company": "Google",
      "company_short": "Google",
      "program_name": "Google.org $50M skilled trades commitment ('Growing the next generation of American workers')",
      "partner_org": "TradesFutures (created by NABTU); electrical training ALLIANCE (etA) / IBEW / NECA; United Association's International Training Fund (ITF) with Mechanical Contractors Association of America (MCAA); International Training Institute for the Sheet Metal and Air Conditioning Industry (SMART / SMACNA); Manufacturing Institute; 14 labor unions and four trade/contractor associations",
      "announcement_date": "2026-06-11",
      "funding_amount_usd": 50000000,
      "funding_status": "committed",
      "funding_status_detail": "committed ('a $50 million commitment from Google.org'); Axios and NYT-derived reporting also describe it as a pledge",
      "training_centers": [
        {
          "name": "etA local electrical apprenticeship training facilities (unnamed) plus an etA mobile training center pilot for 'high-demand infrastructure hubs'",
          "city": "",
          "state": ""
        },
        {
          "name": "Northern Virginia Community College (Google STAR construction track)",
          "city": "Northern Virginia",
          "state": "VA"
        },
        {
          "name": "Columbus State Community College (Google STAR)",
          "city": "Columbus",
          "state": "OH"
        }
      ],
      "states": [
        "VA",
        "TX",
        "IA",
        "OH",
        "IN",
        "NE",
        "SC",
        "GA"
      ],
      "national": false,
      "program_type": "both",
      "program_type_detail": "both - pre-apprenticeship/apprenticeship-readiness (TradesFutures, STAR) plus registered apprenticeship expansion and journey-level upskilling",
      "trade_types": [
        "electrical",
        "plumbing",
        "pipefitting",
        "welding",
        "HVAC",
        "sheet metal",
        "carpentry",
        "mechanical",
        "fiber"
      ],
      "workers_trained": 300000,
      "workers_trained_type": "projected",
      "workers_trained_detail": "Goal: help train 300,000 skilled workers for high-demand careers; Google.org 'national commitment' to prepare over 300,000 skilled tradespeople; per NYT-derived reporting, goal of raising IBEW-network yearly apprenticeship intake from 19,500 to 30,000 over three years",
      "data_center_relevance": "high",
      "data_center_relevance_note": "Google explicitly frames the funding around building AI and energy infrastructure, and its state-level versions are announced at data center campuses",
      "notes": "Roughly $20M of the $50M is designated for electricians through the electrical training ALLIANCE (IBEW/NECA).",
      "source_urls": [
        {
          "url": "https://blog.google/company-news/outreach-and-initiatives/google-org/skilled-trades/",
          "supports": "June 11, 2026; '$50 million commitment from Google.org'; 'helping train 300,000 skilled workers'; more than 20 states; partners TradesFutures (NABTU), electrical training ALLIANCE (IBEW/NECA), UA International Training Fund with MCAA, International Training Institute (SMART/SMACNA), Manufacturing Institute; funding supports 14 labor unions and four trade/contractor associations; etA mobile training center pilot for high-demand infrastructure hubs"
        },
        {
          "url": "https://datacenters.google/workforce-development-and-education/",
          "supports": "'In 2026, Google expanded its skilled trades funding to $50 million'; funding to train over 300,000 Americans for infrastructure roles in construction, electrical, plumbing and sheet metal work; Skilled Trades and Readiness (STAR) Program tracks in construction and fiber optics; Northern Virginia Community College STAR construction cohort; STAR in Omaha, NE (fiber optics), South Carolina, Georgia, Missouri"
        },
        {
          "url": "https://ibew.org/google-funding-means-more-jobs-training-for-ibew-members/",
          "supports": "Google.org is providing $50 million for skilled construction training programs, with roughly $20 million designated to train electricians via the Electrical Training Alliance; other recipients include sheet metal workers, plumbers, pipefitters, welders and service techs, and NABTU's TradesFutures"
        },
        {
          "url": "https://finance.yahoo.com/technology/ai/articles/ai-companies-spending-265-million-173148687.html",
          "supports": "Google's $50M pledge directed at IBEW and its contractor network; goal to grow yearly apprenticeship intake from 19,500 to 30,000 over three years for data center construction markets Google has identified"
        },
        {
          "url": "https://www.businessinsider.com/google-meta-invest-trades-training-ai-data-center-boom-2026-6",
          "supports": "Google announced a $50 million investment in skilled-trades training programs across the US in fields critical to building AI and energy infrastructure; partners include the International Training Institute for sheet metal and air conditioning"
        }
      ]
    },
    {
      "id": "init-5",
      "company": "Google",
      "company_short": "Google",
      "program_name": "Google data center community workforce programs: Skilled Trades and Readiness (STAR) Program and state electrician-pipeline initiatives (Iowa, Texas, Virginia)",
      "partner_org": "electrical training ALLIANCE (etA); Columbus State Community College; Northern Virginia Community College; Iowa Department of Education and Iowa's community colleges; Ohio Means Jobs; Holder Construction; local trade organizations and nonprofits",
      "announcement_date": "2025-05-30 (Iowa, with $7B investment); 2025-11-14 (Texas); 2026-06-11 (Virginia)",
      "funding_amount_usd": 500000,
      "funding_status": "committed",
      "funding_status_detail": "committed (Iowa: Google providing $500,000 for training curriculum; Texas and Virginia amounts not disclosed separately)",
      "training_centers": [
        {
          "name": "Columbus State Community College STAR program",
          "city": "Columbus",
          "state": "OH"
        },
        {
          "name": "Northern Virginia Community College STAR construction program",
          "city": "Northern Virginia",
          "state": "VA"
        },
        {
          "name": "Google STAR fiber optics program",
          "city": "Omaha",
          "state": "NE"
        },
        {
          "name": "etA local electrical apprenticeship training facilities in Virginia (unnamed)",
          "city": "",
          "state": ""
        }
      ],
      "states": [
        "IA",
        "TX",
        "VA",
        "OH",
        "IN",
        "NE",
        "SC"
      ],
      "national": false,
      "program_type": "pre-apprenticeship",
      "program_type_detail": "pre-apprenticeship / short-term bootcamp (STAR, five weeks, paid) feeding registered apprenticeships; plus apprenticeship-capacity expansion via etA",
      "trade_types": [
        "electrical",
        "carpentry",
        "mechanical",
        "plumbing",
        "fiber",
        "safety",
        "construction"
      ],
      "workers_trained": 700,
      "workers_trained_type": "projected",
      "workers_trained_detail": "Iowa: more than 700 apprentices included in training, goal of increasing the state's electrical workforce pipeline by 95%; Texas: goal to train existing electrical workers plus more than 1,700 apprentices by 2030, raising the projected pipeline of new electricians by nearly 110%; Virginia: etA facilities aim to add capacity for 2,741 additional apprentices by 2030; Ohio: first STAR cohort of 14 graduates (actual)",
      "data_center_relevance": "high",
      "data_center_relevance_note": "Iowa initiative announced at the Cedar Rapids data center construction site alongside a $7B cloud/AI infrastructure investment; Ohio STAR explicitly funnels workers into the New Albany Google data center build; Texas initiative cites 'new energy and data center investments create significant demand for electrical jobs'",
      "notes": "The $500,000 Iowa curriculum figure is a state-level sub-grant and is excluded from the aggregate total to avoid double-counting against Google's $50M national commitment.",
      "source_urls": [
        {
          "url": "https://blog.google/feed/new-7-billion-investment-iowa/",
          "supports": "May 30, 2025; additional $7 billion in Iowa cloud and AI infrastructure over two years; new Cedar Rapids data center and Council Bluffs expansion; 'innovative program with the electrical training ALLIANCE (etA)' to increase the electrical workforce pipeline in Iowa by 95%"
        },
        {
          "url": "https://www.businessrecord.com/google-announces-initiative-to-increase-electrical-workers-in-iowa/",
          "supports": "Google providing $500,000, investing in training curriculum; more than 700 apprentices; 95% increase goal; partners Iowa Department of Education and Iowa's community colleges; announced at the Big Cedar Industrial Park data center construction site in Cedar Rapids"
        },
        {
          "url": "https://datacenters.google/google-announces-initiative-to-boost-texas-electrician-workforce/",
          "supports": "Texas initiative with etA funded by Google.org's AI Opportunity Fund; train existing electrical workers and more than 1,700 apprentices by 2030; increase the projected pipeline of new electricians by nearly 110%; 'New energy and data center investments create significant demand for electrical jobs'"
        },
        {
          "url": "https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/virginia-community-investments/",
          "supports": "June 11, 2026; Google supporting local electrical apprenticeship training facilities via etA, which aim to increase training capacity to support an additional 2,741 apprentices by 2030; national Google.org commitment to prepare over 300,000 skilled tradespeople; $15M Energy Impact Fund; over 500 MW of new energy capacity tied to Virginia data centers"
        },
        {
          "url": "https://datacenters.google/workforce-development-program",
          "supports": "STAR is a short-term, bootcamp-style paid training program with construction and fiber-optics tracks, currently available in Indiana, Missouri, Nebraska, Ohio, South Carolina and Virginia; construction track covers carpentry, mechanical, electrical trades, blueprint reading and math"
        },
        {
          "url": "https://www.nbc4i.com/news/local-news/columbus/columbus-state-google-program-offers-new-starts-including-to-grandmother-of-17/",
          "supports": "Google and Columbus State Community College graduated the first STAR class of 14; five-week course paid at $15/hour; trades include electrical, plumbing and carpentry; designed to funnel workers into building the new Google data center in New Albany; one graduate entered a full-time pre-apprentice carpentry position with Holder Construction"
        }
      ]
    },
    {
      "id": "init-6",
      "company": "Meta",
      "company_short": "Meta",
      "program_name": "Be Pro Be Proud partnership (Meta data center community skilled-trades outreach)",
      "partner_org": "Be Pro Be Proud; OhioX; Bowling Green State University; Columbus City Schools Fort Hayes Career Center; Otsego Local School District; Eastwood Local Schools; Bowling Green City Schools; Sumner County Schools (TN); local construction contractors",
      "announcement_date": "2023 (partnership start; New Albany, OH activation in 2025)",
      "funding_amount_usd": 1000000,
      "funding_status": "committed",
      "funding_status_detail": "committed ('$1M+' to support the Be Pro Be Proud partnership; described as support, not explicitly a pledge)",
      "training_centers": [
        {
          "name": "Fort Hayes Career Center (Columbus City Schools)",
          "city": "Columbus",
          "state": "OH"
        },
        {
          "name": "Downtown High School (Columbus City Schools)",
          "city": "Columbus",
          "state": "OH"
        },
        {
          "name": "Bowling Green State University",
          "city": "Bowling Green",
          "state": "OH"
        },
        {
          "name": "Otsego Local School District",
          "city": "OH",
          "state": ""
        },
        {
          "name": "Eastwood Local Schools",
          "city": "OH",
          "state": ""
        },
        {
          "name": "Bowling Green City Schools",
          "city": "Bowling Green",
          "state": "OH"
        },
        {
          "name": "Sumner County Schools",
          "city": "TN",
          "state": ""
        },
        {
          "name": "Be Pro Be Proud mobile workshops (Meta Quest VR headsets and simulators) deployed in Meta data center regions",
          "city": "",
          "state": ""
        }
      ],
      "states": [
        "OH",
        "TN",
        "NM",
        "IL",
        "TX",
        "NC"
      ],
      "national": false,
      "program_type": "pre-apprenticeship",
      "program_type_detail": "pre-apprenticeship exposure / career exploration (not described as a registered apprenticeship)",
      "trade_types": [
        "electrical",
        "welding",
        "iron/steel",
        "pipefitting",
        "carpentry",
        "fiber",
        "heavy equipment",
        "trucking",
        "manufacturing",
        "construction"
      ],
      "workers_trained": 54000,
      "workers_trained_type": "actual",
      "workers_trained_detail": "54,000+ students introduced to immersive hands-on skilled trades experiences (actual); 15+ activations in data center communities since 2023 (actual); nearly 300 Columbus City Schools students in 2025 and nearly 150 students from Otsego/Eastwood/Bowling Green districts (actual)",
      "data_center_relevance": "high",
      "data_center_relevance_note": "Meta states it has over 30,000 skilled trade jobs to construct its data centers and typically more than 1,000 construction workers on site at peak; the mobile workshops are deployed specifically in Meta data center communities",
      "notes": "The separate $10 million Meta commitment to AEP's Neighbor to Neighbor program in Ohio is an energy-bill assistance commitment, not workforce funding.",
      "source_urls": [
        {
          "url": "https://datacenters.atmeta.com/be-pro-be-proud/",
          "supports": "Partnership since 2023; '$1M+' to support the Be Pro Be Proud partnership; 54,000+ students introduced; 15+ activations in data center communities since 2023; nearly 300 students at Fort Hayes Career Center/Downtown High School (2025) and nearly 150 from Otsego, Eastwood and Bowling Green schools; trades include steel work, pipefitting, electrical, carpentry, fiber, welding, heavy equipment; 'Meta has over 30,000 skilled trade jobs to construct our data centers'; 'more than 1,000 construction workers on a Meta data center site' at peak; states New Mexico, Tennessee, Ohio, Illinois, Texas, North Carolina"
        },
        {
          "url": "https://datacenters.atmeta.com/investing-in-people/",
          "supports": "Be Pro, Be Proud mobile workshops in Meta data center regions of North Carolina, Ohio, New Mexico, Tennessee, Texas and Illinois; Meta supported 30 data center communities in 2025; Data Center Community Action Grants"
        }
      ]
    },
    {
      "id": "init-7",
      "company": "Meta",
      "company_short": "Meta",
      "program_name": "America's Workforce Academy (AWA)",
      "partner_org": "Associated Builders and Contractors (ABC); CBRE; National Urban League; National Center for Construction Education and Research (NCCER) - credential; US Hispanic Chamber of Commerce; STRIVE; Boone County Economic Development Corporation (IN); Richland Parish Chamber of Commerce (LA); Workforce Solutions Borderplex (TX); Ohio Chamber of Commerce; North America's Building Trades Unions (NABTU) - added August 2026",
      "announcement_date": "2026-06-08",
      "funding_amount_usd": 115000000,
      "funding_status": "committed",
      "funding_status_detail": "committed (initial first-year investment; described as an ongoing multi-year effort and 'the largest private-sector commitment to the skilled trades with a job guarantee in American history')",
      "training_centers": [
        {
          "name": "AWA pilot training center",
          "city": "Baton Rouge",
          "state": "LA"
        },
        {
          "name": "AWA pilot training center",
          "city": "Indianapolis",
          "state": "IN"
        },
        {
          "name": "AWA pilot training center",
          "city": "Houston",
          "state": "TX"
        },
        {
          "name": "AWA pilot training center",
          "city": "Columbus",
          "state": "OH"
        }
      ],
      "states": [
        "LA",
        "IN",
        "TX",
        "OH"
      ],
      "national": true,
      "program_type": "pre-apprenticeship",
      "program_type_detail": "short-term paid pre-employment training (five weeks) with guaranteed job placement; being extended into NABTU registered apprenticeship pathways",
      "trade_types": [
        "fiber",
        "electrical",
        "mechanical",
        "plumbing",
        "welding",
        "safety",
        "construction"
      ],
      "workers_trained": 5000,
      "workers_trained_type": "projected",
      "workers_trained_detail": "Goal: 'thousands' of workers; approximately 5,000 people initially enrolled in the month-long course per NYT-derived reporting; first cohort began hands-on training in Ohio and Indiana (actual, no size disclosed)",
      "data_center_relevance": "high",
      "data_center_relevance_note": "built to supply Meta's AI data center buildout; graduates receive guaranteed full-time offers from general contractors working on Meta's data center construction",
      "notes": "Business Insider reported the program as '$250 million'; every primary and wire source fetched states $115 million as the first-year investment, so $115M is used.",
      "source_urls": [
        {
          "url": "https://about.fb.com/news/2026/06/americas-workforce-academy-free-skilled-trade-training/",
          "supports": "America's Workforce Academy; $115 million initial first-year investment; 'largest private-sector commitment to the skilled trades with a job guarantee in American history'; partners National Urban League, ABC, CBRE; community partners incl. Boone County EDC (IN), Richland Parish Chamber (LA), Workforce Solutions Borderplex (TX), Ohio Chamber of Commerce; NCCER credential; 2026 pilot in Louisiana, Ohio, Indiana and Texas; trades incl. fiber technicians, welders, plumbers, electricians; Meta VP Rachel Peterson on AI infrastructure workforce demand; Level-Up received 35,000 applications in its first seven days"
        },
        {
          "url": "https://datacenters.atmeta.com/2026/07/americas-workforce-academy-building-the-skilled-trades-pipeline/",
          "supports": "July 22, 2026 update; launched in June; $115 million initial first-year investment; dedicated fiber technician and construction-ready tracks; first cohort began hands-on training in Ohio and Indiana; operating in LA, OH, IN, TX in 2026 with additional locations expected in 2027; partners CBRE and ABC"
        },
        {
          "url": "https://www.reuters.com/business/meta-funds-skilled-trades-jobs-program-ai-data-center-buildout-2026-06-08/",
          "supports": "June 8, 2026 - Meta investing $115 million to stand up America's Workforce Academy for data center technician jobs; ABC expects to train 'thousands of people'; guaranteed full-time offers with general contractors working on Meta's data center buildout; Meta has pledged $600 billion in U.S. infrastructure and jobs over three years"
        },
        {
          "url": "https://dailyreporter.com/2026/06/25/meta-abc-construction-career-academy-data-center-growth/",
          "supports": "2026 pilot training centers in Baton Rouge LA, Indianapolis IN, Houston TX and Columbus OH; five-week course content: safety, intro to electrical, mechanical, plumbing and fiber connectivity systems, OSHA certifications, construction math, drawings, material handling, rigging; participants paid while training; Meta pays tuition, airfare and lodging; guaranteed job on a Meta partner construction site"
        },
        {
          "url": "https://finance.yahoo.com/technology/ai/articles/ai-companies-spending-265-million-173148687.html",
          "supports": "Meta putting $115 million toward the first year of an ongoing multi-year effort, initially enrolling around 5,000 people in a month-long course with transportation and housing covered; participants move directly onto job sites with Meta contractors"
        },
        {
          "url": "https://www.constructiondive.com/news/meta-partners-NABTU-trades-construction-data-centers/827786/",
          "supports": "Meta-NABTU partnership will develop registered apprenticeship programs related to data center construction, working alongside the previously announced Workforce Academy"
        },
        {
          "url": "https://swacca.org/meta-nabtu-announce-skilled-trades-partnership-for-ai-infrastructure-buildout/",
          "supports": "America's Workforce Academy will work with NABTU's Registered Apprenticeship programs; $115 million Workforce Academy partnership with ABC and CBRE; Meta's Future Is For Everyone Fund will invest in workers and communities supporting its AI infrastructure buildout"
        }
      ]
    },
    {
      "id": "init-8",
      "company": "Meta",
      "company_short": "Meta",
      "program_name": "Meta-NABTU skilled trades partnership for AI infrastructure buildout",
      "partner_org": "North America's Building Trades Unions (NABTU)",
      "announcement_date": "2026-08-12",
      "funding_amount_usd": null,
      "funding_status": "not-disclosed",
      "funding_status_detail": "not disclosed",
      "training_centers": [],
      "states": [],
      "national": true,
      "program_type": "apprenticeship",
      "program_type_detail": "apprenticeship (registered apprenticeship programs related to data center construction)",
      "trade_types": [
        "construction"
      ],
      "workers_trained": null,
      "workers_trained_type": "not-disclosed",
      "workers_trained_detail": "n.a.",
      "data_center_relevance": "high",
      "data_center_relevance_note": "Meta will work with NABTU to develop registered apprenticeship programs specifically related to data center construction",
      "notes": "Announcement date taken from Construction Dive/SWACCA coverage dated August 12-13, 2026.",
      "source_urls": [
        {
          "url": "https://www.constructiondive.com/news/meta-partners-NABTU-trades-construction-data-centers/827786/",
          "supports": "Meta working with NABTU to develop registered apprenticeship programs related to data center construction; 'the country's AI infrastructure buildout is driving unprecedented demand for highly skilled tradespeople'; July 18 national day of protest saw 142 protests across 42 states"
        },
        {
          "url": "https://swacca.org/meta-nabtu-announce-skilled-trades-partnership-for-ai-infrastructure-buildout/",
          "supports": "Meta and NABTU announced a new partnership connecting workers with training, credentials and career pathways in the skilled trades as AI and data center construction drives growing workforce demand; America's Workforce Academy to work with NABTU's Registered Apprenticeship programs"
        }
      ]
    },
    {
      "id": "init-9",
      "company": "Meta",
      "company_short": "Meta",
      "program_name": "LevelUp Fiber Technician Pathway (with CBRE)",
      "partner_org": "CBRE; Meta's network of construction contractors",
      "announcement_date": "2026-04-20",
      "funding_amount_usd": null,
      "funding_status": "not-disclosed",
      "funding_status_detail": "not disclosed (program is free to participants)",
      "training_centers": [
        {
          "name": "Multiple CBRE-operated training centers across the U.S., opening starting summer 2026 (not individually named)",
          "city": "",
          "state": ""
        }
      ],
      "states": [],
      "national": true,
      "program_type": "pre-apprenticeship",
      "program_type_detail": "short-term technical training (four weeks), not described as an apprenticeship",
      "trade_types": [
        "fiber",
        "IT"
      ],
      "workers_trained": null,
      "workers_trained_type": "not-disclosed",
      "workers_trained_detail": "Goal: 'thousands' of fiber technicians recruited and trained; 35,000 applications received in the first seven days (actual)",
      "data_center_relevance": "high",
      "data_center_relevance_note": "explicitly created to address 'the growing shortage of fiber technicians needed to build next-generation data center infrastructure'; graduates work at Meta data center construction sites via Meta's contractor network",
      "notes": "LevelUp is the predecessor/companion track to America's Workforce Academy's fiber technician pathway.",
      "source_urls": [
        {
          "url": "https://about.fb.com/news/2026/04/meta-cbre-invest-in-american-jobs-new-fiber-technician-training-program/",
          "supports": "LevelUp Fiber Technician Pathway announced with CBRE; free four-week program; multi-year initiative; fiber technicians 'play a key role in building our world-class data centers'; graduates may work at Meta US construction sites through Meta's contractor network; more than 30,000 skilled trade jobs and more than 5,000 permanent operational roles supported since 2010; 27 US data centers operated or being built"
        },
        {
          "url": "https://www.cbre.com/press-releases/meta-and-cbre-announce-levelup",
          "supports": "April 20, 2026; CBRE will establish and run multiple training centers across the U.S. starting summer; multiyear program to recruit and train thousands of fiber technicians; addresses 'the growing shortage of fiber technicians needed to build next-generation data center infrastructure'"
        },
        {
          "url": "https://about.fb.com/news/2026/06/americas-workforce-academy-free-skilled-trade-training/",
          "supports": "Level-Up received 35,000 applications in its first seven days"
        }
      ]
    },
    {
      "id": "init-10",
      "company": "AWS",
      "company_short": "AWS",
      "program_name": "AWS Information Infrastructure Pre-Apprenticeship Program (I2PA) and Information Infrastructure Workshop for Educators (I2W)",
      "partner_org": "Germanna Community College (VA); Blue Mountain Community College (OR); OSHA (safety certification); AWS construction and data center contractors",
      "announcement_date": "2024 (first Virginia cohort graduated November 2024; central Ohio pilot ran weeks earlier; Jackson, MS pilot followed)",
      "funding_amount_usd": null,
      "funding_status": "not-disclosed",
      "funding_status_detail": "not disclosed",
      "training_centers": [
        {
          "name": "Germanna Community College",
          "city": "Locust Grove / Fredericksburg area, VA",
          "state": ""
        },
        {
          "name": "Central Ohio pilot site (unnamed)",
          "city": "",
          "state": ""
        },
        {
          "name": "Jackson, MS pilot site (unnamed)",
          "city": "",
          "state": ""
        }
      ],
      "states": [
        "VA",
        "OH",
        "MS"
      ],
      "national": false,
      "program_type": "pre-apprenticeship",
      "program_type_detail": "pre-apprenticeship (paid, four weeks, ~30 hours/week)",
      "trade_types": [
        "electrical",
        "HVAC",
        "mechanical",
        "fiber",
        "DC operations",
        "safety"
      ],
      "workers_trained": 20,
      "workers_trained_type": "actual",
      "workers_trained_detail": "20 students in the first Virginia cohort and 20 in the central Ohio cohort (actual); five Ohio graduates employed within two weeks of graduation (actual)",
      "data_center_relevance": "high",
      "data_center_relevance_note": "curriculum built by AWS and its contractors for the workers needed to construct and operate data centers, sited in AWS data center regions",
      "notes": "No dollar figure disclosed for the pre-apprenticeship program in any fetched source.",
      "source_urls": [
        {
          "url": "https://www.aboutamazon.com/news/aws/amazon-data-center-investment-community-impact",
          "supports": "Information Infrastructure Pre-Apprenticeship Program: paid four-week program covering job safety, electrical systems, mechanical systems, fiber and data center operations; curriculum built by AWS and its contractors; Information Infrastructure Workshop (I2W) for Educators is a one-day workshop; Germanna Community College (Locust Grove, Virginia) participation; Blue Mountain Community College (Oregon) partnership; International Information Infrastructure Pre-Apprenticeship (I2PA) referenced"
        },
        {
          "url": "https://www.fxbgadvance.com/p/germanna-graduates-first-amazon-web",
          "supports": "AWS Information Infrastructure Pre-Apprenticeship course - four weeks, 30 hours per week, hands-on instruction in electrical, HVAC, mechanical and data center operations; 20 Fredericksburg-area students were the first in Virginia to graduate; central Ohio pilot completed weeks earlier; five of 20 Ohio students had jobs two weeks after graduation; another pilot launched in Jackson, Mississippi; offered with Germanna Community College; OSHA safety certification"
        }
      ]
    },
    {
      "id": "init-11",
      "company": "AWS",
      "company_short": "AWS",
      "program_name": "AWS Fiber Optic Fusion Splicing Certificate Course",
      "partner_org": "Sumitomo Electric Lightwave; Northern Virginia Community College (NOVA); Tolles Career & Technical Center (OH); Holmes Community College (MS); Hinds Community College (MS); Ivy Tech Community College (IN); Joint Base Lewis-McChord (WA); AWS fiber vendors Team Fishel and NTI",
      "announcement_date": "2024 (local fusion splicing workshops launched)",
      "funding_amount_usd": null,
      "funding_status": "not-disclosed",
      "funding_status_detail": "not disclosed (course is no-cost to participants)",
      "training_centers": [
        {
          "name": "Northern Virginia Community College",
          "city": "Woodbridge",
          "state": "VA"
        },
        {
          "name": "Tolles Career & Technical Center",
          "city": "Plain City",
          "state": "OH"
        },
        {
          "name": "Holmes Community College",
          "city": "MS (Richland, MS workshop site)",
          "state": ""
        },
        {
          "name": "Hinds Community College",
          "city": "MS",
          "state": ""
        },
        {
          "name": "Ivy Tech Community College",
          "city": "IN",
          "state": ""
        },
        {
          "name": "Madison Career & Technical Center",
          "city": "Madison",
          "state": "MS"
        },
        {
          "name": "Bean Path",
          "city": "Jackson",
          "state": "MS"
        },
        {
          "name": "Joint Base Lewis-McChord",
          "city": "Tacoma",
          "state": "WA"
        }
      ],
      "states": [
        "VA",
        "OH",
        "MS",
        "IN",
        "WA"
      ],
      "national": false,
      "program_type": "pre-apprenticeship",
      "program_type_detail": "short-term certificate training (two days), not an apprenticeship",
      "trade_types": [
        "fiber"
      ],
      "workers_trained": null,
      "workers_trained_type": "not-disclosed",
      "workers_trained_detail": "n.a. (no participant totals disclosed); course leads directly to employment with AWS fiber vendors including Team Fishel and NTI",
      "data_center_relevance": "medium",
      "data_center_relevance_note": "sited in AWS data center communities and feeds AWS fiber vendors, but the AWS program page does not explicitly cite data center construction demand",
      "notes": "The Mississippi figures ($250,000 InCommunities Fund; $200,000 equipment/curriculum donation) are community/education investments rather than trades-pipeline funding and are excluded from the aggregate total.",
      "source_urls": [
        {
          "url": "https://aws.amazon.com/government-education/workforce-development/aws-fiber-optic-fusion-splicing/",
          "supports": "AWS Fiber Optic Fusion Splicing Certificate Course hosted in collaboration with Sumitomo Electric Lightwave; two-day course; no-cost; NOVA (Woodbridge, Virginia) and Joint Base Lewis-McChord (Tacoma, Washington) host sites; no explicit tie to data center construction demand stated"
        },
        {
          "url": "https://www.aboutamazon.com/news/aws/amazon-data-center-investment-community-impact",
          "supports": "Local fusion splicing workshops launched in 2024 at Tolles Tech & Career Center (Plain City, Ohio), Holmes Community College (Mississippi), Ivy Tech Community College (Indiana), Kerry College (Ireland) and University Anchieta (Brazil); leads directly to employment with AWS fiber vendors including Team Fishel and NTI"
        },
        {
          "url": "https://www.aboutamazon.com/news/aws/aws-training-programs-sustainability-projects-mississippi",
          "supports": "Free AWS workshops the week of May 20 at Holmes Community College (Richland, Mississippi), Madison Career & Technical Center (Madison, Mississippi) and Bean Path (Jackson, Mississippi); Fiber Employer Fair on May 23; Holmes and Hinds Community Colleges partnering with AWS on fiber-optic technician certification courses; $250,000 Mississippi AWS InCommunities Fund; $200,000 in donated equipment, curriculum and training with a $200,000 match from Accelerate Mississippi; AWS plans to invest $10 billion in Mississippi"
        }
      ]
    },
    {
      "id": "init-12",
      "company": "AWS",
      "company_short": "AWS",
      "program_name": "AWS Work-Based Learning Program (WBLP) and Data Center Skills Training Program",
      "partner_org": "n.a. (no external partners named on the AWS pages fetched)",
      "announcement_date": "n.a.",
      "funding_amount_usd": null,
      "funding_status": "not-disclosed",
      "funding_status_detail": "not disclosed",
      "training_centers": [],
      "states": [],
      "national": true,
      "program_type": "pre-apprenticeship",
      "program_type_detail": "12-month paid work-based training (not labelled an apprenticeship)",
      "trade_types": [
        "DC operations",
        "fiber",
        "low-voltage"
      ],
      "workers_trained": null,
      "workers_trained_type": "not-disclosed",
      "workers_trained_detail": "n.a.",
      "data_center_relevance": "medium",
      "data_center_relevance_note": "trains and promotes workers into AWS data center operations roles, but the pages fetched make no explicit link to construction demand",
      "notes": "No union partnership for AWS data center trades was found in any fetched source.",
      "source_urls": [
        {
          "url": "https://amazon.jobs/content/en/teams/amazon-web-services/data-centers/work-based-learning-program",
          "supports": "AWS Work-Based Learning Program is a 12-month paid training program combining web-based instruction, instructor-led sessions and on-the-job training; roles include data center operations, install (fiber and copper cabling, rack installation), decommissioning and logistics; graduates are promoted into their chosen roles at an AWS data center; no partners, funding, states or worker totals stated"
        },
        {
          "url": "https://aws.amazon.com/about-aws/global-infrastructure/community-engagement/",
          "supports": "AWS In Communities lists a Data Center Skills Training Program, Data Center Operations (DCO) and Data Center Engineering Operations (DCEO) training; no community colleges or unions named; $2 million contribution to organizations in Eastern Oregon"
        }
      ]
    },
    {
      "id": "init-13",
      "company": "Apple",
      "company_short": "Apple",
      "program_name": "n.a. - no Apple data center or facilities skilled-trades workforce program confirmed",
      "partner_org": "n.a.",
      "announcement_date": "n.a.",
      "funding_amount_usd": null,
      "funding_status": "not-disclosed",
      "funding_status_detail": "not disclosed",
      "training_centers": [],
      "states": [
        "IA"
      ],
      "national": false,
      "program_type": "not-disclosed",
      "program_type_detail": "n.a.",
      "trade_types": [
        "construction"
      ],
      "workers_trained": null,
      "workers_trained_type": "not-disclosed",
      "workers_trained_detail": "n.a. - 150 skilled tradespeople on site constructing the Waukee, IA data center (actual employment, not training)",
      "data_center_relevance": "low",
      "data_center_relevance_note": "no evidence found of an Apple-funded skilled-trades training pipeline tied to data center construction",
      "notes": "Searched Apple newsroom and Iowa/Arizona data center coverage; no direct evidence of an Apple skilled-trades or union construction workforce initiative. Apple's Detroit Manufacturing Academy and $500B U.S. commitment are manufacturing/IT-focused, not data center trades, and were not confirmed in a fetched source for this dataset.",
      "source_urls": [
        {
          "url": "https://www.dsmpartnership.com/stories/investing-in-community-apples-growing-impact-in-waukee",
          "supports": "Apple's Waukee, Iowa data center: '150 skilled tradespeople already on-site constructing the physical space'; $6 million contributed to the City of Waukee's Public Improvement Fund; no training, apprenticeship or workforce-development program named"
        },
        {
          "url": "https://www.dmacc.edu/west/microsoft-data-center.html",
          "supports": "Central Iowa data center context: Microsoft operates two West Des Moines datacenters with a third planned, Facebook operates in Altoona and 'Apple plans to build one near Waukee' - the Datacenter Academy is a Microsoft, not Apple, program"
        }
      ]
    },
    {
      "id": "init-14",
      "company": "BlackRock",
      "company_short": "BlackRock",
      "program_name": "BlackRock Future Builders Initiative",
      "partner_org": "The ProTech Skills Institute (IBEW-NECA electrical training ALLIANCE); Independent Electrical Contractors (IEC) of Dallas; Texas State Technical College (TSTC); Dallas College / Dallas College Foundation; North America's Building Trades Unions (separate AI Infrastructure Partnership workforce agreement)",
      "announcement_date": "2026-03-11 (initiative launch); 2026-05-06 (first Texas grants)",
      "funding_amount_usd": 100000000,
      "funding_status": "committed",
      "funding_status_detail": "committed (The BlackRock Foundation's $100 million Future Builders Initiative; $30 million awarded to Texas over three years)",
      "training_centers": [
        {
          "name": "The ProTech Skills Institute BlackRock Foundation Electrical College",
          "city": "statewide",
          "state": "TX"
        },
        {
          "name": "Independent Electrical Contractors of Dallas (BlackRock SafeSTART pre-apprenticeship)",
          "city": "Dallas",
          "state": "TX"
        },
        {
          "name": "Texas State Technical College",
          "city": "Waco",
          "state": "TX"
        },
        {
          "name": "Dallas College",
          "city": "Dallas",
          "state": "TX"
        }
      ],
      "states": [
        "TX"
      ],
      "national": true,
      "program_type": "both",
      "program_type_detail": "both - pre-apprenticeship (14-day bootcamp; 80-hour IEC SafeSTART) feeding union and IEC registered apprenticeships, plus journeyman exam prep and an AAS degree program",
      "trade_types": [
        "electrical",
        "plumbing",
        "HVAC"
      ],
      "workers_trained": 12000,
      "workers_trained_type": "projected",
      "workers_trained_detail": "Goal: more than 12,000 Texans trained for electrical careers; national goal of reaching 50,000 workers over five years",
      "data_center_relevance": "high",
      "data_center_relevance_note": "funding is explicitly aimed at the skilled-trades pipeline for AI/data center infrastructure, with the Texas grants tied to BlackRock's Texas data centers",
      "notes": "Included as a closely related non-hyperscaler AI infrastructure investor commitment. Fortune/ENR reporting of the March 11, 2026 launch ($100M over five years, 50,000 workers) was seen in search results; the 50,000-worker figure is supported here by the fetched aggregate reporting context rather than the BlackRock release.",
      "source_urls": [
        {
          "url": "https://www.blackrock.com/corporate/newsroom/media/press-releases/philanthropic-skilled-trades-initiative-texas",
          "supports": "May 6, 2026, Waco, TX: The BlackRock Foundation's $100 million Future Builders Initiative awarded first grants; $30 million philanthropic investment in Texas over three years; more than 12,000 Texans to be trained for electrical careers; grantees ProTech Skills Institute (IBEW-NECA electrical training ALLIANCE) statewide pre-apprenticeship with 14-day bootcamp, IEC of Dallas SafeSTART (80 hours) with on-ramp to IEC registered apprenticeship, Texas State Technical College (Waco) new AAS in Electrical Technology, Dallas College financial education for apprentices; thousands of additional licensed electricians needed in Texas"
        },
        {
          "url": "https://finance.yahoo.com/technology/ai/articles/ai-companies-spending-265-million-173148687.html",
          "supports": "BlackRock contributed $100 million to expand skilled-trades training for its data centers in Texas; Meta, Google and BlackRock collectively committing more than $265 million"
        },
        {
          "url": "https://swacca.org/meta-nabtu-announce-skilled-trades-partnership-for-ai-infrastructure-buildout/",
          "supports": "NABTU signed an agreement with BlackRock and the AI Infrastructure Partnership on workforce planning for the AI infrastructure project pipeline of BlackRock portfolio companies, focused on expanding registered apprenticeship utilization and using responsible contractors committed to project labor agreements"
        }
      ]
    },
    {
      "id": "init-15",
      "company": "Oracle/OpenAI",
      "company_short": "Stargate",
      "program_name": "Stargate Michigan labor agreement under the NABTU-OpenAI Memorandum of Understanding (National Maintenance Agreement)",
      "partner_org": "North America's Building Trades Unions (14 signatory affiliated skilled trade unions); Michigan State Building and Construction Trades Council; Related Digital; Walbridge (general contractor); OpenAI; Oracle",
      "announcement_date": "2026-04-20",
      "funding_amount_usd": null,
      "funding_status": "not-disclosed",
      "funding_status_detail": "not disclosed",
      "training_centers": [],
      "states": [
        "MI"
      ],
      "national": false,
      "program_type": "apprenticeship",
      "program_type_detail": "apprenticeship (union registered apprenticeship utilization under a project labor framework)",
      "trade_types": [
        "iron/steel",
        "heavy equipment",
        "plumbing",
        "pipefitting",
        "concrete",
        "HVAC",
        "mechanical",
        "construction"
      ],
      "workers_trained": 2500,
      "workers_trained_type": "projected",
      "workers_trained_detail": "Project expected to employ more than 2,500 tradespeople and apprentices (projected)",
      "data_center_relevance": "high",
      "data_center_relevance_note": "the agreement governs construction of the Stargate 'The Barn' AI data center campus and is the first data center built under the NABTU-OpenAI MOU",
      "notes": "This is a project labor / apprenticeship-utilization agreement rather than a funded training program.",
      "source_urls": [
        {
          "url": "https://nabtu.org/press_releases/north-americas-building-trades-unions-announce-data-center-agreement/",
          "supports": "April 20, 2026: labor agreement to build the Oracle and OpenAI Stargate campus ('The Barn') in Saline Township, Michigan under the National Maintenance Agreement with 14 signatory affiliated skilled trade unions; first data center built under NABTU and OpenAI's MOU; project expected to employ more than 2,500 tradespeople and apprentices; work includes framing, installing steel, operating equipment, laying pipes, pouring concrete and building cooling systems"
        },
        {
          "url": "https://finance.yahoo.com/technology/ai/articles/ai-companies-spending-265-million-173148687.html",
          "supports": "The OpenAI facility under construction in Saline Township, Michigan is drawing hundreds of electricians and has been called the single largest investment ever made in Michigan"
        }
      ]
    },
    {
      "id": "init-16",
      "company": "Oracle/OpenAI",
      "company_short": "Stargate",
      "program_name": "Lighthouse campus partnership with the Wisconsin Building Trades Council",
      "partner_org": "Wisconsin Building Trades Council; Milwaukee Building and Construction Trades Council; City of Port Washington",
      "announcement_date": "2025-10-31",
      "funding_amount_usd": null,
      "funding_status": "not-disclosed",
      "funding_status_detail": "not disclosed",
      "training_centers": [],
      "states": [
        "WI",
        "WA"
      ],
      "national": false,
      "program_type": "apprenticeship",
      "program_type_detail": "apprenticeship (union labor commitment; no separately funded training program disclosed)",
      "trade_types": [
        "construction"
      ],
      "workers_trained": null,
      "workers_trained_type": "not-disclosed",
      "workers_trained_detail": "n.a.",
      "data_center_relevance": "high",
      "data_center_relevance_note": "commitment to use local union labor 'to the fullest extent possible' to build a $15 billion, 1+ GW AI data center campus",
      "notes": "No dollar amount for training was disclosed.",
      "source_urls": [
        {
          "url": "https://dailyreporter.com/2025/10/31/vantage-union-labor-data-center-wisconsin/",
          "supports": "October 31, 2025: Vantage Data Centers partnered with the Wisconsin Building Trades Council to build the $15 billion Lighthouse data center campus in Port Washington, WI, relying on local union labor 'to the fullest extent possible'; four buildings on 500 acres using more than 1 gigawatt; Vantage will invest $175 million in water and sewer infrastructure; Oracle and OpenAI are investors; construction completion expected 2028"
        }
      ]
    },
    {
      "id": "init-17",
      "company": "Equinix",
      "company_short": "Equinix",
      "program_name": "Pathways to Tech; Global Operations Apprenticeships; Global Data Center Technician Training Coalition; Learning Labs",
      "partner_org": "Equinix Foundation; Generation (nonprofit); Cisco Systems (co-funder); schools, training providers and community organizations",
      "announcement_date": "2026-03-24",
      "funding_amount_usd": null,
      "funding_status": "not-disclosed",
      "funding_status_detail": "not disclosed",
      "training_centers": [
        {
          "name": "Learning Labs debuting in Dallas, TX (plus Paris and Singapore)",
          "city": "",
          "state": ""
        },
        {
          "name": "Education Day events at 20 Equinix locations worldwide",
          "city": "",
          "state": ""
        }
      ],
      "states": [],
      "national": true,
      "program_type": "apprenticeship",
      "program_type_detail": "apprenticeship / internship / early-career operations pathways plus technical reskilling",
      "trade_types": [
        "DC operations",
        "electrical",
        "IT"
      ],
      "workers_trained": 2000,
      "workers_trained_type": "actual",
      "workers_trained_detail": "Two-year Pathways to Tech pilot reached nearly 2,000 students (actual); hundreds of students to attend Education Days at 20 locations (planned)",
      "data_center_relevance": "medium",
      "data_center_relevance_note": "focused on data center operations and technician talent pipelines rather than construction trades",
      "notes": "",
      "source_urls": [
        {
          "url": "https://investor.equinix.com/news-events/press-releases/detail/1104/equinix-expands-investments-in-global-data-center-workforce",
          "supports": "March 24, 2026: Equinix workforce development expansion including Pathways to Tech (two-year pilot reached nearly 2,000 students), Global Operations Apprenticeships going live in Brazil, France, Germany, the United States, Singapore and the UK, the Global Data Center Technician Training Coalition with the Equinix Foundation, Generation and co-funder Cisco, and Learning Labs debuting in Dallas, Paris and Singapore; no dollar amounts stated"
        }
      ]
    },
    {
      "id": "init-18",
      "company": "Digital Realty",
      "company_short": "Dig.Realty",
      "program_name": "Talent development partnership with DCD Academy",
      "partner_org": "DCD Academy",
      "announcement_date": "2026-05-06",
      "funding_amount_usd": null,
      "funding_status": "not-disclosed",
      "funding_status_detail": "not disclosed",
      "training_centers": [],
      "states": [],
      "national": true,
      "program_type": "not-disclosed",
      "program_type_detail": "not disclosed (operations workforce talent development)",
      "trade_types": [
        "DC operations"
      ],
      "workers_trained": null,
      "workers_trained_type": "not-disclosed",
      "workers_trained_detail": "n.a.",
      "data_center_relevance": "low",
      "data_center_relevance_note": "operations upskilling for existing employees; no construction-trades or apprenticeship linkage stated",
      "notes": "No Nvidia skilled-trade workforce partnership was confirmed from a fetched primary source; Nvidia leadership commentary on trades demand is not a program.",
      "source_urls": [
        {
          "url": "https://www.digitalrealty.com/about/newsroom/press-releases/30191/digital-realty-expands-talent-development-opportunities-for-operations-workforce-through-partnership-with-dcd-academy",
          "supports": "May 6, 2026 press release: Digital Realty expands talent development opportunities for its operations workforce through a partnership with DCD Academy; no funding, states, trades, program type or worker numbers stated"
        }
      ]
    }
  ]
};
