export async function sendEmail(to: string, template: string) {
  return `📧 Email sent to ${to} with template: ${template}`;
}
