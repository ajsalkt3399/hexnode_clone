// src/strings.ts
import adaptIcon from '../Assets/images/adapt.svg';
import zeroCompromiseIcon from '../Assets/images/zero_comprimise.svg';
import getMoreIcon from '../Assets/images/get_more.svg';
import unifiedPolicyIcon from '../Assets/images/unified_policy.svg';


const strings = {
    Banner: {
        heading: "Unified Endpoint Management",
        subheading: "Gain control and visibility over your endpoints",
        description: "Hexnode's UEM solution allows you to simplify endpoint management and free up IT. Focus on the big picture while Hexnode works on the details.",
    },
    BannerBottom: [
        {
            img: require('../Assets/images/idc_logo.png'),
            text: 'Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.',
            url: '#'
        },
        {
            img: require('../Assets/images/Gartner_logo.png'),
            text: 'Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022.',
            url: '#'
        },
        {
            img: require('../Assets/images/forrester_logo.png'),
            text: 'Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.',
            url: '#'
        }
    ],
    WhyHexnode: {
        title: "Why Hexnode?",
        cardData: [
            {
                id: 0,
                icon: adaptIcon,
                title: "Adapt to the new normal",
                description: "Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization’s protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all.",
                link: "https://www.hexnode.com/mobile-device-management/cloud/signup/"
            },
            {
                id: 1,
                icon: zeroCompromiseIcon,
                title: "Zero compromise security",
                description: "Enable full-fledged device encryption, data loss prevention, and all-rounded device security with Hexnode UEM. Be at the bleeding edge of device security without any compromises.",
                link: "https://www.hexnode.com/mobile-device-management/cloud/signup/"
            },
            {
                id: 2,
                icon: getMoreIcon,
                title: "Get more done with automation",
                description: "Hexnode UEM automation features help free up IT’s time spent on mundane and repetitive tasks. Do hours’ worth of work in a few minutes.",
                link: "https://www.hexnode.com/mobile-device-management/cloud/signup/"
            },
            {
                id: 3,
                icon: unifiedPolicyIcon,
                title: "Unified Policy Management",
                description: "Create a single policy through Hexnode and apply it on all the devices in your organization. Any platform or form factor, achieve single pane of glass management with Hexnode.",
                link: "https://www.hexnode.com/mobile-device-management/cloud/signup/"
            }
        ]
    }
    ,
    FeatureSection: {
        title: "Powerful endpoint management, built for the devices you choose",
       
        features: [
            {
                title: "Zero-touch Enrollment",
                description: "Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on.",
                image: require('../Assets/images/image_22.jpeg'),
                alt: "Zero-touch Enrollment with Hexnode UEM",
            },
            {
                title: "Automation",
                description: "Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports.",
                image: require('../Assets/images/image_28.jpeg'),
                alt: "Device management automation with Hexnode UEM",
            },
            {
                title: "Remote Access Management",
                description: "Hexnode UEM enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation.",
                image: require('../Assets/images/image_25.jpeg'),
                alt: "Remote access management with Hexnode UEM",
            },
            {
                title: "Endpoint Security and Compliance",
                description: "Hexnode helps you maintain compliance with international regulatory bodies and set up custom rules for compliance within your business for security purposes.",
                image: require('../Assets/images/image_26.jpeg'),
                alt: "Endpoint Security and Compliance with Hexnode UEM",
            },
            {
                title: "Integrations",
                description: "Hexnode's various integrations make it easy to fit into your current endpoint ecosystem. These integrations include Azure AD, Okta, Android Enterprise, Apple School and Business manager, and many more enterprise and technology integrations.",
                image: require('../Assets/images/image_32.jpeg'),
                alt: "Hexnode UEM Integrations",
            },
            {
                title: "App Management",
                description: "Simplify app management and distribution across your organization, ensuring smooth operation and adherence to policies.",
                image: require('../Assets/images/image_19.jpeg'),
                alt: "App Management with Hexnode UEM",
            },
        ],
    },
};

export default strings;
