import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FiSend, FiCheck, FiAlertTriangle } from "react-icons/fi";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const formRef = useRef();

  const validateForm = () => {
    const newErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formState.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formState.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");

    try {
      // Use EmailJS to send the form
      // Replace these IDs with your actual EmailJS service, template, and user IDs
      const result = await emailjs.sendForm(
        "service_6wkpk0e",
        "template_kadbqkj",
        formRef.current,
        "cxX87IzHgTDrazNK2"
      );

      console.log("Success!", result.text);
      setStatus("success");
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset form status after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");

      // Reset form status after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const inputVariants = {
    focus: { scale: 1.01, boxShadow: "0 0 0 3px var(--color-primary-100)" },
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      variants={formVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
        maxWidth: "600px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-1)",
        }}
      >
        <label
          htmlFor="name"
          style={{ fontSize: "var(--font-size-sm)", fontWeight: "500" }}
        >
          Name
        </label>
        <motion.input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          whileFocus="focus"
          variants={inputVariants}
          style={{
            borderColor: errors.name
              ? "var(--color-error-500)"
              : "var(--color-border)",
          }}
        />
        {errors.name && (
          <span
            style={{
              color: "var(--color-error-500)",
              fontSize: "var(--font-size-xs)",
              marginTop: "var(--space-1)",
            }}
          >
            {errors.name}
          </span>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-1)",
        }}
      >
        <label
          htmlFor="email"
          style={{ fontSize: "var(--font-size-sm)", fontWeight: "500" }}
        >
          Email
        </label>
        <motion.input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          whileFocus="focus"
          variants={inputVariants}
          style={{
            borderColor: errors.email
              ? "var(--color-error-500)"
              : "var(--color-border)",
          }}
        />
        {errors.email && (
          <span
            style={{
              color: "var(--color-error-500)",
              fontSize: "var(--font-size-xs)",
              marginTop: "var(--space-1)",
            }}
          >
            {errors.email}
          </span>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-1)",
        }}
      >
        <label
          htmlFor="subject"
          style={{ fontSize: "var(--font-size-sm)", fontWeight: "500" }}
        >
          Subject
        </label>
        <motion.input
          type="text"
          id="subject"
          name="subject"
          value={formState.subject}
          onChange={handleChange}
          whileFocus="focus"
          variants={inputVariants}
          style={{
            borderColor: errors.subject
              ? "var(--color-error-500)"
              : "var(--color-border)",
          }}
        />
        {errors.subject && (
          <span
            style={{
              color: "var(--color-error-500)",
              fontSize: "var(--font-size-xs)",
              marginTop: "var(--space-1)",
            }}
          >
            {errors.subject}
          </span>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-1)",
        }}
      >
        <label
          htmlFor="message"
          style={{ fontSize: "var(--font-size-sm)", fontWeight: "500" }}
        >
          Message
        </label>
        <motion.textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          rows={6}
          whileFocus="focus"
          variants={inputVariants}
          style={{
            borderColor: errors.message
              ? "var(--color-error-500)"
              : "var(--color-border)",
            resize: "vertical",
          }}
        />
        {errors.message && (
          <span
            style={{
              color: "var(--color-error-500)",
              fontSize: "var(--font-size-xs)",
              marginTop: "var(--space-1)",
            }}
          >
            {errors.message}
          </span>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={status === "loading" || status === "success"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "var(--space-2)",
          backgroundColor:
            status === "success"
              ? "var(--color-success-500)"
              : status === "error"
              ? "var(--color-error-500)"
              : "var(--color-primary-500)",
          cursor:
            status === "loading" || status === "success"
              ? "not-allowed"
              : "pointer",
        }}
      >
        {status === "loading" && (
          <>
            <span className="loading-circle"></span>
            Sending...
          </>
        )}

        {status === "success" && (
          <>
            <FiCheck />
            Sent Successfully!
          </>
        )}

        {status === "error" && (
          <>
            <FiAlertTriangle />
            Failed to Send
          </>
        )}

        {status === "idle" && (
          <>
            <FiSend />
            Send Message
          </>
        )}
      </motion.button>

      {/* Loading animation styles */}
      <style>
        {`
          .loading-circle {
            display: inline-block;
            width: 18px;
            height: 18px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 1s ease-in-out infinite;
          }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </motion.form>
  );
};

export default ContactForm;
