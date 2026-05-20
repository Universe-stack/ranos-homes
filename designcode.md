
#Landing page
<!DOCTYPE html><html lang="en"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>TDGN | The Onward Collection</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&amp;family=Manrope:wght@200..800&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary": "#ffffff",
                        "tertiary": "#060605",
                        "surface-container": "#f0eded",
                        "on-error-container": "#93000a",
                        "surface-variant": "#e5e2e1",
                        "on-secondary-fixed-variant": "#7c2e00",
                        "on-background": "#1c1b1b",
                        "secondary-container": "#fc7127",
                        "surface-dim": "#dcd9d9",
                        "error-container": "#ffdad6",
                        "outline-variant": "#d3c3be",
                        "tertiary-fixed-dim": "#c8c6c2",
                        "on-primary-fixed-variant": "#57423a",
                        "on-tertiary": "#ffffff",
                        "surface-container-lowest": "#ffffff",
                        "primary-container": "#2c1b14",
                        "surface": "#fcf9f8",
                        "on-tertiary-fixed": "#1b1c19",
                        "surface-container-low": "#f6f3f2",
                        "on-primary-container": "#9b8177",
                        "inverse-surface": "#313030",
                        "on-secondary-container": "#5c2000",
                        "tertiary-fixed": "#e4e2dd",
                        "on-error": "#ffffff",
                        "inverse-on-surface": "#f3f0ef",
                        "tertiary-container": "#1f1f1c",
                        "on-tertiary-container": "#878783",
                        "primary-fixed-dim": "#dec0b5",
                        "primary": "#0f0401",
                        "surface-tint": "#715950",
                        "error": "#ba1a1a",
                        "primary-fixed": "#fcdcd0",
                        "surface-container-high": "#eae7e7",
                        "on-surface": "#1c1b1b",
                        "secondary-fixed-dim": "#ffb595",
                        "on-primary": "#ffffff",
                        "surface-bright": "#fcf9f8",
                        "on-primary-fixed": "#281811",
                        "secondary": "#a23f00",
                        "on-secondary-fixed": "#351000",
                        "surface-container-highest": "#e5e2e1",
                        "on-surface-variant": "#4f4441",
                        "background": "#fcf9f8",
                        "secondary-fixed": "#ffdbcd",
                        "inverse-primary": "#dec0b5",
                        "outline": "#817470",
                        "on-tertiary-fixed-variant": "#474744"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "section-gap": "8rem",
                        "gutter": "1.5rem",
                        "margin-edge": "4rem",
                        "container-max": "1440px",
                        "element-gap": "1rem"
                    },
                    "fontFamily": {
                        "headline-lg": ["Newsreader"],
                        "body-lg": ["Manrope"],
                        "body-md": ["Manrope"],
                        "headline-md": ["Newsreader"],
                        "section-title": ["Manrope"],
                        "display-xl": ["Newsreader"],
                        "label-sm": ["Manrope"]
                    },
                    "fontSize": {
                        "headline-lg": ["48px", {"lineHeight": "56px", "fontWeight": "400"}],
                        "body-lg": ["18px", {"lineHeight": "32px", "fontWeight": "400"}],
                        "body-md": ["16px", {"lineHeight": "28px", "fontWeight": "400"}],
                        "headline-md": ["32px", {"lineHeight": "40px", "fontWeight": "400"}],
                        "section-title": ["14px", {"lineHeight": "20px", "letterSpacing": "0.15em", "fontWeight": "600"}],
                        "display-xl": ["84px", {"lineHeight": "92px", "letterSpacing": "-0.02em", "fontWeight": "300"}],
                        "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500"}]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        ::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        @font-face {
            font-family: 'Font Awesome 6 Brands';
            src: url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-brands-400.woff2') format('woff2');
        }
        .fa-brands {
            font-family: 'Font Awesome 6 Brands';
        }
    </style>
</head>
<body class="bg-background text-on-background font-body-md overflow-x-hidden"><div class="bg-black text-white py-3 px-12 flex justify-between items-center text-[11px] font-medium tracking-wider sticky top-0 z-[60]">
<div class="flex-1"></div>
<div class="text-center">
        Online Floor Sample Sale • Additional 10% Off • April 8-May 8 • Explore Lookbooks <a class="underline" href="#">HERE</a>.
    </div>
<div class="flex-1 flex justify-end">
<span class="material-symbols-outlined text-sm cursor-pointer">close</span>
</div>
</div>
<header class="bg-white border-b border-gray-100 sticky top-[42px] z-50">
<div class="max-w-[1585px] mx-auto px-12">
<!-- Top Utility Bar -->
<div class="flex items-center justify-between py-6">
<!-- Search (Left) -->
<div class="flex items-center gap-3 text-[#1c1b1b]/50 hover:text-[#1c1b1b] cursor-pointer transition-colors flex-1">
<span class="material-symbols-outlined text-xl">search</span>
<span class="text-[14px] font-body-md">Search</span>
</div>
<!-- Logo (Center) -->
<div class="text-center">
<h1 class="text-4xl font-serif tracking-[0.15em] text-[#1c1b1b] select-none">RANOS</h1>
</div>
<!-- Account/Support (Right) -->
<div class="flex items-center justify-end gap-8 text-[14px] font-body-md text-[#1c1b1b] flex-1">
<div class="flex items-center gap-2 cursor-pointer">
<div class="flex flex-col w-5 h-3 justify-between border-[0.5px] border-gray-200">
<div class="bg-[#008751] h-full w-full"></div>
<div class="bg-white h-full w-full"></div>
<div class="bg-[#008751] h-full w-full"></div>
</div>
<span class="material-symbols-outlined text-[16px]">keyboard_arrow_down</span>
</div>
<a class="hover:opacity-70" href="#">Support</a>
<a class="hover:opacity-70" href="#">Log in | Join</a>
<div class="relative cursor-pointer group">
<span class="material-symbols-outlined text-2xl">shopping_bag</span>
<span class="absolute -top-1 -right-1 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
</div>
</div>
</div>
<!-- Main Navigation (Bottom) -->
<nav class="flex items-center justify-center gap-8 py-4 font-body-md text-[13px] font-semibold text-[#1c1b1b]">
<a class="hover:text-secondary transition-colors" href="#">Shop By</a>
<a class="hover:text-secondary transition-colors" href="#">Furniture</a>
<a class="hover:text-secondary transition-colors" href="#">Lighting</a>
<a class="hover:text-secondary transition-colors" href="#">Textiles</a>
<a class="hover:text-secondary transition-colors" href="#">Leather</a>
<a class="hover:text-secondary transition-colors" href="#">Wallcovering</a>
<a class="hover:text-secondary transition-colors" href="#">Window Shades</a>
<a class="hover:text-secondary transition-colors" href="#">Rugs</a>
<a class="hover:text-secondary transition-colors" href="#">Outdoor</a>
<a class="hover:text-secondary transition-colors" href="#">Accessories</a>
<a class="hover:text-secondary transition-colors" href="#">Fine Art</a>
</nav>
</div>
</header>
<section class="relative h-[921px] w-full flex items-center justify-center overflow-hidden bg-primary-container">
<img class="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" data-alt="Luxurious minimalist interior with dark textured walls, soft spotlight on a high-end designer lounge chair, moody and sophisticated atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo9HTO2Axt0ykdH7FzjEENZ6Z_m3q4eqZmVig-Ok5Kak_DDwX8LOZTYcXUkrDMmVEvLMCwqWnrv_HJDL5kKw-WcN5aTCJanQyxFHcAC1eszsrJf4wJdHiazvDfROCt8VzeBST6Um1tH8be8J72aoJ9lbbm5OG_pm8EixwjlpFrIrWcg0hHIfTEd9-nPZM1tA4QVG4BNve_3uZEMrFT1bsP1bkrxpCmbLxFTEXVfmbAEnedZMNvBuGiYXvpfkRrj6NsH_WFuSoFWacr">
<div class="relative z-10 text-center flex flex-col items-center gap-8 max-w-4xl px-gutter">
<h2 class="font-headline-lg text-headline-lg md:text-display-xl md:font-display-xl text-on-secondary italic leading-none tracking-tight">The Onward Collection</h2>
<p class="font-body-lg text-body-lg text-on-secondary/80 max-w-xl mx-auto">Exploring the intersection of architectural heritage and contemporary comfort through curated materials.</p>
<button class="mt-4 px-12 py-4 bg-on-secondary text-primary font-section-title text-section-title uppercase tracking-widest hover:bg-secondary transition-colors duration-500">Explore Now</button>
</div>
</section>
<section class="py-section-gap px-margin-edge bg-surface">
<div class="max-w-container-max mx-auto">
<div class="flex justify-between items-end mb-16">
<h3 class="font-headline-lg text-headline-lg text-on-background">Explore The Collection</h3>
<a class="font-section-title text-section-title text-secondary border-b border-secondary pb-1 flex items-center gap-2" href="#">View All Collections <span class="material-symbols-outlined text-sm">east</span></a>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-10">
<div class="group cursor-pointer">
<div class="relative aspect-[3/4] mb-6 overflow-hidden bg-surface-container-low">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Minimalist wooden cabinet with unique vertical fluted textures, warm oak finish, standing in a brightly lit neutral room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeTHq71nmkcYZ-o9-vRZJ9eEow_UNppveiBcwLtyI-tcVsqR8l9rFK9qvaUMzj00gE8VkB3w1hX34CLgC9Rh6hqXBgyEgI_NvV9IMaaH6pnXKn5K8miezx3vxlNZnChg-IyoW6zxcAhk3nnvJ61gyGPWcyyl2_mPqcAvGKFIoiQDkt0lTDBw5p6YPNjUVe6TjXTK9mj_xH1l7QhCeCXFCPI2Mses2nl19eU623Nyu6Mpk2iyVi1_nq2Ryq1sU_V-vbRVbgLdqXT1cc">
<div class="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2">
<span class="font-label-sm text-label-sm uppercase tracking-tighter">Casegoods</span>
</div>
</div>
<h4 class="font-headline-md text-headline-md text-on-background">Dent Cabinet</h4>
<p class="font-body-md text-body-md text-on-surface-variant mt-2">Sculptural storage in solid white oak.</p>
</div>
<div class="group cursor-pointer">
<div class="relative aspect-[3/4] mb-6 overflow-hidden bg-[#F2EDE8]">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Modern sculptural armchair with bouclé fabric in a warm terracotta color, organic curved lines, against a clean beige wall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2_Gt8er3rRD6FU8OcSvHoAjGyeCGsmRUH2r6AAlCioLcC4W3q5hYCCejpl3Tu7Mk9-X7Iqs19gI1qdib5jR-cHin9rs2GEFv6XlG8SQSCRMMY7kW8ZjVgZSdVq6KDkXx0oyAFzePO3iyNJLj1JajgU61NEbGDrA2IuMuMnZU-0JxhFjSS0FCdfbBdo40G8dYAiwF9sK3T6Vvkob1a_LZkCaVmuvTM7ysa_iDUcg5fRX_iHEn2XO-_YgpoHcYApqPlbsGGctPQkRtE">
<div class="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2">
<span class="font-label-sm text-label-sm uppercase tracking-tighter">Seating</span>
</div>
</div>
<h4 class="font-headline-md text-headline-md text-on-background">Selina Arm Chair</h4>
<p class="font-body-md text-body-md text-on-surface-variant mt-2">Organic curves meet tactile bouclé.</p>
</div>
<div class="group cursor-pointer">
<div class="relative aspect-[3/4] mb-6 overflow-hidden bg-surface-container-highest">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Low profile modular sofa in sage green velvet, sleek architectural lines, floating base design in a contemporary living space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPNXS4eNZosYOXH-WxozxRBv_ga60ebFb_nZ___AhByNfLYFpu_YvfdFZEEDAGuTvzpFcJtTzzY0WV0EhmgVbw-uppjSGbX-wRdvTCqNmMnWXxouBJ4PIcozl9uSDjmOxGjTj0Z0S4pX8NylOhrKd623za4VXHI9EbY5V6Be29xwCK7tq_wwX9of-oEiZF7P-o1FtkjBc05BfRBHEwqc4KlYr0ahySMOWKJWJbZVwGxC8OcdUhMpeMuBZydlhGqkv4hYkuDgRYN9vM">
<div class="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2">
<span class="font-label-sm text-label-sm uppercase tracking-tighter">Upholstery</span>
</div>
</div>
<h4 class="font-headline-md text-headline-md text-on-background">Isley Sofa</h4>
<p class="font-body-md text-body-md text-on-surface-variant mt-2">Architectural comfort for the modern home.</p>
</div>
</div>
</div>
</section>
<section class="py-section-gap bg-surface-container-low overflow-hidden">
<div class="px-margin-edge max-w-container-max mx-auto mb-12">
<h3 class="font-section-title text-section-title text-on-surface-variant uppercase mb-4 tracking-[0.3em]">The Bestsellers</h3>
<h2 class="font-headline-lg text-headline-lg text-on-background">Curated Favorites</h2>
</div>
<div class="flex gap-8 overflow-x-auto hide-scrollbar px-margin-edge pb-16 snap-x snap-mandatory">
<div class="flex-none w-[350px] snap-start group">
<div class="bg-white aspect-square mb-6 flex items-center justify-center p-8 transition-shadow duration-500 group-hover:shadow-xl">
<img class="max-h-full max-w-full object-contain mix-blend-multiply" data-alt="Sleek black metal floor lamp with industrial minimalist design and adjustable head, positioned in a clean corner" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_02cjAN-SRCG0arwnbCS10zW4yeQp_Nc5fMAik1unvpIdTCtI-_lQiSOu3q8-dBXr3Uxls7TopBDJYxhDIhYYjrNSCdE7zOLai88inTFi9_tWj8pDA01KqvmWOuASINAPLUJjRUKeayIh07-OWHcv8aNA7VWqT-cK0Y6LmBdS-c6J5ba2bqEVZDbSI7NWTd4z5VwxY9WimzUQhndNdyHN_ChZSlbXTA2Ls5YW6xZyqQvXwtgBwrOYrWYgL_ui4eZzQr_BQ_av48tT">
</div>
<div class="space-y-1">
<p class="font-label-sm text-label-sm text-secondary uppercase tracking-widest">New Arrival</p>
<h5 class="font-headline-md text-body-lg text-on-background">Linear Task Lamp</h5>
<p class="font-body-md text-on-surface-variant">₦450</p>
<a class="inline-block mt-4 text-[13px] font-semibold border-b border-on-background/20 hover:border-on-background transition-all" href="#">Discover Now →</a>
</div>
</div>
<div class="flex-none w-[350px] snap-start group">
<div class="bg-white aspect-square mb-6 flex items-center justify-center p-8 transition-shadow duration-500 group-hover:shadow-xl">
<img class="max-h-full max-w-full object-contain mix-blend-multiply" data-alt="Modern geometric chair made of dark stained walnut wood, sculptural joints, premium woodworking detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7zHCch1c6uvEUIZ5Q0h4EjqlAr-sNn7siK6sHKp-9lFAMpjJ4SHZeHRrEwyTZWry2uVVHPMXAOZuXb6lRT4xFrieUg7wI7AVI9lk5KueGBPShbT-VkpUgQDXerTZiGkCJ3dSK3dxgmwN-D3rS9z31BQ9_F3NU4i24qyuBsT_efvdCjaWdZC0DHQrc_NJttarF9sXmNeK7-rwxXqXiZI2YaD9MUI662y8r-RyyQTDWjsuug2UpdgqAPf-NeSHw3pu-O0Jl281FIQD5">
</div>
<div class="space-y-1">
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Timeless</p>
<h5 class="font-headline-md text-body-lg text-on-background">Walnut Trestle Chair</h5>
<p class="font-body-md text-on-surface-variant">₦890</p>
<a class="inline-block mt-4 text-[13px] font-semibold border-b border-on-background/20 hover:border-on-background transition-all" href="#">Discover Now →</a>
</div>
</div>
<div class="flex-none w-[350px] snap-start group">
<div class="bg-white aspect-square mb-6 flex items-center justify-center p-8 transition-shadow duration-500 group-hover:shadow-xl">
<img class="max-h-full max-w-full object-contain mix-blend-multiply" data-alt="Set of minimalist ceramic vases in neutral beige tones with varying matte textures and organic shapes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfOS-acG_IRpCJBjdo5Bxcv_ozAaxU12-3_lGsUuFZyMQ7wep7fvPIbDsdwYnfXF_tbdokNHiFLZsWmljTCSxeFOd64T_WwBk4h-Cei18AdCJzmcsQ_ZjD-AAtTwebpeqPOofu2FF204lviS1XauHAjoi1dgIoAILVG-gFN-rer_TTe3gm47kkKJnCZSLiDaOikHeRdYkmtrLRQFDzCSIQQ7VqxGtAe5vo5TJl-4Gh7G47E7QaAVDwnjH9o5X0sDpQJ8fXky-ZifTt">
</div>
<div class="space-y-1">
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Heritage</p>
<h5 class="font-headline-md text-body-lg text-on-background">Stone Earth Vase Set</h5>
<p class="font-body-md text-on-surface-variant">₦220</p>
<a class="inline-block mt-4 text-[13px] font-semibold border-b border-on-background/20 hover:border-on-background transition-all" href="#">Discover Now →</a>
</div>
</div>
<div class="flex-none w-[350px] snap-start group">
<div class="bg-white aspect-square mb-6 flex items-center justify-center p-8 transition-shadow duration-500 group-hover:shadow-xl">
<img class="max-h-full max-w-full object-contain mix-blend-multiply" data-alt="Simple wooden stool with three legs, minimalist Scandinavian design, natural ash wood grain visible" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnY5zdF3-LzJ3YI5XIz4HffFaD9JRLHtvmTXVe5GkFJGymbdI21FFAkUuQjuJvxqcPRN8fbePYVprUYhRKIloCRmRses7dXt5QrRbkC83sDWE1DL9rncPZQwh_VweOvuKfnpB53G5COKV-6MXuZohZbDS3hteiVRb1BKsUwqsAsIn5WgpJFT7EeZe3zHHf3rY1B5FNMx9xlN9en3VElRze0ucICUkQJ-jtIHp1AwiYlR7P2m7GifWJOyAN0issU8zafSWCuoRqNaUh">
</div>
<div class="space-y-1">
<p class="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Limited Edition</p>
<h5 class="font-headline-md text-body-lg text-on-background">Ash Tripod Stool</h5>
<p class="font-body-md text-on-surface-variant">₦340</p>
<a class="inline-block mt-4 text-[13px] font-semibold border-b border-on-background/20 hover:border-on-background transition-all" href="#">Discover Now →</a>
</div>
</div>
</div>
<div class="px-margin-edge max-w-container-max mx-auto h-[1px] bg-outline-variant relative">
<div class="absolute left-0 top-0 h-[2px] w-1/4 bg-primary-container"></div>
</div>
</section>
<section class="py-section-gap px-margin-edge bg-white">
<div class="max-w-container-max mx-auto">
<div class="text-center mb-20">
<h2 class="font-headline-lg text-headline-lg text-on-background mb-4 italic">#LiveWithRANOS</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant">Sharing moments of architectural serenity from our global community.</p>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
<div class="col-span-2 row-span-2 relative overflow-hidden group">
<img class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="Wide angle view of a sunlit living room with floor-to-ceiling windows, mid-century modern furniture, and warm wood accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLK8jy0QxJtqsDTC9Dq0udPFyA732gnnIhkTlg-ttb8qTP0Tg7CvO5sCtHLVk8Glg2pTSDe7lc0lFZr0aDdoNCnqHY1p6tg2LPxsCOwPnlaKt3Z81k6ClXIKJj9iThgs718Gu_J1v6Agc3snhfSgubGZyD48mLtLp4ZYSrkWbyfaAXxXDctW4KcpPLLCFQQmJ32WaUINTpXrK7FxPBmKnZCWgzhAnhySYuTe1kfubYnEIoTVm6TVbaRei0HRa0TLFQ3JT3WEoFPe0N">
<div class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div class="col-span-1 row-span-1 relative overflow-hidden group">
<img class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="Close up of a minimalist workspace with a sleek wooden desk, ergonomic chair, and single green plant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7UDJMyZfdUI8NSWQHIHAoboZEGNhl3s-gGta3zGb0tysoPYm8-DuTQ6gq_J1_NMMCCi1q14eBC3qwfVEN6j8YYbgDV6PmKXZsOxW_UgsWkV1VMd0rQO5dRgBGD2uVnOml3lXnPpyTGnfjNyd9_wRXCl61vHTlh0ln1f8C0MzHCRs1nnFv8sNnCtnJ6RFtej3l8wE6Gkuoi-DXHVl-n6M6_y7p_Qr8pa-1hTOXV1ngtG8FGFc5PICPQ3ndBYhfVqcQsRjOtq2FJQDe">
</div>
<div class="col-span-1 row-span-2 relative overflow-hidden group">
<img class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="Editorial shot of a minimal bedroom with crisp white linens, light oak bed frame, and soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmyjEErEK6FTbG2IhKNBic5q7VqMvYM50nRYnEzlpvhcgUdAOSMil2MD15kFopmhb5reajXZX9hss8tM7m3SR60beIo8ISDis-VW0lmGfq86nRZYW-aBzJsh4dLTpTJsssZGoaRS1KzZUS6Ms9SJmqfZvf3QEVSNNY4AZG65ADqtz0-p-dpReKzbTw3eL6q-Y-3rFYf72ugldMTBpz2tRA058ExFTTxXB0SqMoF3rIakZfe5FsXaajAKHbc1nR1Y73ME3Fgxa5keKP">
</div>
<div class="col-span-1 row-span-1 relative overflow-hidden group">
<img class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="Detail shot of a contemporary dining table set with artisanal ceramics and textured linen napkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAzLpgmelQXzFbtgRsVW-Of1KTEaHv1cDB0lXWODGqZ-K6U-1qAH1v1bKWID6iRZn7Ntl_rQBmDg27efZIxP4PlQHXLH1Ph6PMKk6U9gCwn-ChwYoFJZtwE0RlK1TytUbmyvG5W0ObAzb4gEyv8XEXcwD516ddSQ_FYPbLWx__Sn0GArjJ96zk21vPPzIepAskbjyOqEBiZ54DhKn43q-pZi7bnLveitr3Glh9VfAf6OGkGSqVvDJ45pEIXrggVydqOtY0e4N5qC9W">
</div>
</div>
</div>
</section>
<section class="py-24 px-margin-edge bg-surface-container-low border-y-[0.5px] border-outline-variant/30">
<div class="max-w-container-max mx-auto flex flex-col items-center">
<h4 class="font-section-title text-section-title text-on-surface-variant uppercase tracking-[0.4em] mb-12">As Seen On</h4>
<div class="w-full flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700 mb-20">
<div class="font-serif text-2xl font-bold italic">HUNKER</div>
<div class="font-serif text-2xl font-bold">tasting table</div>
<div class="font-serif text-2xl font-bold uppercase tracking-widest">dwell</div>
<div class="font-serif text-2xl font-bold">REFINERY29</div>
<div class="font-serif text-2xl font-bold italic">Vogue</div>
</div>
<div class="flex flex-col md:flex-row items-center gap-10 bg-white p-12 w-full max-w-4xl shadow-sm border border-outline-variant/10">
<div class="flex flex-col items-center md:items-start flex-1 border-b md:border-b-0 md:border-r border-outline-variant/20 pb-8 md:pb-0 md:pr-12">
<div class="flex gap-1 text-secondary mb-4">
<span class="material-symbols-outlined fill" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined fill" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined fill" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined fill" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined fill" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
</div>
<p class="font-headline-md text-headline-md italic mb-2 text-primary">"Excellent"</p>
<p class="font-body-md text-on-surface-variant">Based on <span class="font-bold underline">1,248 reviews</span></p>
</div>
<div class="flex-1 text-center md:text-left">
<p class="font-body-lg text-body-lg italic text-on-surface leading-relaxed">"The craftsmanship is unparalleled. My Ranos table isn't just furniture, it's an heirloom that defines the room."</p>
<p class="font-label-sm text-label-sm text-on-surface-variant mt-4 uppercase tracking-widest">— Julianne K., New York</p>
</div>
</div>
</div>
</section>
<!-- SHOWROOMS SECTION -->
<section class="relative h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
<img class="absolute inset-0 w-full h-full object-cover opacity-60" data-alt="Immersive luxury furniture showroom with dark sophisticated atmosphere and warm architectural lighting" src="https://lh3.googleusercontent.com/aida/ADBb0ujUp8r2Ytd8-PVmK4NzvFWAWmLC9Ri2qjmfm9teh8Kt7hJgpMDwqjDAS1OsyME0fHK3LdGib66uRHqtEbWJTfZcbClykPCUkKGF4wTyIXMmGo0XVISn6h4mY6vubBYuzE9N7FaHyXU7VF5Z2THGpu-YV1FVY8nSM-ASFaymtmJLE6txF2RVh2gD20ueHLMAt-fBP40AqOWvNPUb3goUghbuODdPlX9yOK2SCEhxTZi9jlfLyloO41hR1Fc75hzUo7mLJQI6rMiQtwQ">
<div class="relative z-10 text-center flex flex-col items-center gap-6 px-gutter max-w-2xl">
<h2 class="font-headline-lg text-headline-lg text-white italic tracking-wide">Visit Our Showrooms</h2>
<p class="font-body-lg text-white/80 max-w-md mx-auto">Experience the texture and scale of our collection in person at our flagship locations.</p>
<button class="mt-4 px-10 py-4 border border-white text-white font-section-title text-section-title uppercase tracking-[0.2em] hover:bg-white hover:text-[#1A1A1A] transition-all duration-500">Find A Location</button>
</div>
</section>
<!-- NEW FOOTER -->
<footer class="bg-[#F6F3F2] text-[#1C1B1B] pt-24 pb-12">
<div class="max-w-container-max mx-auto px-margin-edge">
<!-- Main Footer Content -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
<!-- Brand Column -->
<div class="lg:col-span-3">
<h2 class="text-3xl font-serif tracking-[0.2em] mb-12">RANOS</h2>
</div>
<!-- Link Columns -->
<div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
<div>
<h4 class="font-section-title text-[12px] uppercase tracking-[0.1em] mb-6 font-bold">Products</h4>
<ul class="space-y-3 font-body-md text-[14px] text-on-surface-variant">
<li class=""><a class="hover:text-on-background transition-colors" href="#">Furniture</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">Lighting</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">Textiles</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">Leather</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">Trim</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">Wallcovering</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">Window Shades</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">Rugs</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">Accessories</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">Fine Art</a></li>
</ul>
</div>
<div>
<h4 class="font-section-title text-[12px] uppercase tracking-[0.1em] mb-6 font-bold">About Us</h4>
<ul class="space-y-3 font-body-md text-[14px] text-on-surface-variant">
<li class=""><a class="hover:text-on-background transition-colors" href="#">Company</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">Founder Story</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">Our Collections</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">Designers</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">TDGN Contract</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">Careers <span class="text-[10px]">↗</span></a></li>
</ul>
</div>
<div>
<h4 class="font-section-title text-[12px] uppercase tracking-[0.1em] mb-6 font-bold">Support</h4>
<ul class="space-y-3 font-body-md text-[14px] text-on-surface-variant">
<li class=""><a class="hover:text-on-background transition-colors" href="#">Help Center</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">Shipping</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">Returns</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">Contact Us</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">Terms of Use</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">Product Care</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">Resources</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">Showroom Locations</a></li>
<li class=""><a class="hover:text-on-background transition-colors" href="#">Accessibility Statement <span class="text-[10px]">↗</span></a></li>
</ul>
</div>
</div>
<!-- Newsletter Column -->
<div class="lg:col-span-3">
<p class="font-body-md text-[14px] text-on-surface-variant leading-relaxed mb-8">
                    Join our newsletter to be the first to know about exclusive new collections, design partnerships, and showroom offerings.
                </p>
<div class="flex items-stretch">
<input class="bg-transparent border border-outline px-4 py-3 flex-grow text-sm focus:outline-none focus:border-on-background" placeholder="Email Address" type="email">
<button class="bg-white border border-l-0 border-outline px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-on-background hover:text-white transition-all flex items-center justify-center gap-2">
<span class="leading-none">SIGNUP</span>
<span class="material-symbols-outlined text-sm leading-none">east</span>
</button>
</div>
</div>
</div>
<!-- Social Icons Row -->
<div class="flex justify-end gap-6 mb-12">
<a class="text-on-surface-variant hover:text-on-background transition-colors" href="#"><span class="material-symbols-outlined">photo_camera</span></a>
<a class="text-on-surface-variant hover:text-on-background transition-colors" href="#"><span class="material-symbols-outlined">bookmark</span></a>
<a class="text-on-surface-variant hover:text-on-background transition-colors" href="#"><span class="material-symbols-outlined">facebook</span></a>
<a class="text-on-surface-variant hover:text-on-background transition-colors" href="#"><span class="material-symbols-outlined">play_circle</span></a>
</div>
<!-- Bottom Bar -->
<div class="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-6">
<div class="text-[12px] text-on-surface-variant">
                © 2024 RANOS. Crafted for the Discerning.
            </div>
<div class="flex gap-8 text-[12px] text-on-surface-variant">
<a class="hover:text-on-background transition-colors" href="#">Privacy Notice <span class="text-[8px]">↗</span></a>
<a class="hover:text-on-background transition-colors" href="#">Terms of Use</a>
</div>
</div>
<div class="mt-12 text-center text-[10px] text-on-surface-variant/50 uppercase tracking-[0.2em]">
            Part of the TDGN Collective
        </div>
</div>
</footer>


</body></html>



------------

#shop page


<!DOCTYPE html><html class="light" lang="en"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>TDGN | Luxury Furniture &amp; Heritage Craftsmanship</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,300;0,400;0,500;0,600;1,400&amp;family=Manrope:wght@400;500;600;700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary-fixed-variant": "#7c2e00",
                        "inverse-primary": "#dec0b5",
                        "on-tertiary-container": "#878783",
                        "surface": "#fcf9f8",
                        "on-tertiary-fixed": "#1b1c19",
                        "surface-bright": "#fcf9f8",
                        "on-tertiary-fixed-variant": "#474744",
                        "tertiary-fixed": "#e4e2dd",
                        "surface-variant": "#e5e2e1",
                        "surface-container-high": "#eae7e7",
                        "on-tertiary": "#ffffff",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary-container": "#5c2000",
                        "secondary": "#a23f00",
                        "primary": "#0f0401",
                        "surface-container-highest": "#e5e2e1",
                        "on-secondary-fixed": "#351000",
                        "surface-container-low": "#f6f3f2",
                        "on-primary": "#ffffff",
                        "secondary-container": "#fc7127",
                        "outline": "#817470",
                        "background": "#fcf9f8",
                        "error-container": "#ffdad6",
                        "on-error": "#ffffff",
                        "primary-fixed-dim": "#dec0b5",
                        "on-primary-fixed-variant": "#57423a",
                        "on-primary-container": "#9b8177",
                        "on-background": "#1c1b1b",
                        "tertiary": "#060605",
                        "secondary-fixed-dim": "#ffb595",
                        "secondary-fixed": "#ffdbcd",
                        "surface-dim": "#dcd9d9",
                        "surface-container": "#f0eded",
                        "tertiary-fixed-dim": "#c8c6c2",
                        "tertiary-container": "#1f1f1c",
                        "primary-container": "#2c1b14",
                        "surface-tint": "#715950",
                        "on-surface-variant": "#4f4441",
                        "primary-fixed": "#fcdcd0",
                        "on-secondary": "#ffffff",
                        "outline-variant": "#d3c3be",
                        "on-error-container": "#93000a",
                        "inverse-surface": "#313030",
                        "inverse-on-surface": "#f3f0ef",
                        "on-surface": "#1c1b1b",
                        "error": "#ba1a1a",
                        "on-primary-fixed": "#281811"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "section-gap": "8rem",
                        "element-gap": "1rem",
                        "container-max": "1440px",
                        "margin-edge": "4rem",
                        "gutter": "1.5rem"
                    },
                    "fontFamily": {
                        "headline-lg": ["Newsreader"],
                        "section-title": ["Manrope"],
                        "headline-md": ["Newsreader"],
                        "display-xl": ["Newsreader"],
                        "label-sm": ["Manrope"],
                        "body-md": ["Manrope"],
                        "body-lg": ["Manrope"]
                    },
                    "fontSize": {
                        "headline-lg": ["48px", {"lineHeight": "56px", "fontWeight": "400"}],
                        "section-title": ["14px", {"lineHeight": "20px", "letterSpacing": "0.15em", "fontWeight": "600"}],
                        "headline-md": ["32px", {"lineHeight": "40px", "fontWeight": "400"}],
                        "display-xl": ["84px", {"lineHeight": "92px", "letterSpacing": "-0.02em", "fontWeight": "300"}],
                        "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500"}],
                        "body-md": ["16px", {"lineHeight": "28px", "fontWeight": "400"}],
                        "body-lg": ["18px", {"lineHeight": "32px", "fontWeight": "400"}]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
</head>
<body class="bg-background text-on-background font-body-md selection:bg-secondary-fixed selection:text-on-secondary-fixed">
<!-- Promo Banner -->
<div class="bg-black text-white py-2 px-8 flex justify-center items-center relative">
<p class="text-[10px] sm:text-[11px] uppercase tracking-[0.1em] font-medium text-center">
        Online Floor Sample Sale • Additional 10% Off • April 8–May 8 • 
        <a class="underline underline-offset-4 ml-1" href="#">EXPLORE LOOKBOOKS HERE.</a>
</p>
<button class="absolute right-4 top-1/2 -translate-y-1/2">
<span class="material-symbols-outlined text-[16px]">close</span>
</button>
</div>
<!-- TopAppBar -->
<header class="bg-white text-on-background border-b-[0.5px] border-stone-200 sticky top-0 z-50">
<div class="w-full max-w-[1600px] mx-auto px-6 py-6 flex justify-between items-center">
<!-- Search -->
<div class="flex items-center gap-3 w-1/4">
<span class="material-symbols-outlined text-[20px] text-stone-400">search</span>
<span class="text-stone-400 font-body-md text-sm">Search</span>
</div>
<!-- Brand Logo -->
<div class="text-[32px] font-headline-lg tracking-[0.2em] uppercase font-light">RANOS</div>
<!-- Right Utilities -->
<div class="flex items-center justify-end gap-6 w-1/4">
<!-- Flag -->
<div class="flex items-center gap-1.5 cursor-pointer">
<div class="flex flex-col w-6 h-4 border border-stone-100">
<div class="flex-1 flex">
<div class="bg-[#008751] w-1/3"></div>
<div class="bg-white w-1/3"></div>
<div class="bg-[#008751] w-1/3"></div>
</div>
</div>
<span class="material-symbols-outlined text-[14px]">expand_more</span>
</div>
<span class="font-body-md text-sm cursor-pointer hover:text-stone-500">Support</span>
<span class="font-body-md text-sm cursor-pointer hover:text-stone-500 whitespace-nowrap">Log in | Join</span>
<div class="relative cursor-pointer">
<span class="material-symbols-outlined text-[24px]">shopping_bag</span>
<span class="absolute -top-1.5 -right-1.5 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
</div>
</div>
</div>
<!-- Navigation Row -->
<nav class="w-full max-w-[1200px] mx-auto pb-4 flex justify-between items-center font-body-md text-[11px] uppercase tracking-[0.1em] font-medium text-stone-600 px-6">
<a class="hover:text-black transition-colors" href="#">Shop By</a>
<a class="hover:text-black transition-colors" href="#">Furniture</a>
<a class="hover:text-black transition-colors" href="#">Lighting</a>
<a class="hover:text-black transition-colors" href="#">Textiles</a>
<a class="hover:text-black transition-colors" href="#">Leather</a>
<a class="hover:text-black transition-colors" href="#">Wallcovering</a>
<a class="hover:text-black transition-colors" href="#">Window Shades</a>
<a class="hover:text-black transition-colors" href="#">Rugs</a>
<a class="hover:text-black transition-colors" href="#">Outdoor</a>
<a class="hover:text-black transition-colors" href="#">Accessories</a>
<a class="hover:text-black transition-colors" href="#">Fine Art</a>
</nav>
</header>
<main class="max-w-7xl mx-auto px-margin-edge pt-12">
<!-- Category Navigation Grid -->
<section class="mb-section-gap">
<div class="flex items-center justify-between mb-8">
<h2 class="font-section-title text-section-title uppercase">Shop Collections</h2>
</div>
<div class="grid grid-cols-7 gap-gutter overflow-x-auto hide-scrollbar">
<div class="flex flex-col items-center group cursor-pointer">
<div class="aspect-square w-full bg-surface-container-low mb-4 overflow-hidden rounded-sm">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="luxury furniture outlet clearance items with minimalistic styling in a bright open studio space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOU308CN88fnoBhbT78UenIZcgGwfQMFTVL8GKUI9MNn_Z6FuFE1NKjBVCM1wzbvfoMQdxXyRk_jMyDjOq0vdx9o4Ai0FPIuiAUSFK0sRDI22r3Zeok-IYBTj7XeXNrBU2-OzjdRFqZ-6OMHZeZ6mZ77qgVAftLMrAbwXm46dMtDEWAtDeq9NyPetEWqBGXeR0lIpztJJd_dIUdWEdPpFnBfkIHQtZxx8uVHTvW_0TddNmligIR7p8KFtPcBmPwYxvDbFEg3Pp6Scm">
</div>
<span class="font-label-sm text-[11px] uppercase tracking-widest text-on-surface-variant">Clearance</span>
</div>
<div class="flex flex-col items-center group cursor-pointer">
<div class="aspect-square w-full bg-surface-container-low mb-4 overflow-hidden rounded-sm">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="modern living room interior with a velvet green sofa and architectural coffee table lit by soft window light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7Uh3FyAnXVESugnAIz9PEle9NBOGbEIDu5pRcp_aWIwAjQWs7cIVzNFcoif0qqHXxO_iCr8PG4q5kMk9JzI3dChi7PKnUUjewYgJSirUxztRTk8qoc8QoW9PFUZERHGlbF8g96Th5m2GgujTLjS9eeRbKmFnFB6OBIArhJKBbsFAe82A8N0ryxj17IuxoxnZt11Y9nqhajy4nhoJ6_Mgant1Xuf8wH7guhy3_MXJx1a-AvVi5ytUNSWUyI3i1iFS1ImRcBOCUVubQ">
</div>
<span class="font-label-sm text-[11px] uppercase tracking-widest text-on-surface-variant">Living</span>
</div>
<div class="flex flex-col items-center group cursor-pointer">
<div class="aspect-square w-full bg-surface-container-low mb-4 overflow-hidden rounded-sm">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="elegant oak dining table set with artisanal ceramics and high-end minimalist chairs in a warm lit room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAjmu3Ku2D01f9SP7rs7GmgsNlvUTFaWRUgJFq9RtrR3i4gn8mZdMXVGWcuudTRjbAEFqi0gJQOsNDZBCt6i6sMteG5Ob4WH0vY0Oxv3fJEQgYg8G5f-utRAosti1z71g3VUpjctzaWTPsftYdLTWnYwKf--8yN_TzQJh8IR2i8_eeTtjZ8e3dw3Pz7YQX5wfW3sbabQG8d1moMMJNBtWMY08TKlYwls6dmxT-7z_2_3tp6NS0RAlvt_3ZKU5eNUftHuAlZrOchBp2">
</div>
<span class="font-label-sm text-[11px] uppercase tracking-widest text-on-surface-variant">Dining</span>
</div>
<div class="flex flex-col items-center group cursor-pointer">
<div class="aspect-square w-full bg-surface-container-low mb-4 overflow-hidden rounded-sm">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="serene high-end bedroom suite with premium linen bedding and a solid wood headboard in soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdgwTRfOIFzJ4VnyDZqYs1LjqYsN7VZs4X-tBVBOlvRrneJw5DXzg9t0sMgMp-n_h4tl8A6dQv4eR8E5YxZwritCBo3_v7XmefVOLVbrZOFAgHak4kr-qvbEQJLjGKjiqHl9R0WwhYsk9WKGjs4VfpheJ8TJ8tULCmSHY_pEpsJ8ubMxxmbFytRQJtlNTxKkIsi2hD-uo7QPaU3BXzcUUBPYPK6HHDnHxl5RnM8DQZuQZLfVobq9-86zkK6ihsLhW7bcOosCaWSTC8">
</div>
<span class="font-label-sm text-[11px] uppercase tracking-widest text-on-surface-variant">Bedroom</span>
</div>
<div class="flex flex-col items-center group cursor-pointer">
<div class="aspect-square w-full bg-surface-container-low mb-4 overflow-hidden rounded-sm">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="minimalist executive home office with a dark wood desk and designer leather ergonomic chair against a clean wall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd7nptHk6aqoZtdOXy-qCOxZrdKeAi0YdDQWVVFtkiia_v2M_NszjZHRoa_Es3Sj6dZijM7_guVoddeBcRKsheuREYahp8Aart130DasKrFgeVCoNFDqzWKjdlkCkuYTGB1XhchJLfoczDFC1nSea8csp_5ieeusE2Fz43v_FKYFnVcv93Uxs2-3x4ECcnXAtfpVIoH6BNP64Ozq2IUPZWiKYMqdgwGn3XlvTl0UQV1E-IprsgXkoOYCBrKULbSnagdalra2zSfgxc">
</div>
<span class="font-label-sm text-[11px] uppercase tracking-widest text-on-surface-variant">Office</span>
</div>
<div class="flex flex-col items-center group cursor-pointer">
<div class="aspect-square w-full bg-surface-container-low mb-4 overflow-hidden rounded-sm">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="luxury bathroom detail featuring a stone vanity and premium brass hardware in soft focus editorial style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbON8gF7NSwISV5epM5GRCwvtMaff7ksZv8RW-M_3uVba1RGIUkZ_5B4Xt_GzdLnydAI3Tg1o-3xNZcTio4OIATjkxCH6FwuzRcCZHFjOr11m7sBeGyTN_eLt9sanibnU1wCF97sjg52TTC4DBMTQjFKCxrXsaUrFFnarNT7gBoRE7FxvmOoO6IelmjGinOP-Jbzz8rnn3eg9yJ5kSFQFlM84bHOggJFH5yPdbwImUSn2xym9h6scXlBK_2YWPrq4ql6KYCZAD_3kY">
</div>
<span class="font-label-sm text-[11px] uppercase tracking-widest text-on-surface-variant">Bathroom</span>
</div>
<div class="flex flex-col items-center group cursor-pointer">
<div class="aspect-square w-full bg-surface-container-low mb-4 overflow-hidden rounded-sm">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="modern outdoor patio with premium teak furniture and luxury lounge chairs by a tranquil poolside at dusk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEg3_iNDnnENaIRHXFib2yhl47lvatcpqG-0S4YzmdMouJK0uBEN5lN-eMthhSvGtSR9WlM8t_TI2oArPHujHevefxHZymrYahVyP19A0FrcOFEP6x-iwlSHdhSHK_kkjWidRAyoOpm3nVgWZjyTTbzF9xBFAVJe1zP7Tl_sXZuOB79eHmua1zX071-3YYu5KdHmQkpECJgMGEItXJ846wRwc0LCn52dVRSthLeTkz8SkQcJKK-engzRTO-yc0a4n1JsfPJh_8v43J">
</div>
<span class="font-label-sm text-[11px] uppercase tracking-widest text-on-surface-variant">Outdoor</span>
</div>
</div>
</section>
<!-- Product Listing Filter Bar -->
<div class="border-y-[0.5px] border-stone-200 py-6 mb-12 flex items-center justify-between font-label-sm uppercase tracking-widest text-[11px]">
<div class="flex items-center gap-8">
<button class="flex items-center gap-2 hover:text-stone-400">
<span class="material-symbols-outlined text-[18px]">tune</span>
                Filter
            </button>
<button class="flex items-center gap-1 hover:text-stone-400">Category <span class="material-symbols-outlined text-[14px]">keyboard_arrow_down</span></button>
<button class="flex items-center gap-1 hover:text-stone-400">Featured <span class="material-symbols-outlined text-[14px]">keyboard_arrow_down</span></button>
<button class="flex items-center gap-1 hover:text-stone-400">Color <span class="material-symbols-outlined text-[14px]">keyboard_arrow_down</span></button>
<button class="flex items-center gap-1 hover:text-stone-400">Availability <span class="material-symbols-outlined text-[14px]">keyboard_arrow_down</span></button>
</div>
<div class="flex items-center gap-8">
<span class="text-stone-400 normal-case tracking-normal">270 Items</span>
<button class="flex items-center gap-1 hover:text-stone-400">Sort By: Recommended <span class="material-symbols-outlined text-[14px]">keyboard_arrow_down</span></button>
</div>
</div>
<!-- Product Grid -->
<div class="grid grid-cols-12 gap-gutter mb-section-gap">
<!-- Item 1 -->
<div class="col-span-12 md:col-span-4 group mb-12">
<div class="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-4">
<div class="absolute top-4 left-4 z-10 bg-white px-3 py-1 font-label-sm text-[10px] tracking-widest uppercase">Best Seller</div>
<button class="absolute top-4 right-4 z-10 text-on-surface-variant hover:text-secondary transition-colors">
<span class="material-symbols-outlined">favorite</span>
</button>
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="luxury oak media console" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm6zpY4MvgdMnnX0Ahx_gV2-KLHeoW4wtFeqj1RPp-hnarNl9o1Bm2CIxF-Z0arpIjIgCgFB2izlj3tXA44D91aJIsijKLwPC9Qc4Mgn3ml7-kA97EeqZRa4WK5m3Nep3u3pGMbKhzBA5WDacjLvN6aM88WM4dv3ZAN3el8hxXWIrSqbBEZIWERB8B5y2AbdkwsxGj7VM97dtKkIub1rm9UxkLjZXj6BsQuHVst95gBt2aeqnvZ_A8ENHEDp52Fdzxfc_4To7uQa07">
</div>
<h3 class="font-body-md text-on-surface mb-1">Valborg 80" Oak Media Console</h3>
<div class="flex items-center gap-3">
<span class="text-secondary font-medium">₦959 - ₦1,169</span>
<span class="text-stone-400 line-through text-sm">₦1,299</span>
</div>
</div>
<!-- Item 2 -->
<div class="col-span-12 md:col-span-4 group mb-12">
<div class="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-4">
<div class="absolute top-4 left-4 z-10 bg-white px-3 py-1 font-label-sm text-[10px] tracking-widest uppercase">Best Seller</div>
<button class="absolute top-4 right-4 z-10 text-on-surface-variant hover:text-secondary transition-colors">
<span class="material-symbols-outlined">favorite</span>
</button>
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="contemporary lift-top coffee table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZZwg6rGWEhDHbdEFms4mNyD_qgvQQWi5t2hpTPTpDQqYHYJ3SDcfb7SbcrYJ1MNCKAgDnqYoTfKMp0AsK9mo1dqddGKWRabBBKdRW1ToQw242ajtzZ3fsRL-egx9a5veum8SBLDqqLhtw11_IbG5kQimYb9B8EeEq6loC1IzBfsa8rLF3YjuTlJAhBKsywbfENba0FXjnDHcb-lkiZmtVHees_8qJfemNM6Q6fX5gNHPn-gLsWaefs5cGizXY_iDNKe7xp9mRw1Bw">
</div>
<h3 class="font-body-md text-on-surface mb-1">Magnus 47" Lift-Top Coffee Table</h3>
<div class="flex items-center gap-3">
<span class="text-secondary font-medium">₦749 - ₦799</span>
<span class="text-stone-400 line-through text-sm">₦899</span>
</div>
</div>
<!-- Sale Banner -->
<div class="col-span-12 md:col-span-4 mb-12">
<div class="h-full bg-[#2c1b14] text-white p-12 flex flex-col justify-between items-start">
<div>
<span class="font-label-sm text-[12px] uppercase tracking-[0.3em] opacity-80 mb-6 block">Limited Time</span>
<h2 class="font-display-xl text-[56px] leading-tight mb-8">SITEWIDE<br>SALE</h2>
<div class="space-y-4">
<div class="flex justify-between w-full border-b border-white/20 pb-2">
<span class="font-label-sm">₦100,000 OFF</span>
<span class="font-body-md italic opacity-70">Orders over ₦1M</span>
</div>
<div class="flex justify-between w-full border-b border-white/20 pb-2">
<span class="font-label-sm">₦250,000 OFF</span>
<span class="font-body-md italic opacity-70">Orders over ₦2.5M</span>
</div>
</div>
</div>
<a class="font-label-sm uppercase border-b border-white pb-1 mt-12 hover:opacity-70 transition-opacity" href="#">Shop the Sale →</a>
</div>
</div>
<!-- Row 2 -->
<div class="col-span-12 md:col-span-4 group mb-12">
<div class="relative aspect-square bg-stone-100 overflow-hidden mb-4">
<button class="absolute top-4 right-4 z-10 text-on-surface-variant hover:text-secondary transition-colors">
<span class="material-symbols-outlined">favorite</span>
</button>
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcL3jFJabYkFXCpvYA7JPMPSNltma5FRpui69FZOh8J4DfkuwZ6S-xiib2X16YaPTNKfW4vzce03m_DPe7RwsmTQiEX4NToHp2HZ66tuJQ3--E7XQDnNTeIQPL-jzBWV1DG7oL6AIbjZRd_pAFBqevXWqZBLuyWtAVB80zz3Ltu4dn3SdJFLq2TaOrY2M5KQZ2mpSBhxgJTT_M2BtRPS6CdGScmmmDOoDnxzMdpnoDXuKeB98DP3LX_NcQFfE8iiOCHB3P9DptRerO">
</div>
<h3 class="font-body-md text-on-surface mb-1">Rolf 63" Oak Sideboard</h3>
<span class="text-on-surface font-medium">₦1,049 - ₦1,099</span>
</div>
<div class="col-span-12 md:col-span-4 group mb-12">
<div class="relative aspect-square bg-stone-100 overflow-hidden mb-4">
<button class="absolute top-4 right-4 z-10 text-on-surface-variant hover:text-secondary transition-colors">
<span class="material-symbols-outlined">favorite</span>
</button>
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGjHm9EoDDw7fe0QnwmFrFfp1pje4HWt8yvp_JV2W5z5EBZ1W46knhlxVOtR5Zy2z-e3_9hU4A-iBAT01K7AbcJunNOyqmRDThfNLACVLjrzyPwJAVTeWItpH7tUdfEHBR6oEcmxs6ojnMPb31RzVeWqm1A6jLyqKU6rdKRQ33EFR0Dh9a_rbpb96YQTBKUL2WfO2gKqLDTHDo1ecYREByULIk9NZBc2oij-o-q9EdoF6jPXnIdcJZ5_R9AbR_NSg076UcggYnfde2">
</div>
<h3 class="font-body-md text-on-surface mb-1">Thorsten 72" Oval Dining Table</h3>
<span class="text-on-surface font-medium">₦1,199 - ₦1,699</span>
</div>
<div class="col-span-12 md:col-span-4 group mb-12">
<div class="relative aspect-square bg-stone-100 overflow-hidden mb-4">
<button class="absolute top-4 right-4 z-10 text-on-surface-variant hover:text-secondary transition-colors">
<span class="material-symbols-outlined">favorite</span>
</button>
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj72EVYKthnPeJyJdocNTwbrFu1skeAb4A0F26-oYm_yZaaePVjEwNe8yhNYqakn9MK8VOXlqNzqajyX9h8E3Zs2rLXDxh_QnjzD-3j7T5-HfRJaXC02NrPsFagT4TegUHlxuodKlbXdxb0KyoswzJIIEfreL3J9O1O_u7X7HE1-fU5MaGHOrqIAdybC7PK_pKEGXzDsCYpYkmYsfuWinj2j2rK-T4T5d9qNhK129W_6_sluLQIoJfwbA5FtyQATzTPm_DKKuvCjp2">
</div>
<h3 class="font-body-md text-on-surface mb-1">Rolf 31" Dining Table</h3>
<span class="text-on-surface font-medium">₦599 - ₦799</span>
</div>
</div>
</main>
<!-- Footer -->
<footer class="bg-[#f9f7f5] text-[#2c1b14] pt-20 pb-10">
<div class="max-w-[1440px] mx-auto px-12">
<div class="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
<!-- Brand Info -->
<div class="md:col-span-3">
<div class="text-3xl font-headline-lg mb-8 tracking-wider">RANOS</div>
</div>
<!-- Links: Products -->
<div class="md:col-span-2">
<h5 class="font-bold text-[11px] tracking-[0.1em] mb-6 uppercase">Products</h5>
<ul class="space-y-4 text-[13px] text-stone-600 font-medium">
<li class=""><a class="hover:text-black" href="#">Furniture</a></li>
<li class=""><a class="hover:text-black" href="#">Lighting</a></li>
<li class=""><a class="hover:text-black" href="#">Textiles</a></li>
<li class=""><a class="hover:text-black" href="#">Leather</a></li>
<li class=""><a class="hover:text-black" href="#">Trim</a></li>
<li class=""><a class="hover:text-black" href="#">Wallcovering</a></li>
<li class=""><a class="hover:text-black" href="#">Window Shades</a></li>
<li class=""><a class="hover:text-black" href="#">Rugs</a></li>
<li class=""><a class="hover:text-black" href="#">Accessories</a></li>
<li class=""><a class="hover:text-black" href="#">Fine Art</a></li>
</ul>
</div>
<!-- Links: About Us -->
<div class="md:col-span-2">
<h5 class="font-bold text-[11px] tracking-[0.1em] mb-6 uppercase">About Us</h5>
<ul class="space-y-4 text-[13px] text-stone-600 font-medium">
<li class=""><a class="hover:text-black" href="#">Company</a></li>
<li class=""><a class="hover:text-black" href="#">Founder Story</a></li>
<li class=""><a class="hover:text-black" href="#">Our Collections</a></li>
<li class=""><a class="hover:text-black" href="#">Designers</a></li>
<li class=""><a class="hover:text-black" href="#">TDGN Contract</a></li>
<li class=""><a class="hover:text-black" href="#">Careers ↗</a></li>
</ul>
</div>
<!-- Links: Support -->
<div class="md:col-span-2">
<h5 class="font-bold text-[11px] tracking-[0.1em] mb-6 uppercase">Support</h5>
<ul class="space-y-4 text-[13px] text-stone-600 font-medium">
<li class=""><a class="hover:text-black" href="#">Help Center</a></li>
<li class=""><a class="hover:text-black" href="#">Shipping</a></li>
<li class=""><a class="hover:text-black" href="#">Returns</a></li>
<li class=""><a class="hover:text-black" href="#">Contact Us</a></li>
<li class=""><a class="hover:text-black" href="#">Terms of Use</a></li>
<li class=""><a class="hover:text-black" href="#">Product Care</a></li>
<li class=""><a class="hover:text-black" href="#">Resources</a></li>
<li class=""><a class="hover:text-black" href="#">Showroom Locations</a></li>
<li class=""><a class="hover:text-black" href="#">Accessibility Statement ↗</a></li>
</ul>
</div>
<!-- Newsletter -->
<div class="md:col-span-3">
<p class="text-[14px] leading-relaxed text-stone-600 mb-8 font-medium">
                    Join our newsletter to be the first to know about exclusive new collections, design partnerships, and showroom offerings.
                </p>
<div class="flex border border-stone-300">
<input class="bg-transparent border-none px-4 py-3 text-sm focus:ring-0 flex-grow placeholder:text-stone-400 font-medium" placeholder="Email Address" type="email">
<button class="bg-white px-6 py-3 text-[11px] font-bold tracking-widest border-l border-stone-300 flex items-center gap-2 hover:bg-stone-50 transition-colors uppercase">
                        SignUp
                        <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
<!-- Social & Bottom Links Mobile/Right -->
<div class="flex justify-end gap-4 mt-12">
<span class="material-symbols-outlined text-[20px] cursor-pointer text-stone-500 hover:text-black">photo_camera</span>
<span class="material-symbols-outlined text-[20px] cursor-pointer text-stone-500 hover:text-black">bookmark</span>
<span class="material-symbols-outlined text-[20px] cursor-pointer text-stone-500 hover:text-black">face</span>
<span class="material-symbols-outlined text-[20px] cursor-pointer text-stone-500 hover:text-black">description</span>
<span class="material-symbols-outlined text-[20px] cursor-pointer text-stone-500 hover:text-black">play_circle</span>
</div>
</div>
</div>
<!-- Bottom Bar -->
<div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-200">
<p class="text-[12px] text-stone-500 font-medium mb-4 md:mb-0">© 2024 RANOS. Crafted for the Discerning.</p>
<div class="flex items-center gap-6">
<a class="text-[12px] text-stone-500 hover:text-black font-medium" href="#">Privacy Notice ↗</a>
<a class="text-[12px] text-stone-500 hover:text-black font-medium" href="#">Terms of Use</a>
</div>
</div>
<!-- Collective Branding -->
<div class="text-center mt-12">
<p class="text-[10px] tracking-[0.3em] font-bold text-stone-400 uppercase">Part of the TDGN Collective</p>
</div>
</div>
</footer>


</body></html>




---------

#productId page

<!DOCTYPE html><html class="light" lang="en"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Rolf 31" Dining Table | TDGN STUDIO</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,300;0,400;0,500;0,600;1,400&amp;family=Manrope:wght@200..800&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "primary": "#0f0401",
                        "secondary": "#a23f00",
                        "background": "#fcf9f8",
                        "on-background": "#1c1b1b",
                        "surface": "#fcf9f8",
                        "surface-container-low": "#f6f3f2",
                        "outline": "#817470",
                    },
                    "fontFamily": {
                        "display-xl": ["Newsreader"],
                        "headline-lg": ["Newsreader"],
                        "headline-md": ["Newsreader"],
                        "body-lg": ["Manrope"],
                        "body-md": ["Manrope"],
                        "section-title": ["Manrope"],
                        "label-sm": ["Manrope"],
                    },
                    "fontSize": {
                        "display-xl": ["84px", {"lineHeight": "92px", "letterSpacing": "-0.02em", "fontWeight": "300"}],
                        "headline-lg": ["48px", {"lineHeight": "56px", "fontWeight": "400"}],
                        "headline-md": ["32px", {"lineHeight": "40px", "fontWeight": "400"}],
                        "section-title": ["14px", {"lineHeight": "20px", "letterSpacing": "0.15em", "fontWeight": "600"}],
                        "body-lg": ["18px", {"lineHeight": "32px", "fontWeight": "400"}],
                        "body-md": ["16px", {"lineHeight": "28px", "fontWeight": "400"}],
                        "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500"}]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
</head>
<body class="bg-background text-on-background font-body-md">
<!-- Promo Banner -->
<div class="bg-black text-white py-2 px-8 flex justify-center items-center relative">
<p class="text-[10px] sm:text-[11px] uppercase tracking-[0.1em] font-medium text-center">
            Online Floor Sample Sale • Additional 10% Off • April 8–May 8 • 
            <a class="underline underline-offset-4 ml-1" href="#">EXPLORE LOOKBOOKS HERE.</a>
</p>
<button class="absolute right-4 top-1/2 -translate-y-1/2">
<span class="material-symbols-outlined text-[16px]">close</span>
</button>
</div>
<!-- Header -->
<header class="bg-white text-on-background border-b-[0.5px] border-stone-200 sticky top-0 z-50">
<div class="w-full max-w-[1600px] mx-auto px-6 py-6 flex justify-between items-center">
<!-- Search -->
<div class="flex items-center gap-3 w-1/4">
<span class="material-symbols-outlined text-[20px] text-stone-400">search</span>
<span class="text-stone-400 font-body-md text-sm">Search</span>
</div>
<!-- Brand Logo -->
<div class="text-[32px] font-headline-lg tracking-[0.4em] uppercase font-light">RANOS</div>
<!-- Right Utilities -->
<div class="flex items-center justify-end gap-6 w-1/4">
<!-- Nigeria Flag -->
<div class="flex items-center gap-1.5 cursor-pointer">
<div class="flex flex-col w-6 h-4 border border-stone-100">
<div class="flex-1 flex">
<div class="bg-[#008751] w-1/3"></div>
<div class="bg-white w-1/3"></div>
<div class="bg-[#008751] w-1/3"></div>
</div>
</div>
<span class="material-symbols-outlined text-[14px]">expand_more</span>
</div>
<span class="font-body-md text-sm cursor-pointer hover:text-stone-500">Support</span>
<span class="font-body-md text-sm cursor-pointer hover:text-stone-500 whitespace-nowrap">Log in | Join</span>
<div class="relative cursor-pointer">
<span class="material-symbols-outlined text-[24px]">shopping_bag</span>
<span class="absolute -top-1.5 -right-1.5 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
</div>
</div>
</div>
<!-- Navigation Row -->
<nav class="w-full max-w-[1200px] mx-auto pb-6 flex justify-between items-center font-body-md text-[11px] uppercase tracking-[0.2em] font-medium text-stone-900 px-6">
<a class="hover:text-stone-500 transition-colors" href="#">Shop By</a>
<a class="hover:text-stone-500 transition-colors" href="#">Furniture</a>
<a class="hover:text-stone-500 transition-colors" href="#">Lighting</a>
<a class="hover:text-stone-500 transition-colors" href="#">Textiles</a>
<a class="hover:text-stone-500 transition-colors" href="#">Leather</a>
<a class="hover:text-stone-500 transition-colors" href="#">Wallcovering</a>
<a class="hover:text-stone-500 transition-colors" href="#">Window Shades</a>
<a class="hover:text-stone-500 transition-colors" href="#">Rugs</a>
<a class="hover:text-stone-500 transition-colors" href="#">Outdoor</a>
<a class="hover:text-stone-500 transition-colors" href="#">Accessories</a>
<a class="hover:text-stone-500 transition-colors" href="#">Fine Art</a>
</nav>
</header>
<main class="max-w-[1440px] mx-auto px-12 pt-6">
<!-- Breadcrumbs -->
<nav class="mb-8">
<ol class="flex items-center space-x-1 text-[11px] font-body-md text-stone-400">
<li class=""><a class="hover:text-stone-600" href="#">Home</a></li>
<li class="">/</li>
<li class=""><a class="hover:text-stone-600" href="#">Dining</a></li>
<li class="">/</li>
<li class=""><a class="hover:text-stone-600" href="#">Tables &amp; Storage</a></li>
<li class="">/</li>
<li class=""><a class="hover:text-stone-600" href="#">Dining Tables</a></li>
<li class="">/</li>
<li class="text-stone-900">SKU7190</li>
</ol>
</nav>
<!-- Product Main Section -->
<section class="grid grid-cols-12 gap-12 mb-20">
<!-- Left Column: Vertical Thumbnails & Main Image -->
<div class="col-span-12 lg:col-span-8 flex gap-6">
<div class="flex flex-col gap-4 w-16 flex-shrink-0">
<img class="w-full aspect-square object-cover border-[0.5px] border-stone-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqPR1zgnVM-px_WHcuUqFQ1U8qttymSWum8AFmyWfilRjjt7bslZDuaWI-APzyv5GKg2HLWx5EbbKV1RyWUnHhJI_7OLzFh2dGm9hEIYL4NVPqpZwk0n9Oj5BsOcpTHKYm4Nq7_o_jCMk4BieiHYHJImwTizKbOStyvuztUmILhFMsvYomc1RdhqwNG4RG2Pu9nN7GfqG3QbTW5eIgI_OX0ThMahE2M01e-C4L3b4tE42jbyRdbpYatAvxHEXZ27fNYgia4Sc3svIB">
<img class="w-full aspect-square object-cover grayscale opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDUdi55C2N26_r9dKeuICTeozKr-2jyfk-sZ5GiRIsSnihHRqGSv0jzrUR9RLIDF2HJdznITWbC-GDfxbh1F4c0WeO8LrIym7kxb6SRqmVgEGUA4udNmVddLHPVxr6Ua9IpHFdPG5qiqXsBz1TXdBhz_6V4rjFkblUcAP5EO4oHg4fgGR16t1Y6gi-qsI57LDDfP8f_fEi23zpjgpu5FAgTBJqeYvPHvC4d70IrhSMwaTVxrZdv4Pk4Jk1ff6Nlsef3iacB5ndzfLw">
<div class="relative w-full aspect-square bg-stone-100 flex items-center justify-center">
<img class="w-full h-full object-cover grayscale opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEVZGgxzi2xDUaQG8yjG4-Cn0vJ7X9KZILbHVJnLIPf0QEKjeovi90JcOb7tYTTo7TD0uwHm-8NMMXBnuV9ku-j-TWW4uY9GpfWqmqRojdZY_CYHIGnBu-sWc-McVuSUnfyXqyZyWgk-tsJk0zrl-S9v2oCDbXBSNcRmW4boPcPMFg321SmsimKOkoDvymXFQXIi3B1EC-c07ix_EJ2w4Gz-4rQfocwvHI4stJWZo7QAQo9iDhj8QPGspLI0rqIGX8eQIkP4Grt2RK">
<span class="material-symbols-outlined absolute text-black/40 text-xl" style="font-variation-settings: &quot;FILL&quot; 1;">play_circle</span>
</div>
<img class="w-full aspect-square object-cover grayscale opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv2IRlxnXtkESUBw2jb88Gqkpm3dHrqAck05R8kVugvs5COgtRu7QOg_vnt2xp-6LK5Du_96KeD37LuUfq9JlOXQYwrjVAaphfdXkohFBxjq_2kBIa5s_RRZn6u-BqBy9t7tKpj4Cp2Y6paSnVWHAQ3rhpttd4HNE6x0SesFBSB89SrD13-X12BdE4kTxdfK9buDtEs0379zdltOjB9tTHhluSANK1dLeL5WZJx5U8y10zwksjDatbQ0yl_vOMNS_7FjScGMiFgXi4">
<div class="w-full aspect-square border border-stone-200 flex items-center justify-center">
<span class="material-symbols-outlined text-stone-600">straighten</span>
</div>
<img class="w-full aspect-square object-cover grayscale opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBApKRVVxtH1JZF3G63ATpk7dzrfFskbcoid_67UaBkfjreqQbzPJBOG3Hq7Jr9wta2BXnD0BGByDLbzC5QxRRah7jC4ZTYAhNDtBI87AFFiG6b_k_OIajd09CP6BHm2YjXhzJoBLpSZ0Z7z5HShSYYWZLAFqFabZTsNjlozw-GLEq7FNcyqkJ1NOnoSgD0gdyuYalx6La6o1jv1o83Uq67FaSPaASK0GITPGO7hXvKsTg6qfHqfXV9nQk2VKCZ2u8mn0T2oKj2hQ5s">
</div>
<div class="relative flex-1 bg-[#F1F0EC] aspect-[5/4] flex items-center justify-center overflow-hidden">
<span class="absolute top-6 left-6 bg-white text-black px-3 py-1 text-[10px] font-section-title uppercase tracking-widest border-[0.5px] border-stone-100">Best Seller</span>
<button class="absolute top-6 right-6">
<span class="material-symbols-outlined text-stone-800">favorite</span>
</button>
<img class="w-full h-full object-contain mix-blend-multiply px-12" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBApKRVVxtH1JZF3G63ATpk7dzrfFskbcoid_67UaBkfjreqQbzPJBOG3Hq7Jr9wta2BXnD0BGByDLbzC5QxRRah7jC4ZTYAhNDtBI87AFFiG6b_k_OIajd09CP6BHm2YjXhzJoBLpSZ0Z7z5HShSYYWZLAFqFabZTsNjlozw-GLEq7FNcyqkJ1NOnoSgD0gdyuYalx6La6o1jv1o83Uq67FaSPaASK0GITPGO7hXvKsTg6qfHqfXV9nQk2VKCZ2u8mn0T2oKj2hQ5s">
</div>
</div>
<!-- Right Column: Config Panel -->
<div class="col-span-12 lg:col-span-4 flex flex-col">
<h1 class="text-4xl font-headline-md text-stone-900 mb-6 tracking-tight">Rolf 31" Dining Table</h1>
<div class="flex items-center gap-4 mb-6">
<span class="text-xl text-secondary font-medium">₦599</span>
<span class="text-stone-400 line-through">₦749</span>
</div>
<div class="flex items-center gap-2 mb-10">
<div class="flex text-black">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined text-sm" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined text-sm" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined text-sm" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined text-sm" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
</div>
<span class="text-xs font-body-md text-stone-500 underline underline-offset-4">72 Reviews</span>
</div>
<div class="space-y-8">
<!-- Collection -->
<div>
<p class="text-[11px] font-section-title uppercase tracking-widest text-stone-900 mb-4">Collection: <span class="font-normal text-stone-600">Table</span></p>
<div class="flex gap-3">
<button class="px-8 py-3 border border-stone-800 text-[11px] font-section-title uppercase tracking-widest">Table</button>
<button class="px-8 py-3 border border-stone-200 text-[11px] font-section-title uppercase tracking-widest text-stone-400">Chair</button>
<button class="px-8 py-3 border border-stone-200 text-[11px] font-section-title uppercase tracking-widest text-stone-400">Dining Set</button>
</div>
</div>
<!-- Top Finish -->
<div>
<p class="text-[11px] font-section-title uppercase tracking-widest text-stone-900 mb-4">Top Finish: <span class="font-normal text-stone-600">White Engineered Stone</span></p>
<div class="flex gap-4">
<div class="w-16 h-10 border border-stone-200 bg-[#E8E1D5] cursor-pointer"></div>
<div class="w-16 h-10 border border-stone-200 bg-[#757575] cursor-pointer"></div>
<div class="w-16 h-10 border-2 border-stone-800 bg-[#F5F5F5] cursor-pointer"></div>
</div>
</div>
<!-- Base Finish -->
<div>
<p class="text-[11px] font-section-title uppercase tracking-widest text-stone-900 mb-4">Base Finish: <span class="font-normal text-stone-600">Warm Brown Oak</span></p>
<div class="flex gap-4">
<div class="w-16 h-10 border border-stone-200 bg-[#B08968] cursor-pointer"></div>
<div class="w-16 h-10 border border-stone-200 bg-[#7D7D7D] cursor-pointer"></div>
<div class="w-16 h-10 border-2 border-stone-800 bg-[#5D4037] cursor-pointer"></div>
</div>
</div>
<!-- Size -->
<div>
<p class="text-[11px] font-section-title uppercase tracking-widest text-stone-900 mb-4">Size: <span class="font-normal text-stone-600">31"</span></p>
<div class="flex gap-3">
<button class="px-8 py-3 border border-stone-800 text-[11px] font-section-title uppercase tracking-widest">31"</button>
<button class="px-8 py-3 border border-stone-200 text-[11px] font-section-title uppercase tracking-widest text-stone-400">39"</button>
</div>
</div>
</div>
<div class="mt-12 space-y-6">
<button class="w-full bg-[#2C1B14] text-white py-5 font-section-title uppercase tracking-[0.2em] hover:bg-black transition-colors">Add to Cart</button>
<div class="bg-stone-50 p-4 flex items-center justify-between border border-stone-100">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-stone-600">local_shipping</span>
<span class="text-[11px] font-section-title uppercase tracking-widest text-stone-600">Free Parcel Delivery</span>
</div>
<span class="material-symbols-outlined text-sm text-stone-400">help</span>
</div>
<div class="pt-2 border-t border-stone-200 flex items-center justify-between cursor-pointer">
<span class="text-[11px] font-section-title uppercase tracking-widest text-stone-800">Our Guarantees</span>
<span class="material-symbols-outlined text-stone-400">add</span>
</div>
</div>
</div>
</section>
<!-- Product Details Accordion (Moved before Why You'll Love It) -->
<section class="max-w-4xl mx-auto mb-32">
<div class="text-center mb-16">
<h2 class="text-3xl font-headline-md mb-8">Product Details</h2>
<p class="text-stone-600 font-body-md leading-relaxed max-w-2xl mx-auto">
                    The Rolf Collection reimagines mid-century proportions through a lens of contemporary craft. Each piece features a signature fluted base, hand-finished to highlight the natural grain of the sustainably sourced oak. The engineered stone top provides a durable, heat-resistant surface that maintains its pristine appearance for years to come.
                </p>
</div>
<div class="border-t border-stone-200">
<div class="py-8 border-b border-stone-200 cursor-pointer group">
<div class="flex justify-between items-center">
<span class="text-[11px] font-section-title uppercase tracking-widest text-stone-900">Dimensions</span>
<span class="material-symbols-outlined text-stone-400 group-hover:rotate-180 transition-transform">expand_more</span>
</div>
</div>
<div class="py-8 border-b border-stone-200 cursor-pointer group">
<div class="flex justify-between items-center">
<span class="text-[11px] font-section-title uppercase tracking-widest text-stone-900">Assembly &amp; Care</span>
<span class="material-symbols-outlined text-stone-400 group-hover:rotate-180 transition-transform">expand_more</span>
</div>
</div>
<div class="py-8 border-b border-stone-200 cursor-pointer group">
<div class="flex justify-between items-center">
<span class="text-[11px] font-section-title uppercase tracking-widest text-stone-900">Shipping &amp; Returns</span>
<span class="material-symbols-outlined text-stone-400 group-hover:rotate-180 transition-transform">expand_more</span>
</div>
</div>
</div>
</section>
<!-- Why You'll Love It Section -->
<section class="mb-32">
<div class="flex flex-col mb-8">
<h2 class="text-[20px] font-body-md uppercase tracking-[0.1em] mb-8">Why You'll Love It</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
<div class="flex gap-3">
<span class="text-sm">•</span>
<p class="text-[15px] font-body-md leading-[1.6] text-stone-900">Fluting underscores the texture and depth of the pedestal base, creating a rhythmic visual interest.</p>
</div>
<div class="flex gap-3">
<span class="text-sm">•</span>
<p class="text-[15px] font-body-md leading-[1.6] text-stone-900">Designed with small spaces in mind, the 31" diameter fits perfectly into urban dining nooks or foyers.</p>
</div>
<div class="flex gap-3">
<span class="text-sm">•</span>
<p class="text-[15px] font-body-md leading-[1.6] text-stone-900">Smooth rounded shape gathers a crowd naturally, removing sharp corners for a more intimate experience.</p>
</div>
</div>
</div>
<div class="w-full">
<img alt="Room Scene" class="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPgVyD7-dScZF16Yb10xo1njeYyE09F9W5lRgcRCgHwgwv3hY0aKrhFnAne7OHxiZZaD33UDM3srOgTfnM6Q0eldw85kWDqgdMFn-FaH-PDiBr1pk9QUeq0Zb06UP5kwiiZwytXxA0SiBMMVGHwm5Yly3ExNt9Iv91rNJb_TQOj2yBAuEKOhDis9l8oFE9WtECLZ90pajSg_GXM6zHf7GAfDl2uzhtmbB4-q7A0XxQQiDvaveoJAL9zzE7zW84_bjgLTWhK9VEIMuQ">
</div>
</section>
<!-- Customer Reviews -->
<section class="mb-32 max-w-[1200px] mx-auto px-4">
<h2 class="text-[20px] font-body-md uppercase tracking-[0.1em] mb-12">Customer Reviews</h2>
<div class="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
<div class="flex items-center gap-6">
<span class="text-[64px] font-light leading-none">4.8</span>
<div>
<div class="flex text-black mb-1">
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
</div>
<span class="text-[11px] font-body-md text-stone-400 tracking-wider">72 Reviews</span>
</div>
</div>
<div class="flex items-center gap-4 w-full md:w-auto">
<div class="relative flex-grow md:flex-grow-0 min-w-[200px]">
<select class="w-full appearance-none bg-white border border-stone-300 py-3 px-4 pr-10 text-[12px] font-body-md tracking-wider uppercase focus:outline-none focus:border-stone-500">
<option>Recommended</option>
</select>
<span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">expand_more</span>
</div>
<button class="bg-black text-white px-8 py-3 text-[12px] font-body-md tracking-widest uppercase hover:bg-stone-800 transition-colors whitespace-nowrap">Write a Review</button>
</div>
</div>
<!-- Review List -->
<div class="space-y-16">
<!-- Review 1: Brice -->
<div class="flex flex-col md:flex-row gap-8 border-b border-stone-100 pb-16">
<div class="w-full md:w-1/4">
<div class="flex items-center gap-2 mb-2">
<span class="text-[13px] font-bold">Brice</span>
<span class="material-symbols-outlined text-[16px] text-stone-600">check_circle</span>
<span class="bg-black text-white text-[9px] px-2 py-0.5 tracking-wider uppercase ml-auto md:ml-0">Featured</span>
</div>
<div class="flex text-black mb-2">
<span class="material-symbols-outlined text-[14px]" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined text-[14px]" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined text-[14px]" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined text-[14px]" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined text-[14px]" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
</div>
<p class="text-[11px] text-stone-400 font-body-md">3 months ago</p>
</div>
<div class="flex-1">
<div class="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
<div>
<p class="text-[11px] text-stone-400 uppercase tracking-widest mb-2 font-body-md">Rolf 31" Dining Table — White Engineered Stone | Warm Brown Oak | 31"</p>
<h3 class="text-[18px] font-bold mb-4">Stunning Table</h3>
<p class="text-[14px] text-stone-600 leading-relaxed max-w-2xl mb-6">This dining table is absolutely stunning. We chose to use it as an entryway table in our foyer, and it makes an immediate statement. <a class="underline underline-offset-4 font-medium text-black" href="#">Read More</a></p>
</div>
<div class="w-full md:w-[200px] space-y-2">
<div class="flex justify-between items-center text-[11px] uppercase tracking-wider">
<span class="">Value</span>
<div class="flex gap-1">
<div class="w-5 h-1.5 bg-[#b5a796]"></div>
<div class="w-5 h-1.5 bg-[#b5a796]"></div>
<div class="w-5 h-1.5 bg-[#b5a796]"></div>
<div class="w-5 h-1.5 bg-[#b5a796]"></div>
<div class="w-5 h-1.5 bg-[#b5a796]"></div>
</div>
</div>
<div class="flex justify-between items-center text-[11px] uppercase tracking-wider">
<span class="">Design</span>
<div class="flex gap-1">
<div class="w-5 h-1.5 bg-[#b5a796]"></div>
<div class="w-5 h-1.5 bg-[#b5a796]"></div>
<div class="w-5 h-1.5 bg-[#b5a796]"></div>
<div class="w-5 h-1.5 bg-[#b5a796]"></div>
<div class="w-5 h-1.5 bg-[#b5a796]"></div>
</div>
</div>
<div class="flex justify-between items-center text-[11px] uppercase tracking-wider">
<span class="">Quality</span>
<div class="flex gap-1">
<div class="w-5 h-1.5 bg-[#b5a796]"></div>
<div class="w-5 h-1.5 bg-[#b5a796]"></div>
<div class="w-5 h-1.5 bg-[#b5a796]"></div>
<div class="w-5 h-1.5 bg-[#b5a796]"></div>
<div class="w-5 h-1.5 bg-[#b5a796]"></div>
</div>
</div>
<div class="pt-4 flex justify-end">
<button class="text-[11px] text-stone-400 hover:text-black flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">thumb_up</span> Helpful (3)
                                    </button>
</div>
</div>
</div>
<div class="flex gap-4 overflow-x-auto pb-4">
<img class="w-32 h-32 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBApKRVVxtH1JZF3G63ATpk7dzrfFskbcoid_67UaBkfjreqQbzPJBOG3Hq7Jr9wta2BXnD0BGByDLbzC5QxRRah7jC4ZTYAhNDtBI87AFFiG6b_k_OIajd09CP6BHm2YjXhzJoBLpSZ0Z7z5HShSYYWZLAFqFabZTsNjlozw-GLEq7FNcyqkJ1NOnoSgD0gdyuYalx6La6o1jv1o83Uq67FaSPaASK0GITPGO7hXvKsTg6qfHqfXV9nQk2VKCZ2u8mn0T2oKj2hQ5s">
<img class="w-32 h-32 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqPR1zgnVM-px_WHcuUqFQ1U8qttymSWum8AFmyWfilRjjt7bslZDuaWI-APzyv5GKg2HLWx5EbbKV1RyWUnHhJI_7OLzFh2dGm9hEIYL4NVPqpZwk0n9Oj5BsOcpTHKYm4Nq7_o_jCMk4BieiHYHJImwTizKbOStyvuztUmILhFMsvYomc1RdhqwNG4RG2Pu9nN7GfqG3QbTW5eIgI_OX0ThMahE2M01e-C4L3b4tE42jbyRdbpYatAvxHEXZ27fNYgia4Sc3svIB">
<img class="w-32 h-32 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv2IRlxnXtkESUBw2jb88Gqkpm3dHrqAck05R8kVugvs5COgtRu7QOg_vnt2xp-6LK5Du_96KeD37LuUfq9JlOXQYwrjVAaphfdXkohFBxjq_2kBIa5s_RRZn6u-BqBy9t7tKpj4Cp2Y6paSnVWHAQ3rhpttd4HNE6x0SesFBSB89SrD13-X12BdE4kTxdfK9buDtEs0379zdltOjB9tTHhluSANK1dLeL5WZJx5U8y10zwksjDatbQ0yl_vOMNS_7FjScGMiFgXi4">
</div>
</div>
</div>
<!-- Review 2: Jap... -->
<div class="flex flex-col md:flex-row gap-8 pb-16">
<div class="w-full md:w-1/4">
<div class="flex items-center gap-2 mb-2">
<span class="text-[13px] font-bold">Jap...</span>
<span class="material-symbols-outlined text-[16px] text-stone-600">check_circle</span>
<span class="bg-black text-white text-[9px] px-2 py-0.5 tracking-wider uppercase ml-auto md:ml-0">Featured</span>
</div>
<div class="flex text-black mb-2">
<span class="material-symbols-outlined text-[14px]" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined text-[14px]" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined text-[14px]" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined text-[14px]" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined text-[14px]" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
</div>
<p class="text-[11px] text-stone-400 font-body-md">10 months ago</p>
</div>
<div class="flex-1">
<div class="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
<div>
<p class="text-[11px] text-stone-400 uppercase tracking-widest mb-2 font-body-md">Rolf 39" Dining Table — White Sintered Stone | Brown Oak | 39"</p>
<h3 class="text-[18px] font-bold mb-4">Perfect Dining Table for a Little Apartment</h3>
<p class="text-[14px] text-stone-600 leading-relaxed max-w-2xl mb-6">In a small space, this is the perfect dining table for two, with room for a third (or a fourth if we pull it away from the wall) if guests are visiting. Didn't know anything about sintered stone, but I guess it's basically "lab-made" marble. I like that it isn't made with resin or glue that can discolor, like with other types of engineered stone. I've had this table for almost a year exactly n <a class="underline underline-offset-4 font-medium text-black" href="#">Read More</a></p>
</div>
<div class="w-full md:w-[200px] space-y-2">
<div class="pt-4 flex justify-end">
<button class="text-[11px] text-stone-400 hover:text-black flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">thumb_up</span> Helpful (8)
                                    </button>
</div>
</div>
</div>
<div class="flex gap-4 overflow-x-auto">
<img class="w-32 h-44 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAteOnPtDTTJEri5flZo_n3eFSkt2a6vCvTcWBsL3oDzbm_ZlWMnvZFfM9kmSRmtSqPTZvws5LsX34fwXj_-yXC8tpo1ho0aSXeAmjT0Kr8NRckmmvbBSM0aC6x_8KeoYc5gWQ4YejQfY3DTevU4jbcQVTwAIfYaqdqxVHwucWHJJ2-fsbemQujkZXWArbgDD8AOGRFK4tcKHYJdeeZgCnR7qsz4DrWcr8_NsC3NsmQaLzmeROe3_uROVWlkmuna18LECBA2ShX3uKI">
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-[#F5F5F5] text-stone-900 pt-24 pb-12 mt-32 border-t border-stone-200">
<div class="max-w-[1440px] mx-auto px-12">
<div class="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
<!-- Brand Info -->
<div class="md:col-span-3">
<div class="text-[28px] font-headline-lg mb-6 tracking-[0.2em] uppercase font-light">RANOS</div>
<p class="text-stone-500 text-[11px] font-body-md leading-relaxed uppercase tracking-widest max-w-[200px]">
                        Crafted for the discerning. Heritage design met with modern precision.
                    </p>
</div>
<!-- Column 1: Products -->
<div class="md:col-span-2">
<h5 class="font-bold text-[11px] tracking-[0.15em] mb-8 uppercase text-stone-900">Products</h5>
<ul class="space-y-4 text-[13px] text-stone-600 font-medium">
<li class=""><a class="hover:text-black transition-colors" href="#">Furniture</a></li>
<li class=""><a class="hover:text-black transition-colors" href="#">Lighting</a></li>
<li class=""><a class="hover:text-black transition-colors" href="#">Textiles</a></li>
<li class=""><a class="hover:text-black transition-colors" href="#">Leather</a></li>
<li class=""><a class="hover:text-black transition-colors" href="#">Trim</a></li>
<li class=""><a class="hover:text-black transition-colors" href="#">Wallcovering</a></li>
<li class=""><a class="hover:text-black transition-colors" href="#">Window Shades</a></li>
<li class=""><a class="hover:text-black transition-colors" href="#">Rugs</a></li>
<li class=""><a class="hover:text-black transition-colors" href="#">Accessories</a></li>
<li class=""><a class="hover:text-black transition-colors" href="#">Fine Art</a></li>
</ul>
</div>
<!-- Column 2: About Us -->
<div class="md:col-span-2">
<h5 class="font-bold text-[11px] tracking-[0.15em] mb-8 uppercase text-stone-900">About Us</h5>
<ul class="space-y-4 text-[13px] text-stone-600 font-medium">
<li class=""><a class="hover:text-black transition-colors" href="#">Company</a></li>
<li class=""><a class="hover:text-black transition-colors" href="#">Founder Story</a></li>
<li class=""><a class="hover:text-black transition-colors" href="#">Our Collections</a></li>
<li class=""><a class="hover:text-black transition-colors" href="#">Designers</a></li>
<li class=""><a class="hover:text-black transition-colors" href="#">TDGN Contract</a></li>
<li class="flex items-center gap-1"><a class="hover:text-black transition-colors" href="#">Careers</a> <span class="material-symbols-outlined text-[12px]">north_east</span></li>
</ul>
</div>
<!-- Column 3: Support -->
<div class="md:col-span-2">
<h5 class="font-bold text-[11px] tracking-[0.15em] mb-8 uppercase text-stone-900">Support</h5>
<ul class="space-y-4 text-[13px] text-stone-600 font-medium">
<li class=""><a class="hover:text-black transition-colors" href="#">Help Center</a></li>
<li class=""><a class="hover:text-black transition-colors" href="#">Shipping</a></li>
<li class=""><a class="hover:text-black transition-colors" href="#">Returns</a></li>
<li class=""><a class="hover:text-black transition-colors" href="#">Contact Us</a></li>
<li class=""><a class="hover:text-black transition-colors" href="#">Terms of Use</a></li>
<li class=""><a class="hover:text-black transition-colors" href="#">Product Care</a></li>
<li class=""><a class="hover:text-black transition-colors" href="#">Resources</a></li>
<li class=""><a class="hover:text-black transition-colors" href="#">Showroom Locations</a></li>
<li class="flex items-center gap-1"><a class="hover:text-black transition-colors" href="#">Accessibility Statement</a> <span class="material-symbols-outlined text-[12px]">north_east</span></li>
</ul>
</div>
<!-- Column 4: Newsletter -->
<div class="md:col-span-3">
<h5 class="font-bold text-[11px] tracking-[0.15em] mb-8 uppercase text-stone-900">Join our newsletter</h5>
<p class="text-[13px] leading-relaxed text-stone-500 mb-8 font-medium">
                        Join our newsletter to be the first to know about exclusive new collections, design partnerships, and showroom offerings.
                    </p>
<div class="flex items-center bg-white border border-stone-200">
<input class="bg-transparent border-none px-4 py-4 text-[12px] focus:ring-0 flex-grow placeholder:text-stone-400 font-medium" placeholder="Email Address" type="email">
<button class="px-6 py-4 border-l border-stone-200 text-[10px] font-bold tracking-[0.15em] hover:bg-stone-50 transition-colors uppercase flex items-center gap-2">
                            SIGNUP <span class="material-symbols-outlined text-[14px]">arrow_right_alt</span>
</button>
</div>
<div class="flex items-center gap-6 mt-20 justify-end md:justify-start">
<a class="text-stone-600 hover:text-black transition-colors" href="#"><span class="material-symbols-outlined text-[20px]">photo_camera</span></a>
<a class="text-stone-600 hover:text-black transition-colors" href="#"><span class="material-symbols-outlined text-[20px]">bookmark</span></a>
<a class="text-stone-600 hover:text-black transition-colors" href="#"><span class="material-symbols-outlined text-[20px]">face</span></a>
<a class="text-stone-600 hover:text-black transition-colors" href="#"><span class="material-symbols-outlined text-[20px]">play_circle</span></a>
</div>
</div>
</div>
<!-- Bottom Bar -->
<div class="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-stone-200/60">
<p class="text-[10px] text-stone-400 font-body-md uppercase tracking-[0.1em]">© 2024 RANOS STUDIO. CRAFTED FOR THE DISCERNING.</p>
<div class="flex items-center gap-6 text-[10px] text-stone-400 font-body-md uppercase tracking-[0.1em]">
<a class="hover:text-black transition-colors flex items-center gap-1" href="#">Privacy Notice <span class="material-symbols-outlined text-[10px]">north_east</span></a>
<a class="hover:text-black transition-colors" href="#">Terms of Use</a>
</div>
</div>
<div class="mt-8 text-center">
<p class="text-[9px] text-stone-300 font-body-md uppercase tracking-[0.3em]">Part of the TDGN Collective</p>
</div>
</div>
</footer>


</body></html>