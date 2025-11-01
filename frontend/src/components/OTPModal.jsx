import { useEffect, useState } from "react";

const OTPModal = ({ mobileNumber, onClose, bookingData }) => {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let q = true;

  useEffect(() => {
    // OTP is already sent when modal opens (from BookingForm)
    setMessage("OTP has been sent to your mobile number.");
  }, []);

  const validateOTP = (otpValue) => {
    if (!otpValue) {
      return "OTP is required";
    }
    if (otpValue.length !== 6) {
      return "OTP must be exactly 6 digits";
    }
    if (!/^\d+$/.test(otpValue)) {
      return "OTP should only contain numbers";
    }
    return "";
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").substring(0, 6);
    setOtp(value);
    setMessage(""); // Clear previous messages when user types
  };

  const handleVerify = async () => {
    const otpError = validateOTP(otp);
    if (otpError) {
      setMessage(otpError);
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/verify-otp-book",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobile: mobileNumber,
            otp: otp,
            name: bookingData.name,
            service: bookingData.service,
            stylist: bookingData.stylist,
            date: bookingData.date,
            time: bookingData.time,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessage(
          "Success! Your reservation is confirmed. We look forward to seeing you!"
        );
        setIsVerified(true);
        setTimeout(() => {
          onClose();
          // Reset form or show success message
          window.location.reload(); // Reload to reset form
        }, 3000);
      } else {
        setMessage("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setMessage("Failed to verify OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("Sending new OTP...");

    try {
      const response = await fetch("http://localhost:5000/api/resend-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile: mobileNumber }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("New OTP has been sent. Please check your mobile.");
        setOtp("");
      } else {
        setMessage("Failed to resend OTP: " + data.message);
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
      setMessage("Failed to resend OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal-overlay ${q ? "active" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal-content">
        <h3>Verify Your Mobile Number</h3>
        <p>
          A 6-digit OTP has been sent to **
          <span id="display-mobile-number">{mobileNumber}</span>**.
        </p>
        <div className="otp-input-group">
          <input
            type="text"
            id="otp-input"
            maxLength="6"
            placeholder="Enter 6-digit OTP"
            inputMode="numeric"
            pattern="[0-9]{6}"
            value={otp}
            onChange={handleOtpChange}
            className={message && message.includes("Error") ? "otp-error" : ""}
            required
          />
          {otp.length > 0 && otp.length < 6 && (
            <span className="otp-hint">
              Enter {6 - otp.length} more digit(s)
            </span>
          )}
        </div>
        <button
          id="verify-otp-button"
          className="cta-button"
          onClick={handleVerify}
          disabled={isVerified || isLoading}
        >
          {isLoading ? "Processing..." : "Verify & Confirm"}
        </button>
        <div className="modal-footer-links">
          <p>
            Didn&apos;t receive it?{" "}
            <a href="#" id="resend-otp" onClick={handleResend}>
              Resend OTP
            </a>
          </p>
          <button
            id="close-modal"
            className="secondary-button-transparent"
            onClick={onClose}
          >
            Cancel Booking
          </button>
        </div>
        {message && (
          <p
            id="modal-message"
            className="modal-message"
            style={{
              color: message.includes("Success")
                ? "#28a745"
                : message.includes("sent")
                ? "#d4a373"
                : "#cc0000",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default OTPModal;
