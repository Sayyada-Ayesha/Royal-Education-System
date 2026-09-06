import { siteConfig } from '../data/siteConfig';

export interface FormSubmissionResult {
  success: boolean;
  submissionId: string;
  error?: string;
}

/**
 * Utility to handle form submissions.
 * It generates a unique submission ID, appends the form type and date,
 * and sends the data to the configured formEndpoint (e.g., Google Apps Script / Google Sheets).
 */
export const submitForm = async (
  formData: Record<string, any>,
  formType: string
): Promise<FormSubmissionResult> => {
  try {
    const date = new Date();
    // Generate unique ID: RES-YYYYMMDD-XXXXX
    const dateStr = date.toISOString().split('T')[0].replace(/-/g, '');
    const randomStr = Math.random().toString(36).substring(2, 7).toUpperCase();
    const submissionId = `RES-${dateStr}-${randomStr}`;

    const dataToSubmit = {
      ...formData,
      formType,
      submissionId,
      submittedAt: date.toISOString(),
    };

    console.log(`[Form Submit] Type: ${formType} | ID: ${submissionId}`, dataToSubmit);
    
    // Connect to Google Apps Script / Google Sheets endpoint or any configured endpoint
    if (siteConfig.formEndpoint && siteConfig.formEndpoint.trim() !== '') {
      const response = await fetch(siteConfig.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } else {
      // Mock network delay if no endpoint provided
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    return {
      success: true,
      submissionId,
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      submissionId: '',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
};
