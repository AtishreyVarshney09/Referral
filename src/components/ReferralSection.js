import React, { useState } from 'react';
import './ReferralSection.css';

const ReferralSection = () => {
  const [copied, setCopied] = useState(false);
  const referralCode = "ACE123ATISHREY";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="referral-container">
      <h2>🎁 Refer & Rise</h2>
      <p>Invite friends to AceInt and unlock exciting rewards!</p>

      <div className="referral-box">
        <p><strong>Your Referral Code:</strong></p>
        <code>{referralCode}</code>
        <button onClick={copyToClipboard}>
          {copied ? "Copied!" : "Copy Code"}
        </button>
      </div>

      <div className="referral-rewards">
        <h3>🏆 Rewards</h3>
        <ul>
          <li>👤 1 Friend = ₹50 off / 100 points</li>
          <li>👥 5 Friends = 1 Month Premium</li>
          <li>🌟 10 Friends = Free AceInt Hoodie</li>
        </ul>
      </div>
    </div>
  );
};

export default ReferralSection;
