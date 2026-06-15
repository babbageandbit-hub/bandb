/**
 * babbageandbit content update script
 * Run once with: node update-content.js
 */
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;

function readFile(f) { return fs.readFileSync(path.join(ROOT, f), 'utf8'); }
function writeFile(f, c) { fs.writeFileSync(path.join(ROOT, f), c, 'utf8'); console.log('✓ ' + f); }

// ─── GLOBAL (applied to every html file) ─────────────────────────────────────
function applyGlobal(html) {
  // Logo images
  html = html.split('white-logo.png').join('logo-bb.png');
  html = html.split('white-logo2.png').join('logo-bb.png');

  // Company name in attributes
  html = html.split('title="Gencyo"').join('title="Babbage &amp; Bit"');
  html = html.split('alt="Gencyo"').join('alt="Babbage &amp; Bit"');

  // Page title prefix
  html = html.split('Gencyo – Digital Agency, SEO &amp; IT Solutions PHP Template | ')
             .join('Babbage &amp; Bit | ');
  html = html.split('Gencyo &#8211; Digital Agency, SEO &amp; IT Solutions PHP Template | ')
             .join('Babbage &amp; Bit | ');
  html = html.split('| Gencyo').join('| Babbage &amp; Bit');

  // Copyright
  html = html.split('© Copyright 2026 by Company.com')
             .join('© Copyright 2026 by Babbage &amp; Bit');

  // Contact placeholder replacements (order matters: longer strings first)
  html = html.split('needhelp@company.com').join('hello@babbageandbit.com');
  html = html.split('help@company.com').join('hello@babbageandbit.com');
  html = html.split('demo@example.com').join('hello@babbageandbit.com');
  html = html.split('+92 (8800) - 98670').join('+00 (000) 000-0000');
  html = html.split('(+123) 456789 00').join('+00 (000) 000-0000');
  html = html.split('+01750050088').join('+000000000');
  html = html.split('+12345678900').join('+000000000');
  html = html.split('+175 005-0088').join('+000000000');
  html = html.split('Holland Park Holland, London 7QU').join('Your Address Here');
  html = html.split('1901 Thornridge Cir. Shiloh, Hawaii 81063').join('Your Address Here');
  html = html.split('66 broklyn golden street. New York').join('Your Address Here');

  // CTA buttons (global)
  html = html.split('>Discover More<').join('>Start Your Project<');
  html = html.split('>Get Free Quote<').join('>Book a Free Consultation<');

  // Footer newsletter wrong text
  html = html.split('Subscribe to receive high-potential investment properties, market analysis, and expert recommendations.')
             .join('Subscribe to receive updates, technology insights, and practical tips that help businesses grow in the digital world.');

  // Footer newsletter heading
  html = html.split("Let's Talk\n                  <span class=\"d-xl-block\">Work Together</span>")
             .join('Stay Connected\n                  <span class="d-xl-block">With Us</span>');

  // Footer sub-heading
  html = html.split('Get the latest inspiration &amp; insights')
             .join('Technology insights for your business');

  // Footer Quick Links
  html = html.split('<li><a href="page-about.html">About Us</a></li>\n                    <li><a href="page-team.html">Our Team</a></li>\n                    <li><a href="page-projects.html">Our <br> Portfolio</a></li>\n                    <li><a href="page-contact.html">Careers</a></li>\n                    <li><a href="page-contact.html">Contact Us</a></li>')
             .join('<li><a href="index.html">Home</a></li>\n                    <li><a href="page-about.html">About Us</a></li>\n                    <li><a href="page-services.html">Services</a></li>\n                    <li><a href="page-team.html">Our Team</a></li>\n                    <li><a href="news-grid.html">Blogs</a></li>\n                    <li><a href="page-contact.html">Contact Us</a></li>');

  // Footer Services Links
  html = html.split('<li><a href="page-service-details.html">Web Development</a></li>\n                    <li><a href="page-service-details.html">UI/UX Design </a></li>\n                    <li><a href="page-service-details.html">Mobile Application</a></li>\n                    <li><a href="page-service-details.html">Cloud Service</a></li>\n                    <li><a href="page-service-details.html">Web Development</a></li>\n                    <li><a href="page-service-details.html">Cyber Security </a></li>')
             .join('<li><a href="page-service-details.html">UI/UX Design</a></li>\n                    <li><a href="page-service-details.html">Brand Strategy</a></li>\n                    <li><a href="page-service-details.html">Web Development</a></li>\n                    <li><a href="page-service-details.html">App Development</a></li>\n                    <li><a href="page-service-details.html">Search Optimization</a></li>\n                    <li><a href="page-service-details.html">Digital Marketing</a></li>');

  return html;
}

// ─── index.html ───────────────────────────────────────────────────────────────
function updateIndex(html) {
  // Page title
  html = html.split('Babbage &amp; Bit | Home Page 01').join('Babbage &amp; Bit | Home');

  // Hero headline
  html = html.split('We Build Digital <span>Experiences That Grow Your Business</span>')
             .join('Turning Business Challenges Into <span>Digital Success</span>');

  // Hero subheadline
  html = html.split('From startups to established companies, we create high-impact digital solutions that attract, engage, and convert customers.')
             .join('We design and develop custom software, web applications, CRM systems, and digital solutions that help businesses improve efficiency, enhance customer experiences, and achieve sustainable growth.');

  // About headline
  html = html.split('A Creative Digital Agency Focused <span>on Real Results</span>')
             .join('Technology Solutions Built <span>Around Your Business</span>');

  // About description
  html = html.split('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is \n')
             .join('Babbage &amp; Bit helps businesses solve challenges through technology. We design and build software, web applications, and digital solutions that improve efficiency, simplify operations, and support growth. Our goal is to create reliable products that deliver real value and long-term results.\n');

  // About bullet points
  html = html.split('\n                          Creativity Meets Strategy\n').join('\n                          Business-Focused Solutions\n');
  html = html.split('\n                          Design. Develop. Deliver\n').join('\n                          Design. Build. Improve.\n');
  html = html.split('\n                          Innovative Development\n').join('\n                          Smart Technology\n');
  html = html.split('\n                          Unleashing Digital Power.\n').join('\n                          Long-Term Partnership\n');

  // Remove satisfaction stat block (lines 431-442)
  html = html.split('<div class="about-thumb-items">\n                  <div class="thumb1 wow fadeInUp" data-wow-delay=".5s">  \n                    <img src="images/resource/about-1-2.jpg" alt="">\n                  </div>\n                  <div class="content wow fadeInUp" data-wow-delay=".6s">\n                      <h3 class="count-box"><span class="count-text" data-speed="3000" data-stop="92">5</span>%</h3>\n                      <p>\n                        Satisfied Clients\n                        Returning Often\n                      </p>\n                  </div>\n                </div>')
             .join('');

  // Service descriptions (each service has same placeholder, replace in context)
  const serviceMap = [
    ['UI/UX Design', 'We design simple, user-friendly interfaces that help people interact with your product easily and effectively.'],
    ['Brand Strategy', 'We help businesses define their digital direction, understand their audience, and build a strong product identity.'],
    ['Web Development', 'We create modern websites and web applications that are fast, secure, and built for growth.'],
    ['App Development', 'We develop custom applications that improve business processes and deliver great user experiences.'],
    ['Search Optimization', 'We improve website structure, performance, and visibility to help businesses reach the right audience online.'],
    ['Digital Marketing', 'We support business growth through digital campaigns, content strategies, and online engagement.'],
  ];
  for (const [title, desc] of serviceMap) {
    const anchor = `<a href="page-service-details.html">${title}</a>`;
    const placeholder = `</h4>\n                <div class="text">\n                  It is a long established fact that a reader will be distracted by the readable \n                </div>`;
    const replacement = `</h4>\n                <div class="text">\n                  ${desc}\n                </div>`;
    html = html.split(anchor + placeholder).join(anchor + replacement);
  }
  // Digital Marketing has slightly different indentation
  html = html.split(`<a href="page-service-details.html">Digital Marketing</a>\n                  </h4>\n                  <div class="text">\n                    It is a long established fact that a reader will be distracted by the readable \n                  </div>`)
             .join(`<a href="page-service-details.html">Digital Marketing</a>\n                  </h4>\n                  <div class="text">\n                    We support business growth through digital campaigns, content strategies, and online engagement.\n                  </div>`);

  // Work Process titles & descriptions
  html = html.split('<h4 class="title">Tailored Solutions</h4>\n                    <div class="text">\n                        It is a long established fact that a reader will be distracted by the readable content of a page when \n                    </div>')
             .join('<h4 class="title">Discovery</h4>\n                    <div class="text">\n                        We learn about your business, goals, and challenges to understand exactly what you need.\n                    </div>');

  html = html.split('<h4 class="title">Project Planning</h4>\n                    <div class="text">\n                        It is a long established fact that a reader will be distracted by the readable content of a page when \n                    </div>')
             .join('<h4 class="title">Planning</h4>\n                    <div class="text">\n                        We create a clear roadmap covering features, timelines, and project requirements.\n                    </div>');

  // Content Creation appears twice in index.html — first is in Features section (keep), second is in Work Process (replace)
  html = html.replace(
    '<h4 class="title">Content Creation</h4>\n                    <div class="text">\n                        It is a long established fact that a reader will be distracted by the readable content of a page when \n                    </div>',
    '<h4 class="title">Development</h4>\n                    <div class="text">\n                        Our team designs, builds, and tests the solution while keeping quality and performance at the center.\n                    </div>'
  );

  html = html.split('<h4 class="title">Seamless Execution</h4>\n                    <div class="text">\n                        It is a long established fact that a reader will be distracted by the readable content of a page when \n                    </div>')
             .join('<h4 class="title">Launch &amp; Support</h4>\n                    <div class="text">\n                        We launch your product, monitor performance, and provide ongoing support and improvements.\n                    </div>');

  // Why Choose Us heading
  html = html.split("Here's Why Brands Trust <span>Our Expertise</span>")
             .join("Here's Why Businesses Choose <span>Babbage &amp; Bit</span>");

  // Why Choose Us description paragraph
  html = html.split('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal \n                    </div>')
             .join('We build practical digital solutions that help businesses grow, operate efficiently, and achieve their goals.\n                    </div>');

  // Why Choose Us boxes
  html = html.split('<h4 class="title">Long-Term Support</h4>\n                                    <div class="text">\n                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. \n                                    </div>')
             .join('<h4 class="title">Reliable Long-Term Support</h4>\n                                    <div class="text">\n                                        We stay involved after launch to help maintain, improve, and grow your digital solutions.\n                                    </div>');

  html = html.split('<h4 class="title">Data-Driven Strategy</h4>\n                                    <div class="text">\n                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. \n                                    </div>')
             .join('<h4 class="title">Technology That Works</h4>\n                                    <div class="text">\n                                        We focus on practical solutions that create real business value and measurable results.\n                                    </div>');

  // Remove Happy Customer block
  html = html.split('<div class="choose-client-info">\n                        <div class="info-content">\n                            <div class="client-image">\n                            <span>+</span>\n                            <img src="images/icons/client-1-1.jpg" alt="img" class="icon-1">\n                            <img src="images/icons/client-1-2.jpg" alt="img" class="icon-2">\n                            <img src="images/icons/client-1-3.jpg" alt="img" class="icon-3">\n                            <img src="images/icons/client-1-4.jpg" alt="img" class="icon-4">\n                            </div>\n                            <p>300+ Happy Customer</p>\n                        </div>\n                        <div class="ball-icon">\n                        <img src="images/icons/ball.png" alt="">\n                        </div>\n                    </div>')
             .join('');

  // Remove Testimonial section (between markers)
  const testiStart = '<!-- Testimonial Section Start -->\n<section class="testimonial-wrapper testimonial-one section-padding">';
  const testiEnd = '</section><!-- Feature Section Start -->';
  const testiIdx1 = html.indexOf(testiStart);
  const testiIdx2 = html.indexOf(testiEnd);
  if (testiIdx1 !== -1 && testiIdx2 !== -1) {
    html = html.slice(0, testiIdx1) + '<!-- Feature Section Start -->' + html.slice(testiIdx2 + testiEnd.length);
  }

  // FAQ answers
  html = html.split('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is a \n                    </div>\n                    </div>\n                </div>\n                </div>\n                <div class="faq-block-one">\n                <div class="title-box">\n                    <div class="content">\n                    <h5 class="title">How do you approach a new project?</h5>')
             .join('We provide software development, web development, application development, design, consulting, and digital solutions.\n                    </div>\n                    </div>\n                </div>\n                </div>\n                <div class="faq-block-one">\n                <div class="title-box">\n                    <div class="content">\n                    <h5 class="title">How do you approach a new project?</h5>');

  html = html.split('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is a \n                    </div>\n                    </div>\n                </div>\n                </div>\n                <div class="faq-block-one">\n                <div class="title-box">\n                    <div class="content">\n                    <h5 class="title">What industries do you specialize in?</h5>')
             .join('We begin by understanding your goals, then create a plan before moving into design and development.\n                    </div>\n                    </div>\n                </div>\n                </div>\n                <div class="faq-block-one">\n                <div class="title-box">\n                    <div class="content">\n                    <h5 class="title">What industries do you specialize in?</h5>');

  html = html.split('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is a \n                    </div>\n                    </div>\n                </div>\n                </div>\n            </div>\n            <div class="col-lg-6 wow fadeInUp"')
             .join('We work with businesses across technology, healthcare, retail, finance, logistics, and professional services.\n                    </div>\n                    </div>\n                </div>\n                </div>\n            </div>\n            <div class="col-lg-6 wow fadeInUp"');

  html = html.split('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is a \n                    </div>\n                    </div>\n                </div>\n                </div>\n                <div class="faq-block-one">\n                <div class="title-box">\n                    <div class="content">\n                    <h5 class="title">What is your pricing model or cost structure?</h5>')
             .join('Yes. Every project is designed and developed based on the specific needs of each client.\n                    </div>\n                    </div>\n                </div>\n                </div>\n                <div class="faq-block-one">\n                <div class="title-box">\n                    <div class="content">\n                    <h5 class="title">What is your pricing model or cost structure?</h5>');

  html = html.split('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is a \n                    </div>\n                    </div>\n                </div>\n                </div>\n                <div class="faq-block-one">\n                <div class="title-box">\n                    <div class="content">\n                    <h5 class="title">Can you help with ongoing support</h5>')
             .join('Pricing depends on the scope, features, and complexity of the project. We provide clear project estimates before work begins.\n                    </div>\n                    </div>\n                </div>\n                </div>\n                <div class="faq-block-one">\n                <div class="title-box">\n                    <div class="content">\n                    <h5 class="title">Can you help with ongoing support</h5>');

  html = html.split('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is a \n                    </div>\n                    </div>\n                </div>\n                </div>\n                <div class="faq-block-one">\n                <div class="title-box">\n                    <div class="content">\n                    <h5 class="title">Do you work with startups or only established </h5>')
             .join('Yes. We offer maintenance, updates, monitoring, and long-term support services.\n                    </div>\n                    </div>\n                </div>\n                </div>\n                <div class="faq-block-one">\n                <div class="title-box">\n                    <div class="content">\n                    <h5 class="title">Do you work with startups or only established companies?</h5>');

  // Last FAQ answer
  html = html.split('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is a \n                    </div>\n                    </div>\n                </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section><!-- Feature Section Start -->')
             .join('We work with startups, growing businesses, and established organizations of all sizes.\n                    </div>\n                    </div>\n                </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section><!-- Feature Section Start -->');

  // Blog titles & categories
  html = html.split('Why Your Brand Needs a Strong Online Presence').join('How Technology Helps Businesses Work Smarter');
  html = html.split('Designing User Experiences That Actually Convert').join('The Importance of User-Friendly Digital Experiences');
  html = html.split('Brand Identity Essentials for Digital Businesses').join('Building Software That Supports Business Growth');

  return html;
}

// ─── page-about.html ─────────────────────────────────────────────────────────
function updateAbout(html) {
  html = html.split('A Creative Digital Agency Focused <span>on Real Results</span>')
             .join('Technology Solutions Built <span>Around Your Business</span>');
  html = html.split('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is \n')
             .join('Babbage &amp; Bit helps businesses solve challenges through technology. We design and build software, web applications, and digital solutions that improve efficiency, simplify operations, and support growth. Our goal is to create reliable products that deliver real value and long-term results.\n');
  html = html.split('\n                          Creativity Meets Strategy\n').join('\n                          Business-Focused Solutions\n');
  html = html.split('\n                          Design. Develop. Deliver\n').join('\n                          Design. Build. Improve.\n');
  html = html.split('\n                          Innovative Development\n').join('\n                          Smart Technology\n');
  html = html.split('\n                          Unleashing Digital Power.\n').join('\n                          Long-Term Partnership\n');
  return html;
}

// ─── news files ──────────────────────────────────────────────────────────────
function updateNews(html) {
  html = html.split('Why Your Brand Needs a Strong Online Presence').join('How Technology Helps Businesses Work Smarter');
  html = html.split('Designing User Experiences That Actually Convert').join('The Importance of User-Friendly Digital Experiences');
  html = html.split('Brand Identity Essentials for Digital Businesses').join('Building Software That Supports Business Growth');
  return html;
}

// ─── Run ─────────────────────────────────────────────────────────────────────
const htmlFiles = fs.readdirSync(ROOT).filter(f => f.endsWith('.html') && f !== 'rebranding-checklist.html');
let updated = 0;
for (const file of htmlFiles) {
  let html = readFile(file);
  const original = html;

  html = applyGlobal(html);
  if (file === 'index.html') html = updateIndex(html);
  if (file === 'page-about.html') html = updateAbout(html);
  if (file === 'news-grid.html' || file === 'news-details.html') html = updateNews(html);

  if (html !== original) {
    writeFile(file, html);
    updated++;
  } else {
    console.log('  (no changes) ' + file);
  }
}
console.log(`\nComplete. ${updated}/${htmlFiles.length} files updated.`);
