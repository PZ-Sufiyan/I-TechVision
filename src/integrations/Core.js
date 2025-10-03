// Core.js
export async function SendEmail(formData) {
  try {
    const response = await fetch("https://i-tech-vision-backend.vercel.app/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.message,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
