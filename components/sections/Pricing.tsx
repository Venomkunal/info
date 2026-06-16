"use client";

import { motion } from "framer-motion";
import styles from "../../styles/sections/Pricing.module.css";

// 📞 WhatsApp configuration
const PHONE_NUMBER = "917099093224"; // Replace with your actual WhatsApp number

// 1️⃣ Add this TypeScript Interface
interface Plan {
  name: string;
  price: string;
  desc: string;
  highlight?: boolean; // The '?' makes this property optional
  features: string[];
}

// 2️⃣ Apply the type to the array
const plans: Plan[] = [
  {
    name: "Starter",
    price: "₹10K",
    desc: "Perfect for establishing a basic online footprint.",
    features: [
      "1-3 Pages Custom Design",
      "Mobile Responsive",
      "Basic On-page SEO",
      "Contact Form Integration",
    ],
  },
  {
    name: "Professional",
    price: "₹18K",
    desc: "For businesses needing a complete digital storefront.",
    features: [
      "Up to 5 Pages",
      "CMS / Blog Setup",
      "Speed Optimization",
      "Google Analytics & Maps",
    ],
  },
  {
    name: "Growth",
    price: "₹30K",
    desc: "Best for driving traffic and converting leads.",
    highlight: true,
    features: [
      "Up to 10 Pages",
      "Advanced SEO & Schema",
      "Lead Generation Funnel",
      "Email CRM Integration",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "₹50K+",
    desc: "Custom-built systems for scaling operations.",
    features: [
      "Custom Web App / Portal",
      "E-commerce & Payments",
      "Full Workflow Automation",
      "Dedicated Account Manager",
    ],
  },
];

export default function Pricing() {
  // 3️⃣ Add the Plan type to the parameter here
  const handleWhatsAppRedirect = (plan: Plan) => {
    const greeting = "Hello! 👋";
    const body = `I am interested in your *${plan.name}* plan priced at *${plan.price}*.`;
    // Explicitly define 'f' as a string in the map function
    const featuresList = plan.features.map((f: string) => `✅ ${f}`).join("%0A");
    
    const message = `${greeting}%0A%0A${body}%0A%0A*Features I'm looking at:*%0A${featuresList}%0A%0ACan we discuss this further?`;
    
    const whatsappURL = `https://wa.me/${PHONE_NUMBER}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className={styles.section}>
      {/* 🔥 SCROLL WRAPPER */}
      <div className={styles.scrollInner}>
        <div className={styles.container}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Investment → <span>Returns</span>
          </motion.h1>

          <div className={styles.grid}>
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                className={`${styles.card} ${
                  plan.highlight ? styles.highlight : styles.side
                }`}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                {plan.highlight && (
                  <div className={styles.badge}>Most Popular</div>
                )}

                <h3>{plan.name}</h3>

                <motion.h1
                  className={styles.price}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  {plan.price}
                </motion.h1>

                <p className={styles.desc}>{plan.desc}</p>

                <ul>
                  {plan.features.map((f, idx) => (
                    <li key={idx}>
                      <span className={styles.checkmark}>✔</span> {f}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleWhatsAppRedirect(plan)} 
                  className={styles.btn}
                >
                  Choose {plan.name}
                </button>
              </motion.div>
            ))}
          </div>

          <motion.p
            className={styles.roi}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            One good client can recover your entire investment. 🤝
          </motion.p>
        </div>
      </div>
    </section>
  );
}
