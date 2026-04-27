import { saveOrder } from "./firebase.js";
window.saveOrder = saveOrder;
console.log("saveOrder:", saveOrder);
console.log("SCRIPT STARTED");
 const modals = {
    womens: {
      eyebrow: 'Shop · Collection',
      title: "Women's Wear",
      body: `
        <div class="fp-badge">2025 Collection</div>
        <p>SABA's women's collection is a love letter to the Indian woman — rooted in tradition, styled for every chapter of her life. From morning pooja to board meetings, from festive celebrations to quiet evenings.</p>
        <div class="fp-divider"></div>
        <h4>Categories</h4>
        <ul>
          <li><strong>Sarees</strong> — Banarasi silk, Chanderi, Kanjivaram, Linen, and Organza. Starting ₹2,499.</li>
          <li><strong>Salwar Suits</strong> — Anarkali, Straight cut, Palazzo sets. Starting ₹1,299.</li>
          <li><strong>Kurtas & Tops</strong> — Block-printed, Ajrakh, Hand-embroidered. Starting ₹699.</li>
          <li><strong>Lehengas</strong> — Bridal, Semi-bridal, Festive. Starting ₹4,999.</li>
          <li><strong>Indo-Western Fusion</strong> — Dhoti pants, Crop kurtas, Cape sets. Starting ₹1,499.</li>
        </ul>
        <h4>Signature Fabrics</h4>
        <p>We work exclusively with natural fibres — pure silk, handloom cotton, linen, and organic mulmul. Every fabric is GOTS certified and sourced directly from weaving clusters across India.</p>
        <div class="fp-highlight">"Every saree carries 72,000 threads of love — and the hands of an artisan who has spent decades mastering their craft."</div>
        <h4>Care Instructions</h4>
        <p>Dry clean recommended for silk. Hand wash in cold water for cotton and linen. Store folded in muslin cloth, away from direct sunlight.</p>
      `
    },
    mens: {
      eyebrow: 'Shop · Collection',
      title: "Men's Wear",
      body: `
        <div class="fp-badge">Heritage Menswear</div>
        <p>SABA's men's collection reimagines Indian menswear for the modern gentleman — sharp, understated, and deeply rooted in craft. Designed for men who carry their culture with quiet confidence.</p>
        <div class="fp-divider"></div>
        <h4>Categories</h4>
        <ul>
          <li><strong>Kurta Sets</strong> — Cotton, Silk, Linen. Straight cut & A-line. Starting ₹999.</li>
          <li><strong>Sherwanis</strong> — Wedding, Festive, and Casual. Starting ₹5,999.</li>
          <li><strong>Nehru Jackets</strong> — Block-printed, Embroidered, Plain. Starting ₹1,799.</li>
          <li><strong>Dhotis & Pajamas</strong> — Handwoven cotton, silk blends. Starting ₹599.</li>
          <li><strong>Indo-Western</strong> — Structured bandhgalas, layered sets. Starting ₹2,499.</li>
        </ul>
        <h4>Our Craft Promise</h4>
        <p>All menswear is hand-finished. Buttons are sourced from recycled horn and bone. Stitching follows traditional kaarigari techniques passed down through weaving families in Varanasi and Lucknow.</p>
        <div class="fp-highlight">"A man who wears his heritage wears his identity — SABA helps you do both with ease."</div>
      `
    },
    accessories: {
      eyebrow: 'Shop · Accessories',
      title: 'Accessories',
      body: `
        <div class="fp-badge">Curated Finishing Touches</div>
        <p>The right accessory completes a look. SABA's accessories are not afterthoughts — they are crafted with the same intention and heritage as our garments.</p>
        <div class="fp-divider"></div>
        <h4>What We Offer</h4>
        <ul>
          <li><strong>Dupattas & Stoles</strong> — Silk, Chiffon, Georgette, Khadi. Starting ₹399.</li>
          <li><strong>Clutches & Potlis</strong> — Brocade, Zari, Hand-embroidered. Starting ₹699.</li>
          <li><strong>Jewellery</strong> — Oxidised silver, Kundan, Meenakari, Terracotta. Starting ₹299.</li>
          <li><strong>Juttis & Mojaris</strong> — Hand-stitched leather, embroidered. Starting ₹999.</li>
          <li><strong>Hair Accessories</strong> — Gajra alternatives, embellished clips. Starting ₹199.</li>
        </ul>
        <h4>Packaging</h4>
        <p>All accessories arrive in recycled kraft boxes tied with jute twine and a handwritten card from our artisan partners. Perfect as gifts.</p>
      `
    },
    allproducts: {
      eyebrow: 'Shop · Browse',
      title: 'All Products',
      body: `
        <p>Browse SABA's complete catalogue of over <strong>150+ curated styles</strong> across women's wear, men's wear, and accessories — all sourced from artisan clusters across 15 Indian states.</p>
        <div class="fp-divider"></div>
        <h4>Quick Navigation</h4>
        <table class="fp-table">
          <tr><th>Category</th><th>Styles</th><th>Starting Price</th></tr>
          <tr><td>Women's Sarees</td><td>42 styles</td><td>₹2,499</td></tr>
          <tr><td>Women's Suits</td><td>31 styles</td><td>₹1,299</td></tr>
          <tr><td>Men's Kurtas</td><td>28 styles</td><td>₹999</td></tr>
          <tr><td>Men's Sherwanis</td><td>14 styles</td><td>₹5,999</td></tr>
          <tr><td>Accessories</td><td>38 styles</td><td>₹199</td></tr>
        </table>
        <h4>New Arrivals</h4>
        <p>We add 8–12 new styles every week. Subscribe to our newsletter to get first access before anything goes live on the site.</p>
      `
    },
    festive: {
      eyebrow: 'Shop · Special',
      title: '🪔 Festive Edit',
      body: `
        <div class="fp-badge">Limited Collection</div>
        <p>Our Festive Edit is carefully assembled each season — a curated selection of the most celebratory, most radiant pieces from our collection, designed for Diwali, Eid, Navratri, weddings, and every occasion that calls for brilliance.</p>
        <div class="fp-divider"></div>
        <h4>2025 Festive Highlights</h4>
        <ul>
          <li>Diwali Saree Collection — Gold zari on rich jewel tones</li>
          <li>Navratri Chaniya Choli — 9 colours, one for each day</li>
          <li>Wedding Guest Edit — Lehengas and silk suits</li>
          <li>Men's Sherwani Capsule — For the groom's family</li>
          <li>Gift Hampers — Curated potli sets, stoles, and jewellery</li>
        </ul>
        <div class="fp-highlight">"Dress for the celebration, not just the occasion. SABA's Festive Edit helps you be the memory people carry home."</div>
        <h4>Availability</h4>
        <p>Festive Edit pieces are available in limited quantities. Once sold, they are retired until the next season. Early access available for newsletter subscribers.</p>
      `
    },
    sizeguide: {
      eyebrow: 'Help · Sizing',
      title: 'Size Guide',
      body: `
        <p>Our garments are crafted in Indian standard sizing with generous allowances for layering. We recommend measuring yourself before ordering.</p>
        <div class="fp-divider"></div>
        <h4>How to Measure</h4>
        <ul>
          <li><strong>Bust/Chest</strong> — Measure around the fullest part of your chest, keeping the tape parallel to the ground.</li>
          <li><strong>Waist</strong> — Measure around your natural waistline, just above the hip bone.</li>
          <li><strong>Hip</strong> — Measure around the fullest part of your hips.</li>
          <li><strong>Length</strong> — Measure from the top of your shoulder to where you want the garment to end.</li>
        </ul>
        <h4>Women's Size Chart</h4>
        <table class="fp-table">
          <tr><th>Size</th><th>Bust (in)</th><th>Waist (in)</th><th>Hip (in)</th></tr>
          <tr><td>XS</td><td>32</td><td>26</td><td>35</td></tr>
          <tr><td>S</td><td>34</td><td>28</td><td>37</td></tr>
          <tr><td>M</td><td>36</td><td>30</td><td>39</td></tr>
          <tr><td>L</td><td>38</td><td>32</td><td>41</td></tr>
          <tr><td>XL</td><td>40</td><td>34</td><td>43</td></tr>
          <tr><td>XXL</td><td>42</td><td>36</td><td>45</td></tr>
        </table>
        <h4>Men's Size Chart</h4>
        <table class="fp-table">
          <tr><th>Size</th><th>Chest (in)</th><th>Waist (in)</th><th>Shoulder (in)</th></tr>
          <tr><td>S</td><td>38</td><td>32</td><td>16</td></tr>
          <tr><td>M</td><td>40</td><td>34</td><td>17</td></tr>
          <tr><td>L</td><td>42</td><td>36</td><td>17.5</td></tr>
          <tr><td>XL</td><td>44</td><td>38</td><td>18</td></tr>
          <tr><td>XXL</td><td>46</td><td>40</td><td>18.5</td></tr>
        </table>
        <h4>Need Custom Sizing?</h4>
        <p>We offer custom tailoring on select styles. WhatsApp us your measurements at <strong>+91 98765 43210</strong> and we'll guide you through the process. Additional charges may apply.</p>
      `
    },
    shipping: {
      eyebrow: 'Help · Delivery',
      title: 'Shipping & Delivery',
      body: `
        <div class="fp-highlight">"Free delivery on all orders above ₹999 — across India."</div>
        <h4>Delivery Timelines</h4>
        <table class="fp-table">
          <tr><th>Location</th><th>Standard</th><th>Express</th></tr>
          <tr><td>Metro Cities</td><td>3–5 days</td><td>1–2 days</td></tr>
          <tr><td>Tier 2 Cities</td><td>5–7 days</td><td>2–3 days</td></tr>
          <tr><td>Remote Areas</td><td>7–10 days</td><td>4–5 days</td></tr>
        </table>
        <h4>Shipping Charges</h4>
        <ul>
          <li>Orders above ₹999 — <strong>Free delivery</strong></li>
          <li>Orders below ₹999 — ₹79 flat shipping</li>
          <li>Express delivery — ₹149 additional</li>
          <li>Cash on Delivery — ₹49 handling fee</li>
        </ul>
        <h4>Packaging</h4>
        <p>All orders are packed in recycled kraft boxes with jute twine and tissue paper. Delicate items like silk sarees are wrapped in muslin cloth before boxing.</p>
        <h4>International Shipping</h4>
        <p>We currently ship to USA, UK, UAE, Canada, and Australia. Duties and taxes are the buyer's responsibility. Delivery: 10–18 business days. Charges calculated at checkout.</p>
        <h4>Track Your Order</h4>
        <p>Once shipped, you'll receive an SMS and email with your tracking link. You can also track via our website using your order ID.</p>
      `
    },
    returns: {
      eyebrow: 'Help · Returns',
      title: 'Returns & Exchange',
      body: `
        <div class="fp-badge">7-Day Return Policy</div>
        <p>We want you to love what you receive. If something isn't right, we make it easy to return or exchange — no questions asked within 7 days of delivery.</p>
        <div class="fp-divider"></div>
        <h4>What Can Be Returned</h4>
        <ul>
          <li>Unworn, unwashed items with original tags attached</li>
          <li>Items in original packaging</li>
          <li>Items reported within 7 days of delivery</li>
        </ul>
        <h4>What Cannot Be Returned</h4>
        <ul>
          <li>Custom-tailored or personalised orders</li>
          <li>Discounted sale items (marked as Final Sale)</li>
          <li>Innerwear and intimate accessories</li>
          <li>Items damaged due to improper care</li>
        </ul>
        <h4>How to Initiate a Return</h4>
        <ul>
          <li>WhatsApp us at <strong>+91 98765 43210</strong> with your order ID and reason</li>
          <li>We'll schedule a free pickup within 24–48 hours</li>
          <li>Refund processed within 5–7 business days after inspection</li>
        </ul>
        <h4>Exchange Process</h4>
        <p>Want a different size or colour? Exchanges are free. Simply initiate a return and place a new order — we'll waive the shipping on your replacement order.</p>
        <h4>Refund Methods</h4>
        <table class="fp-table">
          <tr><th>Method</th><th>Timeline</th></tr>
          <tr><td>UPI / Bank Transfer</td><td>3–5 business days</td></tr>
          <tr><td>Store Credit</td><td>Instant</td></tr>
          <tr><td>Card Refund</td><td>5–7 business days</td></tr>
        </table>
      `
    },
    trackorder: {
      eyebrow: 'Help · Tracking',
      title: 'Track My Order',
      body: `
        <p>Once your order is dispatched, you'll receive a tracking link via SMS and email. Here's how to track your order at any time:</p>
        <div class="fp-divider"></div>
        <h4>How to Track</h4>
        <ul>
          <li><strong>Via SMS/Email</strong> — Click the tracking link sent at the time of dispatch</li>
          <li><strong>Via Website</strong> — Go to My Orders → Enter your Order ID</li>
          <li><strong>Via WhatsApp</strong> — Send your order ID to <strong>+91 98765 43210</strong></li>
        </ul>
        <h4>Order Status Explained</h4>
        <table class="fp-table">
          <tr><th>Status</th><th>What it Means</th></tr>
          <tr><td>Confirmed</td><td>Order received & being processed</td></tr>
          <tr><td>Packed</td><td>Item packed and ready for pickup</td></tr>
          <tr><td>Shipped</td><td>Out with the courier partner</td></tr>
          <tr><td>Out for Delivery</td><td>Arriving today</td></tr>
          <tr><td>Delivered</td><td>Successfully delivered</td></tr>
        </table>
        <h4>Delayed Order?</h4>
        <p>If your order hasn't moved in 48 hours after dispatch, please contact us. We'll escalate with our courier partner and ensure resolution within 24 hours.</p>
      `
    },
    faq: {
      eyebrow: 'Help · FAQ',
      title: 'Frequently Asked Questions',
      body: `
        <h4>Ordering</h4>
        <p><strong>Can I modify my order after placing it?</strong><br>Yes, within 2 hours of placing your order. After that, it goes into processing and cannot be changed.</p>
        <p><strong>Do you accept COD?</strong><br>Yes, Cash on Delivery is available for orders up to ₹5,000. A ₹49 handling fee applies.</p>
        <div class="fp-divider"></div>
        <h4>Products</h4>
        <p><strong>Are all products handmade?</strong><br>Most of our products are handcrafted or hand-finished. Each product listing clearly states the craft technique used.</p>
        <p><strong>Do colours look exactly as shown?</strong><br>We photograph in natural light, but screen calibration can cause slight variation. If you need a precise match, request a fabric swatch via WhatsApp.</p>
        <div class="fp-divider"></div>
        <h4>Payments</h4>
        <p><strong>What payment methods do you accept?</strong><br>UPI, Credit/Debit Cards, Net Banking, Wallets (Paytm, PhonePe), EMI on select orders, and COD.</p>
        <p><strong>Is my payment information secure?</strong><br>Yes. All transactions are processed via Razorpay with 256-bit SSL encryption. We do not store card details.</p>
        <div class="fp-divider"></div>
        <h4>Gifting</h4>
        <p><strong>Can I send a gift directly to someone?</strong><br>Yes! Add the recipient's address at checkout and add a gift note. We'll include a handwritten card and omit the invoice.</p>
      `
    },
    ourstory: {
      eyebrow: 'Company · About',
      title: 'Our Story',
      body: `
        <div class="fp-highlight">"SABA was not built as a business. It was built as a bridge — between India's greatest craftspeople and the world that deserves to wear their work."</div>
        <p>SABA was founded in Aurangabad, Maharashtra in 1996 by textile scholar and designer <strong>Saira Ahmed</strong>, who spent years documenting dying weaving traditions across rural India before deciding that documentation wasn't enough — these crafts needed to be worn, loved, and sold.</p>
        <div class="fp-divider"></div>
        <h4>The Beginning</h4>
        <p>What started as a small boutique in Aurangabad's Shahganj market — with 12 Paithani sarees and three weaver families from Yeola — has grown into one of Maharashtra's most trusted heritage fashion labels, with over 80 artisan partners and 2,500+ customers across India and abroad.</p>
        <h4>Our Philosophy</h4>
        <ul>
          <li>Craft must be compensated fairly — we pay 40% above market rates to all artisans</li>
          <li>Heritage must evolve — traditional techniques, contemporary silhouettes</li>
          <li>Transparency over trend — we tell you exactly who made your garment</li>
        </ul>
        <h4>Recognition</h4>
        <p>SABA has been featured in <em>Vogue India</em>, <em>Femina</em>, and the <em>Economic Times</em>. We were named one of India's Top 10 Ethical Fashion Brands in 2023 by the Fashion Revolution India collective.</p>
      `
    },
    artisans: {
      eyebrow: 'Company · Partners',
      title: 'Artisan Partners',
      body: `
        <div class="fp-badge">80+ Artisan Families</div>
        <p>At SABA, artisans are not suppliers — they are co-creators. We visit every weaving cluster personally, build long-term relationships, and ensure every craftsperson behind our collection is named, known, and fairly paid.</p>
        <div class="fp-divider"></div>
        <h4>Our Craft Clusters</h4>
        <table class="fp-table">
          <tr><th>Region</th><th>Craft</th><th>Families</th></tr>
          <tr><td>Yeola, Maharashtra</td><td>Paithani Silk Weaving</td><td>14</td></tr>
          <tr><td>Varanasi, UP</td><td>Banarasi Brocade</td><td>18</td></tr>
          <tr><td>Jaipur, Rajasthan</td><td>Block Printing, Bandhani</td><td>11</td></tr>
          <tr><td>Kutch, Gujarat</td><td>Rogan Art, Embroidery</td><td>9</td></tr>
          <tr><td>Bhuj, Gujarat</td><td>Ajrakh Natural Dyeing</td><td>7</td></tr>
          <tr><td>Kanchipuram, Tamil Nadu</td><td>Kanjivaram Silk</td><td>12</td></tr>
          <tr><td>Murshidabad, WB</td><td>Tussar Silk, Tant</td><td>9</td></tr>
        </table>
        <h4>Our Commitment to Artisans</h4>
        <ul>
          <li>Minimum 40% above prevailing market rates</li>
          <li>Advance payment before production begins</li>
          <li>Health insurance for all registered weavers</li>
          <li>Children's education support for artisan families</li>
          <li>Annual craft documentation and archive publishing</li>
        </ul>
        <div class="fp-highlight">"When you buy a SABA piece, you sustain a livelihood, preserve a technique, and carry a piece of India's living heritage."</div>
      `
    },
    sustainability: {
      eyebrow: 'Company · Values',
      title: 'Sustainability',
      body: `
        <div class="fp-badge">Consciously Crafted</div>
        <p>Sustainability at SABA is not a marketing term — it is a practice baked into every decision, from the thread we source to the box we ship in.</p>
        <div class="fp-divider"></div>
        <h4>Materials</h4>
        <ul>
          <li>100% natural fibres — silk, cotton, linen, wool. No synthetics.</li>
          <li>GOTS-certified organic cotton used across all cotton garments</li>
          <li>Azo-free and vegetable-based dyes wherever possible</li>
          <li>Zero polyester blends in our catalogue</li>
        </ul>
        <h4>Packaging</h4>
        <ul>
          <li>100% recycled kraft boxes</li>
          <li>Jute and cotton twine — no plastic tape</li>
          <li>Tissue paper sourced from FSC-certified mills</li>
          <li>Zero single-use plastic in fulfilment</li>
        </ul>
        <h4>Production</h4>
        <ul>
          <li>Made-to-order on most styles — zero overproduction</li>
          <li>Unsold samples donated to NGO craft training programmes</li>
          <li>Fabric offcuts sent to artisan clusters for accessories production</li>
        </ul>
        <h4>Our 2027 Goals</h4>
        <p>Carbon-neutral shipping, 100% renewable energy at our warehouse, and a take-back programme where customers can return worn SABA garments for recycling or resale.</p>
      `
    },
    careers: {
      eyebrow: 'Company · Jobs',
      title: 'Careers at SABA',
      body: `
        <div class="fp-highlight">"We are building the future of Indian fashion — one craft, one community, one collection at a time. Join us."</div>
        <p>SABA is a small, passionate team of 34 people spread across Aurangabad, Mumbai, and Varanasi. We move slowly, think deeply, and care enormously about what we make.</p>
        <div class="fp-divider"></div>
        <h4>Open Positions</h4>
        <table class="fp-table">
          <tr><th>Role</th><th>Location</th><th>Type</th></tr>
          <tr><td>Senior Buyer — Textiles</td><td>Aurangabad</td><td>Full-time</td></tr>
          <tr><td>Digital Marketing Lead</td><td>Remote</td><td>Full-time</td></tr>
          <tr><td>Craft Documentation Intern</td><td>Field (Travel)</td><td>Internship</td></tr>
          <tr><td>Customer Experience Associate</td><td>Mumbai</td><td>Full-time</td></tr>
          <tr><td>Packaging & Logistics Coordinator</td><td>Aurangabad</td><td>Full-time</td></tr>
        </table>
        <h4>What We Offer</h4>
        <ul>
          <li>Competitive salaries benchmarked to industry</li>
          <li>Health insurance for you and your family</li>
          <li>Annual craft travel programme — visit artisan clusters across India</li>
          <li>Wardrobe allowance — generous SABA garment credit each year</li>
          <li>Flexible work hours and remote-friendly culture</li>
        </ul>
        <h4>How to Apply</h4>
        <p>Send your CV and a short note about why you want to work at SABA to <strong>careers@saba.in</strong>. We respond to every application personally.</p>
      `
    },
    press: {
      eyebrow: 'Company · Media',
      title: 'Press & Media',
      body: `
        <p>SABA welcomes media collaborations, editorial partnerships, and responsible journalism about Indian craft and heritage fashion. We believe in the power of storytelling to sustain craft traditions.</p>
        <div class="fp-divider"></div>
        <h4>Featured In</h4>
        <ul>
          <li><strong>Vogue India</strong> — "10 Indian Labels Keeping Craft Alive" (March 2024)</li>
          <li><strong>Femina</strong> — "The Saree Renaissance" cover story (October 2023)</li>
          <li><strong>Economic Times</strong> — "Ethical Fashion's New Chapter" (January 2024)</li>
          <li><strong>Outlook Traveller</strong> — "India's Best Textile Destinations" (August 2023)</li>
          <li><strong>NDTV Good Times</strong> — Artisan Documentary Series (2023)</li>
        </ul>
        <h4>Press Kit</h4>
        <p>Our press kit includes high-resolution imagery, brand guidelines, founder biography, and collection lookbooks. Available on request.</p>
        <h4>Contact Our PR Team</h4>
        <p>For media enquiries, sample requests, and editorial collaborations:</p>
        <ul>
          <li>Email: <strong>press@saba.in</strong></li>
          <li>WhatsApp: <strong>+91 98765 43210</strong></li>
          <li>Response time: Within 24 hours on business days</li>
        </ul>
        <div class="fp-highlight">"We are happy to open our ateliers, introduce you to our weavers, and share the unfiltered story of how SABA is built."</div>
      `
    },
    privacy: {
      eyebrow: 'Legal · Policy',
      title: 'Privacy Policy',
      body: `
        <p>Last updated: <strong>1 January 2025</strong></p>
        <p>SABA ("we", "our", "us") is committed to protecting your personal information and your right to privacy.</p>
        <div class="fp-divider"></div>
        <h4>What We Collect</h4>
        <ul>
          <li>Name, email, phone number, and delivery address when you place an order</li>
          <li>Payment information — processed securely via Razorpay; we never store card details</li>
          <li>Browsing behaviour on our site via cookies (with your consent)</li>
          <li>Communications you send us via email or WhatsApp</li>
        </ul>
        <h4>How We Use Your Data</h4>
        <ul>
          <li>To process and deliver your orders</li>
          <li>To send order updates and delivery notifications</li>
          <li>To send marketing emails (only with explicit consent — unsubscribe anytime)</li>
          <li>To improve our website and product offerings</li>
        </ul>
        <h4>Data Sharing</h4>
        <p>We do not sell your data. We share it only with service providers necessary to fulfil your order — courier partners, payment gateways, and email platforms. All third parties are contractually bound to GDPR-compliant data handling.</p>
        <h4>Your Rights</h4>
        <ul>
          <li>Right to access the data we hold on you</li>
          <li>Right to request deletion of your data</li>
          <li>Right to opt out of marketing at any time</li>
        </ul>
        <h4>Contact</h4>
        <p>For privacy-related queries: <strong>privacy@saba.in</strong></p>
      `
    },
    terms: {
      eyebrow: 'Legal · Terms',
      title: 'Terms of Service',
      body: `
        <p>Last updated: <strong>1 January 2025</strong></p>
        <p>By using the SABA website and placing orders, you agree to the following terms.</p>
        <div class="fp-divider"></div>
        <h4>Orders & Payment</h4>
        <ul>
          <li>All prices are in Indian Rupees (₹) and inclusive of GST</li>
          <li>Orders are confirmed only upon successful payment</li>
          <li>SABA reserves the right to cancel orders in cases of pricing errors or stock unavailability</li>
          <li>COD orders must be paid in full at the time of delivery</li>
        </ul>
        <h4>Intellectual Property</h4>
        <p>All content on this website — images, text, designs, and brand elements — is the intellectual property of SABA. Unauthorised use, reproduction, or distribution is prohibited.</p>
        <h4>Product Descriptions</h4>
        <p>We strive for accuracy in all product listings. However, colours may vary slightly due to screen calibration. Handmade items may have minor natural variations — these are a feature, not a defect.</p>
        <h4>Limitation of Liability</h4>
        <p>SABA is not liable for delays caused by courier partners, force majeure events, or incorrect delivery addresses provided by the customer.</p>
        <h4>Governing Law</h4>
        <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Aurangabad, Maharashtra.</p>
        <h4>Contact</h4>
        <p>For legal queries: <strong>legal@saba.in</strong></p>
      `
    },
    instagram: {
      eyebrow: 'Social · Instagram',
      title: 'Follow Us on Instagram',
      body: `
        <p>Our Instagram is a visual diary of Indian craft — behind-the-scenes with weavers, new collection drops, styling ideas, and stories from the field.</p>
        <div class="fp-divider"></div>
        <h4>What You'll Find</h4>
        <ul>
          <li>Weaver portraits and craft process videos</li>
          <li>New arrival announcements (always here first)</li>
          <li>Styling ideas for every occasion</li>
          <li>Festival lookbooks and editorial shoots</li>
          <li>Customer features and community highlights</li>
        </ul>
        <h4>Find Us</h4>
        <p>Handle: <strong>@saba.india</strong><br>
        Followers: 48,000+<br>
        Posts: 1,200+</p>
        <div class="fp-highlight">"Every photo on our feed has a story behind it — a weaver's hand, a village, a technique centuries old."</div>
      `
    },
    telegram: {
      eyebrow: 'Social · Telegram',
      title: 'Join Our Telegram Channel',
      body: `
        <p>Our Telegram channel is where the SABA community gets the most exclusive updates — flash sales, restock alerts, and behind-the-scenes content before anyone else.</p>
        <div class="fp-divider"></div>
        <h4>What Members Get</h4>
        <ul>
          <li>Flash sale alerts — up to 72 hours before public launch</li>
          <li>Restock notifications for sold-out favourites</li>
          <li>Exclusive member-only discount codes</li>
          <li>Direct access to our styling team via group chat</li>
          <li>Artisan stories and craft documentary drops</li>
        </ul>
        <h4>Join Us</h4>
        <p>Channel: <strong>t.me/sabaIndia</strong><br>
        Members: 9,200+<br>
        Active since: 2021</p>
      `
    },
    whatsapp: {
      eyebrow: 'Social · WhatsApp',
      title: 'Chat With Us on WhatsApp',
      body: `
        <p>Our WhatsApp is staffed by real humans — our customer care team is available 9 AM to 8 PM, 7 days a week, to help with orders, returns, styling advice, and anything else.</p>
        <div class="fp-divider"></div>
        <h4>What You Can Do</h4>
        <ul>
          <li>Track your order by sharing your order ID</li>
          <li>Request fabric swatches before buying</li>
          <li>Get custom tailoring guidance</li>
          <li>Initiate returns and exchanges</li>
          <li>Ask for styling recommendations</li>
        </ul>
        <h4>Contact</h4>
        <p>Number: <strong>+91 98765 43210</strong><br>
        Hours: 9 AM – 8 PM, all days<br>
        Average response time: Under 15 minutes</p>
        <div class="fp-highlight">"No bots. No scripts. Just our team — happy to help."</div>
      `
    },
    admin: {
      eyebrow: 'System · Admin',
      title: 'Admin Panel',
      body: `
        <p>This area is restricted to SABA staff only. Please log in with your admin credentials to continue.</p>
        <div class="fp-divider"></div>
        <h4>Access Levels</h4>
        <table class="fp-table">
          <tr><th>Role</th><th>Access</th></tr>
          <tr><td>Super Admin</td><td>Full access — products, orders, users, settings</td></tr>
          <tr><td>Catalogue Manager</td><td>Products and inventory only</td></tr>
          <tr><td>Order Manager</td><td>Orders, returns, and fulfilment</td></tr>
          <tr><td>Content Editor</td><td>Blog, lookbooks, and banners</td></tr>
        </table>
        <h4>Login</h4>
        <p>Visit <strong>admin.saba.in</strong> and sign in with your registered email and password. 2-factor authentication is mandatory for all admin accounts.</p>
        <h4>Support</h4>
        <p>If you've lost access, contact <strong>it@saba.in</strong> or reach the tech team on the internal Slack workspace.</p>
      `
    }
  };
 
  function openModal(key) {
    const data = modals[key];
    if (!data) return;
    document.getElementById('modal-eyebrow').textContent = data.eyebrow;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-body').innerHTML = data.body;
    document.getElementById('fp-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
 
  

  function closeModal() {
    document.getElementById('fp-overlay').classList.remove('open');
    document.body.style.overflow = '';
  }
 
  function handleOverlayClick(e) {
    if (e.target === document.getElementById('fp-overlay')) closeModal();
  }
 
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });
    // ── FESTIVE COUNTDOWN TIMER ──
(function() {
  const target = new Date();
  target.setDate(target.getDate() + 7);
  function updateTimer() {
    const el = document.getElementById('festive-timer');
    if (!el) return;
    const diff = target - new Date();
    if (diff <= 0) { el.textContent = '00 : 00 : 00 : 00'; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.textContent = `${String(d).padStart(2,'0')} : ${String(h).padStart(2,'0')} : ${String(m).padStart(2,'0')} : ${String(s).padStart(2,'0')}`;
  }
  updateTimer();
  setInterval(updateTimer, 1000);
})();
    // ═══════════════ DATA ═══════════════
const BASE_PRODUCTS = [

  // ───────── LEHENGA (10) ─────────
  {
    id: 1,
    name: "Bridal Velvet Lehenga",
    category: "women",
    subcat: "lehenga",
    price: 24999,
    oldPrice: 32000,
    badge: "Sale",
    description: "Heavy embroidered bridal lehenga in deep red velvet with gold zari work.",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80",
    sizes: ["S","M","L"],
    material: "Velvet",
    origin: "Surat",
    rating: 4.9,
    reviews: 142,
    occasion: "Wedding"
  },
  {
    id: 2,
    name: "Pastel Organza Lehenga",
    category: "women",
    subcat: "lehenga",
    price: 14999,
    oldPrice: null,
    badge: "New",
    description: "Soft pastel organza lehenga with floral threadwork, ideal for sangeet.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    sizes: ["XS","S","M","L"],
    material: "Organza",
    origin: "Jaipur",
    rating: 4.8,
    reviews: 98,
    occasion: "Festive"
  },
  {
    id: 3,
    name: "Silk Embroidered Lehenga",
    category: "women",
    subcat: "lehenga",
    price: 18500,
    oldPrice: 22000,
    badge: "Sale",
    description: "Pure silk lehenga with intricate hand embroidery and mirror work.",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80",
    sizes: ["S","M","L","XL"],
    material: "Silk",
    origin: "Varanasi",
    rating: 4.9,
    reviews: 74,
    occasion: "Wedding"
  },
//   {
//     id: 4,
//     name: "Floral Georgette Lehenga",
//     category: "women",
//     subcat: "lehenga",
//     price: 8999,
//     oldPrice: null,
//     badge: null,
//     description: "Light georgette lehenga with floral print for mehendi functions.",
//     image: "https://images.unsplash.com/photo-1602810319428-019690571b5b?w=600&q=80",
//     sizes: ["S","M","L"],
//     material: "Georgette",
//     origin: "Surat",
//     rating: 4.6,
//     reviews: 115,
//     occasion: "Festive"
//   },
//   {
//     id: 5,
//     name: "Net Bridal Lehenga",
//     category: "women",
//     subcat: "lehenga",
//     price: 21999,
//     oldPrice: 27000,
//     badge: "Sale",
//     description: "Heavily embellished net lehenga with stone and sequin work.",
//     image: "https://images.unsplash.com/photo-1520962918287-7448c2878f65?w=600&q=80",
//     sizes: ["S","M","L"],
//     material: "Net",
//     origin: "Mumbai",
//     rating: 4.8,
//     reviews: 62,
//     occasion: "Wedding"
//   },
//   {
//     id: 6,
//     name: "Indo-Western Lehenga",
//     category: "women",
//     subcat: "lehenga",
//     price: 11499,
//     oldPrice: null,
//     badge: "New",
//     description: "Contemporary lehenga with crop top blouse for a modern bridal look.",
//     image: "https://images.unsplash.com/photo-1622126807280-9b5b6f8b7c1f?w=600&q=80",
//     sizes: ["XS","S","M","L"],
//     material: "Crepe",
//     origin: "Delhi",
//     rating: 4.7,
//     reviews: 88,
//     occasion: "Party"
//   },
//   {
//     id: 7,
//     name: "Bandhani Lehenga",
//     category: "women",
//     subcat: "lehenga",
//     price: 7499,
//     oldPrice: null,
//     badge: null,
//     description: "Traditional Bandhani tie-dye lehenga from Rajasthan.",
//     image: "https://images.unsplash.com/photo-1592669241067-2a780b785b2e?w=600&q=80",
//     sizes: ["S","M","L","XL"],
//     material: "Cotton Silk",
//     origin: "Jaipur",
//     rating: 4.5,
//     reviews: 79,
//     occasion: "Festive"
//   },
//   {
//     id: 8,
//     name: "Zardosi Lehenga",
//     category: "women",
//     subcat: "lehenga",
//     price: 29999,
//     oldPrice: 36000,
//     badge: "Sale",
//     description: "Luxurious zardosi hand-embroidered lehenga for grand weddings.",
//     image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80",
//     sizes: ["S","M","L"],
//     material: "Velvet Silk",
//     origin: "Lucknow",
//     rating: 5.0,
//     reviews: 34,
//     occasion: "Wedding"
//   },
//   {
//     id: 9,
//     name: "Chaniya Choli",
//     category: "women",
//     subcat: "lehenga",
//     price: 5999,
//     oldPrice: null,
//     badge: "New",
//     description: "Vibrant Navratri chaniya choli with mirror and gota patti work.",
//     image: "https://images.unsplash.com/photo-1649456065318-1313ee4ad8b5?w=600&q=80",
//     sizes: ["S","M","L","XL"],
//     material: "Rayon",
//     origin: "Ahmedabad",
//     rating: 4.6,
//     reviews: 201,
//     occasion: "Festive"
//   },
//   {
//     id: 10,
//     name: "Minimalist Lehenga",
//     category: "women",
//     subcat: "lehenga",
//     price: 9499,
//     oldPrice: null,
//     badge: null,
//     description: "Clean, minimal ivory lehenga with subtle gold border for receptions.",
//     image: "https://images.unsplash.com/photo-1520975922284-1b7c6a5c5e5f?w=600&q=80",
//     sizes: ["XS","S","M","L"],
//     material: "Chiffon",
//     origin: "Delhi",
//     rating: 4.7,
//     reviews: 57,
//     occasion: "Wedding"
//   },

  // ───────── COTTON SUITS (10) ─────────
  {
    id: 11,
    name: "Lucknawi Chikankari Suit",
    category: "women",
    subcat: "cotton-suits",
    price: 2499,
    oldPrice: null,
    badge: "New",
    description: "Authentic Lucknawi chikankari cotton suit, hand-embroidered.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    sizes: ["S","M","L","XL","XXL"],
    material: "Cotton",
    origin: "Lucknow",
    rating: 4.8,
    reviews: 176,
    occasion: "Casual"
  },
  {
    id: 12,
    name: "Block Print Cotton Suit",
    category: "women",
    subcat: "cotton-suits",
    price: 1799,
    oldPrice: null,
    badge: null,
    description: "Jaipur block print 3-piece cotton suit with dupatta.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    sizes: ["S","M","L","XL"],
    material: "Cotton",
    origin: "Jaipur",
    rating: 4.6,
    reviews: 144,
    occasion: "Casual"
  },
  {
    id: 13,
    name: "Embroidered Cotton Kurta Set",
    category: "women",
    subcat: "cotton-suits",
    price: 2199,
    oldPrice: 2799,
    badge: "Sale",
    description: "Straight cotton kurta with embroidery, palazzo and dupatta set.",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80",
    sizes: ["S","M","L","XL","XXL"],
    material: "Cotton",
    origin: "Delhi",
    rating: 4.5,
    reviews: 210,
    occasion: "Casual"
  },
//   {
//     id: 14,
//     name: "Mul Cotton Anarkali",
//     category: "women",
//     subcat: "cotton-suits",
//     price: 2899,
//     oldPrice: null,
//     badge: null,
//     description: "Breezy mul cotton anarkali with tie-dye dupatta.",
//     image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80",
//     sizes: ["S","M","L"],
//     material: "Mul Cotton",
//     origin: "Jaipur",
//     rating: 4.7,
//     reviews: 92,
//     occasion: "Casual"
//   },
//   {
//     id: 15,
//     name: "Phulkari Cotton Suit",
//     category: "women",
//     subcat: "cotton-suits",
//     price: 3299,
//     oldPrice: 3999,
//     badge: "Sale",
//     description: "Punjab Phulkari embroidery cotton suit with vibrant threadwork.",
//     image: "https://images.unsplash.com/photo-1602810319428-019690571b5b?w=600&q=80",
//     sizes: ["S","M","L","XL"],
//     material: "Cotton",
//     origin: "Punjab",
//     rating: 4.8,
//     reviews: 68,
//     occasion: "Festive"
//   },
//   {
//     id: 16,
//     name: "Cambric Cotton Suit",
//     category: "women",
//     subcat: "cotton-suits",
//     price: 1499,
//     oldPrice: null,
//     badge: null,
//     description: "Soft cambric cotton daily wear suit with printed dupatta.",
//     image: "https://images.unsplash.com/photo-1592669241067-2a780b785b2e?w=600&q=80",
//     sizes: ["S","M","L","XL","XXL"],
//     material: "Cambric Cotton",
//     origin: "Surat",
//     rating: 4.4,
//     reviews: 320,
//     occasion: "Casual"
//   },
//   {
//     id: 17,
//     name: "Kantha Stitch Suit",
//     category: "women",
//     subcat: "cotton-suits",
//     price: 3799,
//     oldPrice: null,
//     badge: "New",
//     description: "Handcrafted kantha stitch Bengali cotton suit.",
//     image: "https://images.unsplash.com/photo-1622126807280-9b5b6f8b7c1f?w=600&q=80",
//     sizes: ["S","M","L"],
//     material: "Cotton",
//     origin: "West Bengal",
//     rating: 4.9,
//     reviews: 45,
//     occasion: "Festive"
//   },
//   {
//     id: 18,
//     name: "Linen Cotton Co-ord Set",
//     category: "women",
//     subcat: "cotton-suits",
//     price: 2699,
//     oldPrice: null,
//     badge: null,
//     description: "Modern linen cotton co-ord kurta and trouser set.",
//     image: "https://images.unsplash.com/photo-1649456065318-1313ee4ad8b5?w=600&q=80",
//     sizes: ["XS","S","M","L","XL"],
//     material: "Linen Cotton",
//     origin: "Delhi",
//     rating: 4.6,
//     reviews: 133,
//     occasion: "Casual"
//   },
  {
    id: 19,
    name: "Dabu Print Cotton Suit",
    category: "women",
    subcat: "cotton-suits",
    price: 1999,
    oldPrice: null,
    badge: null,
    description: "Earthy dabu resist-print cotton suit from Rajasthan.",
    image: "https://images.unsplash.com/photo-1520975922284-1b7c6a5c5e5f?w=600&q=80",
    sizes: ["S","M","L","XL"],
    material: "Cotton",
    origin: "Rajasthan",
    rating: 4.5,
    reviews: 87,
    occasion: "Casual"
  },
  {
    id: 20,
    name: "Schiffli Embroidered Suit",
    category: "women",
    subcat: "cotton-suits",
    price: 2299,
    oldPrice: 2799,
    badge: "Sale",
    description: "Delicate schiffli embroidery cotton suit for festive days.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    sizes: ["S","M","L","XL"],
    material: "Cotton",
    origin: "Surat",
    rating: 4.6,
    reviews: 109,
    occasion: "Festive"
  },

  // ───────── WEDDING / PARTY SUITS (10) ─────────
//   {
//     id: 21,
//     name: "Georgette Anarkali Suit",
//     category: "women",
//     subcat: "wedding-suits",
//     price: 5999,
//     oldPrice: null,
//     badge: "New",
//     description: "Floor-length georgette anarkali with sequence and stone work.",
//     image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80",
//     sizes: ["S","M","L","XL"],
//     material: "Georgette",
//     origin: "Lucknow",
//     rating: 4.8,
//     reviews: 96,
//     occasion: "Wedding"
//   },
//   {
//     id: 22,
//     name: "Silk Sharara Suit",
//     category: "women",
//     subcat: "wedding-suits",
//     price: 8999,
//     oldPrice: 11000,
//     badge: "Sale",
//     description: "Heavy silk sharara with zardosi embroidered kurti top.",
//     image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80",
//     sizes: ["S","M","L"],
//     material: "Silk",
//     origin: "Hyderabad",
//     rating: 4.9,
//     reviews: 52,
//     occasion: "Wedding"
//   },
//   {
//     id: 23,
//     name: "Net Embroidered Suit",
//     category: "women",
//     subcat: "wedding-suits",
//     price: 6499,
//     oldPrice: null,
//     badge: null,
//     description: "Bridal net suit with sequin embroidery and flared palazzo.",
//     image: "https://images.unsplash.com/photo-1602810319428-019690571b5b?w=600&q=80",
//     sizes: ["S","M","L","XL"],
//     material: "Net",
//     origin: "Surat",
//     rating: 4.7,
//     reviews: 71,
//     occasion: "Wedding"
//   },
//   {
//     id: 24,
//     name: "Velvet Party Suit",
//     category: "women",
//     subcat: "wedding-suits",
//     price: 9999,
//     oldPrice: 12500,
//     badge: "Sale",
//     description: "Royal velvet suit with resham and gota work for winter weddings.",
//     image: "https://images.unsplash.com/photo-1520962918287-7448c2878f65?w=600&q=80",
//     sizes: ["S","M","L"],
//     material: "Velvet",
//     origin: "Delhi",
//     rating: 4.9,
//     reviews: 38,
//     occasion: "Wedding"
//   },
//   {
//     id: 25,
//     name: "Designer Pant Suit",
//     category: "women",
//     subcat: "wedding-suits",
//     price: 4999,
//     oldPrice: null,
//     badge: "New",
//     description: "Contemporary pant suit with embroidered kurti for receptions.",
//     image: "https://images.unsplash.com/photo-1622126807280-9b5b6f8b7c1f?w=600&q=80",
//     sizes: ["XS","S","M","L","XL"],
//     material: "Crepe",
//     origin: "Mumbai",
//     rating: 4.6,
//     reviews: 83,
//     occasion: "Party"
//   },
//   {
//     id: 26,
//     name: "Banarasi Suit",
//     category: "women",
//     subcat: "wedding-suits",
//     price: 7499,
//     oldPrice: null,
//     badge: null,
//     description: "Banarasi brocade kurta with silk palazzo and dupatta.",
//     image: "https://images.unsplash.com/photo-1649456065318-1313ee4ad8b5?w=600&q=80",
//     sizes: ["S","M","L","XL"],
//     material: "Banarasi Silk",
//     origin: "Varanasi",
//     rating: 4.8,
//     reviews: 60,
//     occasion: "Wedding"
//   },
  {
    id: 27,
    name: "Chiffon Palazzo Suit",
    category: "women",
    subcat: "wedding-suits",
    price: 3799,
    oldPrice: 4500,
    badge: "Sale",
    description: "Flowy chiffon suit with embroidered yoke and wide palazzo.",
    image: "https://images.unsplash.com/photo-1592669241067-2a780b785b2e?w=600&q=80",
    sizes: ["S","M","L","XL"],
    material: "Chiffon",
    origin: "Surat",
    rating: 4.5,
    reviews: 112,
    occasion: "Party"
  },
  {
    id: 28,
    name: "Tussar Silk Suit",
    category: "women",
    subcat: "wedding-suits",
    price: 5499,
    oldPrice: null,
    badge: "New",
    description: "Natural tussar silk suit with hand block print and dupatta.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    sizes: ["S","M","L"],
    material: "Tussar Silk",
    origin: "Jharkhand",
    rating: 4.7,
    reviews: 44,
    occasion: "Festive"
  },
  {
    id: 29,
    name: "Organza Party Suit",
    category: "women",
    subcat: "wedding-suits",
    price: 6999,
    oldPrice: 8500,
    badge: "Sale",
    description: "Sheer organza suit with floral 3D applique work and cigarette pants.",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80",
    sizes: ["XS","S","M","L"],
    material: "Organza",
    origin: "Delhi",
    rating: 4.8,
    reviews: 67,
    occasion: "Party"
  },
  {
    id: 30,
    name: "Embellished Jacket Suit",
    category: "women",
    subcat: "wedding-suits",
    price: 8299,
    oldPrice: null,
    badge: null,
    description: "Kurta with heavily embellished jacket and dhoti pants.",
    image: "https://images.unsplash.com/photo-1520975922284-1b7c6a5c5e5f?w=600&q=80",
    sizes: ["S","M","L","XL"],
    material: "Poly Silk",
    origin: "Mumbai",
    rating: 4.7,
    reviews: 55,
    occasion: "Wedding"
  },

  // ───────── SAREES (5) ─────────
//   {
//     id: 31,
//     name: "Banarasi Silk Saree",
//     category: "women",
//     subcat: "sarees",
//     price: 8499,
//     oldPrice: 11000,
//     badge: "Sale",
//     description: "Rich Banarasi silk saree with zari weaving, perfect for weddings.",
//     image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=600&q=80",
//     sizes: ["Free Size"],
//     material: "Silk",
//     origin: "Varanasi",
//     rating: 4.9,
//     reviews: 120,
//     occasion: "Wedding"
//   },
//   {
//     id: 32,
//     name: "Chiffon Printed Saree",
//     category: "women",
//     subcat: "sarees",
//     price: 1999,
//     oldPrice: null,
//     badge: null,
//     description: "Lightweight chiffon saree with digital floral print.",
//     image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
//     sizes: ["Free Size"],
//     material: "Chiffon",
//     origin: "Surat",
//     rating: 4.5,
//     reviews: 188,
//     occasion: "Party"
//   },
//   {
//     id: 33,
//     name: "Kanjivaram Silk Saree",
//     category: "women",
//     subcat: "sarees",
//     price: 14999,
//     oldPrice: 18000,
//     badge: "Sale",
//     description: "Authentic Kanjivaram silk saree with temple border.",
//     image: "https://images.unsplash.com/photo-1611599537253-4d7d6a8b6f4d?w=600&q=80",
//     sizes: ["Free Size"],
//     material: "Silk",
//     origin: "Tamil Nadu",
//     rating: 5.0,
//     reviews: 76,
//     occasion: "Wedding"
//   },
//   {
//     id: 34,
//     name: "Linen Cotton Saree",
//     category: "women",
//     subcat: "sarees",
//     price: 2799,
//     oldPrice: null,
//     badge: "New",
//     description: "Breathable linen cotton saree for office and daily wear.",
//     image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80",
//     sizes: ["Free Size"],
//     material: "Linen",
//     origin: "West Bengal",
//     rating: 4.6,
//     reviews: 94,
//     occasion: "Casual"
//   },
//   {
//     id: 35,
//     name: "Bandhani Saree",
//     category: "women",
//     subcat: "sarees",
//     price: 3499,
//     oldPrice: null,
//     badge: null,
//     description: "Vibrant Gujarati Bandhani saree in georgette.",
//     image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
//     sizes: ["Free Size"],
//     material: "Georgette",
//     origin: "Gujarat",
//     rating: 4.7,
//     reviews: 103,
//     occasion: "Festive"
//   }
];
    const MOCK_REVIEWS = {
      1: [{ author: "Emma T.", rating: 5, text: "Absolutely stunning blazer. The linen quality is superb.", date: "2025-03-12" }, { author: "Claire S.", rating: 5, text: "Perfect fit, exactly as described. Shipped fast!", date: "2025-02-28" }],
      2: [{ author: "Natasha W.", rating: 5, text: "This dress is everything. Luxurious silk, perfect drape.", date: "2025-04-01" }, { author: "Julia H.", rating: 4, text: "Gorgeous piece, runs slightly small. Size up.", date: "2025-03-18" }],
      5: [{ author: "Mark B.", rating: 5, text: "Best Oxford shirt I've owned. Worth every penny.", date: "2025-03-22" }, { author: "Tom E.", rating: 4, text: "Great fabric, classic fit. Slightly stiff at first.", date: "2025-02-14" }],
      7: [{ author: "David L.", rating: 5, text: "Incredibly well made. The cashmere-wool blend is divine.", date: "2025-01-30" }]
    };

    // ═══════════════ STATE ═══════════════
    let products = JSON.parse(localStorage.getItem('elume_products') || JSON.stringify(BASE_PRODUCTS));
    let cart = JSON.parse(localStorage.getItem('elume_cart') || '[]');
    let wishlist = JSON.parse(localStorage.getItem('elume_wishlist') || '[]');
    let orders = JSON.parse(localStorage.getItem('elume_orders') || '[]');
    let newsletter = JSON.parse(localStorage.getItem('elume_newsletter') || '[]');
    let currentFilter = 'all';
    let currentProduct = null;

    // Seed demo orders if empty
    if (orders.length === 0) {
      const st = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Delivered'];
      const cx = [['Jane', 'Smith', 'jane@example.com'], ['Tom', 'Brown', 'tom@example.com'], ['Alice', 'Green', 'alice@example.com'], ['Mark', 'Lee', 'mark@example.com'], ['Sara', 'Ali', 'sara@example.com']];
      for (let i = 0; i < 5; i++) {
        const p1 = products[i % products.length], p2 = products[(i + 2) % products.length];
        orders.push({
          id: 'ORD-' + (100000 + i),
          items: [{ id: p1.id, name: p1.name, price: p1.price, image: p1.image, size: p1.sizes[0], qty: 1 }, { id: p2.id, name: p2.name, price: p2.price, image: p2.image, size: p2.sizes[0], qty: 1 }],
          date: new Date(Date.now() - i * 86400000 * 3).toISOString(),
          total: p1.price + p2.price,
          status: st[i],
          payment: 'Demo',
          customer: { first: cx[i][0], last: cx[i][1], email: cx[i][2] }
        });
      }
      localStorage.setItem('elume_orders', JSON.stringify(orders));
    }

    // ═══════════════ HELPERS ═══════════════
    const save = () => { localStorage.setItem('elume_cart', JSON.stringify(cart)); localStorage.setItem('elume_wishlist', JSON.stringify(wishlist)); updateCounts(); };
    const saveP = () => localStorage.setItem('elume_products', JSON.stringify(products));
    const saveO = () => localStorage.setItem('elume_orders', JSON.stringify(orders));
    const saveN = () => localStorage.setItem('elume_newsletter', JSON.stringify(newsletter));
    function updateCounts() { document.getElementById('cart-count').textContent = cart.reduce((s, i) => s + i.qty, 0); document.getElementById('wish-count').textContent = wishlist.length; }
    const fmt = n => '₹' + parseFloat(n).toFixed(2);
    const fmtDate = d => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    const starsStr = n => '★'.repeat(Math.round(n)) + '☆'.repeat(5 - Math.round(n));

    function showToast(msg, icon = '✓') {
      document.getElementById('toast-msg').textContent = msg;
      document.querySelector('.toast-icon').textContent = icon;
      const t = document.getElementById('toast'); t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 2500);
    }

    // ═══════════════ ROUTING ═══════════════
    function navigate(page, pid) {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      document.getElementById('page-' + page)?.classList.add('active');
      document.getElementById('nav-' + page)?.classList.add('active');
      window.scrollTo(0, 0);
      if (page === 'detail' && pid) { currentProduct = products.find(p => p.id === pid); renderDetail(); }
      else if (page === 'cart') renderCart();
      else if (page === 'checkout') renderCheckout();
      else if (page === 'wishlist') renderWishlist();
    }

    // ═══════════════ HOME ═══════════════
    function filterProducts(cat) {
      currentFilter = cat;
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === cat));
      console.log("RENDER CALLED");
      renderProducts();
      if (cat !== 'all') document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
    }
/* ═══════════════════════════════════════════
   PRODUCT SLIDER
═══════════════════════════════════════════ */
(function () {
  const track   = document.getElementById('products-slider-track');
  const btnPrev = document.getElementById('pslider-prev');
  const btnNext = document.getElementById('pslider-next');

  if (!track || !btnPrev || !btnNext) return;

  const SCROLL_AMOUNT = () => track.clientWidth * 0.75;

  function updateArrows() {
    const atStart = track.scrollLeft <= 4;
    const atEnd   = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    btnPrev.classList.toggle('hidden', atStart);
    btnNext.classList.toggle('hidden', atEnd);
  }

  btnPrev.addEventListener('click', () => {
    track.scrollBy({ left: -SCROLL_AMOUNT(), behavior: 'smooth' });
  });

  btnNext.addEventListener('click', () => {
    track.scrollBy({ left: SCROLL_AMOUNT(), behavior: 'smooth' });
  });

  track.addEventListener('scroll', updateArrows, { passive: true });
  window.addEventListener('resize', updateArrows);
  updateArrows();

  /* ── Touch / swipe ── */
  let touchStartX = 0;
  let touchStartScroll = 0;

  track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartScroll = track.scrollLeft;
  }, { passive: true });

  track.addEventListener('touchmove', e => {
    const delta = touchStartX - e.touches[0].clientX;
    track.scrollLeft = touchStartScroll + delta;
  }, { passive: true });
})();


/* ═══════════════════════════════════════════
   INJECT QUICK ACTIONS into every product card
   (runs after your renderProducts() populates the grid)
═══════════════════════════════════════════ */
function injectQuickActions() {
  document.querySelectorAll('.product-card').forEach(card => {
    if (card.querySelector('.product-quick-actions')) return; // already injected

    const pid = card.dataset.id || '';

    const actions = document.createElement('div');
    actions.className = 'product-quick-actions';
    actions.innerHTML = `
      <button class="pqa-btn" onclick="event.stopPropagation(); addToCart('${pid}')">Add to Bag</button>
      <button class="pqa-btn pqa-wish" onclick="event.stopPropagation(); toggleWishlist('${pid}', this)" title="Wishlist">♡</button>
    `;

    const imgWrap = card.querySelector('.product-img-wrap');
    if (imgWrap) imgWrap.appendChild(actions);
  });
}

/* ── Call this at the end of your existing renderProducts() function ── */
// Just add one line at the bottom of renderProducts():
//   injectQuickActions();

    function productCardsHTML(list) {
      return list.map(p => `
    <div class="product-card">
      <div class="product-img-wrap" onclick="navigate('detail',${p.id})">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      </div>
      <button class="wish-heart${wishlist.includes(p.id) ? ' active' : ''}" onclick="toggleWishlist(event,${p.id})">${wishlist.includes(p.id) ? '♥' : '♡'}</button>
      <div class="product-info" onclick="navigate('detail',${p.id})">
       <div class="product-category">${p.subcat ? p.subcat.replace('-',' ') : p.category}</div>

        <div class="product-name">${p.name}</div>
        <div class="product-rating"><span class="stars">${starsStr(p.rating || 4.5)}</span><span class="rating-count">(${p.reviews || 0})</span></div>
        <div class="product-price-row">
          <div><span class="product-price">${fmt(p.price)}</span>${p.oldPrice ? `<span class="product-price-old">${fmt(p.oldPrice)}</span>` : ''}</div>
          <span class="quick-add">View →</span>
        </div>
      </div>
    </div>`).join('');
    }

    function renderProducts() {
      const list = currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);
      document.getElementById('filter-count').textContent = list.length + ' items';
      document.getElementById('products-grid').innerHTML = productCardsHTML(list);
      injectQuickActions();
    }

    function toggleWishlist(e, id) {
      e.stopPropagation();
      const btn = e.currentTarget;
      if (wishlist.includes(id)) { wishlist = wishlist.filter(x => x !== id); btn.classList.remove('active'); btn.textContent = '♡'; showToast('Removed from wishlist', '✕'); }
      else { wishlist.push(id); btn.classList.add('active'); btn.textContent = '♥'; showToast('Added to wishlist', '♥'); }
      save();
    }

    function subscribeNewsletter() {
      const email = document.getElementById('nl-email').value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showToast('Enter a valid email', '!'); return; }
      if (newsletter.find(s => s.email === email)) { showToast('Already subscribed!', 'ℹ'); return; }
      newsletter.push({ email, date: new Date().toISOString() }); saveN();
      document.getElementById('nl-success').style.display = 'block';
      document.getElementById('nl-email').value = '';
      showToast('Subscribed! Welcome to ÉLUME');
    }

    // ═══════════════ SEARCH ═══════════════
    function doSearch() { const q = document.getElementById('nav-search-input').value.trim(); if (q) performSearch(q); }
    function doSearchBig() { const q = document.getElementById('search-big-input').value.trim(); if (q) performSearch(q); }
    function performSearch(q) {
      const ql = q.toLowerCase();
      const res = products.filter(p => p.name.toLowerCase().includes(ql) || p.category.includes(ql) || p.description.toLowerCase().includes(ql));
      document.getElementById('search-query-label').textContent = `"${q}"`;
      document.getElementById('search-big-input').value = q;
      const grid = document.getElementById('search-results-grid');
      const no = document.getElementById('search-no-results');
      if (res.length === 0) { grid.innerHTML = ''; no.style.display = 'block'; }
      else { grid.innerHTML = productCardsHTML(res); no.style.display = 'none'; }
      navigate('search');
    }

    // ═══════════════ DETAIL ═══════════════
    function renderDetail() {
      const p = currentProduct;
      let sel = p.sizes[0], qty = 1;
      const revs = MOCK_REVIEWS[p.id] || [];
      document.getElementById('detail-content').innerHTML = `
    <div onclick="navigate('home')" class="back-link">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>Back to Collection
    </div>
    <div class="detail-wrap">
      <div><div class="detail-img-main"><img src="${p.image}" alt="${p.name}"></div></div>
      <div>
        <div class="detail-category">${p.category}</div>
        <h1 class="detail-name">${p.name}</h1>
        <div class="detail-rating"><span class="stars" style="font-size:14px">${starsStr(p.rating || 4.5)}</span><span style="font-size:12px;color:var(--muted);margin-left:6px">${p.rating || 4.5} · ${p.reviews || 0} reviews</span></div>
        <div><span class="detail-price">${fmt(p.price)}</span>${p.oldPrice ? `<span class="detail-price-old">${fmt(p.oldPrice)}</span>` : ''}</div>
        <p class="detail-desc">${p.description}</p>
        <div class="size-label">Select Size</div>
        <div class="sizes" id="size-btns">${p.sizes.map(s => `<button class="size-btn${s === sel ? ' selected' : ''}" onclick="selectSz('${s}')">${s}</button>`).join('')}</div>
        <div class="qty-row">
          <span class="qty-label">Quantity</span>
          <div class="qty-control"><button onclick="chQty(-1)">−</button><span id="qty-val">1</span><button onclick="chQty(1)">+</button></div>
        </div>
        <button class="add-to-cart-btn" onclick="addToCartD()">Add to Bag</button>
        <button class="add-to-wish-btn" id="wish-det-btn" onclick="togWishDet(${p.id})">${wishlist.includes(p.id) ? '♥ In Wishlist' : '♡ Add to Wishlist'}</button>
        <div class="detail-meta">
          <div class="meta-item"><span>Material</span><span>${p.material || '—'}</span></div>
          <div class="meta-item"><span>Origin</span><span>${p.origin || '—'}</span></div>
          <div class="meta-item"><span>Care</span><span>${p.care || '—'}</span></div>
          <div class="meta-item"><span>Free Shipping</span><span>Over £100</span></div>
        </div>
      </div>
    </div>
    <div class="reviews-section">
      <div class="reviews-header"><h3>Customer Reviews (${revs.length})</h3><div><span class="stars" style="font-size:18px">${starsStr(p.rating || 4.5)}</span> <span style="color:var(--muted);font-size:13px">${p.rating || 4.5}/5</span></div></div>
      ${revs.map(r => `<div class="review-card"><div class="review-top"><div><span class="review-author">${r.author}</span><span class="stars" style="font-size:11px;margin-left:8px">${starsStr(r.rating)}</span></div><span class="review-date">${fmtDate(r.date)}</span></div><p class="review-text">${r.text}</p></div>`).join('')}
      <div class="review-form">
        <h4>Write a Review</h4>
        <div class="size-label">Your Rating</div>
        <div class="star-select" id="star-sel">${[1, 2, 3, 4, 5].map(n => `<span onclick="setRS(${n})" data-s="${n}" class="lit">★</span>`).join('')}</div>
        <div class="form-row">
          <div class="form-group"><label class="form-label">Name</label><input class="form-input" id="rv-name" placeholder="Your name"></div>
          <div class="form-group"><label class="form-label">Email</label><input class="form-input" id="rv-email" placeholder="your@email.com"></div>
        </div>
        <div class="form-group"><label class="form-label">Review</label><textarea class="form-input" id="rv-text" rows="3" placeholder="Share your experience..."></textarea></div>
        <button class="add-to-cart-btn" onclick="subRev()">Submit Review</button>
      </div>
    </div>`;

      let rs = 5;
      window.selectSz = s => { sel = s; document.querySelectorAll('.size-btn').forEach(b => b.classList.toggle('selected', b.textContent === s)); };
      window.chQty = d => { qty = Math.max(1, qty + d); document.getElementById('qty-val').textContent = qty; };
window.addToCartD = () => {
  const ex = cart.find(i => i.id === p.id && i.size === sel);
  if (ex) ex.qty += qty;
  else cart.push({ id: p.id, name: p.name, price: p.price, image: p.image, size: sel, qty });
  save();
  showToast(`${p.name} added to bag`);
  navigate('checkout');
  renderCheckout();
};      
window.togWishDet = id => { const btn = document.getElementById('wish-det-btn'); if (wishlist.includes(id)) { wishlist = wishlist.filter(x => x !== id); btn.textContent = '♡ Add to Wishlist'; showToast('Removed from wishlist', '✕'); } else { wishlist.push(id); btn.textContent = '♥ In Wishlist'; showToast('Added to wishlist', '♥'); } save(); };
      window.setRS = n => { rs = n; document.querySelectorAll('#star-sel span').forEach((s, i) => s.classList.toggle('lit', i < n)); };
      window.subRev = () => { const nm = document.getElementById('rv-name').value.trim(), tx = document.getElementById('rv-text').value.trim(); if (!nm || !tx) { showToast('Fill all fields', '!'); return; } showToast('Review submitted! Thank you.'); document.getElementById('rv-name').value = ''; document.getElementById('rv-email').value = ''; document.getElementById('rv-text').value = ''; };
      document.querySelectorAll('#star-sel span').forEach((s, i) => s.classList.toggle('lit', i < rs));
    }

    // ═══════════════ WISHLIST ═══════════════
    function renderWishlist() {
      const items = products.filter(p => wishlist.includes(p.id));
      document.getElementById('wishlist-subtitle').textContent = items.length + ' saved items';
      document.getElementById('wishlist-content').innerHTML = items.length === 0 ?
        `<div class="empty-cart"><div class="empty-cart-icon">♡</div><h3>Your wishlist is empty</h3><p>Save items you love for later.</p><button onclick="navigate('home')">Browse Collection</button></div>` :
        `<div class="products-grid">${productCardsHTML(items)}</div>`;
    }

    // ═══════════════ CART ═══════════════
    function renderCart() {
      const sub = document.getElementById('cart-subtitle');
      const content = document.getElementById('cart-content');
      if (!cart.length) {
        sub.textContent = '0 items';
        content.innerHTML = `<div class="empty-cart"><div class="empty-cart-icon">🛍</div><h3>Your bag is empty</h3><p>Looks like you haven't added anything yet.</p><button onclick="navigate('home')">Browse Collection</button></div>`;
        return;
      }
      sub.textContent = cart.reduce((s, i) => s + i.qty, 0) + ' items';
      const sub2 = cart.reduce((s, i) => s + i.price * i.qty, 0);
      const ship = sub2 >= 100 ? 0 : 7.95;
      const tot = sub2 + ship;
      content.innerHTML = `
    <table class="cart-table">
      <thead><tr><th>Product</th><th>Qty</th><th style="text-align:right">Total</th><th></th></tr></thead>
      <tbody>${cart.map((it, i) => `<tr class="cart-row">
        <td><div class="cart-item-info"><img class="cart-thumb" src="${it.image}" alt="${it.name}">
          <div><div class="cart-item-name">${it.name}</div><div class="cart-item-meta">Size: ${it.size} · ${fmt(it.price)}</div></div></div></td>
        <td><div class="cart-qty-control"><button onclick="cQty(${i},-1)">−</button><span>${it.qty}</span><button onclick="cQty(${i},1)">+</button></div></td>
        <td class="cart-item-total">${fmt(it.price * it.qty)}</td>
        <td><button class="cart-remove" onclick="delCart(${i})">×</button></td>
      </tr>`).join('')}</tbody>
    </table>
    <div class="cart-summary">
      <div>
        <div class="cart-promo"><input type="text" placeholder="Promo code"><button>Apply</button></div><br>
        <button class="continue-shopping" onclick="navigate('home')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>Continue Shopping
        </button>
      </div>
      <div class="cart-totals">
        <h3>Order Summary</h3>
        <div class="total-row"><span>Subtotal</span><span>${fmt(sub2)}</span></div>
        <div class="total-row"><span>Shipping</span><span>${ship === 0 ? 'Free' : fmt(ship)}</span></div>
        <div class="total-row grand"><span>Total</span><span>${fmt(tot)}</span></div>
<button class="checkout-btn" onclick="navigate('checkout'); renderCheckout();">Proceed to Checkout</button>

        ${sub2 < 100 ? `<p style="font-size:11px;color:var(--muted);margin-top:12px;text-align:center">Add ${fmt(100 - sub2)} more for free shipping</p>` : ''}
      </div>
    </div>`;
      window.cQty = (i, d) => { cart[i].qty = Math.max(1, cart[i].qty + d); save(); renderCart(); };
      window.delCart = (i) => { const n = cart[i].name; cart.splice(i, 1); save(); renderCart(); showToast(`${n} removed`, '×'); };
    }

function switchPay(method) {

  // hide all panels
  document.getElementById('pay-panel-card').style.display = 'none';
  document.getElementById('pay-panel-upi').style.display = 'none';
  document.getElementById('pay-panel-cod').style.display = 'none';

  // show selected
  document.getElementById('pay-panel-' + method).style.display = 'block';

  // remove active from all
  document.querySelectorAll('.pay-method-label').forEach(el => {
    el.classList.remove('active');
  });

  // add active to selected
  document.getElementById('pml-' + method).classList.add('active');
}

    // ═══════════════ CHECKOUT ═══════════════
    function renderCheckout() {
      const sub2 = cart.reduce((s, i) => s + i.price * i.qty, 0);
      const ship = sub2 >= 100 ? 0 : 7.95;
      const tot = sub2 + ship;
        //   let selectedPayMethod = 'card';


      document.getElementById('checkout-form-section').innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:32px;cursor:pointer" onclick="navigate('cart')">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
      <span style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--muted)">Back to Cart</span>
    </div>
    <div class="form-section">
      <div class="form-section-title">Contact</div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">First Name</label><input class="form-input" id="f-first" placeholder="Jane"></div>
        <div class="form-group"><label class="form-label">Last Name</label><input class="form-input" id="f-last" placeholder="Smith"></div>
      </div>
      <div class="form-group"><label class="form-label">Email</label><input class="form-input" id="f-email" type="email" placeholder="jane@example.com"></div>
      <div class="form-group"><label class="form-label">Phone</label><input class="form-input" id="f-phone" type="tel" placeholder="+44 7911 123456"></div>
    </div>
    <div class="form-section">
      <div class="form-section-title">Shipping Address</div>
      <div class="form-group"><label class="form-label">Address</label><input class="form-input" id="f-addr1" placeholder="123 King's Road"></div>
      <div class="form-group"><label class="form-label">Address Line 2 (optional)</label><input class="form-input" id="f-addr2" placeholder="Apartment, suite..."></div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">City</label><input class="form-input" id="f-city" placeholder="London"></div>
        <div class="form-group"><label class="form-label">Postcode</label><input class="form-input" id="f-post" placeholder="SW3 4PH"></div>
      </div>
      <div class="form-group"><label class="form-label">Country</label><select class="form-input form-select" id="f-country"><option>United Kingdom</option><option>United States</option><option>France</option><option>Germany</option><option>India</option><option>Australia</option></select></div>
    </div>
    <div class="form-section">
      <div class="form-section-title">Payment</div>

      <div class="pay-method-group">
        <label class="pay-method-label active" id="pml-card">
          <input type="radio" name="pay-method" value="card" checked onchange="switchPay('card')"> Card
        </label>
        <label class="pay-method-label" id="pml-upi">
          <input type="radio" name="pay-method" value="upi" onchange="switchPay('upi')"> UPI
        </label>
        <label class="pay-method-label" id="pml-cod">
          <input type="radio" name="pay-method" value="cod" onchange="switchPay('cod')"> Cash on Delivery
        </label>
      </div>

      <div id="pay-panel-card">
        <span class="payment-icon">VISA</span><span class="payment-icon">MC</span><span class="payment-icon">AMEX</span>
        <div class="form-group" style="margin-top:16px">
          <label class="form-label">Card Number</label>
          <input class="form-input" id="f-card" placeholder="1234 5678 9012 3456" maxlength="19" inputmode="numeric">
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Expiry</label>
            <input class="form-input" id="f-exp" placeholder="MM/YY" maxlength="5" inputmode="numeric">
          </div>
          <div class="form-group">
            <label class="form-label">CVV</label>
            <input class="form-input" id="f-cvv" placeholder="123" maxlength="3" inputmode="numeric">
          </div>
        </div>
        <div class="form-group"><label class="form-label">Name on Card</label><input class="form-input" id="f-cardname" placeholder="Jane Smith"></div>
      </div>

      <div id="pay-panel-upi" style="display:none">
        <div class="form-group">
          <label class="form-label">UPI ID</label>
          <input class="form-input" id="f-upi" placeholder="yourname@upi" inputmode="email">
        </div>
        <p style="font-size:11px;color:var(--muted);margin-top:-8px">e.g. 9876543210@paytm · name@gpay · name@okaxis</p>
      </div>

      <div id="pay-panel-cod" style="display:none">
        <p style="font-size:13px;color:var(--muted);line-height:1.8;padding:16px;border:1px solid var(--border);background:var(--bg2)">
          Pay in cash when your order is delivered.<br>
          Keep exact change ready for the delivery agent.
        </p>
      </div>
    </div>
    <button class="place-order-btn" onclick="placeOrder()">Place Order — ${fmt(tot)}</button>
   
  `;

      document.getElementById('checkout-summary-section').innerHTML = `
    <div class="order-summary-panel">
      <h3>Order Summary</h3>
      ${cart.map(it => `<div class="summary-item"><div><div class="summary-item-name">${it.name}</div><div class="summary-item-meta">Size: ${it.size} · Qty: ${it.qty}</div></div><div class="summary-item-price">${fmt(it.price * it.qty)}</div></div>`).join('')}
      <hr class="summary-divider">
      <div class="summary-item"><span style="color:var(--muted);font-size:13px">Subtotal</span><span class="summary-item-price">${fmt(sub2)}</span></div>
      <div class="summary-item"><span style="color:var(--muted);font-size:13px">Shipping</span><span class="summary-item-price">${ship === 0 ? 'Free' : fmt(ship)}</span></div>
      <hr class="summary-divider">
      <div class="summary-item"><span style="font-size:16px;color:var(--white);font-family:'Cormorant Garamond',serif">Total</span><span style="font-size:18px;color:var(--gold);font-weight:500">${fmt(tot)}</span></div>
    </div>`;

      // ✅ FIX: attach input formatters ONCE after DOM is built
      // Card: auto-space every 4 digits
      document.getElementById('f-card').addEventListener('input', function () {
        let v = this.value.replace(/\D/g, '').slice(0, 16);
        this.value = v.match(/.{1,4}/g)?.join(' ') || v;
      });

      // Expiry: auto-insert slash
      document.getElementById('f-exp').addEventListener('input', function () {
        let v = this.value.replace(/\D/g, '').slice(0, 4);
        if (v.length >= 3) v = v.slice(0, 2) + '/' + v.slice(2);
        this.value = v;
      });

      // CVV: numbers only, max 3
      document.getElementById('f-cvv').addEventListener('input', function () {
        this.value = this.value.replace(/\D/g, '').slice(0, 3);
      });
    }


    // ═══════════════ PLACE ORDER ═══════════════
async function placeOrder() {

  console.log("PLACE ORDER CLICKED");

  const selectedPayMethod = document.querySelector('input[name="pay-method"]:checked')?.value;

  if (!selectedPayMethod) {
    alert("Select a payment method");
    return;
  }

  if (!cart.length) {
    alert("Cart is empty");
    return;
  }

  const first = document.getElementById('f-first').value.trim();
  const last = document.getElementById('f-last').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  const address = document.getElementById('f-addr1').value.trim();
  const city = document.getElementById('f-city').value.trim();
  const postcode = document.getElementById('f-post').value.trim();

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= 100 ? 0 : 7.95;
  const total = subtotal + shipping;

  document.querySelectorAll('.field-error').forEach(e => e.remove());
  document.querySelectorAll('.form-input').forEach(i => i.classList.remove('error'));

  // 🆔 Order ID
  const orderId = 'ORD-' + Date.now();

  const newOrder = {
    id: orderId,
    items: [...cart],
    subtotal,
    shipping,
    total,
    payment:
      selectedPayMethod === 'upi' ? 'UPI' :
      selectedPayMethod === 'cod' ? 'Cash on Delivery' : 'Card',
    status: selectedPayMethod === 'cod' ? 'Pending (COD)' : 'Paid',
    customer: { first, last, email, phone, address, city, postcode },
    createdAt: new Date().toISOString()
  };

  console.log("ORDER DATA:", newOrder);

  // 📲 Build WhatsApp first
  let msg = `🛍️ New Order

Order ID: ${orderId}

Name: ${first} ${last}
Phone: ${phone}
Address: ${address}, ${city}, ${postcode}

Payment: ${newOrder.payment}

Items:
`;

  cart.forEach(item => {
    msg += `- ${item.name} x ${item.qty} = ₹${item.price * item.qty}\n`;
  });

  msg += `\nTotal: ₹${total}`;

  const url = `https://wa.me/917822991866?text=${encodeURIComponent(msg)}`;

  // 🚀 OPEN FIRST (important fix)
  const win = window.open(url, "_blank");

  // 🔥 Save to Firebase
  try {
  await fetch("http://localhost:5000/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newOrder)
  });

  console.log("Backend success");
} catch (err) {
  console.error(err);
  alert("Order failed");
  return;
}

  // 🧹 Clear cart
  cart = [];
  localStorage.setItem("elume_cart", JSON.stringify(cart));

  // 🎉 Success
  document.getElementById('order-number').textContent = '#' + orderId;
  navigate('success');
  showToast('Order Placed Successfully', '✓');
}
    // ═══════════════ ADMIN ═══════════════
    function showAdminLogin() {
      document.getElementById('store-container').style.display = 'none';
      document.getElementById('admin-panel').classList.remove('active');
      document.getElementById('admin-login-screen').style.display = 'flex';
    }

    function hideAdmin() {
      document.getElementById('admin-login-screen').style.display = 'none';
      document.getElementById('admin-panel').classList.remove('active');
      document.getElementById('store-container').style.display = 'block';
    }

    function adminLogin() {
      const u = document.getElementById('admin-user').value.trim();
      const p = document.getElementById('admin-pass').value;
      if (u === 'admin' && p === 'admin123') {
        document.getElementById('admin-login-screen').style.display = 'none';
        document.getElementById('admin-panel').classList.add('active');
        document.getElementById('store-container').style.display = 'none';
        document.getElementById('login-error').style.display = 'none';
        // ✅ FIX: call without event dependency
        _showAdminPage('dashboard');
        // set dashboard nav item active
        document.querySelectorAll('.admin-nav-item').forEach((el, i) => el.classList.toggle('active', i === 0));
      } else {
        document.getElementById('login-error').style.display = 'block';
      }
    }

    // ✅ FIX: internal version without event dependency
    function _showAdminPage(page) {
      document.querySelectorAll('.admin-page').forEach(p => p.classList.remove('active'));
      document.getElementById('admin-page-' + page).classList.add('active');
      if (page === 'dashboard') loadDash();
      if (page === 'products') renderAdminProducts();
      if (page === 'orders') renderAdminOrders();
      if (page === 'customers') renderAdminCustomers();
      if (page === 'newsletter') renderAdminNewsletter();
    }

    // ✅ FIX: public version receives clicked element via this
    function showAdminPage(page, el) {
      _showAdminPage(page);
      document.querySelectorAll('.admin-nav-item').forEach(i => i.classList.remove('active'));
      if (el) el.classList.add('active');
    }

    // ═════ DASHBOARD ═════
    function loadDash() {
      document.getElementById('admin-dash-date').textContent = new Date().toDateString();
      const revenue = orders.reduce((s, o) => s + o.total, 0);
      document.getElementById('admin-stats').innerHTML = `
    <div class="stat-card gold"><div class="stat-label">Revenue</div><div class="stat-value">${fmt(revenue)}</div></div>
    <div class="stat-card green"><div class="stat-label">Orders</div><div class="stat-value">${orders.length}</div></div>
    <div class="stat-card blue"><div class="stat-label">Customers</div><div class="stat-value">${[...new Set(orders.map(o => o.customer.email))].length}</div></div>
    <div class="stat-card orange"><div class="stat-label">Products</div><div class="stat-value">${products.length}</div></div>
  `;
      // ✅ FIX: populate recent orders table on dashboard
      const tbody = document.getElementById('recent-orders-table');
      if (tbody) {
        tbody.innerHTML = orders.slice(0, 5).map(o => `
      <tr>
        <td>${o.id}</td>
        <td>${o.customer.first} ${o.customer.last}</td>
        <td>${fmtDate(o.date)}</td>
        <td>${fmt(o.total)}</td>
        <td>${o.status}</td>
      </tr>`).join('');
      }
    }

    // ═════ PRODUCTS ADMIN ═════
    function renderAdminProducts() {
      const q = (document.getElementById('prod-search')?.value || '').toLowerCase();
      const list = products.filter(p => p.name.toLowerCase().includes(q));
      document.getElementById('admin-products-body').innerHTML = list.map(p => `
    <tr>
      <td><img src="${p.image}" class="prod-thumb-sm"></td>
      <td>${p.name}</td>
      <td>${p.category}</td>
      <td>${fmt(p.price)}</td>
      <td>${p.badge || '-'}</td>
      <td class="action-btns">
        <button class="admin-btn-sm" onclick="editProduct(${p.id})">Edit</button>
        <button class="admin-btn-sm admin-btn-danger" onclick="deleteProduct(${p.id})">Delete</button>
      </td>
    </tr>`).join('');
    }

    // ✅ FIX: openProductModal was missing
    function openProductModal() {
      document.getElementById('modal-title').textContent = 'Add Product';
      document.getElementById('modal-prod-id').value = '';
      document.getElementById('modal-name').value = '';
      document.getElementById('modal-cat').value = 'women';
      document.getElementById('modal-price').value = '';
      document.getElementById('modal-old-price').value = '';
      document.getElementById('modal-image').value = '';
      document.getElementById('modal-desc').value = '';
      document.getElementById('modal-sizes').value = 'XS,S,M,L,XL';
      document.getElementById('modal-badge').value = '';
      document.getElementById('modal-material').value = '';
      document.getElementById('modal-origin').value = '';
      document.getElementById('product-modal').classList.add('open');
    }

    function closeProductModal() {
      document.getElementById('product-modal').classList.remove('open');
    }

    // ✅ FIX: editProduct was missing
    function editProduct(id) {
      const p = products.find(x => x.id === id);
      if (!p) return;
      document.getElementById('modal-title').textContent = 'Edit Product';
      document.getElementById('modal-prod-id').value = p.id;
      document.getElementById('modal-name').value = p.name;
      document.getElementById('modal-cat').value = p.category;
      document.getElementById('modal-price').value = p.price;
      document.getElementById('modal-old-price').value = p.oldPrice || '';
      document.getElementById('modal-image').value = p.image;
      document.getElementById('modal-desc').value = p.description;
      document.getElementById('modal-sizes').value = p.sizes.join(',');
      document.getElementById('modal-badge').value = p.badge || '';
      document.getElementById('modal-material').value = p.material || '';
      document.getElementById('modal-origin').value = p.origin || '';
      document.getElementById('product-modal').classList.add('open');
    }

    // ✅ FIX: saveProduct was missing
    function saveProduct() {
      const id = document.getElementById('modal-prod-id').value;
      const name = document.getElementById('modal-name').value.trim();
      const price = parseFloat(document.getElementById('modal-price').value);
      if (!name || !price) { showToast('Name and price are required', '!'); return; }

      const data = {
        name,
        category: document.getElementById('modal-cat').value,
        price,
        oldPrice: parseFloat(document.getElementById('modal-old-price').value) || null,
        image: document.getElementById('modal-image').value.trim() || 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
        description: document.getElementById('modal-desc').value.trim(),
        sizes: document.getElementById('modal-sizes').value.split(',').map(s => s.trim()).filter(Boolean),
        badge: document.getElementById('modal-badge').value.trim() || null,
        material: document.getElementById('modal-material').value.trim(),
        origin: document.getElementById('modal-origin').value.trim(),
        rating: 4.5,
        reviews: 0
      };

      if (id) {
        const idx = products.findIndex(p => p.id === parseInt(id));
        if (idx > -1) { products[idx] = { ...products[idx], ...data }; }
      } else {
        data.id = Date.now();
        products.unshift(data);
      }

      saveP();
      console.log("RENDER CALLED");
      renderProducts();
      renderAdminProducts();
      closeProductModal();
      showToast(id ? 'Product updated' : 'Product added', '✓');
    }

    function deleteProduct(id) {
      if (!confirm('Delete this product?')) return;
      products = products.filter(p => p.id !== id);
      saveP();
      renderAdminProducts();
      renderProducts();
      showToast('Product deleted', '×');
    }

    // ═════ ORDERS ADMIN ═════
    function renderAdminOrders() {
      const q = (document.getElementById('order-search')?.value || '').toLowerCase();
      const list = orders.filter(o =>
        o.id.toLowerCase().includes(q) ||
        (o.customer.first + ' ' + o.customer.last).toLowerCase().includes(q) ||
        o.customer.email.toLowerCase().includes(q)
      );
      document.getElementById('admin-orders-body').innerHTML = list.map(o => `
    <tr>
      <td>${o.id}</td>
      <td>${o.customer.first} ${o.customer.last}</td>
      <td>${fmtDate(o.date)}</td>
      <td>${fmt(o.total)}</td>
      <td>${o.status}</td>
      <td><button class="admin-btn-sm" onclick="viewOrder('${o.id}')">View</button></td>
    </tr>`).join('');
    }

    function viewOrder(id) {
      const o = orders.find(x => x.id === id);
      if (!o) return;
      document.getElementById('order-modal-body').innerHTML = `
    <p><strong>Order ID:</strong> ${o.id}</p>
    <p><strong>Date:</strong> ${fmtDate(o.date)}</p>
    <p><strong>Status:</strong> ${o.status}</p>
    <p><strong>Payment:</strong> ${o.payment || '—'}</p>
    <hr>
    <p><strong>Customer:</strong> ${o.customer.first} ${o.customer.last}</p>
    <p><strong>Email:</strong> ${o.customer.email}</p>
    ${o.customer.phone ? `<p><strong>Phone:</strong> ${o.customer.phone}</p>` : ''}
    ${o.customer.address ? `<p><strong>Address:</strong> ${o.customer.address}, ${o.customer.city || ''} ${o.customer.postcode || ''}</p>` : ''}
    <hr>
    <strong>Items:</strong>
    ${o.items.map(i => `<div style="display:flex;align-items:center;gap:10px;margin:8px 0"><img src="${i.image}" style="width:40px;height:40px;object-fit:cover;border-radius:4px"><span>${i.name} × ${i.qty} — ${fmt(i.price * i.qty)}</span></div>`).join('')}
    <hr>
    <p><strong>Subtotal:</strong> ${fmt(o.subtotal || o.total)}</p>
    ${o.shipping != null ? `<p><strong>Shipping:</strong> ${o.shipping === 0 ? 'Free' : fmt(o.shipping)}</p>` : ''}
    <p><strong>Total:</strong> ${fmt(o.total)}</p>
  `;
      document.getElementById('order-modal').classList.add('open');
    }

    // ═════ CUSTOMERS ═════
    function renderAdminCustomers() {
      const map = {};
      orders.forEach(o => {
        const email = o.customer.email;
        if (!map[email]) map[email] = { name: o.customer.first + ' ' + o.customer.last, email, orders: 0, total: 0 };
        map[email].orders++;
        map[email].total += o.total;
      });
      document.getElementById('admin-customers-body').innerHTML = Object.values(map).map(c => `
    <tr>
      <td>${c.name}</td>
      <td>${c.email}</td>
      <td>${c.orders}</td>
      <td>${fmt(c.total)}</td>
    </tr>`).join('');
    }

    // ═════ NEWSLETTER ═════
    function renderAdminNewsletter() {
      document.getElementById('sub-count-label').textContent = newsletter.length + ' subscribers';
      document.getElementById('admin-newsletter-body').innerHTML = newsletter.map((n, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${n.email}</td>
      <td>${fmtDate(n.date)}</td>
      <td><button class="admin-btn-sm admin-btn-danger" onclick="removeSub(${i})">Delete</button></td>
    </tr>`).join('');
    }

    function removeSub(i) {
      newsletter.splice(i, 1);
      saveN();
      renderAdminNewsletter();
    }

    // ═════ INIT ═════
    updateCounts();
    console.log("RENDER CALLED");
    renderProducts();
 window.navigate = navigate;
window.placeOrder = placeOrder;
window.doSearch = doSearch;
window.switchPay = switchPay;
window.renderCheckout = renderCheckout;