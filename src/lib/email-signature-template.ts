/**
 * Email signature template for team members
 * HTML format suitable for email clients
 */

export const EMAIL_SIGNATURE_HTML = `
<table cellpadding="0" cellspacing="0" border="0" style="font-family: Inter, Arial, sans-serif; color: #0F1F1A;">
  <tr>
    <td colspan="2" style="padding-bottom: 12px; border-bottom: 1px solid #EFF0E8;">
      <p style="margin: 0; font-weight: 600; font-size: 14px;">
        [SENDER_NAME]
      </p>
      <p style="margin: 4px 0 0; font-size: 13px; color: #6BA239;">
        Senior Planner — Corporate Events
      </p>
    </td>
  </tr>
  <tr>
    <td style="padding-top: 12px;">
      <table cellpadding="0" cellspacing="0" border="0" style="font-size: 12px; color: #4F5E58;">
        <tr>
          <td style="padding-right: 16px; width: 120px;">
            <strong>TourBandung Corporate</strong><br/>
            <span style="color: #8B9690;">Specialist B2B events</span>
          </td>
          <td style="padding-right: 16px; vertical-align: top;">
            <a href="https://wa.me/[WHATSAPP]" style="color: #6BA239; text-decoration: none;">WhatsApp</a> ·
            <a href="https://corporate.tourbandung.co.id" style="color: #6BA239; text-decoration: none;">Website</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding-top: 8px;">
      <p style="margin: 0; font-size: 11px; color: #8B9690;">
        400+ corporate events delivered · 92% repeat booking · 4.9⭐ Google Rating
      </p>
    </td>
  </tr>
</table>
`;

export function generateEmailSignature(senderName: string, whatsapp: string): string {
  return EMAIL_SIGNATURE_HTML
    .replace("[SENDER_NAME]", senderName)
    .replace("[WHATSAPP]", whatsapp);
}

/**
 * Plain text version for clients who disable HTML
 */
export function generateEmailSignaturePlainText(senderName: string, whatsapp: string): string {
  return `
${senderName}
Senior Planner — Corporate Events

TourBandung Corporate
Specialist B2B events

WhatsApp: https://wa.me/${whatsapp}
Website: https://corporate.tourbandung.co.id

400+ corporate events delivered · 92% repeat booking · 4.9⭐ Google Rating
`;
}
