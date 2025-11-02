const Privacy = () => {
  return (
    <section className="section" style={{ paddingTop: 60, paddingBottom: 60 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <h1 className="section-title">Privacy Policy</h1>
          <p className="tagline-dark">Last updated: November 2, 2025</p>
        </div>

        {/* Main layout: content + TOC */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 28, alignItems: 'start' }}>
          {/* Content card (uses site color variables) */}
          <article
            style={{
              backgroundColor: 'var(--color-background-light)',
              borderTop: '5px solid var(--color-accent-pink)',
              borderRadius: 12,
              padding: 28,
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
            }}
          >
            <p>
              Welcome to AARA SALONS. Your privacy matters to us. This Privacy Policy explains what
              information we collect, how we use it, with whom we share it, and your rights in
              relation to your personal data when you use our website, book our services, or
              otherwise interact with AARA SALON.
            </p>

            <section id="info-we-collect">
              <h3 className="sub-category-title">Information We Collect</h3>
              <p>
                We collect information that you provide directly to us when you make a booking,
                create an account, subscribe to our newsletter, contact us, or otherwise
                communicate with us. This may include your name, email address, phone number,
                billing and payment details, appointment preferences, and any information you
                provide in messages or notes.
              </p>
            </section>

            {/* <section id="collected-automatically">
              <h3 className="sub-category-title">Information Collected Automatically</h3>
              <p>
                When you visit our website we automatically collect certain information such as
                your IP address, browser and device information, pages visited, and referral URLs.
                We may use cookies and similar tracking technologies for analytics, functionality,
                and marketing purposes. You can control cookies via your browser settings;
                blocking cookies may affect site functionality.
              </p>
            </section> */}

            <section id="how-we-use">
              <h3 className="sub-category-title">How We Use Your Information</h3>
              <ul>
                <li>To provide, operate and maintain our services and website.</li>
                <li>To manage bookings, confirmations, reminders and customer support.</li>
                <li>To process payments via third-party payment processors.</li>
                <li>To send promotional messages and newsletters when you opt-in.</li>
                <li>To analyze usage and improve our site, services, and marketing.</li>
                <li>To comply with legal obligations and protect our rights.</li>
              </ul>
            </section>

            <section id="sharing-disclosure">
              <h3 className="sub-category-title">Sharing and Disclosure</h3>
              <p>
                We may share your information with trusted third parties who perform services on
                our behalf, such as payment processors, appointment and CRM providers, email and
                messaging services, analytics providers, and hosting providers. We require these
                vendors to protect your data and use it only for the purposes we authorize. We may
                also disclose information to comply with legal processes or to protect the rights
                and safety of AARA SALON and others.
              </p>
            </section>

            <section id="third-party">
              <h3 className="sub-category-title">Third-Party Services</h3>
              <p>
                We may use third-party services such as Google Analytics, social platforms, and
                payment processors (for example Stripe, PayPal, or similar). These services have
                their own privacy policies and may collect information as described above. We
                recommend reviewing their policies for more details.
              </p>
            </section>

            <section id="security-retention-rights">
              <h3 className="sub-category-title">Security, Retention &amp; Your Rights</h3>
              <p>
                We implement reasonable technical and organizational measures to protect personal
                data against unauthorized access, loss, or misuse. We retain personal information
                only for as long as necessary to provide services, comply with legal obligations,
                resolve disputes, and enforce agreements. Depending on where you live, you may have
                rights regarding your personal data such as the right to access, correct, update,
                or delete your information; the right to restrict or object to certain processing;
                and the right to data portability.
              </p>
            </section>

            <section id="children">
              <h3 className="sub-category-title">Children&apos;s Privacy</h3>
              <p>
                We do not knowingly collect or maintain personal information from children under 16.
                If you believe a child has provided us with personal information, please contact us so we can delete it.
              </p>
            </section>

            <section id="contact">
              <h3 className="sub-category-title">Contact Us</h3>
              <p>
                If you have questions, concerns, or requests regarding your privacy or this policy,
                please contact us at: <a href="mailto:aarasalons@gmail.com">aarasalons@gmail.com</a>
              </p>
            </section>
          </article>

          {/* Right column: TOC / Quick links */}
          <aside
            style={{
              backgroundColor: 'var(--color-primary-dark)',
              color: 'var(--color-text-light)',
              borderRadius: 12,
              padding: 18,
              boxShadow: '0 8px 20px rgba(0,0,0,0.18)'
            }}
          >
            <h4 style={{ marginTop: 0, marginBottom: 12, color: 'var(--color-secondary-gold)' }}>
              On this page
            </h4>
            <nav>
              <a href="#info-we-collect" style={{ color: 'inherit', display: 'block', marginBottom: 8 }}>
                Information we collect
              </a>
              <a href="#collected-automatically" style={{ color: 'inherit', display: 'block', marginBottom: 8 }}>
                Collected automatically
              </a>
              <a href="#how-we-use" style={{ color: 'inherit', display: 'block', marginBottom: 8 }}>
                How we use it
              </a>
              <a href="#sharing-disclosure" style={{ color: 'inherit', display: 'block', marginBottom: 8 }}>
                Sharing &amp; disclosure
              </a>
              <a href="#contact" style={{ color: 'inherit', display: 'block', marginTop: 12 }}>
                Contact
              </a>
            </nav>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Privacy
