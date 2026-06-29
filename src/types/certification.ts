/**
 * Domain model representing professional certifications and qualifications.
 */
export interface CertificationType {
  name: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
}
