// app/privacy-policy/page.jsx
import styles from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.lastUpdated}>Last Updated: July 1, 2026</p>

      <section>
        <p className={styles.text}>
          Welcome to <strong>ShineWeb Tech Creations</strong>. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application and services.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
        <p className={styles.text}>
          We may collect information about you in a variety of ways. The information we may collect includes:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}><strong>Account Details:</strong> Name, email address, and phone number when you register.</li>
          <li className={styles.listItem}><strong>Usage Data:</strong> Information about how you interact with our application to help us improve our services.</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
        <p className={styles.text}>
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We use the data we collect to:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Provide, operate, and maintain our application.</li>
          <li className={styles.listItem}>Improve customer service and user support.</li>
          <li className={styles.listItem}>Personalize your user experience.</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>3. Third-Party Sharing</h2>
        <p className={styles.text}>
          We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following situations:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>To comply with legal obligations or requests from law enforcement.</li>
          <li className={styles.listItem}>To protect and defend the rights or property of ShineWeb Tech Creations.</li>
          <li className={styles.listItem}>With trusted service providers who assist us in operating our app, provided they agree to keep this information confidential.</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>4. Security of Your Information</h2>
        <p className={styles.text}>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal data you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>5. Contact Us</h2>
        <p className={styles.text}>
          If you have questions or comments about this Privacy Policy, please contact us at:
        </p>
        <p className={styles.text}>
          <a href="mailto:support@shinewebtech.com" className={styles.contactEmail}>
            support@shinewebtech.com
          </a>
        </p>
      </section>
    </main>
  );
}