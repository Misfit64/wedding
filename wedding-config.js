/**
 * ✦ WEDDING INVITATION CONFIGURATION ✦
 * 
 * Simply edit this file to customize the whole website!
 * Change names, dates, events, venues, photos, parent details, and social links.
 * When you save this file, the website updates automatically.
 */

window.WEDDING_CONFIG = {
    // ─── 1. COUPLE DETAILS ───────────────────────────────────────────────────
    couple: {
        // Bride details
        bride: {
            name: "Dimpal",
            fullName: "Dimpal Joshi",
            title: "The Bride",
            hindiTitle: "वधू परिचय",
            motherName: "Neeta Joshi",
            fatherName: "Naresh Joshi",
            cityState: "Gogunda, Rajasthan",
            instagram: {
                handle: "@dimpal.joshi",
                url: "https://instagram.com/dimpal.joshi"
            }
        },

        // Groom details
        groom: {
            name: "Kartik",
            fullName: "Kartik Paliwal",
            title: "The Groom",
            hindiTitle: "वर परिचय",
            motherName: "Pratabibai",
            fatherName: "Mithalal",
            cityState: "Chatiyakhedi, Rajasthan",
            instagram: {
                handle: "@kartik.paliwal",
                url: "https://instagram.com/kartik.paliwal"
            }
        },

        // Combined couple names & hashtag
        combinedNames: "Dimpal & Kartik",
        weddingHashtag: "#DimpalWedsKartik",
        pageTitle: "Dimpal & Kartik — Luxury Wedding Invitation"
    },

    // ─── 2. MAIN WEDDING DATE & COUNTDOWN TIMER ──────────────────────────────
    weddingDate: {
        // Formatted date displayed across the website
        displayDate: "11 December 2026",
        displayDay: "Friday",
        displayYear: "2026",

        // Exact timestamp for real-time countdown calculation
        // Format: YYYY-MM-DDTHH:MM:SS+Timezone (e.g. +05:30 for Indian Standard Time IST)
        countdownTarget: "2026-12-11T16:30:00+05:30",

        // Countdown card section headers
        countdownBadge: "✦ The Sacred Countdown ✦",
        countdownTitle: "Until Two Souls Become One",
        countdownSubtitle: "Counting Every Moment Until Forever"
    },

    // ─── 3. SACRED INVOCATIONS & TRADITIONAL BLESSINGS ────────────────────────
    invocations: {
        symbol: "ॐ",
        ganeshaHeading: "श्री गणेशाय नमः",
        ganeshaSubtitle: "With The Blessings Of Lord Ganesha",
        tagline: "शुभ विवाह ✦ मंगलम्",

        // Sacred Sanskrit Shloka
        shlokaLine1: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।",
        shlokaLine2: "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
        shlokaAttribution: "— श्री गणेशाय नमः",

        // Auspicious blessings
        familyBlessing: "सर्वे भवन्तु सुखिनः — May all be happy.",
        closingBlessing: "शुभं भवतु",
        footerBlessingLine: "With Auspicious Blessings"
    },

    // ─── 4. COVER OVERLAY & HERO SECTION ─────────────────────────────────────
    hero: {
        subtitle: "Celebrating Love & Tradition",
        title: "You Are Invited To Celebrate Love",
        ganeshaIconSrc: "images/ganesha.png",
        videoSrc: "video/wedding.mp4",
        coverPhoto: "images/couple/invite-cover.jpg",
        openButtonText: "Open Invitation"
    },

    // ─── 5. SCRATCH CARD (SAVE OUR DATE) ─────────────────────────────────────
    scratchCard: {
        badge: "✦ Save Our Date ✦",
        venueSummary: "Gogunda · Udaipur, Rajasthan",
        blessing: "शुभ विवाह ✦ मंगलम्",

        // Text embossed directly onto the scratchable golden foil
        foilTopPrompt: "✦  ROYAL WEDDING INVITATION  ✦",
        foilCenterTitle: "SCRATCH TO REVEAL",
        foilBottomPrompt: "✦  SWIPE TO UNLOCK SAVE THE DATE  ✦"
    },

    // ─── 6. OUR STORY ────────────────────────────────────────────────────────
    story: {
        subtitle: "How It All Began",
        title: "Our Story",
        introParagraph: "Some love stories are written in the stars — ours began with a single glance across a crowded room and has only grown more beautiful with every passing season.",
        portraitPhoto: "images/couple/hero-portrait.jpg",

        // Timeline milestones (Add, remove, or modify story chapters)
        timeline: [
            {
                title: "The Meeting",
                description: "Two families met — and two hearts quietly recognised each other."
            },
            {
                title: "The Knowing",
                description: "Slow conversations turned into the certainty of finding the right person."
            },
            {
                title: "The Promise",
                description: "With blessings all around, a connection became a forever promise."
            },
            {
                title: "Forever Begins",
                description: "Surrounded by love, the most beautiful chapter of our lives begins."
            }
        ]
    },

    // ─── 7. WEDDING CELEBRATIONS & CEREMONIES ─────────────────────────────────
    // Edit, reorder, add, or remove events as needed.
    events: [
        {
            name: "Tilak & Sagai",
            dayDate: "Sunday · 6 December 2026",
            time: "6:30 PM Onwards",
            subtitle1: "A Beautiful Beginning Of Love & Blessings",
            subtitle2: "A Traditional Auspicious Welcome & Sagan",
            venueName: "Shubh Shanti Parisar",
            address: "Gogunda, Udaipur, Rajasthan",
            dressCode: "Royal Ethnic / Traditional Kurta",
            mapUrl: "https://maps.google.com/?q=Gogunda+Udaipur+Rajasthan",
            image: "images/venues/tilak.png",
            icon: "lotus"
        },
        {
            name: "Mehndi",
            dayDate: "Wednesday · 9 December 2026",
            time: "4:00 PM Onwards",
            subtitle1: "Where Henna Tells Our Story",
            subtitle2: "An Afternoon Of Laughter, Folk Beats & Henna",
            venueName: "The Royal Courtyard",
            address: "Gogunda Palace Grounds, Udaipur, Rajasthan",
            dressCode: "Festive Green 💚",
            mapUrl: "https://maps.google.com/?q=Gogunda+Udaipur+Rajasthan",
            image: "images/venues/mehndi.png",
            icon: "shehnai"
        },
        {
            name: "Haldi",
            dayDate: "Thursday · 10 December 2026",
            time: "11:00 AM Onwards",
            subtitle1: "A Sacred Blessing Of Turmeric, Love & Radiant Beginnings",
            subtitle2: "Sunlit Courtyard Celebrations",
            venueName: "Poolside Lawns",
            address: "Heritage Resort, Gogunda, Udaipur, Rajasthan",
            dressCode: "Sunshine Yellow 💛",
            mapUrl: "https://maps.google.com/?q=Gogunda+Udaipur+Rajasthan",
            image: "images/venues/haldi.png",
            icon: "haldi"
        },
        {
            name: "Sangeet Sandhya",
            dayDate: "Thursday · 10 December 2026",
            time: "7:00 PM Onwards",
            subtitle1: "Two Families, One Dance Floor — An Evening Of Pure Joy",
            subtitle2: "A Night Of Music, Dance & Royal Revelry",
            venueName: "Grand Ball Pavilion",
            address: "Heritage Resort, Gogunda, Udaipur, Rajasthan",
            dressCode: "Indo-Western Glitz & Glamour ✨",
            mapUrl: "https://maps.google.com/?q=Gogunda+Udaipur+Rajasthan",
            image: "images/venues/sangeet.png",
            icon: "sangeet"
        },
        {
            name: "The Sacred Wedding",
            dayDate: "Friday · 11 December 2026",
            time: "7:00 PM Onwards (Baraat 6:00 PM · Pheras 9:00 PM)",
            subtitle1: "Where Two Hearts Become One",
            subtitle2: "The Auspicious Seven Vows Under The Starlit Mandap",
            venueName: "Heritage Palace & Resort",
            address: "Gogunda, Udaipur, Rajasthan",
            dressCode: "Royal Traditional Regalia",
            mapUrl: "https://maps.google.com/?q=Gogunda+Udaipur+Rajasthan",
            image: "images/venues/wedding.png",
            icon: "wedding"
        }
    ],

    // ─── 8. PHOTO GALLERY ────────────────────────────────────────────────────
    gallery: {
        subtitle: "Moments Together",
        title: "The Gallery",
        images: [
            {
                src: "images/couple/fort-view.jpeg",
                alt: "Bride and groom making memories",
                caption: "Bride and groom making memories · Fort View"
            },
            {
                src: "images/couple/couple.jpg",
                alt: "Dimpal & Kartik · Together Forever",
                caption: "Dimpal & Kartik · Together Forever"
            },
            {
                src: "images/couple/hero-portrait.jpg",
                alt: "Royal Heritage Moments",
                caption: "Royal Heritage Moments · Dimpal & Kartik"
            },
            {
                src: "images/couple/invite-cover.jpg",
                alt: "The Wedding Celebration Begins",
                caption: "The Wedding Celebration Begins"
            }
        ]
    },

    // ─── 9. MAIN VENUE & DIRECTIONS ──────────────────────────────────────────
    venue: {
        subtitle: "Find Your Way To Us",
        title: "The Venue",
        name: "Heritage Palace & Resort",
        address: "Gogunda · Udaipur, Rajasthan",
        directionsUrl: "https://maps.google.com/?q=Gogunda+Udaipur+Rajasthan",
        // Clean Google Maps iframe embed URL for Gogunda, Udaipur, Rajasthan
        mapEmbedUrl: "https://maps.google.com/maps?q=Gogunda%2C%20Udaipur%2C%20Rajasthan&t=&z=13&ie=UTF8&iwloc=&output=embed"
    },

    // ─── 10. RSVP / JOIN US INVITATION ───────────────────────────────────────
    rsvp: {
        blessingNote: "With the blessings of our families, we invite you to celebrate with us.",
        heading: "Please Join Us",
        message: "Your gracious presence and blessings will make our day truly unforgettable. We eagerly look forward to celebrating with you! ❤️"
    },

    // ─── 11. AUDIO & MUSIC ───────────────────────────────────────────────────
    audio: {
        src: "audio/wedding-music.mp3",
        autoplayOnOpen: true
    }
};
