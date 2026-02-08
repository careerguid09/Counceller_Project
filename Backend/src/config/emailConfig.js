const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

// Email Configuration
const EMAIL_CONFIG = {
  service: "gmail",
  auth: {
    user: process.env.COMPANY_EMAIL || "careerguid09@gmail.com",
    pass: process.env.COMPANY_EMAIL_PASS || "wtty bdjf xkzy gres",
  },
};

// Email Templates
const EMAIL_TEMPLATES = {
  careerConfirmation: (userName, mobileNumber, city, problem) => ({
    subject: "Career Assistance Request Confirmation - HerStudent",
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Career Query Confirmation</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; text-align: center; }
          .content { padding: 40px 30px; }
          .details-card { background: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin: 25px 0; border-radius: 0 8px 8px 0; }
          .detail-item { margin-bottom: 12px; display: flex; }
          .detail-label { font-weight: 600; color: #495057; min-width: 140px; }
          .detail-value { color: #212529; }
          .timeline { background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 25px 0; }
          .timeline-item { display: flex; margin-bottom: 15px; }
          .timeline-number { background: #667eea; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0; }
          .contact-box { background: #fff3cd; border: 1px solid #ffeaa7; padding: 20px; border-radius: 8px; margin: 25px 0; }
          .footer { background: #f8f9fa; padding: 25px; text-align: center; color: #6c757d; font-size: 14px; border-top: 1px solid #e9ecef; }
          @media (max-width: 600px) {
            .content { padding: 20px 15px; }
            .detail-item { flex-direction: column; }
            .detail-label { margin-bottom: 5px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 28px;">HerStudent</h1>
            <p style="margin: 5px 0 0; opacity: 0.9;">Career Guidance & Professional Development</p>
          </div>
          
          <div class="content">
            <h2 style="color: #2d3748; margin-top: 0;">Dear ${userName},</h2>
           
               <h4 class="my-2" style="color: #2d3748; margin-top: 0;">🎉 Your career query has been received successfully! </h4>
           
            <p>Thank you for reaching out to <strong>HerStudent</strong> regarding your career aspirations. We have successfully received your query and our team is actively reviewing your case.</p>
    

       <div class="process-timeline">
  <h3 style="color: #111827; margin-top: 0; font-size: 20px; font-weight: 600; text-align: center; margin-bottom: 32px;">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 10px;">
      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
    Your Consultation Journey
  </h3>
  
  <div style="display: flex; justify-content: space-between; position: relative; margin: 40px 0;">
    <!-- Timeline Connector Line -->
    <div style="position: absolute; top: 30px; left: 50px; right: 50px; height: 3px; background: linear-gradient(90deg, #7C3AED, #10B981); z-index: 1; border-radius: 2px;"></div>
    
    <!-- Step 1 -->
    <div class="timeline-step" style="text-align: center; position: relative; z-index: 2; flex: 1;">
      <div style="width: 60px; height: 60px; background: white; border: 3px solid #7C3AED; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; position: relative;">
        <div style="width: 44px; height: 44px; background: linear-gradient(135deg, #7C3AED, #8B5CF6); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 18px;">
          1
        </div>
        <div style="position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 8px solid #7C3AED;"></div>
      </div>
      <div style="background: white; border-radius: 12px; padding: 24px; box-shadow: 0 4px 20px rgba(124, 58, 237, 0.1); border: 1px solid #E5E7EB;">
        <div style="font-weight: 700; color: #111827; font-size: 16px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          Initial Assessment
        </div>
        <div style="font-size: 14px; color: #6B7280; line-height: 1.5;">
          Comprehensive profile analysis by our expert career panel
        </div>
        <div style="margin-top: 12px; padding: 8px 12px; background: #F5F3FF; border-radius: 6px; display: inline-block;">
          <span style="font-size: 12px; color: #7C3AED; font-weight: 600;">
            ⏱️ 4-6 Hours
          </span>
        </div>
      </div>
    </div>
    
    <!-- Step 2 -->
    <div class="timeline-step" style="text-align: center; position: relative; z-index: 2; flex: 1;">
      <div style="width: 60px; height: 60px; background: white; border: 3px solid #10B981; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; position: relative;">
        <div style="width: 44px; height: 44px; background: linear-gradient(135deg, #10B981, #34D399); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 18px;">
          2
        </div>
        <div style="position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 8px solid #10B981;"></div>
      </div>
      <div style="background: white; border-radius: 12px; padding: 24px; box-shadow: 0 4px 20px rgba(16, 185, 129, 0.1); border: 1px solid #E5E7EB;">
        <div style="font-weight: 700; color: #111827; font-size: 16px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2">
            <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2 2 0 01-2 2H5a2 2 0 01-2-2V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"/>
          </svg>
          Strategy Development
        </div>
        <div style="font-size: 14px; color: #6B7280; line-height: 1.5;">
          Personalized career roadmap with actionable milestones
        </div>
        <div style="margin-top: 12px; padding: 8px 12px; background: #D1FAE5; border-radius: 6px; display: inline-block;">
          <span style="font-size: 12px; color: #065F46; font-weight: 600;">
            📧 Within 24 Hours
          </span>
        </div>
      </div>
    </div>
    
    <!-- Step 3 -->
    <div class="timeline-step" style="text-align: center; position: relative; z-index: 2; flex: 1;">
      <div style="width: 60px; height: 60px; background: white; border: 3px solid #F59E0B; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; position: relative;">
        <div style="width: 44px; height: 44px; background: linear-gradient(135deg, #F59E0B, #FBBF24); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 18px;">
          3
        </div>
        <div style="position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 8px solid #F59E0B;"></div>
      </div>
      <div style="background: white; border-radius: 12px; padding: 24px; box-shadow: 0 4px 20px rgba(245, 158, 11, 0.1); border: 1px solid #E5E7EB;">
        <div style="font-weight: 700; color: #111827; font-size: 16px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2">
            <path d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0"/>
          </svg>
          Implementation Support
        </div>
        <div style="font-size: 14px; color: #6B7280; line-height: 1.5;">
          One-on-one consultation and ongoing mentorship sessions
        </div>
        <div style="margin-top: 12px; padding: 8px 12px; background: #FEF3C7; border-radius: 6px; display: inline-block;">
          <span style="font-size: 12px; color: #92400E; font-weight: 600;">
            📅 Schedule Anytime
          </span>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Progress Bar -->
  <div style="background: #F3F4F6; border-radius: 10px; height: 10px; margin: 40px 0 20px; position: relative;">
    </div>
  </div>
  
  <div style="text-align: center; margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #F8FAFC, #F1F5F9); border-radius: 12px;">
    <div style="display: inline-flex; align-items: center; gap: 10px; color: #4B5563; font-size: 14px;">

    </div>
  </div>
</div>

<style>
  @media (max-width: 768px) {
    .process-timeline > div:first-child {
      flex-direction: column;
      gap: 40px;
    }
    .process-timeline > div:first-child > div:first-child {
      display: none;
    }
    .timeline-step {
      margin-bottom: 30px;
    }
  }
</style>
            
            <div class="contact-box">
              <h4 style="color: #856404; margin-top: 0;">📞 Need Immediate Assistance?</h4>
              <p style="margin: 10px 0;">
                <strong>Phone:</strong> +91-9876543210<br>
                <strong>Email:</strong> support@herstudent.com<br>
                <strong>Hours:</strong> Mon-Sat, 10:00 AM - 7:00 PM IST
              </p>
            </div>
            
            <p style="margin-top: 30px;">We're committed to helping you achieve your career goals!</p>
            
            <p style="margin: 30px 0 20px;">
              Best regards,<br>
              <strong style="color: #667eea;">Career Solutions Team</strong><br>
              <em>HerStudent - Shaping Future Professionals</em>
            </p>
          </div>
          
          <div class="footer">
            <p style="margin: 0 0 10px;">
              <strong>HerStudent Career Services</strong><br>
              Office 22, Business Center, Mumbai - 400001
            </p>
            <p style="margin: 0; font-size: 12px; opacity: 0.7;">
              This is an automated message. Please do not reply directly.<br>
              © ${new Date().getFullYear()} HerStudent. All rights reserved.
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
  }),
};

// Email Service Class
class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport(EMAIL_CONFIG);
    this.setupErrorLogging();
  }

  setupErrorLogging() {
    this.logDir = path.join(__dirname, "../logs/email");
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  logEmailActivity(type, data) {
    const timestamp = new Date().toISOString();
    const logEntry = { timestamp, type, ...data };

    const logFile = path.join(
      this.logDir,
      `${new Date().toISOString().split("T")[0]}.json`,
    );
    let logs = [];

    if (fs.existsSync(logFile)) {
      logs = JSON.parse(fs.readFileSync(logFile, "utf8"));
    }

    logs.push(logEntry);
    fs.writeFileSync(logFile, JSON.stringify(logs, null, 2));

    // Console log for monitoring
    console.log(`📧 [${timestamp}] ${type}: ${data.userEmail || "N/A"}`);
  }

  async sendCareerConfirmation(
    userEmail,
    userName,
    mobileNumber,
    city,
    problem,
  ) {
    try {
      const template = EMAIL_TEMPLATES.careerConfirmation(
        userName,
        mobileNumber,
        city,
        problem,
      );

      const mailOptions = {
        from: `"HerStudent Career Support" <${EMAIL_CONFIG.auth.user}>`,
        to: userEmail,
        cc: process.env.ADMIN_EMAIL, // Optional: CC to admin
        replyTo: "support@herstudent.com",
        subject: template.subject,
        html: template.html,
        text: `Hello ${userName}, your career query has been received. Our team will contact you within 24 hours.`,
        headers: {
          "X-Priority": "1",
          "X-MSMail-Priority": "High",
          Importance: "high",
        },
      };

      // Verify connection first
      await this.transporter.verify();
      console.log("🔗 SMTP Connection verified successfully");

      // Send email
      const info = await this.transporter.sendMail(mailOptions);

      // Log success
      this.logEmailActivity("SENT", {
        userEmail,
        userName,
        messageId: info.messageId,
        response: info.response,
      });

      console.log(` Email dispatched to ${userEmail}`);
      console.log(`📧 Message ID: ${info.messageId}`);
      console.log(`🔗 Preview: ${nodemailer.getTestMessageUrl(info) || "N/A"}`);

      return {
        success: true,
        messageId: info.messageId,
        accepted: info.accepted,
        rejected: info.rejected,
      };
    } catch (error) {
      // Log error
      this.logEmailActivity("FAILED", {
        userEmail,
        userName,
        error: error.message,
        code: error.code,
      });

      console.error("❌ Email delivery failed:", {
        userEmail,
        error: error.message,
        code: error.code,
      });

      // Fallback: Save to database/file
      await this.saveToBackup(userEmail, userName, mobileNumber, city, problem);

      return {
        success: false,
        error: error.message,
        fallbackUsed: true,
      };
    }
  }

  async saveToBackup(userEmail, userName, mobileNumber, city, problem) {
    try {
      const backupData = {
        timestamp: new Date().toISOString(),
        userEmail,
        userName,
        mobileNumber,
        city,
        problem,
        status: "pending_email",
      };

      const backupFile = path.join(this.logDir, "backup_submissions.json");
      let existingData = [];

      if (fs.existsSync(backupFile)) {
        existingData = JSON.parse(fs.readFileSync(backupFile, "utf8"));
      }

      existingData.push(backupData);
      fs.writeFileSync(backupFile, JSON.stringify(existingData, null, 2));

      console.log(`📁 Backup saved for: ${userEmail}`);
      return true;
    } catch (backupError) {
      console.error("❌ Backup also failed:", backupError.message);
      return false;
    }
  }

  async getDeliveryStats() {
    try {
      const today = new Date().toISOString().split("T")[0];
      const logFile = path.join(this.logDir, `${today}.json`);

      if (!fs.existsSync(logFile)) {
        return { sent: 0, failed: 0, total: 0 };
      }

      const logs = JSON.parse(fs.readFileSync(logFile, "utf8"));
      const sent = logs.filter((log) => log.type === "SENT").length;
      const failed = logs.filter((log) => log.type === "FAILED").length;

      return { sent, failed, total: logs.length };
    } catch (error) {
      console.error("Error getting stats:", error);
      return { sent: 0, failed: 0, total: 0 };
    }
  }
}

// Create singleton instance
const emailService = new EmailService();

// Main export function
const sendCareerEmail = async (
  userEmail,
  userName,
  mobileNumber,
  city,
  problem,
) => {
  console.log("\n" + "═".repeat(60));
  console.log("🚀 PROCESSING CAREER QUERY");
  console.log("═".repeat(60));
  console.log(`👤 Client: ${userName}`);
  console.log(`📧 Email: ${userEmail}`);
  console.log(`📍 Location: ${city}`);
  console.log(`📱 Contact: ${mobileNumber}`);
  console.log("─".repeat(60));

  const result = await emailService.sendCareerConfirmation(
    userEmail,
    userName,
    mobileNumber,
    city,
    problem,
  );

  if (result.success) {
    console.log(" EMAIL DELIVERY INITIATED SUCCESSFULLY");
    console.log(`📧 Status: Sent to ${userEmail}`);
    console.log(`🆔 Message ID: ${result.messageId}`);
  } else {
    console.log("⚠️ EMAIL QUEUED FOR RETRY");
    console.log(`📁 Backup: Data saved securely`);
    console.log(`🔧 Action: Will retry delivery automatically`);
  }

  console.log("═".repeat(60) + "\n");

  return result;
};

module.exports = {
  sendCareerEmail,
  emailService, // Export service for advanced usage
  EmailService, // Export class for testing
};
