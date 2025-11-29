import React from 'react'
import styles from "./footer.module.css";
import { Button } from '../ui/button';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className={styles.siteFooter}>
      <div className="footer-container py-6  revea-stagger">
    
        {/* <!-- Quick Links --> */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className='flex flex-col gap-2 sm:gap-4'>
            {/* <li><a href="./about-us.html">About Us</a></li> */}
            <Link href="/">Home</Link>
            <Link href="/crops">Crops</Link>
            <Link href="/dairy">Dairy</Link>
            <Link href="/poultry">Poultry</Link>
            {/* <li><a href="./dairy-products.html">Dairy</a></li> */}
          </ul>
        </div>
    
        {/* <!-- Social + Intro --> */}
        <div className="footer-col revea-stagger">
          <p>
            Fresh from the sunrise to your table. We deliver poultry, vegetables, and dairy with care and quality you can trust.
          </p>
          <h3>Connect with us:</h3>
          <div className="social-links">
            {/* <!-- Facebook --> */}
            <Link href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.55v1.86h2.78l-.44 2.9h-2.34V22c4.78-.75 8.44-4.92 8.44-9.94Z"/>
              </svg>
            </Link>
          
            {/* <!-- WhatsApp --> */}
            <Link href="#" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0C5.39 0 .03 5.36.03 11.98c0 2.11.55 4.16 1.6 5.98L0 24l6.22-1.62a12.01 12.01 0 0 0 5.79 1.48h.01c6.62 0 11.98-5.36 11.98-11.98 0-3.2-1.25-6.2-3.48-8.4Zm-8.51 18.2a9.94 9.94 0 0 1-5.06-1.39l-.36-.21-3.69.96.99-3.6-.24-.37A9.96 9.96 0 1 1 12 21.68Zm5.67-7.43c-.31-.16-1.83-.9-2.11-1-.28-.11-.48-.16-.68.16-.2.31-.78 1-.95 1.2-.17.2-.35.22-.66.06-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.83-1.71-2.14-.18-.31-.02-.48.14-.63.14-.14.31-.35.47-.53.16-.18.2-.31.31-.52.1-.2.05-.39-.03-.55-.08-.16-.68-1.64-.93-2.26-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.52.07-.79.39-.27.31-1.04 1.02-1.04 2.47 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.2 5.09 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.12-.28-.2-.59-.36Z"/>
              </svg>
            </Link>
          
            {/* <!-- X / Twitter --> */}
            <Link href="#" aria-label="X">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2H21L14.5 9.38 22 22h-6.5l-4.79-7.63L4.9 22H2l6.94-7.96L2 2h6.62l4.39 6.98L18.244 2Zm-1.14 18h2.09L8.11 4H5.93l11.174 16Z"/>
              </svg>
            </Link>
          
            {/* <!-- Instagram --> */}
            <Link href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.58.01 4.84.07 1.17.05 1.96.24 2.66.52.72.28 1.33.66 1.93 1.26.6.6.98 1.21 1.26 1.93.28.7.47 1.49.52 2.66.06 1.26.07 1.64.07 4.84s-.01 3.58-.07 4.84c-.05 1.17-.24 1.96-.52 2.66a5.34 5.34 0 0 1-1.26 1.93 5.34 5.34 0 0 1-1.93 1.26c-.7.28-1.49.47-2.66.52-1.26.06-1.64.07-4.84.07s-3.58-.01-4.84-.07c-1.17-.05-1.96-.24-2.66-.52a5.34 5.34 0 0 1-1.93-1.26 5.34 5.34 0 0 1-1.26-1.93c-.28-.7-.47-1.49-.52-2.66C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.84c.05-1.17.24-1.96.52-2.66.28-.72.66-1.33 1.26-1.93.6-.6 1.21-.98 1.93-1.26.7-.28 1.49-.47 2.66-.52C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52.01-4.76.07-.98.05-1.52.21-1.87.35-.47.18-.81.39-1.17.75-.36.36-.57.7-.75 1.17-.14.35-.3.89-.35 1.87-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05.98.21 1.52.35 1.87.18.47.39.81.75 1.17.36.36.7.57 1.17.75.35.14.89.3 1.87.35 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.98-.05 1.52-.21 1.87-.35.47-.18.81-.39 1.17-.75.36-.36.57-.7.75-1.17.14-.35.3-.89.35-1.87.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-.98-.21-1.52-.35-1.87a3.15 3.15 0 0 0-.75-1.17 3.15 3.15 0 0 0-1.17-.75c-.35-.14-.89-.3-1.87-.35-1.24-.06-1.61-.07-4.76-.07Zm0 3.6a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm6.2-.9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/>
              </svg>
            </Link>
          
            {/* <!-- Email --> */}
            <Link href="mailto:info@firasfarms.com" aria-label="Email">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2-.5 8 6 8-6H4Zm16 13.5V8.25l-8 6-8-6V19h16Z"/>
              </svg>
            </Link>

            {/* <!-- Phone --> */}
            <Link href="tel:+260123456789" aria-label="Call Us">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.05-.24c1.12.37 2.33.57 3.54.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.07 22 2 13.93 2 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.21.2 2.42.57 3.54a1 1 0 0 1-.25 1.05l-2.2 2.2Z"/>
              </svg>
            </Link>

          </div>
        </div>
    
        {/* <!-- Newsletter --> */}
        <div className="footer-col revea-stagger">
          <h3>Join The Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Email" required />
            <Button className='rounded' type="submit">Send</Button>
          </form>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer